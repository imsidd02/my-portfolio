import vanGoAvif480 from "../assets/projects/van-go-clearance-480.avif";
import vanGoAvif960 from "../assets/projects/van-go-clearance-960.avif";
import vanGoWebp480 from "../assets/projects/van-go-clearance-480.webp";
import vanGoWebp960 from "../assets/projects/van-go-clearance-960.webp";
import vanGoAvif1440 from "../assets/projects/van-go-clearance-1440.avif";
import vanGoWebp1440 from "../assets/projects/van-go-clearance-1440.webp";

// Single source of truth for personal details shown across the site.
export const profile = {
    name: "Siddharth Singh",
    title: "Frontend Developer | React.js & Next.js Developer",
    location: "India",
    email: "imsidd02@gmail.com",
    github: "https://github.com/imsidd02",
    linkedin: "https://www.linkedin.com/in/siddharth-s-singh/",
    resume: "/Siddharth-Singh-Resume.pdf",
};

// Most recent first. Dates and titles as on the résumé (confirmed by Siddharth).
export const experience = [
    {
        role: "Associate Software Engineer",
        company: "Geecon Systems Pvt. Ltd.",
        start: "Apr 2025",
        end: "Present",
        description: "Building production web applications with Next.js and React, including booking journeys, customer portals and admin tooling, alongside PHP, WordPress, AJAX and jQuery feature work on client sites.",
    },
    {
        role: "Trainee Software Engineer",
        company: "Geecon Systems Pvt. Ltd.",
        start: "May 2023",
        end: "Apr 2025",
        description: "Contributed to client-facing websites built with WordPress, HTML and CSS; added interactive features and responsive UI with jQuery and Bootstrap; implemented forms, authentication and plugin customisations; and turned Figma and PSD designs into responsive layouts.",
    },
    {
        role: "Software Development Intern",
        company: "Geecon Systems Pvt. Ltd.",
        start: "Dec 2022",
        end: "May 2023",
        description: "Worked alongside senior developers on live projects, applying React.js, Next.js, Tailwind CSS and API integration, building responsive layouts and reusable UI components, and using Git in an agile team workflow.",
    },
];

// Featured case studies. Only facts supported by the project source are listed;
// client staff, pricing rules, database names and private URLs are deliberately left out.
export const caseStudies = [
    {
        slug: "van-go-clearance",
        title: "Van-Go Clearance",
        kind: "Production web application",
        period: "Aug 2026 – Present",
        status: "Live",
        role: "Developer. I built the application end to end, from the booking journeys to the admin area.",
        url: "https://van-goclearance.co.uk/",
        urlLabel: "Visit live site",
        image: {
            sources: {
                avif: `${vanGoAvif480} 480w, ${vanGoAvif960} 960w, ${vanGoAvif1440} 1440w`,
                webp: `${vanGoWebp480} 480w, ${vanGoWebp960} 960w, ${vanGoWebp1440} 1440w`,
            },
            fallback: vanGoWebp960,
            width: 960,
            height: 477,
            alt: "Van-Go Clearance homepage, with the quote call-to-action and service navigation",
        },
        summary: "An online quoting and booking platform for a UK waste-clearance business offering skip hire, man & van and clearance services, with a customer portal and a staff admin area.",
        built: [
            "Multi-step booking journeys for each service: product and size selection, postcode address lookup, date and time-slot selection, and a running total that stays in view on mobile.",
            "Stripe-hosted checkout with payments confirmed by webhook, and confirmation emails sent through Resend without ever blocking a booking.",
            "Customer portal for bookings, quotes, downloadable PDF invoices and saved addresses that prefill checkout.",
            "Staff admin for bookings, an availability calendar, coverage areas, coupons, and spreadsheet price imports with preview and one-click revert.",
            "Indexable local landing pages, a blog with admin publishing, and analytics that only run after cookie consent.",
        ],
        decisions: [
            "Secrets stay server-side; Stripe test and live keys are switched by one environment variable, with misconfigurations refused at startup.",
            "Every price import is recorded so it can be reverted in one step.",
            "Unit and integration tests with Vitest alongside the App Router code.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe", "Resend", "Vitest"],
        aiNote: "Built using Claude Code as an AI pair-programmer. I set the requirements and direction, made the technical decisions, and reviewed, tested and debugged the changes.",
    },
    {
        slug: "my-business-directory-local",
        title: "My Business Directory Local",
        kind: "Next.js rebuild of a legacy PHP directory",
        period: "Oct 2026 – Present",
        status: "In development",
        role: "Developer. I'm building the new site and making its engineering decisions.",
        url: "https://mybusinessdirectorylocal.com/",
        urlLabel: "Current site (legacy PHP)",
        summary: "Rebuilding a long-running local business directory from a legacy PHP platform onto Next.js, sharing the existing database so the old and new sites can run side by side during the move.",
        built: [
            "Public site with search and advanced search, categories, locations, business and member profiles, articles and membership pages: over 100 routes.",
            "Member dashboard where businesses manage their listing, categories, opening hours, products and services, and account details.",
            "Public forms for contact, enquiries, reviews, brochure requests and adding a missing business.",
            "Redirects from the old PHP URLs to the new routes, so existing links and search rankings carry over.",
        ],
        decisions: [
            "Least-privilege database access: pages read through a read-only user, and forms write through a user limited to the exact tables and columns they need.",
            "Existing member passwords keep working, so nobody has to reset their account at switch-over.",
            "Every dashboard query is scoped to the signed-in member and re-checks ownership on the server; user-entered HTML goes through an allowlist sanitiser.",
            "Data is saved in the legacy formats so the old site keeps working on the same records.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL", "AWS S3"],
        aiNote: "Built using Claude Code as an AI pair-programmer. I set the requirements and direction, made the technical decisions, and reviewed, tested and debugged the changes.",
    },
];

// Grouped to match the résumé; "usedIn" ties each group to real work on this site.
export const skillGroups = [
    {
        category: "Frontend",
        icon: "layout",
        items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "jQuery", "Redux Toolkit", "Framer Motion"],
        usedIn: "Van-Go Clearance, My Business Directory Local, this portfolio",
    },
    {
        category: "Backend & data",
        icon: "database",
        items: ["SQL", "MySQL", "PostgreSQL", "Prisma", "PHP", "WordPress", "REST APIs", "Authentication"],
        usedIn: "Van-Go Clearance, My Business Directory Local, B2B Growth Hub",
    },
    {
        category: "Integrations & testing",
        icon: "plug",
        items: ["Stripe", "Resend", "AWS S3", "React Hook Form", "Zod", "Vitest"],
        usedIn: "Van-Go Clearance, My Business Directory Local, this portfolio",
    },
    {
        category: "Tools & workflow",
        icon: "terminal",
        items: ["Git", "GitHub", "GitLab", "Vercel", "Netlify", "Postman", "Figma", "Claude Code"],
    },
];

// Project archive: only projects with evidence (résumé, live site or source). Newest first.
// link: public URL, or null with `note` explaining why there is none.
export const projectArchive = [
    { year: "2026", title: "Van-Go Clearance", type: "Professional", stack: ["Next.js", "TypeScript", "Prisma", "Stripe"], link: "https://van-goclearance.co.uk/", caseStudy: "van-go-clearance" },
    { year: "2026", title: "My Business Directory Local (Next.js rebuild)", type: "Professional", stack: ["Next.js", "TypeScript", "MySQL"], link: null, note: "In development", caseStudy: "my-business-directory-local" },
    { year: "2026", title: "Developer portfolio (this site)", type: "Personal", stack: ["React", "Vite", "Tailwind CSS"], link: "https://github.com/imsidd02/my-portfolio", linkLabel: "Source code" },
    { year: "2025", title: "PMS", type: "Professional", stack: ["Next.js", "TypeScript", "Prisma", "TanStack Query"], link: null, note: "Private" },
    { year: "2025", title: "Award Night Websites", type: "Professional", stack: ["PHP", "MySQL", "jQuery", "Bootstrap"], link: null, note: "Private" },
    { year: "2025", title: "Dev Aarti Sangrah", type: "Personal", stack: ["Next.js", "TypeScript", "Sanity"], link: null, note: "Collaborative" },
    { year: "2024", title: "B2B Growth Hub", type: "Professional", stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"], link: "https://www.b2bgrowthhub.org/" },
    { year: null, title: "Compassion UK", type: "Professional", stack: ["Next.js", "React", "Tailwind CSS"], link: "https://www.compassionuk.org/", note: "Team project" },
    { year: null, title: "Global HR Management System", type: "Professional", stack: ["React", "TypeScript"], link: "https://apps.globalhrin.com/", linkLabel: "Login page" },
];
