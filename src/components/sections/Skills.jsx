import { motion } from "framer-motion";
import { Database, Layout, Plug, Terminal } from "lucide-react";
import { skillGroups } from "../../data/content";

const icons = {
    layout: <Layout className="w-6 h-6 text-primary" aria-hidden="true" />,
    database: <Database className="w-6 h-6 text-secondary" aria-hidden="true" />,
    plug: <Plug className="w-6 h-6 text-emerald-400" aria-hidden="true" />,
    terminal: <Terminal className="w-6 h-6 text-pink-400" aria-hidden="true" />,
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-center"
                >
                    Technical <span className="text-primary">Skills</span>
                </motion.h2>
                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12 text-balance">
                    The tools I use to build responsive, accessible interfaces that work across browsers, and the projects they come from.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <div className="bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                {icons[group.icon]}
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{group.category}</h3>
                            <ul className="flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
                                {group.items.map((item) => (
                                    <li
                                        key={item}
                                        className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            {group.usedIn && (
                                <p className="mt-auto pt-5 text-xs text-gray-400 leading-relaxed">
                                    <span className="font-semibold text-gray-300">Used in: </span>
                                    {group.usedIn}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
