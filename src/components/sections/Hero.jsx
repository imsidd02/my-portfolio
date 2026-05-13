import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Command } from "lucide-react";
import { lazy, Suspense } from "react";

const Hero3D = lazy(() => import("./Hero3D").then(module => ({ default: module.Hero3D })));

const MagneticButton = ({ children, href, primary }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        x.set(offsetX * 0.25);
        y.set(offsetY * 0.25);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            href={href}
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`px-8 py-3.5 rounded-full font-medium flex items-center gap-2 transition-all duration-300 backdrop-blur-md
                ${primary
                    ? "bg-primary text-white shadow-xl shadow-primary/30 hover:shadow-primary/50"
                    : "bg-white/5 hover:bg-white/10 border border-white/10 text-white"
                }`}
        >
            {children}
        </motion.a>
    );
};

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* 3D Particle Background */}
            <Suspense fallback={null}>
                <Hero3D />
            </Suspense>

            {/* Background Glow */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 z-10 text-center mt-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex justify-center mb-6 hidden md:flex"
                >
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-medium backdrop-blur-md cursor-default shadow-lg">
                        <Command size={14} className="text-primary" />
                        <span>Press <kbd className="font-sans px-1.5 py-0.5 rounded-md bg-white/10 text-white border border-white/20 shadow-sm">⌘</kbd> <kbd className="font-sans px-1.5 py-0.5 rounded-md bg-white/10 text-white border border-white/20 shadow-sm">K</kbd> for command menu</span>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block py-1 px-4 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-6 backdrop-blur-md"
                    >
                        Associate Software Developer | Frontend Web Developer
                    </motion.span>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
                    >
                        Crafting Modern <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">
                            Web Interfaces
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        I build pixel-perfect, accessible, and scalable web applications that drive user engagement through seamless digital experiences.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <MagneticButton href="#projects" primary>
                            View Projects
                            <ArrowRight size={18} />
                        </MagneticButton>

                        <MagneticButton href="#contact">
                            Contact Me
                        </MagneticButton>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
