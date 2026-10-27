# Siddharth Singh — Portfolio

Personal portfolio of Siddharth Singh, Frontend Developer (React.js & Next.js).

Live: https://imsiddharthsingh.vercel.app/

## Stack

- [Vite](https://vite.dev/) + [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) (respects `prefers-reduced-motion`)
- [react-hook-form](https://react-hook-form.com/) + [zod](https://zod.dev/) for the contact form, delivered via [Web3Forms](https://web3forms.com/)
- [cmdk](https://cmdk.paco.me/) command palette (Ctrl/⌘ + K)
- Inter Variable, self-hosted via [Fontsource](https://fontsource.org/)
- Hosted on Vercel with Vercel Analytics

## Scripts

```bash
npm install
npm run dev      # local dev server
npm run lint     # ESLint over all .js/.jsx files
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Structure

```
src/
  data/content.js        # name, title, email and profile links (single source)
  components/layout/     # Navbar, Footer, CommandPalette
  components/sections/   # Hero, About, Skills, Projects, Experience, Contact
  components/ui/         # small shared pieces (Picture)
  assets/                # optimised AVIF/WebP images
public/                  # résumé, favicon, OG image, robots.txt, sitemap.xml
```

Images are committed pre-optimised as AVIF with WebP fallbacks at two widths;
add new ones the same way rather than importing large PNG/JPEG files.
