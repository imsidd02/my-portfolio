import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import { CommandPalette } from "./components/layout/CommandPalette";
import { Analytics } from "@vercel/analytics/react";
import { MotionConfig } from "framer-motion";

function App() {
    return (
        <MotionConfig reducedMotion="user">
            <div className="bg-dark text-white min-h-screen relative">
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-primary-strong focus:text-white"
                >
                    Skip to content
                </a>
                <CommandPalette />
                <Navbar />
                <main id="main">
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Experience />
                    <Contact />
                </main>
                <Footer />
                <Analytics />
            </div>
        </MotionConfig>
    );
}

export default App;
