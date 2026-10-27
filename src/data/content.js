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

// Most recent first. Dates as confirmed by Siddharth.
export const experience = [
    {
        role: "Associate Software Engineer",
        company: "Geecon Systems Pvt. Ltd.",
        start: "Jul 2025",
        end: "Present",
        description: "Building production web applications with Next.js and React, including booking journeys, customer portals and admin tooling, and making the implementation decisions, testing and debugging for them.",
    },
    {
        role: "Software Developer",
        company: "Geecon Systems Pvt. Ltd.",
        start: "Mar 2023",
        end: "Jun 2025",
        description: "Worked on modern web applications and HR management systems with a focus on frontend development, responsive UI design, performance optimization, and scalable application architecture.",
    },
    {
        role: "Trainee Software Developer",
        company: "Geecon Systems Pvt. Ltd.",
        start: "Dec 2022",
        end: "Mar 2023",
        description: "Assisted in developing and maintaining web application modules, fixed UI issues, collaborated with senior developers, and gained hands-on experience with real-world software development workflows.",
    },
    {
        role: "Software Development Intern",
        company: "Geecon Systems Pvt. Ltd.",
        start: "Jun 2022",
        end: "Dec 2022",
        description: "Learned frontend development fundamentals, worked on internal projects, supported debugging tasks, and contributed to responsive website components and testing activities.",
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
