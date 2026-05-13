import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const Experience = () => {
    const experiences = [
        {
            role: "Associate Software Developer",
            company: "Geecon Private System Ltd",
            period: "01.03.2023 - Present",
            description: "Working on modern web applications and HR management systems with a focus on frontend development, responsive UI design, performance optimization, and scalable application architecture.",
        },
        {
            role: "Trainee Software Developer",
            company: "Geecon Private System Ltd",
            period: "01.12.2022 - 01.03.2023",
            description: "Assisted in developing and maintaining web application modules, fixed UI issues, collaborated with senior developers, and gained hands-on experience with real-world software development workflows.",
        },
        {
            role: "Software Development Intern",
            company: "Geecon Private System Ltd",
            period: "01.06.2022 - 01.12.2022",
            description: "Learned frontend development fundamentals, worked on internal projects, supported debugging tasks, and contributed to responsive website components and testing activities.",
        },
    ];

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
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 border-l-2 border-primary/30 last:border-0"
                        >
                            <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_2px_rgba(99,102,241,0.5)]" />

                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        <Briefcase size={18} className="text-primary" />
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm text-gray-400 flex items-center gap-1 mt-2 sm:mt-0">
                                        <Calendar size={14} />
                                        {exp.period}
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
