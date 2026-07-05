import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { MdExpandMore } from "react-icons/md";
import { 
    SiReact, SiRedux, SiJavascript, SiBootstrap, SiTailwindcss, 
    SiFramer, SiEjs, SiGithub, SiVercel, SiNodedotjs, SiExpress, 
    SiMongodb, SiMongoose, SiPostman, SiAuth0, SiJsonwebtokens, 
    SiRender, SiCplusplus, SiOpenjdk 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import TechTriangle from '../components/layout/TechTriangle.jsx';
import MagicRings from '../components/ui/MagicRings.jsx';
import Orb from '../components/ui/Orb.jsx';
import { VIEWPORT, DURATION, EASE, slideFromLeft, slideFromRight, fadeUp } from '../motion/index.js';
import SectionFlow from "../components/layout/SectionFlow.jsx";
import SectionHeading from "../components/layout/SectionHeading.jsx";

function TechRail({ tech, direction = "left", duration = 35 }) {
    const railGroup = [...tech, ...tech];
    const isReverse = direction === "right";

    return (
        <div className="w-full overflow-hidden py-0">
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
                    <div key={group} className="flex shrink-0 gap-4 pr-4">
                        {railGroup.map((techItem, i) => {
                            const Icon = techItem.icon;
                            return (
                                <div
                                    key={`${techItem.name}-${group}-${i}`}
                                    className="flex h-12 min-w-[145px] items-center gap-3 rounded-xl border border-white/10 bg-linear-to-br from-slate-800/80 via-slate-900/70 to-slate-950/80 px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition hover:scale-105"
                                >
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                                        <Icon className={`h-4.5 w-4.5 ${techItem.color}`} aria-hidden="true" />
                                    </span>
                                    <span className="truncate text-sm font-medium text-gray-200">
                                        {techItem.name}
                                    </span>
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

    const [showAll, setShowAll] = useState(false);
    const allTech = [...tech1, ...tech2];

    return (
        <SectionFlow id="about" className="-scroll-mt-15 min-h-[85vh] py-20 px-6 relative">
            
            {/* 1. Background Wrapper: Restored original glowness parameters with responsive layouts */}
            <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-screen pointer-events-none overflow-hidden z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-h-screen flex items-center justify-center">
                    <Motion.div
                        animate={{ 
                            opacity: showAll ? 0.45 : 0.8,
                            scale: showAll ? 1.15 : 1
                        }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        className="relative w-full h-full flex items-center justify-center"
                    >
                        {/* Magic Rings */}
                        <Motion.div
                            className="absolute inset-0 flex items-center justify-center w-full h-full"
                            animate={{ scale: showAll ? 1.15 : 1 }}
                            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                        >
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
                        </Motion.div>

                        {/* Orb Background Layer */}
                        <Motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            animate={{ scale: showAll ? 1.05 : 0.9 }}
                            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <Orb
                                hoverIntensity={0.4}
                                rotateOnHover
                                hue={0}
                                forceHoverState={false}
                                backgroundColor="#000000"
                            />
                        </Motion.div>
                    </Motion.div>
                </div>
            </div>

            {/* 2. Content Layout Structure */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-10">
                <SectionHeading title="About Me" />

                {/* Info Cards Row */}
                <div className="grid md:grid-cols-2 gap-8">
                    <Motion.div
                        variants={slideFromLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={VIEWPORT}
                        className="rounded-3xl border border-blue-500/15 bg-linear-to-b from-slate-900/60 to-slate-950/40 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(37,99,235,0.08)] transition-all duration-300"
                    >
                        <h3 className="text-2xl font-semibold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                            Who I Am
                        </h3>
                        <p className="text-gray-400 leading-7">
                            I'm a <span className="text-blue-400 font-medium">Full-Stack Developer</span> and B.Tech student who enjoys turning ideas into scalable digital products. Having solved over <span className="text-cyan-400 font-medium">500+ DSA problems</span>, I approach development with a strong foundation in problem-solving, clean code, and continuous learning.
                        </p>
                        <div className="flex gap-3 mt-6 flex-wrap">
                            <span className="px-4 py-1.5 rounded-full bg-linear-to-r from-blue-500/15 to-cyan-500/15 border border-blue-500/20 text-blue-300 text-sm font-medium backdrop-blur-sm">
                                500+ DSA Problems
                            </span>
                            <span className="px-4 py-1.5 rounded-full bg-linear-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-500/20 text-cyan-300 text-sm font-medium backdrop-blur-sm">
                                Full-Stack MERN
                            </span>
                        </div>
                    </Motion.div>

                    <Motion.div
                        variants={slideFromRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={VIEWPORT}
                        className="rounded-3xl border border-blue-500/15 bg-linear-to-b from-slate-900/60 to-slate-950/40 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(37,99,235,0.08)] transition-all duration-300"
                    >
                        <h3 className="text-2xl font-semibold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                            What I Do
                        </h3>
                        <p className="text-gray-400 leading-7">
                            I build <span className="text-cyan-400 font-medium">production-ready web applications</span>, real-time experiences, and AI-driven solutions using modern technologies like React, Node.js, Express, and MongoDB. My focus is creating software that is fast, reliable, and capable of delivering <span className="text-blue-400 font-medium">real impact at scale</span>.
                        </p>
                        <div className="flex gap-3 mt-6 flex-wrap">
                            <span className="px-4 py-1.5 rounded-full bg-linear-to-r from-blue-500/15 to-cyan-500/15 border border-blue-500/20 text-blue-300 text-sm font-medium backdrop-blur-sm">
                                4+ Production Projects
                            </span>
                            <span className="px-4 py-1.5 rounded-full bg-linear-to-r from-cyan-500/15 to-blue-500/15 border border-cyan-500/20 text-cyan-300 text-sm font-medium backdrop-blur-sm">
                                Open to Internships
                            </span>
                        </div>
                    </Motion.div>
                </div>

                {/* Tech Stack Component Section */}
                <div className="flex flex-col items-center gap-6 cursor-default select-none">
                    <Motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="text-center">
                        <h3 className="text-2xl font-semibold text-gray-100 mb-3">Tech Stack</h3>
                        <p className="text-gray-400 text-sm">Technologies I work with to build scalable and modern applications</p>
                        <div className="w-24 h-0.5 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mt-4"></div>
                    </Motion.div>

                    <AnimatePresence mode="wait">
                        {!showAll ? (
                            <Motion.div
                                key="rail"
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -28, filter: "blur(6px)" }}
                                transition={{ duration: DURATION.base, ease: EASE.out }}
                                className="w-full flex flex-col gap-3"
                            >
                                <div className="relative w-full overflow-hidden">
                                    <TechRail tech={tech1} duration={38} />
                                    <div className="absolute left-0 top-0 h-full w-28 bg-linear-to-r from-[#0B0F19] to-transparent pointer-events-none" />
                                    <div className="absolute right-0 top-0 h-full w-28 bg-linear-to-l from-[#0B0F19] to-transparent pointer-events-none" />
                                </div>
                                <div className="relative w-full overflow-hidden">
                                    <TechRail tech={tech2} direction="right" duration={42} />
                                    <div className="absolute left-0 top-0 h-full w-28 bg-linear-to-r from-[#0B0F19] to-transparent pointer-events-none" />
                                    <div className="absolute right-0 top-0 h-full w-28 bg-linear-to-l from-[#0B0F19] to-transparent pointer-events-none" />
                                </div>
                                <div className="mt-6 flex justify-center">
                                    <Motion.button
                                        onClick={() => setShowAll(true)}
                                        whileHover={{ scale: 1.03, borderColor: "rgba(59,130,246,0.35)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 text-sm text-gray-400 shadow-[0_0_30px_rgba(59,130,246,0.06)] backdrop-blur-md transition-colors hover:text-white"
                                    >
                                        Explore Full Tech Stack
                                        <MdExpandMore className="text-lg transition-transform duration-300 group-hover:translate-y-0.5" />
                                    </Motion.button>
                                </div>
                            </Motion.div>
                        ) : (
                            <Motion.div
                                key="triangle"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                                transition={{ duration: DURATION.base, ease: EASE.out }}
                                className="flex w-full flex-col items-center gap-8 relative z-20"
                            >
                                {/* Direct rendering of custom component cleanly isolated */}
                                <TechTriangle tech={allTech} />
                                
                                <Motion.button
                                    onClick={() => setShowAll(false)}
                                    whileHover={{ scale: 1.03, borderColor: "rgba(59,130,246,0.35)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-2.5 text-sm text-gray-400 shadow-[0_0_30px_rgba(59,130,246,0.06)] backdrop-blur-md transition-colors hover:text-white"
                                >
                                    Collapse Tech Stack
                                    <MdExpandMore className="rotate-180 text-lg transition-transform duration-300 group-hover:-translate-y-0.5" />
                                </Motion.button>
                            </Motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </SectionFlow>
    );
}

export default About;