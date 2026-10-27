import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Picture from "../ui/Picture";
import CaseStudy from "./CaseStudy";
import { caseStudies } from "../../data/content";
import b2bLogoImg from "../../assets/b2bLogo.svg";
import compassionAvif480 from "../../assets/projects/compassion-uk-480.avif";
import compassionAvif960 from "../../assets/projects/compassion-uk-960.avif";
import compassionWebp480 from "../../assets/projects/compassion-uk-480.webp";
import compassionWebp960 from "../../assets/projects/compassion-uk-960.webp";
import ghrAvif480 from "../../assets/projects/global-hr-480.avif";
import ghrAvif960 from "../../assets/projects/global-hr-960.avif";
import ghrWebp480 from "../../assets/projects/global-hr-480.webp";
import ghrWebp960 from "../../assets/projects/global-hr-960.webp";

const compassionImg = {
    sources: {
        avif: `${compassionAvif480} 480w, ${compassionAvif960} 960w`,
        webp: `${compassionWebp480} 480w, ${compassionWebp960} 960w`,
    },
    fallback: compassionWebp960,
    width: 960,
    height: 364,
};

const ghrImg = {
    sources: {
        avif: `${ghrAvif480} 480w, ${ghrAvif960} 960w`,
        webp: `${ghrWebp480} 480w, ${ghrWebp960} 960w`,
    },
    fallback: ghrWebp960,
    width: 960,
    height: 456,
};

const Projects = () => {
    const projects = [
        {
            title: "B2B Growth Hub",
            description: "A responsive business growth platform designed to help startups and enterprises connect, scale, and grow through strategic business solutions, networking opportunities, and digital resources.",
            tags: ["HTML", "CSS", "JavaScript", "PHP"],
            image: b2bLogoImg,
            isLogo: true,
            liveUrl: "https://www.b2bgrowthhub.org/",
            githubUrl: null,
        },
        {
            title: "Compassion UK",
            description: "A modern charity and child sponsorship platform designed to support children living in poverty through donations, sponsorship programs, community initiatives, and faith-driven outreach services.",
            tags: ["Next.js", "React.js", "Tailwind CSS", "JavaScript"],
            image: compassionImg,
            liveUrl: "https://www.compassionuk.org/",
            githubUrl: null,
        },
        {
            title: "Global HR Management System",
            description: "A modern HR and workforce management platform built to simplify employee operations including attendance tracking, payroll processing, leave management, onboarding, and team coordination through an intuitive dashboard experience.",
            tags: ["React", "TypeScript", "HRMS", "Dashboard"],
            image: ghrImg,
            liveUrl: "https://apps.globalhrin.com/",
            githubUrl: null,
        },
    ];

    return (
        <section id="projects" className="py-20 bg-dark/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Featured <span className="text-primary">Projects</span>
                </motion.h2>

                <div className="space-y-8 mb-20">
                    {caseStudies.map((study, index) => (
                        <CaseStudy key={study.slug} study={study} index={index} />
                    ))}
                </div>

                <h3 className="text-2xl font-bold mb-8">More projects</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-colors group"
                        >
                            <div className="relative overflow-hidden h-48">
                                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60 z-10" />
                                {project.isLogo ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full transform group-hover:scale-110 transition-transform duration-500 object-contain p-8 bg-white/10"
                                    />
                                ) : (
                                    <Picture
                                        {...project.image}
                                        alt={project.title}
                                        sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
                                        className="w-full h-full transform group-hover:scale-110 transition-transform duration-500 object-cover"
                                    />
                                )}
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold mb-2 group-hover:text-primary-text transition-colors">
                                    {project.title}
                                </h4>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded bg-primary/10 text-primary-text font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View live demo of ${project.title}`}
                                        className="flex items-center gap-2 py-2 text-sm text-white hover:text-primary-text transition-colors"
                                    >
                                        <ExternalLink size={16} aria-hidden="true" /> Live Demo
                                    </a>
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View source code of ${project.title}`}
                                            className="flex items-center gap-2 py-2 text-sm text-white hover:text-primary-text transition-colors"
                                        >
                                            <Github size={16} aria-hidden="true" /> Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
