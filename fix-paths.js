import fs from 'fs'
import path from 'path'

const distPath = './dist'

function fixHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8')

  content = content.replace(/src="\/src\//g, 'src="./src/')
  content = content.replace(/href="\/src\//g, 'href="./src/')

  fs.writeFileSync(filePath, content, 'utf-8')
  console.log(`✔️ fixed ${filePath}`)
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      walkDir(fullPath)
    } else if (file.endsWith('.html')) {
      fixHtmlFile(fullPath)
    }
  })
}

walkDir(distPath)
