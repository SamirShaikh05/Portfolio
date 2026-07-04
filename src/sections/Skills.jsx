import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import SectionFlow from "../components/layout/SectionFlow";
import SectionHeading from "../components/layout/SectionHeading";
import ShapeGrid from "../components/ui/ShapeGrid";
import { cardReveal, staggerContainer, TRANSITION, VIEWPORT } from "../motion";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiLinux,
  SiGnubash,
  SiPostman,
  SiVercel,
  SiRender,
  SiSocketdotio,
  SiCplusplus,
  SiJsonwebtokens,
  SiWebrtc,
} from "react-icons/si";
import { MdApi } from "react-icons/md";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";

// 1. Skill Data with React Icons
const SKILL_DATA = {
  frontend: {
    title: "Frontend",
    description: "Crafting responsive and interactive user experiences with a focus on accessibility and performance.",
    rows: [
      [{ name: "React", icon: <SiReact className="text-cyan-400" /> }, { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> }],
      [{ name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> }, { name: "Framer Motion", icon: <SiFramer className="text-pink-400" /> }],
      [{ name: "HTML", icon: <SiHtml5 className="text-orange-500" /> }, { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-xl" /> }]
    ]
  },
  backend: {
    title: "Backend",
    description: "Building scalable backend systems with authentication, APIs, and real-time communication.",
    rows: [
      [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> }
      ],
      [
        { name: "REST APIs", icon: <MdApi className="text-purple-400" /> },
        { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500" /> }
      ],
      [
        { name: "Socket.IO", icon: <SiSocketdotio className="text-gray-100" /> },
        { name: "WebSockets", icon: <SiWebrtc className="text-sky-400" /> }
      ]
    ]
  },
  databases: {
    title: "Databases",
    description: "Designing efficient data models and managing application persistence for modern web applications.",
    rows: [
      [{ name: "MongoDB", icon: <SiMongodb className="text-green-600" /> }, { name: "SQL", icon: <SiPostgresql className="text-blue-600" /> }]
    ]
  },
  toolsCore: {
    title: "Tools & Core",
    description: "Leveraging development workflows and strong problem-solving foundations to build reliable software.",
    rows: [
      [
        { name: "Git", icon: <SiGit className="text-red-500" /> },
        { name: "GitHub", icon: <SiGithub className="text-gray-100" /> }
      ],
      [
        { name: "Linux", icon: <SiLinux className="text-amber-500" /> },
        { name: "Bash", icon: <SiGnubash className="text-gray-200" /> }
      ],
      [
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Vercel", icon: <SiVercel className="text-gray-100" /> }
      ],
      [
        { name: "Render", icon: <SiRender className="text-indigo-500" /> },
        { name: "Java", icon: <FaJava className="text-orange-600" /> }
      ],
      [
        { name: "C++", icon: <SiCplusplus className="text-blue-500" /> }
      ]
    ]
  }
};

const DETAIL_CONTENT = {
  "React": {
    usedIn: [
      "Portfolio",
      "ThundrAI",
      "GolfImpact",
      "SchoolConnect",
      "InsightForge",
      "Full Stack To-Do",
      "DeluluDraw",
    ],
    concepts: [
      "Component Architecture",
      "Hooks",
      "Reusable UI",
      "State Management",
      "Responsive Design",
    ],
  },

  "JavaScript": {
    usedIn: [
      "All Web Projects",
    ],
    concepts: [
      "ES6+",
      "Async/Await",
      "Promises",
      "Event Loop",
      "DOM APIs",
    ],
  },

  "Tailwind CSS": {
    usedIn: [
      "Portfolio",
      "ThundrAI",
      "GolfImpact",
      "DeluluDraw",
      "SchoolConnect",
    ],
    concepts: [
      "Utility-first CSS",
      "Responsive Layouts",
      "Dark Theme",
      "Glassmorphism",
    ],
  },

  "Framer Motion": {
    usedIn: [
      "Portfolio",
    ],
    concepts: [
      "Scroll Animations",
      "Layout Animations",
      "AnimatePresence",
      "Variants",
    ],
  },

  "HTML": {
    usedIn: [
      "Portfolio",
      "Spotify Clone",
      "DeluluDraw",
    ],
    concepts: [
      "Semantic HTML",
      "Accessibility",
      "SEO",
    ],
  },

  "CSS": {
    usedIn: [
      "Portfolio",
      "Spotify Clone",
    ],
    concepts: [
      "Flexbox",
      "Grid",
      "Animations",
      "Responsive Design",
    ],
  },

  "Node.js": {
    usedIn: [
      "ThundrAI",
      "SchoolConnect",
      "AI Call Agent",
      "InsightForge",
      "DeluluDraw",
      "GolfImpact",
      "Full Stack To-Do",
    ],
    concepts: [
      "REST APIs",
      "Middleware",
      "Async Programming",
      "Background Jobs",
      "Real-time Services",
    ],
  },

  "Express.js": {
    usedIn: [
      "ThundrAI",
      "SchoolConnect",
      "InsightForge",
      "AI Call Agent",
      "GolfImpact",
      "Full Stack To-Do",
      "DeluluDraw",
    ],
    concepts: [
      "REST Architecture",
      "Routing",
      "Middleware",
      "Error Handling",
    ],
  },

  "REST APIs": {
    usedIn: [
      "SchoolConnect",
      "InsightForge",
      "AI Call Agent",
      "ThundrAI",
      "GolfImpact",
      "Full Stack To-Do",
    ],
    concepts: [
      "CRUD",
      "HTTP Methods",
      "Status Codes",
      "API Design",
    ],
  },

  "JWT": {
    usedIn: [
      "SchoolConnect",
      "Full Stack To-Do",
      "GolfImpact",
    ],
    concepts: [
      "Authentication",
      "Authorization",
      "Protected Routes",
      "Token Verification",
    ],
  },

  "Socket.IO": {
    usedIn: [
      "DeluluDraw",
      "SchoolConnect",
    ],
    concepts: [
      "Real-time Messaging",
      "Room Management",
      "Event-driven Systems",
      "State Synchronization",
    ],
  },

  "WebSockets": {
    usedIn: [
      "DeluluDraw",
      "SchoolConnect",
    ],
    concepts: [
      "Bi-directional Communication",
      "Low Latency",
      "Live Collaboration",
    ],
  },

  "MongoDB": {
    usedIn: [
      "ThundrAI",
      "InsightForge",
      "GolfImpact",
      "Full Stack To-Do",
      "SchoolConnect",
    ],
    concepts: [
      "Schema Design",
      "Aggregation",
      "Indexes",
      "Data Modeling",
    ],
  },

  "SQL": {
    usedIn: [
      "SchoolConnect",
    ],
    concepts: [
      "Relational Design",
      "Normalization",
      "Joins",
      "Transactions",
    ],
  },

  "Git": {
    usedIn: [
      "All Projects",
    ],
    concepts: [
      "Branching",
      "Version Control",
      "Merge Conflict Resolution",
      "Git Flow",
    ],
  },

  "GitHub": {
    usedIn: [
      "All Projects",
    ],
    concepts: [
      "Pull Requests",
      "Issue Tracking",
      "Project Hosting",
      "README Documentation",
    ],
  },

  "Linux": {
    usedIn: [
      "Backend Development",
      "Deployment",
    ],
    concepts: [
      "CLI",
      "Shell Commands",
      "File Permissions",
      "Server Environment",
    ],
  },

  "Bash": {
    usedIn: [
      "Development Workflow",
    ],
    concepts: [
      "Automation",
      "Scripts",
      "Terminal",
    ],
  },

  "Postman": {
    usedIn: [
      "All Backend Projects",
    ],
    concepts: [
      "API Testing",
      "Collections",
      "Environment Variables",
      "Request Debugging",
    ],
  },

  "Vercel": {
    usedIn: [
      "Portfolio",
      "ThundrAI",
      "GolfImpact",
      "DeluluDraw",
      "Spotify Clone",
      "Full Stack To-Do",
    ],
    concepts: [
      "Frontend Deployment",
      "CI/CD",
      "Environment Variables",
    ],
  },

  "Render": {
    usedIn: [
      "ThundrAI",
      "DeluluDraw",
      "InsightForge",
      "AI Call Agent",
    ],
    concepts: [
      "Backend Deployment",
      "Node Services",
      "Environment Configuration",
    ],
  },

  "Java": {
    usedIn: [
      "DSA",
      "Problem Solving",
    ],
    concepts: [
      "OOP",
      "Collections",
      "Exception Handling",
    ],
  },

  "C++": {
    usedIn: [
      "DSA",
      "Competitive Programming",
    ],
    concepts: [
      "Data Structures",
      "Algorithms",
      "STL",
      "Dynamic Programming",
    ],
  },
};

const getDetailData = (name) => {
  if (DETAIL_CONTENT[name]) return DETAIL_CONTENT[name];
  const fallbacks = {
    "JavaScript": { usedIn: ["All Projects"], concepts: ["ES6+", "Asynchronous Programming", "DOM Manipulation"] },
    "Tailwind CSS": { usedIn: ["ThundrAI", "GolfImpact"], concepts: ["Utility-First CSS", "Responsive Design", "Custom Configurations"] },
    "Framer Motion": { usedIn: ["Portfolio", "Projects Grid"], concepts: ["Orchestration", "AnimatePresence", "Layout Animations"] },
    "Express.js": { usedIn: ["ThundrAI", "Full Stack To-Do"], concepts: ["Routing", "RESTful Architecture", "Error Handling Middleware"] },
    "JWT": { usedIn: ["Full Stack To-Do", "ThundrAI"], concepts: ["Stateless Authentication", "Token Sign/Verify", "Secure Cookies"] },
    "SQL": { usedIn: ["Academic Labs"], concepts: ["Relational Mapping", "Normalization", "Query Optimization"] },
    "C++": { usedIn: ["DSA Practice (350+ Solved)"], concepts: ["Data Structures", "Algorithms", "Time/Space Complexity Optimization"] },
    "Java": { usedIn: ["Academic Frameworks"], concepts: ["OOP Principles", "Exception Handling", "Collections Framework"] },
    "GitHub": { usedIn: ["All Codebases"], concepts: ["CI/CD Pipelines", "PR Workflows", "Issue Tracking"] },
    "Linux": { usedIn: ["Server Environments"], concepts: ["CLI Administration", "Shell Scripting", "Process Management"] },
  };
  return fallbacks[name] || { usedIn: ["Portfolio Ecosystem"], concepts: ["Core Engineering", "Best Practices"] };
};

const containerVariants = staggerContainer(0.1, 0.05);

const cardVariants = cardReveal;

export default function Skills() {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [cardMeta, setCardMeta] = useState({ top: 0, left: 0, direction: "right" });

  const handleMouseEnter = (techName, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const cardWidth = 280;
    const cardHeightEstimate = 220;
    const gap = 12;
    const margin = 16;

    const chipCenter = rect.left + rect.width / 2;
    const direction = chipCenter > windowWidth / 2 ? "right" : "left";

    const preferredLeft = direction === "right"
      ? rect.right + gap
      : rect.left - cardWidth - gap;

    setCardMeta({
      top: Math.min(
        Math.max(rect.top - 6, margin),
        windowHeight - cardHeightEstimate - margin
      ),
      left: Math.min(
        Math.max(preferredLeft, margin),
        windowWidth - cardWidth - margin
      ),
      direction
    });
    setHoveredTech(techName);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <SectionFlow
      id="skills"
      className="-scroll-mt-35 px-6 py-50 z-10 w-full"
      background={
        <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
          <ShapeGrid
            shape="square"
            squareSize={45}
            speed={0.6}
            borderColor="#2a2a3a"
            hoverFillColor="#3B82F6"
            hoverTrailAmount={3}
          />
        </div>
      }
    >
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center z-10">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A structured look at my technical ecosystem and engineering capabilities. Hover over a technology to see its application."
          className="mb-16"
        />

        {/* Categories Clean Vertical Chain Stack */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex flex-col gap-12 w-full max-w-2xl"
        >
          {Object.entries(SKILL_DATA).map(([key, category]) => (
            <Motion.div
              key={key}
              variants={cardVariants}
              className="flex flex-col gap-4 w-full"
            >
              {/* Headings Structure Rendered Completely Safe Outside Boxes */}
              <div className="flex flex-col px-1">
                <h3 className="text-lg font-medium text-gray-200 mb-1 tracking-wide">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                  {category.description}
                </p>
              </div>

              {/* Technologies High-Fidelity Glassmorphic Surface Container */}
              <div className="rounded-2xl border border-gray-800/40 bg-gray-950/20 p-5 backdrop-blur-md shadow-2xl shadow-black/40 flex flex-col gap-2.5 w-full">
                {category.rows.map((row, rowIndex) => (
                  <div key={rowIndex} className="grid grid-cols-2 gap-2.5">
                    {row.map((chip) => (
                      <div
                        key={chip.name}
                        onMouseEnter={(e) => handleMouseEnter(chip.name, e)}
                        onMouseLeave={handleMouseLeave}
                        className="relative flex items-center justify-center gap-2.5 rounded-xl border border-gray-800/60 bg-gray-900/10 px-4 py-3 text-xs text-gray-300 font-medium tracking-wide transition-all duration-300 select-none hover:-translate-y-0.5 hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.06)]"
                      >
                        {/* Dynamic React Icon Render Space */}
                        {chip.icon ? (
                          <span className="text-lg transition-colors duration-200 flex-shrink-0">{chip.icon}</span>
                        ) : (
                          <div className="w-4 h-4 rounded-md bg-gray-800/40 animate-pulse shrink-0" />
                        )}

                        <span className="truncate">{chip.name}</span>
                      </div>
                    ))}
                    {row.length === 1 && <div className="hidden grid-cols-1"></div>}
                  </div>
                ))}
              </div>

            </Motion.div>
          ))}
        </Motion.div>
      </div>

      {/* Pop-out Overlay Tooltips */}
      <AnimatePresence>
        {hoveredTech && (
          <DetailCard
            techName={hoveredTech}
            meta={cardMeta}
          />
        )}
      </AnimatePresence>
    </SectionFlow>
  );
}

function DetailCard({ techName, meta }) {
  const data = getDetailData(techName);

  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.96, x: meta.direction === "right" ? -5 : 5 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={TRANSITION.fast}
      style={{
        position: "fixed",
        top: meta.top,
        left: meta.left,
      }}
      className="z-50 w-[280px] pointer-events-none rounded-xl border border-gray-800/80 bg-gray-950/95 p-4.5 shadow-2xl shadow-black/90 backdrop-blur-md"
    >
      <h4 className="text-sm font-semibold text-gray-100 border-b border-gray-900 pb-2 mb-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
        {techName}
      </h4>

      <div className="mb-3">
        <span className="text-[10px] font-bold tracking-wider uppercase text-gray-500 block mb-1">
          Used In
        </span>
        <ul className="space-y-1">
          {data.usedIn.map((project, idx) => (
            <li key={idx} className="text-xs text-gray-300 flex items-center gap-1.5">
              <span className="text-blue-500/70 select-none">•</span> {project}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <span className="text-[10px] font-bold tracking-wider uppercase text-gray-500 block mb-1">
          Concepts
        </span>
        <div className="flex flex-wrap gap-1">
          {data.concepts.map((concept, idx) => (
            <span
              key={idx}
              className="inline-block bg-gray-900 text-gray-400 text-[10px] px-2 py-0.5 rounded-md border border-gray-800/60"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>
    </Motion.div>
  );
}
