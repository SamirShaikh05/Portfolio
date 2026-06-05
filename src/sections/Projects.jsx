import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ui/ProjectCard.jsx";

const projects = [
    {
        name: "ThundrAI",
        des: "AI-powered full-stack chat application with real-time conversations and context-aware responses using Gemini API.",
        tech: "MERN, Gemini API, Tailwind",
        img: "ThundrAI.png",
        live: "https://thundr-ai.vercel.app/",
        category: "fullstack",
    },
    {
        name: "GolfImpact",
        des: "Score-based reward platform with role-based access and secure Stripe payment integration.",
        tech: "React, Node.js, MongoDB, Stripe",
        img: "GolfImpact.png",
        live: "https://golf-imapct.vercel.app/",
        category: "fullstack",
    },
    {
        name: "Spotify Clone",
        des: "Responsive music streaming UI with custom controls and local storage-based persistence.",
        tech: "HTML, CSS, JavaScript",
        img: "Spotify-Clone.png",
        live: "https://samirshaikh05.github.io/Spotify-Clone/",
        category: "frontend",
    },
    {
        name: "Full Stack To-Do",
        des: "Task management app with JWT authentication and secure REST APIs for real-time operations.",
        tech: "React, Node.js, Express, MongoDB, JWT",
        img: "To-Do.png",
        live: "https://full-stack-to-do-sigma.vercel.app/",
        category: "fullstack",
    },
    {
        name: "REST API Boilerplate",
        des: "Production-ready Express REST API with authentication, rate limiting, and auto-generated Swagger docs.",
        tech: "Node.js, Express, MongoDB, Swagger",
        img: null,
        emoji: "🔧",
        live: null,
        category: "backend",
    },
    {
        name: "Dev Portfolio v1",
        des: "Earlier iteration of this portfolio — static HTML/CSS with smooth CSS keyframe animations.",
        tech: "HTML, CSS, JavaScript",
        img: null,
        emoji: "🎨",
        live: null,
        category: "frontend",
    },
];

const FILTERS = [
    { label: "All (6)", value: "all" },
    { label: "Full Stack (3)", value: "fullstack" },
    { label: "Frontend (2)", value: "frontend" },
    { label: "Backend (1)", value: "backend" },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

function Projects() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filtered =
        activeFilter === "all"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" className="-scroll-mt-15 px-6 py-24">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center">

                {/* Heading */}
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-3 text-center"
                >
                    <h2 className="text-4xl font-semibold tracking-tight text-gray-100">
                        Projects
                    </h2>
                    <div className="mx-auto mt-3 h-0.5 w-24 rounded-full bg-linear-to-r from-blue-500 to-cyan-400" />
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
                        Projects that showcase my experience building modern web
                        applications, backend systems, AI integrations, and
                        production-ready user experiences.
                    </p>
                </Motion.div>

                {/* Filter Tabs */}
                <Motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
                    className="mb-10 mt-8 flex flex-wrap justify-center gap-2"
                >
                    {FILTERS.map((f) => (
                        <button
                            key={f.value}
                            onClick={() => setActiveFilter(f.value)}
                            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-200
                                ${activeFilter === f.value
                                    ? "border-blue-500/40 bg-blue-500/15 text-blue-300 shadow-sm shadow-blue-900/40"
                                    : "border-gray-700 bg-transparent text-gray-400 hover:border-gray-500 hover:text-gray-200"
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </Motion.div>

                {/* Cards Grid */}
                <Motion.div
                    key={activeFilter}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <ProjectCard key={project.name} project={project} />
                        ))}
                    </AnimatePresence>
                </Motion.div>
            </div>
        </section>
    );
}

export default Projects;