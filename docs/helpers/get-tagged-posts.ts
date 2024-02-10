import { compareAsc, parseISO } from 'date-fns'
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import path from 'path'

/**
 * Get all posts based on tags
 * Sorted in order of most popular tag and date
 */

export const getAllPosts = () => {
    const postsDirectory = path.join(process.cwd(), 'docs/pages/posts')
    const yearDirectories = readdirSync(postsDirectory)

    const allPostsData = yearDirectories
        .map(year => {
            const yearDirectory = path.join(postsDirectory, year)
            const postFiles = readdirSync(yearDirectory)
            const posts = postFiles
            .filter(filename => /^(?!_).+.mdx/gm.test(filename))
            .map(filename => {
                const fullPath = path.join(`${yearDirectory}/${filename}`)
                const post = readFileSync(fullPath, 'utf-8')
                const { content, data } = matter(post)
                return {
                    content,
                    frontMatter: data
                }
            }).flat()
            .sort((a, b) => compareAsc(parseISO(a.frontMatter.publishedOn), parseISO(b.frontMatter.publishedOn)))
            .reverse()
            return posts
        })
        .flat()
    return allPostsData
}
export const getPostsByTags = () => {

    const allPostsData = getAllPosts()

    const tagBasedPosts = allPostsData
        .reduce((tagCollection, post) => {
            const tags = post.frontMatter.tags
            if(tags.length === 0) return tagCollection
            const mainTag = tags[0]
                if (tagCollection[mainTag]) {
                    tagCollection[mainTag]['count'] = tagCollection[mainTag]['count'] + 1
                    tagCollection[mainTag]['posts'].push({
                        title: post.frontMatter.title,
                        slug: parseISO(post.frontMatter.publishedOn).getFullYear() + '/' + post.frontMatter.slug,
                        date: post.frontMatter.publishedOn
                    })
                } else {
                    tagCollection[mainTag] = {
                        count: 1,
                        posts: [{
                            title: post.frontMatter.title,
                            slug: parseISO(post.frontMatter.publishedOn).getFullYear() + '/' + post.frontMatter.slug,
                            date: post.frontMatter.publishedOn
                        }]
                    }
                }

            return tagCollection
        }, {}as Record<string, {count: number, posts: {title: string, slug: string, date: string}[], }>)
    return tagBasedPosts
}

export const getPostsByYear = () => {
    const allPostsData = getAllPosts()
    const yearBasedPosts = allPostsData.reduce((yearCollection, post) => {
        const year = parseISO(post.frontMatter.publishedOn).getFullYear()
        if (yearCollection[year]) {
            yearCollection[year].push({
                title: post.frontMatter.title,
                slug: parseISO(post.frontMatter.publishedOn).getFullYear() + '/' + post.frontMatter.slug,
                date: post.frontMatter.publishedOn
            })
        } else {
            yearCollection[year] = [{
                title: post.frontMatter.title,
                slug: parseISO(post.frontMatter.publishedOn).getFullYear() + '/' + post.frontMatter.slug,
                date: post.frontMatter.publishedOn
            }]
        }
        return yearCollection
    }, {} as Record<number, {title: string, slug: string, date: string}[]>)
    const _yearBasedPosts = Object.entries(yearBasedPosts).sort((a, b) => parseInt(b[0]) - parseInt(a[0]))
    .map(([year, posts], index) => {
        return {
            text: year,
            collapsed: index > 0 ? true : false,
            items: posts.sort(
                (a, b) => compareAsc(parseISO(a.date), parseISO(b.date))
            ).reverse().map(post => {
                return {
                    text: post.title,
                    link: `/posts/${post.slug}`
                }
            })
        }
    })
    return _yearBasedPosts
}

export const formatTagsForSideNav = () => {
    const tagBasedPosts = getPostsByTags()
    const tags = Object.entries(tagBasedPosts)
        .sort((a, b) => b[1].count - a[1].count)
        .map(([tag, posts]) => tag)
    return tags.map((key, index) => {
        return {
            text: `${key} (${tagBasedPosts[key].count})`,
            collapsed: index > 0 ? true : false,
            items: tagBasedPosts[key].posts.sort(
                (a, b) => compareAsc(parseISO(a.date), parseISO(b.date))
            ).reverse()
            .map(post => {
                return {
                    text: post.title,
                    link: `/posts/${post.slug}`
                }
            })
        }
    })
}
// console.log(JSON.stringify(formatTagsForSideNav(), null, 2))