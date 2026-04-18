import { motion as Motion } from "framer-motion";
import {SiAuth0, SiCplusplus, SiExpress, SiFramer, SiGithub, SiJavascript, SiJsonwebtokens, SiMongodb, SiNodedotjs, SiOpenjdk,
    SiPostman, SiReact, SiRender, SiTailwindcss, SiVercel} from "react-icons/si";
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
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "Express", icon: SiExpress, color: "text-gray-200" },
        { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
        { name: "Framer Motion", icon: SiFramer, color: "text-pink-400" },
        { name: "VS Code", icon: VscVscode, color: "text-blue-400" },
        { name: "GitHub", icon: SiGithub, color: "text-gray-100" },
        { name: "Vercel", icon: SiVercel, color: "text-gray-100" },
        { name: "Render", icon: SiRender, color: "text-indigo-400" },
    ];

    const tech2 = [
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },
        { name: "C++", icon: SiCplusplus, color: "text-blue-500" },
        { name: "Java", icon: SiOpenjdk, color: "text-red-400" },
        { name: "REST APIs", icon: SiPostman, color: "text-orange-400" },
        { name: "OAuth", icon: SiAuth0, color: "text-orange-500" },
        { name: "JWT", icon: SiJsonwebtokens, color: "text-purple-400" },
        { name: "Postman", icon: SiPostman, color: "text-orange-400" },
        { name: "VS Code", icon: VscVscode, color: "text-blue-400" },
        { name: "GitHub", icon: SiGithub, color: "text-gray-100" },
        { name: "Vercel", icon: SiVercel, color: "text-gray-100" },
        { name: "Render", icon: SiRender, color: "text-indigo-400" },
    ];

    return (
        <section id="about" className="min-h-screen py-24 px-6">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">
                {/* Heading */}
                <Motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-4xl font-semibold text-gray-100"
                >
                    About Me
                </Motion.h1>

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
                            I've solved 350+ DSA problems and continuously work on improving my problem-solving skills.
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

                {/* Tech Rails */}
                <div className="overflow-hidden flex flex-col gap-8">
                    <TechRail tech={tech1} duration={35} />
                    <TechRail tech={tech2} direction="right" duration={35} />
                </div>
            </div>
        </section>
    );
}

export default About;
