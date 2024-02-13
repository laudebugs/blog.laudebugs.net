import fs from 'fs'

import { getAllPosts } from './get-tagged-posts.js'

const allPosts = getAllPosts()

fs.writeFileSync('docs/public/assets/posts.json', JSON.stringify(allPosts, null, 2))