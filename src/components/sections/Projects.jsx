import { motion } from "framer-motion";
import CaseStudy from "./CaseStudy";
import ProjectArchive from "./ProjectArchive";
import { caseStudies } from "../../data/content";

const Projects = () => {
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

                <ProjectArchive />
            </div>
        </section>
    );
};

export default Projects;
