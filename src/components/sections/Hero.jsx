import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Command, FileText, MapPin } from "lucide-react";
import { profile } from "../../data/content";

// Show the shortcut the visitor's keyboard actually has.
const modifierKey =
    typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)
        ? "⌘"
        : "Ctrl";

const MagneticButton = ({ children, href, primary, ...linkProps }) => {
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
            {...linkProps}
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`px-8 py-3.5 rounded-full font-medium flex items-center gap-2 transition-all duration-300 backdrop-blur-md
                ${primary
                    ? "bg-primary-strong text-white shadow-xl shadow-primary/30 hover:shadow-primary/50"
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
                        <span>Press <kbd className="font-sans px-1.5 py-0.5 rounded-md bg-white/10 text-white border border-white/20 shadow-sm">{modifierKey}</kbd> <kbd className="font-sans px-1.5 py-0.5 rounded-md bg-white/10 text-white border border-white/20 shadow-sm">K</kbd> for command menu</span>
                    </div>
                </motion.div>
                {/* Rendered without an entrance animation so the first screen is readable immediately */}
                <div>
                    {/* Availability */}
                    <span className="inline-flex items-center gap-2 max-w-full py-1.5 px-4 rounded-2xl sm:rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-6 backdrop-blur-md text-balance">
                        <MapPin size={14} className="text-primary-text shrink-0" aria-hidden="true" />
                        Based in {profile.location} · Open to remote, hybrid and on-site roles
                    </span>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-tight">
                        Siddharth{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary">
                            Singh
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl font-medium text-primary-text mb-6 text-balance">
                        {profile.title}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
                        I build production web applications with React.js and Next.js: booking and payment journeys, customer portals and admin tools that real businesses run on.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <MagneticButton href="#projects" primary>
                            View Projects
                            <ArrowRight size={18} aria-hidden="true" />
                        </MagneticButton>

                        <MagneticButton href={profile.resume} target="_blank" rel="noopener">
                            <FileText size={18} aria-hidden="true" />
                            Résumé
                            <span className="sr-only">(PDF, opens in a new tab)</span>
                        </MagneticButton>

                        <MagneticButton href="#contact">
                            Contact Me
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
