import fs from 'fs'

import { getAllPosts } from './get-tagged-posts.js'

const allPosts = getAllPosts()

//check if out dir exists
fs.existsSync('out') || fs.mkdirSync('out')

fs.writeFileSync('out/posts.json', JSON.stringify(allPosts, null, 2))