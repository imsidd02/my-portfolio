import { motion, useScroll } from "framer-motion";

// Reading progress through the page content. Tracking <main> rather than the whole
// document means the bar is full once the last section (Contact) has been read,
// instead of stopping short until the footer is scrolled past.
const ScrollProgress = ({ target }) => {
    const { scrollYProgress } = useScroll({ target, offset: ["start start", "end end"] });

    return (
        <motion.div
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
            style={{ scaleX: scrollYProgress }}
        />
    );
};

export default ScrollProgress;
