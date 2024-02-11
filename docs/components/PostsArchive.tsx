import { format } from 'date-fns'
import AllPosts from '../../out/posts.json'
import { useWindowSize } from '@uidotdev/usehooks'

export const PostsArchive = () => {
    const postsByYear = Object.entries(AllPosts.reduce(
        (acc, post) => {
            const year = new Date(post.frontMatter.publishedOn).getFullYear()
            if (!acc[year]) {
                acc[year] = []
            }
            acc[year].push(post)
            return acc
        },
        {} as Record<string, any>,
    )).sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))


    const size = useWindowSize()

    const formatDate = (date: string) => format(new Date(date), 'iii, do MMM, yyyy')
    const getYear = (date: string) => new Date(date).getFullYear()

    return (
        <div>
            <div
                style={{
                    display: 'grid',
                    gap: '1em',
                    paddingTop: 10,
                }}
            >
                {postsByYear.map(([year, postsForyear], yearIndx) => {
                    return (
                        <div key={yearIndx}>
                            <h2 style={{fontSize: 24, paddingBottom: 15}}>{year}</h2>
                            <div style={{display: 'grid', gap: '1em', gridTemplateColumns: (size.width ?? 601) > 600 ? '1fr 1fr' : '1fr',}}>
                                {postsForyear.map((post: any, index: any) => (
                                    <a
                                        key={index}
                                        style={{ marginBottom: 10 }}
                                        href={`/posts/${getYear(post.frontMatter.publishedOn)}/${post.frontMatter.slug}`}
                                    >
                                        <h3 style={{ fontSize: 20 }}>{post.frontMatter.title}</h3>
                                        <small>{formatDate(post.frontMatter.publishedOn)}</small>
                                        <img
                                            style={{ paddingTop: 10 }}
                                            src={`/assets/post-covers/${post.image}`}
                                            alt={post.frontMatter.title}
                                        />
                                        <p>{post.frontMatter.summary}</p>
                                        <a
                                            style={{ color: 'var(--vocs-color_link)' }}
                                            href={`/posts/${getYear(post.frontMatter.publishedOn)}/${post.frontMatter.slug}`}
                                        >
                                            Read more
                                        </a>
                                    </a>
                                ))}
                            </div>
                            {yearIndx < postsByYear.length - 1 ? <hr style={{ color: 'var(--vocs-color_border' }} /> : <></>}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
