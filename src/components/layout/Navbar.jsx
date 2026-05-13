import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useSpring,
    useMotionValue,
    useTransform
} from "framer-motion";

/* =========================================================
   ✨ MAGNETIC LINK COMPONENT (DESKTOP ONLY)
========================================================= */
const MagneticLink = ({ children, href, isActive }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        x.set(distanceX * 0.15); // magnetic strength
        y.set(distanceY * 0.15);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative text-sm font-medium py-2 transition-colors duration-300 ${isActive
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
        >
            {children}
            <span
                className={`absolute left-0 bottom-0 h-[2px] bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0"
                    }`}
            />
        </motion.a>
    );
};

/* =========================================================
   🚀 NAVBAR COMPONENT
========================================================= */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    /* ===============================
       SCROLL PROGRESS
    =============================== */
    const { scrollYProgress } = useScroll();
    
    // Map the scroll progress so it reaches 100% just slightly before the absolute bottom, 
    // eliminating any fractional gap.
    const scaleX = useTransform(scrollYProgress, [0, 0.99], [0, 1]);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    /* ===============================
       NAVBAR BACKGROUND ON SCROLL
    =============================== */
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* ===============================
       ACTIVE SECTION DETECTION
    =============================== */
    useEffect(() => {
        const sections = navLinks.map(link =>
            document.querySelector(link.href)
        );

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-20% 0px -40% 0px" }
        );

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    /* ===============================
       BODY SCROLL LOCK
    =============================== */
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    /* ===============================
       MOBILE MENU ANIMATIONS
    =============================== */
    const menuVariants = {
        hidden: { opacity: 0, y: "-100%" },
        visible: {
            opacity: 1,
            y: "0%",
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                when: "afterChildren",
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
        exit: { opacity: 0, y: 20 },
    };

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
                style={{ scaleX }}
            />

            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                        ? "bg-dark/80 backdrop-blur-lg shadow-lg"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex justify-between items-center h-20">

                        {/* Logo */}
                        <a
                            href="#home"
                            className="font-bold text-2xl flex items-center gap-1 relative z-50"
                        >
                            <span className="text-primary">&lt;</span>
                            <span className="text-white hover:text-primary transition-colors duration-300">
                                Siddharth
                            </span>
                            <span className="text-primary">/&gt;</span>
                        </a>

                        {/* Desktop Menu (Magnetic Links) */}
                        <div className="hidden md:flex space-x-8">
                            {navLinks.map(link => {
                                const sectionId = link.href.replace("#", "");
                                const isActive = activeSection === sectionId;

                                return (
                                    <MagneticLink
                                        key={link.name}
                                        href={link.href}
                                        isActive={isActive}
                                    >
                                        {link.name}
                                    </MagneticLink>
                                );
                            })}
                        </div>

                        {/* Mobile Button */}
                        <div className="md:hidden z-50">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white hover:text-primary transition-colors p-2"
                                aria-label="Toggle Menu"
                            >
                                {isOpen ? <X size={32} /> : <Menu size={32} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed inset-0 bg-dark/95 backdrop-blur-xl z-[45] flex flex-col items-center justify-center md:hidden"
                        >
                            <div className="flex flex-col space-y-8 text-center w-full max-w-lg px-6">
                                {navLinks.map(link => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        variants={itemVariants}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-medium text-gray-300 hover:text-primary transition-colors duration-300"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;
