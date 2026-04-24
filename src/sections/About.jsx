import { motion as Motion } from "framer-motion";
import {
    SiAuth0, SiBootstrap, SiCplusplus, SiEjs, SiExpress, SiFramer, SiGithub, SiJavascript, SiJsonwebtokens,
    SiMongodb, SiMongoose, SiNodedotjs, SiOpenjdk, SiPostman, SiReact, SiRedux, SiRender, SiTailwindcss,
    SiVercel
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function TechRail({ tech, direction = "left", duration = 35 }) {
    const railGroup = [...tech, ...tech];
    const isReverse = direction === "right";

    return (
        <div className="w-full overflow-hidden">
            <Motion.div
                className="flex w-max will-change-transform"
                initial={{ x: isReverse ? "-50%" : "0%" }}
                animate={{ x: isReverse ? "0%" : "-50%" }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration,
                    ease: "linear",
                }}
            >
                {[0, 1].map((group) => (
                    <div key={group} className="flex shrink-0 gap-6 pr-6">
                        {railGroup.map((techItem, i) => {
                            const Icon = techItem.icon;

                            return (
                                <div
                                    key={`${techItem.name}-${group}-${i}`}
                                    className="flex min-w-max items-center gap-3 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-gray-300 transition hover:scale-105"
                                >
                                    <Icon className={`h-5 w-5 ${techItem.color}`} aria-hidden="true" />
                                    <span className="text-sm whitespace-nowrap">{techItem.name}</span>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </Motion.div>
        </div>
    );
}

function About() {
    const tech1 = [
        { name: "React", icon: SiReact, color: "text-cyan-400" },
        { name: "Redux", icon: SiRedux, color: "text-purple-400" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
        { name: "Bootstrap", icon: SiBootstrap, color: "text-violet-400" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
        { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
        { name: "EJS", icon: SiEjs, color: "text-yellow-500" },
        { name: "VS Code", icon: VscVscode, color: "text-blue-400" },
        { name: "GitHub", icon: SiGithub, color: "text-gray-100" },
        { name: "Vercel", icon: SiVercel, color: "text-gray-100" },
    ];

    const tech2 = [
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express", icon: SiExpress, color: "text-gray-200" },
        { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
        { name: "Mongoose", icon: SiMongoose, color: "text-red-500" },
        { name: "REST APIs", icon: SiPostman, color: "text-orange-400" },
        { name: "OAuth", icon: SiAuth0, color: "text-orange-500" },
        { name: "JWT", icon: SiJsonwebtokens, color: "text-purple-400" },
        { name: "Postman", icon: SiPostman, color: "text-orange-400" },
        { name: "Render", icon: SiRender, color: "text-indigo-400" },
        { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
        { name: "Java", icon: SiOpenjdk, color: "text-red-400" },
    ];

    return (
        <section id="about" className="min-h-screen py-24 px-6">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                {/* Heading */}
                <Motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className="text-center"
                >
                    <h2 className="text-4xl font-semibold text-gray-100 mb-4">About Me</h2>
                    <div className="mx-auto h-0.5 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                </Motion.div>

                {/* Main content */}
                <div className="flex items-start justify-between gap-10 relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 top-0 h-full w-px bg-blue-500/30 hidden md:block"></div>

                    {/* Left */}
                    <Motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2 pr-6"
                    >
                        <h2 className="text-2xl font-semibold text-blue-500 mb-4">Who I Am</h2>
                        <p className="text-gray-400 leading-relaxed">
                            I'm an Electrical Engineering student focused on full-stack development.
                            I build scalable and production-ready web applications using the MERN stack.
                            I've solved 400+ DSA problems and continuously work on improving my problem-solving skills.
                        </p>
                    </Motion.div>

                    {/* Right */}
                    <Motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2 pl-6"
                    >
                        <h2 className="text-2xl font-semibold text-blue-500 mb-4">What I Do</h2>
                        <p className="text-gray-400 leading-relaxed">
                            I specialize in building full-stack applications with clean UI and scalable backend systems.
                            Currently, I'm exploring system design and working towards becoming a strong software engineer
                            capable of building real-world impactful products.
                        </p>
                    </Motion.div>
                </div>

                {/* Tech Stack Section */}
                <div className="flex flex-col items-center gap-6">

                    {/* Header */}
                    <Motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h3 className="text-2xl font-semibold text-gray-100 mb-3">
                            Tech Stack
                        </h3>
                        <p className="text-gray-400 text-base">
                            Technologies I work with to build scalable and modern applications
                        </p>
                        <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4"></div>
                    </Motion.div>

                    {/* Rails */}
                    <div className="w-full overflow-hidden flex flex-col gap-6 mt-4">

                        <TechRail tech={tech1} duration={38} />

                        <TechRail tech={tech2} direction="right" duration={42} />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
