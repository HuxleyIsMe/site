// Emoji Alias Replacer for MDX Files
// Usage: node replace-emojis.js /path/to/mdx/files

const fs = require('fs')
const path = require('path')
const emoji = require('node-emoji')

function replaceEmojis(content) {
    return content.replace(/:(\w+):/g, (match, alias) => {
        const emojiChar = emoji.get(alias)
        return emojiChar !== `:${alias}:` ? emojiChar : match
    })
}

function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8')
        const newContent = replaceEmojis(content)
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8')
            console.log(`✅ Updated: ${filePath}`)
        } else {
            console.log(`➖ No changes: ${filePath}`)
        }
    } catch (err) {
        console.error(`❌ Error processing ${filePath}:`, err)
    }
}

function processDirectory(dir) {
    fs.readdirSync(dir).forEach((file) => {
        const filePath = path.join(dir, file)
        const stat = fs.statSync(filePath)
        if (stat.isDirectory()) {
            processDirectory(filePath)
        } else if (path.extname(file) === '.mdx') {
            processFile(filePath)
        }
    })
}

const targetDir = process.argv[2]
if (!targetDir) {
    console.error('❗ Please specify a directory.')
    process.exit(1)
}

processDirectory(path.resolve(targetDir))
