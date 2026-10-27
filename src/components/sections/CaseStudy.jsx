import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import Picture from "../ui/Picture";

const StatusBadge = ({ status }) => {
    const live = status === "Live";
    return (
        <span
            className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border ${live
                ? "text-emerald-300 border-emerald-400/30 bg-emerald-400/10"
                : "text-amber-300 border-amber-400/30 bg-amber-400/10"
                }`}
        >
            <span className={`w-1.5 h-1.5 rounded-full ${live ? "bg-emerald-400" : "bg-amber-400"}`} aria-hidden="true" />
            {status}
        </span>
    );
};

const List = ({ title, items }) => (
    <div>
        <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">{title}</h4>
        <ul className="space-y-2.5">
            {items.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary-text shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const CaseStudy = ({ study, index }) => (
    <motion.article
        id={study.slug}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        aria-labelledby={`${study.slug}-title`}
        className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10"
    >
        {study.image && (
            <div className="mb-8 rounded-xl overflow-hidden border border-white/10 bg-zinc-900">
                <Picture
                    sources={study.image.sources}
                    fallback={study.image.fallback}
                    width={study.image.width}
                    height={study.image.height}
                    alt={study.image.alt}
                    sizes="(min-width: 1280px) 1104px, 100vw"
                    className="w-full h-auto block"
                />
            </div>
        )}
        <div className="grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-8 lg:gap-12">
            <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-sm font-mono text-gray-500 tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <StatusBadge status={study.status} />
                </div>
                <h3 id={`${study.slug}-title`} className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                    {study.title}
                </h3>
                <p className="text-sm text-primary-text font-medium mb-1">{study.kind}</p>
                <p className="text-sm text-gray-500 mb-4 tabular-nums">{study.period}</p>
                <p className="text-sm text-gray-300 mb-6">
                    <span className="font-semibold text-white">My role: </span>
                    {study.role}
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">{study.summary}</p>

                <ul className="flex flex-wrap gap-2 mb-6" aria-label="Technologies">
                    {study.stack.map((tech) => (
                        <li
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary-text font-medium"
                        >
                            {tech}
                        </li>
                    ))}
                </ul>

                <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2 text-sm font-medium text-white hover:text-primary-text transition-colors"
                >
                    <ExternalLink size={16} aria-hidden="true" />
                    {study.urlLabel}
                    <span className="sr-only">(opens in a new tab)</span>
                </a>
            </div>

            <div className="space-y-8">
                <List title="What I built" items={study.built} />
                <List title="Key technical decisions" items={study.decisions} />
                <p className="flex gap-3 text-sm text-gray-400 leading-relaxed border-t border-white/10 pt-6">
                    <Sparkles size={16} className="text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{study.aiNote}</span>
                </p>
            </div>
        </div>
    </motion.article>
);

export default CaseStudy;
