import { motion as Motion } from "framer-motion";
import ProjectCard from "../components/ui/ProjectCard";

const projects = [
    {
        name: "ThundrAI",
        des: "AI-powered full-stack chat application with real-time conversations and context-aware responses using Gemini API.",
        tech: "MERN, Gemini API, Tailwind",
        img: "ThundrAI.png",
        live: "https://thundr-ai.vercel.app/"
    },
    {
        name: "GolfImpact",
        des: "Score-based reward platform with role-based access and secure Stripe payment integration.",
        tech: "React, Node.js, MongoDB, Stripe",
        img: "GolfImpact.png",
        live: "https://golf-imapct.vercel.app/"
    },
    {
        name: "Spotify Clone",
        des: "Responsive music streaming UI with custom controls and local storage-based persistence.",
        tech: "HTML, CSS, JavaScript",
        img: "Spotify-Clone.png",
        live: "https://samirshaikh05.github.io/Spotify-Clone/"
    },
    {
        name: "Full Stack To-Do",
        des: "Task management app with JWT authentication and secure REST APIs for real-time operations.",
        tech: "React, Node.js, Express, MongoDB, JWT",
        img: "To-Do.png",
        live: "https://full-stack-to-do-sigma.vercel.app/"
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.16,
        },
    },
};

function Projects() {
    return (
        <section id="projects" className="px-6 py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
                <Motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.4 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="mb-10 text-center"
                >
                    <h2 className="text-4xl font-semibold text-gray-100">Projects</h2>
                    <div className="mx-auto mt-4 h-0.5 w-24 rounded-full bg-blue-500/60"></div>
                </Motion.div>

                <Motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.18 }}
                    className="grid w-fit grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14"
                >
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.name}
                            project={project}
                            direction={index % 2 === 0 ? "left" : "right"}
                        />
                    ))}
                </Motion.div>
            </div>
        </section>
    );
}

export default Projects;
