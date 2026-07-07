import { motion as Motion } from "framer-motion";
import { cardReveal } from "../../motion";

const TAG_STYLES = {
    fullstack: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    frontend: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    backend: "bg-rose-500/10 text-rose-300 border-rose-500/20",
    other: "bg-amber-500/10 text-amber-300 border-amber-500/20",
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
        <>
            <Motion.article
                variants={cardReveal}
                layout
                onClick={openProject}
                onKeyDown={handleKeyDown}
                role={hasLive ? "link" : undefined}
                tabIndex={hasLive ? 0 : undefined}
                aria-label={hasLive ? `Open ${project.name}` : project.name}
                className={`group relative overflow-hidden rounded-2xl border border-transparent bg-linear-to-br
                    from-slate-900 via-[#0f172a] to-[#0a101f] transition-all duration-500 hover:shadow-[0_18px_60px_rgba(37,99,235,.18)] hover:-translate-y-2
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                    ${hasLive ? "cursor-pointer" : "cursor-default"}`}
            >
                {/* Visual Accent Glow Borders on Hover */}
                <div className="absolute inset-0 z-40 pointer-events-none rounded-2xl border border-white/10 group-hover:border-blue-500/40 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500" />

                {/* Top accent shine background glow on hover */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        -top-24
                        left-1/2
                        h-48
                        w-48
                        -translate-x-1/2
                        rounded-full
                        bg-blue-500/10
                        blur-3xl
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                    "
                />
                
                <Motion.div
                    animate={{
                        opacity: [0.03, 0.07, 0.03],
                        scale: [0.96, 1.04, 0.96],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="
                        pointer-events-none
                        absolute
                        -top-24
                        left-1/2
                        h-48
                        w-48
                        -translate-x-1/2
                        rounded-full
                        bg-blue-500/10
                        blur-3xl
                        z-0
                        group-hover:opacity-100
                    "
                />

                {/* Ambient inner glow on hover */}
                <span className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
                
                {/* Image / Placeholder Area */}
                <div className="relative h-48 overflow-hidden bg-gray-950">
                    {project.img ? (
                        <>
                            <img
                                src={project.img}
                                alt={project.name}
                                className="
                                    h-full
                                    w-full
                                    object-cover
                                    object-top
                                    transition-all
                                    duration-700
                                    ease-out
                                    group-hover:scale-[1.04]
                                    group-hover:brightness-110
                                "
                            />

                            {/* Premium Glass Shine Overlay Container */}
                            <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
                                {/* Idle shine: Highly responsive horizontal speed run */}
                                <Motion.div
                                    animate={{
                                        left: ["-40%", "110%", "110%"],
                                        opacity: [0, 1, 0, 0]
                                    }}
                                    transition={{
                                        duration: 10, 
                                        times: [0, 0.4, 0.8, 1], // Finishes entirely across the screen within 0.8 seconds
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                    }}
                                    className="
                                        absolute
                                        top-0
                                        h-full
                                        w-[25%]
                                        bg-gradient-to-r
                                        from-transparent
                                        via-white/20
                                        to-transparent
                                        blur-[3px]
                                    "
                                />

                                {/* Hover shine: Strictly Horizontal layout */}
                                <div
                                    className="
                                        absolute
                                        -left-[40%]
                                        top-0
                                        h-full
                                        w-[35%]
                                        bg-gradient-to-r
                                        from-transparent
                                        via-white/25
                                        to-transparent
                                        transition-all
                                        duration-600
                                        ease-out
                                        group-hover:left-[110%]
                                    "
                                />
                            </div>
                        </>
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gray-800/60 text-4xl">
                            {project.emoji ?? "🗂️"}
                        </div>
                    )}

                    {/* Hover Content Overlay Layer */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-950/80 backdrop-blur-md 
                        px-5 text-center opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 z-30">
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
                                ${hasLive
                                        ? "border border-blue-500/60 bg-blue-600 text-white hover:bg-blue-500 cursor-pointer"
                                        : "cursor-default border border-gray-600 bg-gray-700 text-gray-400"
                                    }`}
                            >
                                {hasLive ? "View Project ↗" : "Coming Soon"}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card Footer (Compact Height) */}
                <div
                    className="
                        relative
                        z-20
                        flex
                        items-center
                        justify-between
                        border-t
                        border-white/5
                        bg-gradient-to-r
                        from-slate-900/95
                        to-slate-950/95
                        px-5
                        py-3
                        backdrop-blur-xl"
                >
                    <h3 className="truncate text-sm font-semibold text-gray-100">
                        {project.name}
                    </h3>
                    <span
                        className={`ml-2 shrink-0 rounded-full border px-3 py-1 text-[10px] font-semibold tracking-wide backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ${tagStyle}`}
                    >
                        {tagLabel}
                    </span>
                </div>

                {/* Dynamic Base Glow */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        bottom-0
                        left-1/2
                        h-24
                        w-3/4
                        -translate-x-1/2
                        rounded-full
                        bg-blue-500/8
                        blur-2xl
                        opacity-0
                        transition
                        duration-500
                        group-hover:opacity-100"
                />
            </Motion.article>
        </>
    );
}

export default ProjectCard;