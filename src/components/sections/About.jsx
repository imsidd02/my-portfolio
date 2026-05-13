import { motion } from "framer-motion";
import profileImg from "../../assets/siddharth-profile.jpeg";

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Image / Graphic Placeholder */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                        <div className="relative aspect-square rounded-2xl bg-zinc-900 overflow-hidden border border-white/10">
                            <img
                                src={profileImg}
                                alt="Siddharth - Associate Software Engineer"
                                className="w-full h-full object-cover grayscale px-4 pt-4 hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-primary">Me</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            I'm an Associate Software Developer specializing in frontend development, React applications, and responsive user interfaces. I enjoy building clean, modern, and user-friendly web experiences that solve real-world problems.
                        </p>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            With 3+ years of experience in web development, I have worked on scalable applications and interactive UI components using modern technologies like React, JavaScript, and Tailwind CSS. I focus on writing efficient code and creating seamless digital experiences.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">3+</h3>
                                <p className="text-gray-500">Years Experience</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">20+</h3>
                                <p className="text-gray-500">Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
