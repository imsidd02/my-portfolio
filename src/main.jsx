import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/inter'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')
const app = (
    <StrictMode>
        <App />
    </StrictMode>
)

// Production pages arrive pre-rendered (scripts/prerender.js); the dev server does not.
if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, app)
} else {
    createRoot(rootElement).render(app)
}
