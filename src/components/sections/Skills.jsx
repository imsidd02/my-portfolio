import { motion } from "framer-motion";
import { Code2, Database, Layout, Smartphone, Terminal, Wrench } from "lucide-react";

const Skills = () => {
    const skills = [
        {
            category: "Frontend",
            icon: <Layout className="w-6 h-6 mb-2 text-primary" />,
            items: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "TypeScript",
                "React.js",
                "Next.js",
                "Redux Toolkit",
                "Tailwind CSS",
                "Bootstrap",
                "Framer Motion",
                "Responsive Design",
                "REST APIs",
                "Git & GitHub"
            ],
        },
        {
            category: "Backend & APIs",
            icon: <Database className="w-6 h-6 mb-2 text-secondary" />,
            items: [
                "REST API Integration",
                "JSON Handling",
                "API Fetching",
                "Authentication Flow"
            ],
        },
        {
            category: "Tools & Deployment",
            icon: <Terminal className="w-6 h-6 mb-2 text-green-400" />,
            items: [
                "Git",
                "GitHub",
                "Vercel",
                "Netlify",
                "VS Code",
                "Postman"
            ],
        },
        {
            category: "Design & UI",
            icon: <Smartphone className="w-6 h-6 mb-2 text-pink-400" />,
            items: [
                "Figma",
                "UI/UX Design",
                "Responsive Design",
                "Cross-Browser Compatibility",
                "Modern UI Design"
            ],
        },
    ];
    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Technical <span className="text-primary">Skills</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
