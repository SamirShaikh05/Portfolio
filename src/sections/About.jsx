import { motion as Motion } from "framer-motion";
import {
    SiAuth0, SiBootstrap, SiCplusplus, SiEjs, SiExpress, SiFramer, SiGithub, SiJavascript, SiJsonwebtokens,
    SiMongodb, SiMongoose, SiNodedotjs, SiOpenjdk, SiPostman, SiReact, SiRedux, SiRender, SiTailwindcss,
    SiVercel
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Orb from '../components/ui/Orb'
import MagicRings from "../components/ui/MagicRings";

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
        <section id="about" className="relative -scroll-mt-4 min-h-[85vh] py-20 px-6">
            {/* Magic Rings */}
            <div className="absolute inset-0 opacity-50 pointer-events-none">
                <MagicRings
                    color="#3B82F6"
                    colorTwo="#06B6D4"
                    ringCount={5}
                    speed={0.5}
                    attenuation={12}
                    lineThickness={1}
                    baseRadius={0.45}
                    radiusStep={0.12}
                    scaleRate={0.05}
                    opacity={0.4}
                    blur={2}
                    noiseAmount={0}
                    rotation={0}
                    ringGap={1.8}
                    fadeIn={0.8}
                    fadeOut={0.8}
                    followMouse={false}
                    hoverScale={1}
                    parallax={0}
                    clickBurst={false}
                />
            </div>

            {/* Orb */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                <Orb
                    hoverIntensity={0.4}
                    rotateOnHover
                    hue={0}
                    forceHoverState={false}
                    backgroundColor="#000000"
                />
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8">
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
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Who I Am */}
                    <Motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl border border-blue-500/15 bg-gradient-to-b from-slate-900/60 to-slate-950/40 backdrop-blur-xl
                        p-6 shadow-[0_0_40px_rgba(37,99,235,0.08)] hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(37,99,235,0.15)] hover:-translate-y-1
                        transition-all duration-300">
                        <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400
                            bg-clip-text text-transparent mb-4">
                            Who I Am
                        </h3>

                        <p className="text-gray-400 leading-7">
                            I'm a <span className="text-blue-400 font-medium">Full-Stack Developer</span>
                            and B.Tech student who enjoys turning ideas into scalable digital products.
                            Having solved over <span className="text-cyan-400 font-medium">500+ DSA problems</span>,
                            I approach development with a strong foundation in problem-solving, clean code,
                            and continuous learning.
                        </p>
                        <div className="flex gap-3 mt-6 flex-wrap">
                            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/15 to-cyan-500/15
                                border border-blue-500/20 text-blue-300 text-sm font-medium backdrop-blur-sm">
                                500+ DSA Problems
                            </span>

                            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/15 to-blue-500/15
                                border border-cyan-500/20 text-cyan-300 text-sm font-medium backdrop-blur-sm">
                                Full-Stack MERN
                            </span>
                        </div>
                    </Motion.div>

                    {/* What I Do */}
                    <Motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl border border-blue-500/15 bg-gradient-to-b from-slate-900/60 to-slate-950/40 backdrop-blur-xl
                        p-6 shadow-[0_0_40px_rgba(37,99,235,0.08)] hover:border-blue-500/30 hover:shadow-[0_0_50px_rgba(37,99,235,0.15)] hover:-translate-y-1
                        transition-all duration-300">
                        <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400
                            bg-clip-text text-transparent mb-4">
                            What I Do
                        </h3>

                        <p className="text-gray-400 leading-7">
                            I build <span className="text-cyan-400 font-medium">production-ready web applications</span>,
                            real-time experiences, and AI-driven solutions using modern technologies like
                            React, Node.js, Express, and MongoDB. My focus is creating software that is
                            fast, reliable, and capable of delivering
                            <span className="text-blue-400 font-medium"> real impact at scale</span>.
                        </p>
                        <div className="flex gap-3 mt-6 flex-wrap">

                            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/15 to-cyan-500/15
                                border border-blue-500/20 text-blue-300 text-sm font-medium backdrop-blur-sm">
                                4+ Production Projects
                            </span>

                            <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/15 to-blue-500/15
                                border border-cyan-500/20 text-cyan-300 text-sm font-medium backdrop-blur-sm">
                                Open to Internships
                            </span>

                        </div>
                    </Motion.div>
                </div>

                {/* Tech Stack Section */}
                <div className="flex flex-col items-center gap-4 cursor-default select-none">

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
                        <p className="text-gray-400 text-sm">
                            Technologies I work with to build scalable and modern applications
                        </p>
                        <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4"></div>
                    </Motion.div>

                    {/* Rails */}
                    <div className="relative w-full overflow-hidden">
                        <TechRail tech={tech1} duration={38} />

                        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#020817] to-transparent pointer-events-none" />

                        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#020817] to-transparent pointer-events-none" />
                    </div>
                    <div className="relative w-full overflow-hidden">
                        <TechRail tech={tech2} direction="right" duration={42} />

                        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#020817] to-transparent pointer-events-none" />

                        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#020817] to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
