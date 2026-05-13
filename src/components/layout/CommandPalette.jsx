import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Mail, User, Briefcase, FileText, Code } from "lucide-react";

export const CommandPalette = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const copyEmail = () => {
        navigator.clipboard.writeText("imsidd02@gmail,.com");
        setOpen(false);
        // You could add a toast notification here
        alert("Email copied to clipboard!");
    };

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false);
    };

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "/Siddharth-Singh-Resume.pdf";
        link.download = "Siddharth-Singh-Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setOpen(false);
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-dark/60 backdrop-blur-sm flex items-start justify-center pt-[20vh] px-4"
                    onClick={() => setOpen(false)}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <Command className="w-full">
                            <Command.Input
                                placeholder="Type a command or search..."
                                className="w-full bg-transparent border-b border-white/10 px-4 py-4 text-white placeholder:text-gray-500 focus:outline-none"
                            />
                            <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-white/10">
                                <Command.Empty className="py-6 text-center text-sm text-gray-500">
                                    No results found.
                                </Command.Empty>

                                <Command.Group heading="Navigation" className="px-2 py-1 text-xs text-gray-500 font-medium">
                                    <Command.Item onSelect={() => scrollTo("home")} className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                                        <User size={16} /> Home
                                    </Command.Item>
                                    <Command.Item onSelect={() => scrollTo("about")} className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                                        <User size={16} /> About
                                    </Command.Item>
                                    <Command.Item onSelect={() => scrollTo("projects")} className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                                        <Code size={16} /> Projects
                                    </Command.Item>
                                    <Command.Item onSelect={() => scrollTo("experience")} className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                                        <Briefcase size={16} /> Experience
                                    </Command.Item>
                                    <Command.Item onSelect={() => scrollTo("contact")} className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                                        <Mail size={16} /> Contact
                                    </Command.Item>
                                </Command.Group>

                                <Command.Group heading="Actions" className="px-2 py-1 text-xs text-gray-500 font-medium mt-2 border-t border-white/5 pt-3">
                                    <Command.Item onSelect={copyEmail} className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                                        <Copy size={16} /> Copy Email Address
                                    </Command.Item>
                                    <Command.Item onSelect={downloadResume} className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                                        <FileText size={16} /> Download Resume
                                    </Command.Item>
                                </Command.Group>
                            </Command.List>
                        </Command>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
