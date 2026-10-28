import { useState } from "react";
import { ArrowDown, ExternalLink } from "lucide-react";
import { projectArchive } from "../../data/content";

const filters = ["All", "Professional", "Personal"];

const ProjectLink = ({ project }) => {
    if (project.link) {
        return (
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 py-1 text-sm text-white hover:text-primary-text transition-colors whitespace-nowrap"
            >
                {project.linkLabel ?? "Visit site"}
                <ExternalLink size={14} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
            </a>
        );
    }
    return <span className="text-sm text-gray-400 whitespace-nowrap">{project.note}</span>;
};

const ProjectArchive = () => {
    const [filter, setFilter] = useState("All");
    const visible = filter === "All" ? projectArchive : projectArchive.filter((p) => p.type === filter);

    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                    <h3 className="text-2xl font-bold">Project archive</h3>
                    <p className="text-sm text-gray-400 mt-1">Client and personal work. Private projects are listed without links.</p>
                </div>
                <div className="flex gap-2" role="group" aria-label="Filter projects">
                    {filters.map((f) => (
                        <button
                            key={f}
                            type="button"
                            onClick={() => setFilter(f)}
                            aria-pressed={filter === f}
                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${filter === f
                                ? "bg-primary-strong border-primary-strong text-white"
                                : "border-white/10 text-gray-300 hover:bg-white/10"
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            <ul className="border-t border-white/10" aria-live="polite">
                {visible.map((project) => (
                    <li
                        key={project.title}
                        className="grid grid-cols-[3.5rem_minmax(0,1fr)] md:grid-cols-[4rem_minmax(0,1.6fr)_minmax(0,1.4fr)_auto] gap-x-4 gap-y-2 items-center py-4 border-b border-white/10"
                    >
                        <span className="text-sm text-gray-400 tabular-nums">{project.year ?? "—"}</span>

                        <div className="min-w-0">
                            <p className="font-semibold text-white">{project.title}</p>
                            <p className="text-xs text-gray-400 mt-0.5">
                                {project.type}
                                {project.link && project.note ? ` · ${project.note}` : ""}
                            </p>
                        </div>

                        <ul className="col-start-2 md:col-start-auto flex flex-wrap gap-1.5" aria-label="Technologies">
                            {project.stack.map((tech) => (
                                <li key={tech} className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary-text">
                                    {tech}
                                </li>
                            ))}
                        </ul>

                        <div className="col-start-2 md:col-start-auto flex items-center gap-4 md:justify-end">
                            {project.caseStudy && (
                                <a
                                    href={`#${project.caseStudy}`}
                                    className="inline-flex items-center gap-1 py-1 text-sm text-primary-text hover:text-white transition-colors whitespace-nowrap"
                                >
                                    Case study
                                    <ArrowDown size={14} className="rotate-180" aria-hidden="true" />
                                </a>
                            )}
                            <ProjectLink project={project} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectArchive;
