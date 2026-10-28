import { StrictMode } from 'react'
import { prerender } from 'react-dom/static'
import App from './App'

// Used at build time by scripts/prerender.js to write the page's HTML into dist/index.html.
// prerender (unlike renderToString) waits for lazy sections such as the contact form, so
// the whole page is in the HTML and hydrates without falling back to client rendering.
export async function render() {
    const { prelude } = await prerender(
        <StrictMode>
            <App />
        </StrictMode>,
    )
    return new Response(prelude).text()
}
