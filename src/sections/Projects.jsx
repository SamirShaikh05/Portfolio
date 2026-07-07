import { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import SectionFlow from "../components/layout/SectionFlow";
import SectionHeading from "../components/layout/SectionHeading";
import ProjectFilterBar from "../components/sections/projects/ProjectFilterBar";
import ProjectGrid from "../components/sections/projects/ProjectGrid";
import { fadeUp, VIEWPORT } from "../motion";
import { projectFilters, projects } from "../data/projects";

function Projects() {
    const [activeFilter, setActiveFilter] = useState("featured");

    const filteredProjects = useMemo(() => {
        if (activeFilter === "featured") {
            return projects.filter((project) => project.featured);
        }

        return projects.filter((project) => project.category === activeFilter);
    }, [activeFilter]);

    const filters = useMemo(
        () =>
            projectFilters.map((filter) => ({
                ...filter,
                label: filter.value === "featured"
                    ? `Featured (${projects.filter((project) => project.featured).length})`
                    : `${filter.label} (${projects.filter((project) => project.category === filter.value).length})`,
            })),
        []
    );

    return (
        <SectionFlow
            id="projects"
            className="-scroll-mt-15 px-6 py-30"
            background={
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40">
                    <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/[0.04] blur-[100px]" />
                </div>
            }
        >
            <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center">
                <SectionHeading
                    title="Projects"
                    subtitle="Projects that showcase my experience building modern web applications, backend systems, AI integrations, and production-ready user experiences."
                    className="mb-3"
                />

                <Motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                >
                    <ProjectFilterBar filters={filters} activeFilter={activeFilter} onFilterChange={setActiveFilter} />
                </Motion.div>

                <ProjectGrid projects={filteredProjects} activeFilter={activeFilter} />
            </div>
        </SectionFlow>
    );
}

export default Projects;
