import { motion as Motion } from "framer-motion";

function ProjectCard({ project, direction = "left" }) {
    const hasLiveLink = Boolean(project.live);
    const slideOffset = direction === "left" ? -28 : 28;

    const openProject = () => {
        if (!hasLiveLink) return;
        window.open(project.live, "_blank", "noopener,noreferrer");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openProject();
        }
    };

    return (
        <Motion.article
            variants={{
                hidden: { opacity: 0, x: slideOffset },
                visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.55, ease: "easeOut" },
                },
            }}
            onClick={openProject}
            onKeyDown={handleKeyDown}
            role={hasLiveLink ? "link" : undefined}
            tabIndex={hasLiveLink ? 0 : undefined}
            className={`group overflow-hidden rounded-lg border border-gray-800 bg-gray-800/70 shadow-md shadow-black/20 
            transition duration-300 hover:-translate-y-1 hover:border-blue-500/45 hover:shadow-blue-950/30 
            ${hasLiveLink ? "cursor-pointer" : ""}`}
        >
            <div className="relative h-48 overflow-hidden bg-gray-950 sm:h-56">
                <img
                    src={project.img}
                    alt={project.name}
                    className="h-full w-full object-contain transition duration-500 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-gray-950/75 px-6 text-center opacity-0 backdrop-blur-sm transition duration-300 ease-out group-hover:opacity-100">
                    <div className="translate-y-4 opacity-0 transition duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="mx-auto max-w-md text-xs leading-relaxed text-gray-200 sm:text-sm">
                            {project.des}
                        </p>
                        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-blue-300">
                            {project.tech}
                        </p>
                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                openProject();
                            }}
                            disabled={!hasLiveLink}
                            className="mt-5 rounded-md border border-blue-400/70 bg-blue-500 px-4 py-2 text-xs font-semibold text-white transition duration-300 hover:bg-blue-400 disabled:cursor-not-allowed disabled:border-gray-600 disabled:bg-gray-700 disabled:text-gray-300"
                        >
                            View Project
                        </button>
                    </div>
                </div>
            </div>

            <div className="px-4 py-2">
                <h3 className="text-base font-semibold text-gray-100 sm:text-lg">{project.name}</h3>
            </div>
        </Motion.article>
    );
}

export default ProjectCard;
