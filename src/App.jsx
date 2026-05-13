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

function App() {
    return (
        <div className="bg-dark text-white min-h-screen relative">
            <CommandPalette />
            <Navbar />
            <main>
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
    );
}

export default App;
