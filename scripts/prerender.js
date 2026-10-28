// Renders the app to HTML at build time and writes it into dist/index.html, so the
// content is in the page before any JavaScript runs (search engines, link previews,
// slow phones). The browser then hydrates it in src/main.jsx.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const distDir = path.resolve('dist')
const serverDir = path.resolve('dist-ssr')
const indexPath = path.join(distDir, 'index.html')
const placeholder = '<div id="root"></div>'

const { render } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href)

const template = fs.readFileSync(indexPath, 'utf8')
if (!template.includes(placeholder)) {
    throw new Error(`Pre-render failed: ${placeholder} not found in dist/index.html`)
}

const appHtml = await render()
fs.writeFileSync(indexPath, template.replace(placeholder, `<div id="root">${appHtml}</div>`))
fs.rmSync(serverDir, { recursive: true, force: true })

console.log(`Pre-rendered dist/index.html (${(appHtml.length / 1024).toFixed(1)} KB of HTML)`)
