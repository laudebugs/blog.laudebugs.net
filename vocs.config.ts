import { defineConfig } from 'vocs'
import { formatTagsForSideNav, getPostsByYear } from './docs/helpers/get-tagged-posts.js'

export default defineConfig({
    title: "Bugasu's Tech Blog",
    sidebar: {
        '/posts/': [
            {
                text: 'Tags',
                items: formatTagsForSideNav(),
            },
            {
                text: 'Archive',
                items: getPostsByYear(),
            },
        ],
    },
    editLink: {
        pattern: 'https://github.com/laudebugs/blog.laudebugs.me/edit/main/docs/pages/:path',
        text: 'Suggest changes to this page',
    },
    topNav: [
        { text: 'Home', link: '/', match: '/' },
        { text: 'Archive', link: '/archive', match: '/archive' },
        { text: 'Personal Website', link: 'https://www.laudebugs.me' },
        {
            text: 'Other Blogs',
            items: [
                {
                    text: 'Imperfect Place',
                    link: 'https://imperfect.place',
                },
            ],
        },
    ],
    socials: [
        {
            icon: 'github',
            link: 'https://github.com/laudebugs',
        },
        {
            icon: 'x',
            link: 'https://twitter.com/laudebugs',
        },
    ],
    iconUrl: {
        light: '/assets/icon-light.svg',
        dark: '/assets/icon-dark.svg',
    },
    logoUrl: {
        light: '/assets/icon-light.svg',
        dark: '/assets/icon-dark.svg',
    },
    blogDir: 'blog',
    font: {
        google: 'IBM Plex Sans',
    },
    markdown: {
        code: {
            themes: {
                light: 'github-light',
                dark: 'night-owl',
            },
        },
    },
    theme: {
        accentColor: {
            dark: '#907AD6',
            light: '#470FF4',
        },
        variables: {
            fontFamily: {
                // mono: "IBM Plex Mono",
            },
            fontWeight: {
                regular: '400',
            },
        },
    },
})
