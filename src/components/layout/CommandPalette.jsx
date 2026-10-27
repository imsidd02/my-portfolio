import { useEffect, useRef, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, Mail, User, Briefcase, FileText, Code, Layers } from "lucide-react";
import { profile } from "../../data/content";

export const CommandPalette = () => {
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const returnFocusRef = useRef(null);

    useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            } else if (e.key === "Escape") {
                setOpen(false);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    // Return focus to wherever the visitor was once the palette closes.
    useEffect(() => {
        if (open) {
            returnFocusRef.current = document.activeElement;
        } else if (returnFocusRef.current) {
            returnFocusRef.current.focus?.();
            returnFocusRef.current = null;
        }
    }, [open]);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(profile.email);
            setCopied(true);
            // Leave the confirmation on screen briefly, then close
            setTimeout(() => {
                setOpen(false);
                setCopied(false);
            }, 1200);
        } catch {
            // Clipboard can be blocked (e.g. insecure context); fall back to the mail app
            window.location.href = `mailto:${profile.email}`;
        }
    };

    const scrollTo = (id) => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
        setOpen(false);
    };

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = profile.resume;
        link.download = profile.resume.split("/").pop();
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
                        // cmdk moves through items with the arrow keys, so Tab stays inside the dialog
                        onKeyDown={(e) => e.key === "Tab" && e.preventDefault()}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Command menu"
                        className="w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        <Command className="w-full" label="Command menu">
                            <Command.Input
                                autoFocus
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
                                    <Command.Item onSelect={() => scrollTo("skills")} className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                                        <Layers size={16} /> Skills
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
                                    {/* Fixed value so the item still matches the search while it shows "Email copied" */}
                                    <Command.Item value="Copy Email Address" onSelect={copyEmail} className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:text-white cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                                        {copied ? (
                                            <><Check size={16} className="text-emerald-400" /> <span role="status">Email copied: {profile.email}</span></>
                                        ) : (
                                            <><Copy size={16} /> Copy Email Address</>
                                        )}
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
