export function getImageForPost(slug: any): string;

export function getAllPosts(): {
    content: any;
    frontMatter: any;
    image: string;
}[];
export function getPostsByTags(): Record<string, {
    count: number;
    posts: {
        title: string;
        slug: string;
        date: string;
    }[];
}>;
export function getPostsByYear(): Array<{
    text: string;
    collapsed: boolean;
    items: {
        text: string;
        link: string;
    }[];
}>;
export function formatTagsForSideNav(): {
    text: string;
    collapsed: boolean;
    items: {
        text: string;
        link: string;
    }[];
}[];
