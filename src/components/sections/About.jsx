import { motion } from "framer-motion";
import Picture from "../ui/Picture";
import { profile } from "../../data/content";
import profileAvif480 from "../../assets/profile/siddharth-singh-480.avif";
import profileAvif900 from "../../assets/profile/siddharth-singh-900.avif";
import profileWebp480 from "../../assets/profile/siddharth-singh-480.webp";
import profileWebp900 from "../../assets/profile/siddharth-singh-900.webp";

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
                            <Picture
                                sources={{
                                    avif: `${profileAvif480} 480w, ${profileAvif900} 900w`,
                                    webp: `${profileWebp480} 480w, ${profileWebp900} 900w`,
                                }}
                                fallback={profileWebp900}
                                width={900}
                                height={932}
                                sizes="(min-width: 768px) 560px, 100vw"
                                alt={`Portrait of ${profile.name}`}
                                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About <span className="text-primary">Me</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            I'm a frontend developer and Associate Software Engineer, working with React.js and Next.js to build responsive user interfaces and production web applications. I enjoy building clean, modern, and user-friendly web experiences that solve real-world problems.
                        </p>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            With 3+ years of experience in web development, I have worked on scalable applications and interactive UI components using modern technologies like React, Next.js, JavaScript, and Tailwind CSS. I focus on writing efficient code and creating seamless digital experiences.
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
