import { motion } from "framer-motion";
import {
    SiReact, SiJavascript, SiTailwindcss, SiHtml5, SiCss, SiFramer,
    SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGit, SiGithub,
    SiPostman, SiVercel, SiRender, SiSocketdotio, SiCplusplus, SiJsonwebtokens
} from "react-icons/si";
import { FaJava, FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";

function Skills() {
    const skills = [
        {
            title: "Frontend",
            icon: <FaCode className="text-blue-400" />, // Changed to FaCode
            items: [
                { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
                { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
                { name: "HTML", icon: <SiHtml5 className="text-[#E34F26]" /> },
                { name: "CSS", icon: <SiCss className="text-[#1572B6]" /> },
                { name: "Framer Motion", icon: <SiFramer className="text-[#0055FF]" /> },
            ],
        },
        {
            title: "Backend",
            icon: <FaServer className="text-blue-400" />, // Changed to FaServer
            items: [
                { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
                { name: "Express", icon: <SiExpress className="text-white" /> },
                { name: "WebSockets", icon: <SiSocketdotio className="text-white" /> },
                { name: "JWT", icon: <SiJsonwebtokens className="text-[#FB015B]" /> },
            ],
        },
        {
            title: "Databases",
            icon: <FaDatabase className="text-blue-400" />, // Changed to FaDatabase
            items: [
                { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
                { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
            ],
        },
        {
            title: "Tools & Core",
            icon: <FaTools className="text-blue-400" />, // Changed to FaTools
            items: [
                { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
                { name: "GitHub", icon: <SiGithub className="text-white" /> },
                { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
                { name: "Vercel", icon: <SiVercel className="text-white" /> },
                { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
                { name: "Java", icon: <FaJava className="text-[#007396]" /> },
            ],
        },
    ];

    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden">
            {/* Background Glow (Matches your hero section style) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* Heading Section */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-semibold text-gray-100 mb-3"
                    >
                        Technical Skills
                    </motion.h2>
                    <p className="text-gray-400 text-base max-w-2xl mx-auto mb-4">
                        Focused on building scalable full-stack applications, I work across the stack, from responsive frontend interfaces to efficient backend architectures and real-time systems.
                    </p>
                    <div className="w-24 h-0.5 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((group, i) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500"></div>

                            <div className="relative bg-[#0d1117]/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-gray-700">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="p-2 bg-blue-500/10 rounded-lg text-2xl">
                                        {group.icon}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white tracking-tight">
                                        {group.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {group.items.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-xl text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
                                        >
                                            <span className="text-lg">{skill.icon}</span>
                                            <span className="text-sm font-medium">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;