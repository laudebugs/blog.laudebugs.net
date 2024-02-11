import { format } from 'date-fns';
import AllPosts from '../../out/posts.json'
import { useWindowSize } from "@uidotdev/usehooks";

export const LatestPosts = () => {
    const latestPost = AllPosts[0]
    const year = new Date(latestPost.frontMatter.publishedOn).getFullYear()
    const recentThreePosts = AllPosts.slice(1, 3)
    const size = useWindowSize();

    const formatDate = (date: string) => format(new Date(date), 'iii, do MMM, yyyy')

    return (
        <div>
            <a href={`/posts/${year}/${latestPost.frontMatter.slug}`}>
                <h1 style={{fontSize: 28,  borderBottom: 24}}>{latestPost.frontMatter.title}</h1>
                <div  style={{paddingTop: 5}}>

                <small>{formatDate(latestPost.frontMatter.publishedOn)}</small>
                </div>
                <img style={{paddingTop: 10}} src={`/assets/post-covers/${latestPost.image}`} alt={latestPost.frontMatter.title} />
                <blockquote>{latestPost.frontMatter.summary}</blockquote>
                <a style={{color: 'var(--vocs-color_link)'}} href={`/posts/${year}/${latestPost.frontMatter.slug}`}>Read more</a>
            </a>

            <div style={{display: 'grid', gridTemplateColumns: (size.width ?? 601)  > 600 ? ('1fr 1fr'): '1fr', gap: '1em', paddingTop: 10}}>
                {recentThreePosts.map((post, index) => (
                    <a key={index} style={{marginBottom: 10}} href={`/posts/${year}/${post.frontMatter.slug}`}>
                        <h3 style={{fontSize: 20}}>{post.frontMatter.title}</h3>
                        <small>{formatDate(post.frontMatter.publishedOn)}</small>
                        <img style={{paddingTop: 10}} src={`/assets/post-covers/${post.image}`} alt={post.frontMatter.title} />
                        <p>{post.frontMatter.summary}</p>
                        <a style={{color: 'var(--vocs-color_link)'}} href={`/posts/${year}/${post.frontMatter.slug}`}>Read more</a>
                    </a>
                ))}
            </div>

            <hr />

            
        </div>

    )
}