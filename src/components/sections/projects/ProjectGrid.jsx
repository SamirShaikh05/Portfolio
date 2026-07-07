import { AnimatePresence, motion as Motion } from "framer-motion";
import ProjectCard from "../../ui/ProjectCard";
import { staggerContainer, VIEWPORT } from "../../../motion";

function ProjectGrid({ projects, activeFilter }) {
  return (
    <Motion.div
      key={activeFilter}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </AnimatePresence>
    </Motion.div>
  );
}

export default ProjectGrid;
