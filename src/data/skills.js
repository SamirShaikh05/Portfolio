import { createElement } from "react";
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
import { FaCss3Alt, FaJava } from "react-icons/fa";

const renderIcon = (Icon, className) => createElement(Icon, { className });

export const SKILL_DATA = {
  frontend: {
    title: "Frontend",
    description: "Crafting responsive and interactive user experiences with a focus on accessibility and performance.",
    rows: [
      [{ name: "React", icon: renderIcon(SiReact, "text-cyan-400") }, { name: "JavaScript", icon: renderIcon(SiJavascript, "text-yellow-400") }],
      [{ name: "Tailwind CSS", icon: renderIcon(SiTailwindcss, "text-sky-400") }, { name: "Framer Motion", icon: renderIcon(SiFramer, "text-pink-400") }],
      [{ name: "HTML", icon: renderIcon(SiHtml5, "text-orange-500") }, { name: "CSS", icon: renderIcon(FaCss3Alt, "text-blue-500 text-xl") }],
    ],
  },
  backend: {
    title: "Backend",
    description: "Building scalable backend systems with authentication, APIs, and real-time communication.",
    rows: [
      [{ name: "Node.js", icon: renderIcon(SiNodedotjs, "text-green-500") }, { name: "Express.js", icon: renderIcon(SiExpress, "text-gray-300") }],
      [{ name: "REST APIs", icon: renderIcon(MdApi, "text-purple-400") }, { name: "JWT", icon: renderIcon(SiJsonwebtokens, "text-pink-500") }],
      [{ name: "Socket.IO", icon: renderIcon(SiSocketdotio, "text-gray-100") }, { name: "WebSockets", icon: renderIcon(SiWebrtc, "text-sky-400") }],
    ],
  },
  databases: {
    title: "Databases",
    description: "Designing efficient data models and managing application persistence for modern web applications.",
    rows: [[{ name: "MongoDB", icon: renderIcon(SiMongodb, "text-green-600") }, { name: "SQL", icon: renderIcon(SiPostgresql, "text-blue-600") }]],
  },
  toolsCore: {
    title: "Tools & Core",
    description: "Leveraging development workflows and strong problem-solving foundations to build reliable software.",
    rows: [
      [{ name: "Git", icon: renderIcon(SiGit, "text-red-500") }, { name: "GitHub", icon: renderIcon(SiGithub, "text-gray-100") }],
      [{ name: "Linux", icon: renderIcon(SiLinux, "text-amber-500") }, { name: "Bash", icon: renderIcon(SiGnubash, "text-gray-200") }],
      [{ name: "Postman", icon: renderIcon(SiPostman, "text-orange-500") }, { name: "Vercel", icon: renderIcon(SiVercel, "text-gray-100") }],
      [{ name: "Render", icon: renderIcon(SiRender, "text-indigo-500") }, { name: "Java", icon: renderIcon(FaJava, "text-orange-600") }],
      [{ name: "C++", icon: renderIcon(SiCplusplus, "text-blue-500") }],
    ],
  },
};

export const DETAIL_CONTENT = {
  React: {
    usedIn: ["Portfolio", "ThundrAI", "GolfImpact", "SchoolConnect", "InsightForge", "Full Stack To-Do", "DeluluDraw"],
    concepts: ["Component Architecture", "Hooks", "Reusable UI", "State Management", "Responsive Design"],
  },
  JavaScript: {
    usedIn: ["All Web Projects"],
    concepts: ["ES6+", "Async/Await", "Promises", "Event Loop", "DOM APIs"],
  },
  "Tailwind CSS": {
    usedIn: ["Portfolio", "ThundrAI", "GolfImpact", "DeluluDraw", "SchoolConnect"],
    concepts: ["Utility-first CSS", "Responsive Layouts", "Dark Theme", "Glassmorphism"],
  },
  "Framer Motion": {
    usedIn: ["Portfolio"],
    concepts: ["Scroll Animations", "Layout Animations", "AnimatePresence", "Variants"],
  },
  HTML: {
    usedIn: ["Portfolio", "Spotify Clone", "DeluluDraw"],
    concepts: ["Semantic HTML", "Accessibility", "SEO"],
  },
  CSS: {
    usedIn: ["Portfolio", "Spotify Clone"],
    concepts: ["Flexbox", "Grid", "Animations", "Responsive Design"],
  },
  "Node.js": {
    usedIn: ["ThundrAI", "SchoolConnect", "AI Call Agent", "InsightForge", "DeluluDraw", "GolfImpact", "Full Stack To-Do"],
    concepts: ["REST APIs", "Middleware", "Async Programming", "Background Jobs", "Real-time Services"],
  },
  "Express.js": {
    usedIn: ["ThundrAI", "SchoolConnect", "InsightForge", "AI Call Agent", "GolfImpact", "Full Stack To-Do", "DeluluDraw"],
    concepts: ["REST Architecture", "Routing", "Middleware", "Error Handling"],
  },
  "REST APIs": {
    usedIn: ["SchoolConnect", "InsightForge", "AI Call Agent", "ThundrAI", "GolfImpact", "Full Stack To-Do"],
    concepts: ["CRUD", "HTTP Methods", "Status Codes", "API Design"],
  },
  JWT: {
    usedIn: ["SchoolConnect", "Full Stack To-Do", "GolfImpact"],
    concepts: ["Authentication", "Authorization", "Protected Routes", "Token Verification"],
  },
  "Socket.IO": {
    usedIn: ["DeluluDraw", "SchoolConnect"],
    concepts: ["Real-time Messaging", "Room Management", "Event-driven Systems", "State Synchronization"],
  },
  WebSockets: {
    usedIn: ["DeluluDraw", "SchoolConnect"],
    concepts: ["Bi-directional Communication", "Low Latency", "Live Collaboration"],
  },
  MongoDB: {
    usedIn: ["ThundrAI", "InsightForge", "GolfImpact", "Full Stack To-Do", "SchoolConnect"],
    concepts: ["Schema Design", "Aggregation", "Indexes", "Data Modeling"],
  },
  SQL: {
    usedIn: ["SchoolConnect"],
    concepts: ["Relational Design", "Normalization", "Joins", "Transactions"],
  },
  Git: {
    usedIn: ["All Projects"],
    concepts: ["Branching", "Version Control", "Merge Conflict Resolution", "Git Flow"],
  },
  GitHub: {
    usedIn: ["All Projects"],
    concepts: ["Pull Requests", "Issue Tracking", "Project Hosting", "README Documentation"],
  },
  Linux: {
    usedIn: ["Backend Development", "Deployment"],
    concepts: ["CLI", "Shell Commands", "File Permissions", "Server Environment"],
  },
  Bash: {
    usedIn: ["Development Workflow"],
    concepts: ["Automation", "Scripts", "Terminal"],
  },
  Postman: {
    usedIn: ["All Backend Projects"],
    concepts: ["API Testing", "Collections", "Environment Variables", "Request Debugging"],
  },
  Vercel: {
    usedIn: ["Portfolio", "ThundrAI", "GolfImpact", "DeluluDraw", "Spotify Clone", "Full Stack To-Do"],
    concepts: ["Frontend Deployment", "CI/CD", "Environment Variables"],
  },
  Render: {
    usedIn: ["ThundrAI", "DeluluDraw", "InsightForge", "AI Call Agent"],
    concepts: ["Backend Deployment", "Node Services", "Environment Configuration"],
  },
  Java: {
    usedIn: ["DSA", "Problem Solving"],
    concepts: ["OOP", "Collections", "Exception Handling"],
  },
  "C++": {
    usedIn: ["DSA", "Competitive Programming"],
    concepts: ["Data Structures", "Algorithms", "STL", "Dynamic Programming"],
  },
};

export function getSkillDetailData(name) {
  if (DETAIL_CONTENT[name]) {
    return DETAIL_CONTENT[name];
  }

  const fallbacks = {
    JavaScript: { usedIn: ["All Projects"], concepts: ["ES6+", "Asynchronous Programming", "DOM Manipulation"] },
    "Tailwind CSS": { usedIn: ["ThundrAI", "GolfImpact"], concepts: ["Utility-First CSS", "Responsive Design", "Custom Configurations"] },
    "Framer Motion": { usedIn: ["Portfolio", "Projects Grid"], concepts: ["Orchestration", "AnimatePresence", "Layout Animations"] },
    "Express.js": { usedIn: ["ThundrAI", "Full Stack To-Do"], concepts: ["Routing", "RESTful Architecture", "Error Handling Middleware"] },
    JWT: { usedIn: ["Full Stack To-Do", "ThundrAI"], concepts: ["Stateless Authentication", "Token Sign/Verify", "Secure Cookies"] },
    SQL: { usedIn: ["Academic Labs"], concepts: ["Relational Mapping", "Normalization", "Query Optimization"] },
    "C++": { usedIn: ["DSA Practice (350+ Solved)"], concepts: ["Data Structures", "Algorithms", "Time/Space Complexity Optimization"] },
    Java: { usedIn: ["Academic Frameworks"], concepts: ["OOP Principles", "Exception Handling", "Collections Framework"] },
    GitHub: { usedIn: ["All Codebases"], concepts: ["CI/CD Pipelines", "PR Workflows", "Issue Tracking"] },
    Linux: { usedIn: ["Server Environments"], concepts: ["CLI Administration", "Shell Scripting", "Process Management"] },
  };

  return fallbacks[name] || { usedIn: ["Portfolio Ecosystem"], concepts: ["Core Engineering", "Best Practices"] };
}
