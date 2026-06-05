import { motion as Motion } from "framer-motion";

const TAG_STYLES = {
    fullstack: "bg-blue-500/10 text-blue-400",
    frontend: "bg-emerald-500/10 text-emerald-400",
    backend: "bg-rose-500/10 text-rose-400",
    other: "bg-amber-500/10 text-amber-400",
};

const TAG_LABELS = {
    fullstack: "Full Stack",
    frontend: "Frontend",
    backend: "Backend",
    other: "Other",
};

function ProjectCard({ project }) {
    const hasLive = Boolean(project.live);

    const openProject = () => {
        if (!hasLive) return;
        window.open(project.live, "_blank", "noopener,noreferrer");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openProject();
        }
    };

    const tagStyle = TAG_STYLES[project.category] ?? TAG_STYLES.other;
    const tagLabel = TAG_LABELS[project.category] ?? "Other";

    return (
        <Motion.article
            variants={{
                hidden: { opacity: 0, y: 16, scale: 0.97 },
                visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.4, ease: "easeOut" },
                },
            }}
            layout
            onClick={openProject}
            onKeyDown={handleKeyDown}
            role={hasLive ? "link" : undefined}
            tabIndex={hasLive ? 0 : undefined}
            aria-label={hasLive ? `Open ${project.name}` : project.name}
            className={`group overflow-hidden rounded-xl border border-gray-800 bg-gray-900
                transition-all duration-300
                hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg hover:shadow-black/30
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                ${hasLive ? "cursor-pointer" : "cursor-default"}`}
        >
            {/* Image / Placeholder */}
            <div className="relative h-48 overflow-hidden bg-gray-950">
                {project.img ? (
                    <img
                        src={project.img}
                        alt={project.name}
                        className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-800/60 text-4xl">
                        {project.emoji ?? "🗂️"}
                    </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gray-950/80 px-5 text-center opacity-0 backdrop-blur-sm transition-all duration-300 ease-out group-hover:opacity-100">
                    <div className="translate-y-3 transition-transform duration-300 ease-out group-hover:translate-y-0">
                        <p className="text-xs leading-relaxed text-gray-300">
                            {project.des}
                        </p>
                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-blue-300">
                            {project.tech}
                        </p>
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                openProject();
                            }}
                            disabled={!hasLive}
                            className={`mt-3 rounded-md px-3.5 py-1.5 text-[11px] font-semibold transition-all duration-200
                                ${
                                    hasLive
                                        ? "border border-blue-500/60 bg-blue-600 text-white hover:bg-blue-500"
                                        : "cursor-default border border-gray-600 bg-gray-700 text-gray-400"
                                }`}
                        >
                            {hasLive ? "View Project ↗" : "Coming Soon"}
                        </button>
                    </div>
                </div>
            </div>

            {/* Card Footer */}
            <div className="flex items-center justify-between px-3.5 py-2.5">
                <h3 className="truncate text-sm font-semibold text-gray-100">
                    {project.name}
                </h3>
                <span
                    className={`ml-2 shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${tagStyle}`}
                >
                    {tagLabel}
                </span>
            </div>
        </Motion.article>
    );
}

export default ProjectCard;