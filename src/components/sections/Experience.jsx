import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";
import { experience as experiences } from "../../data/content";

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Work <span className="text-primary">Experience</span>
                </motion.h2>

                <div className="max-w-3xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.role}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-primary/30 last:border-0"
                        >
                            <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_2px_rgba(99,102,241,0.5)]" />

                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold flex items-start gap-2">
                                        <Briefcase size={18} className="text-primary shrink-0 mt-1" aria-hidden="true" />
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm text-gray-400 flex items-center gap-1 mt-2 sm:mt-0">
                                        <Calendar size={14} aria-hidden="true" />
                                        <span className="tabular-nums">{exp.start} – {exp.end}</span>
                                    </span>
                                </div>
                                <h4 className="text-lg font-medium text-gray-300 mb-2">{exp.company}</h4>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
