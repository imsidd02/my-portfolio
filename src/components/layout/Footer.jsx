import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../data/content";

const socialLinks = [
    { label: "GitHub profile", href: profile.github, icon: Github, external: true },
    { label: "LinkedIn profile", href: profile.linkedin, icon: Linkedin, external: true },
    { label: `Email ${profile.email}`, href: `mailto:${profile.email}`, icon: Mail },
];

const Footer = () => {
    return (
        <footer className="bg-black py-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-2">
                    {socialLinks.map(({ label, href, icon: Icon, external }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            title={label}
                            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                            className="p-3 text-gray-400 hover:text-primary-text transition-colors"
                        >
                            <Icon size={20} aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
