import { motion as Motion } from "framer-motion";
import { TRANSITION } from "../../../motion";

function SkillDetailCard({ techName, meta, data }) {
  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.96, x: meta.direction === "right" ? -5 : 5 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={TRANSITION.fast}
      style={{ position: "fixed", top: meta.top, left: meta.left }}
      className="pointer-events-none z-50 w-[280px] rounded-xl border border-gray-800/80 bg-gray-950/95 p-4.5 shadow-2xl shadow-black/90 backdrop-blur-md"
    >
      <h4 className="mb-3 flex items-center gap-2 border-b border-gray-900 pb-2 text-sm font-semibold text-gray-100">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
        {techName}
      </h4>

      <div className="mb-3">
        <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-gray-500">Used In</span>
        <ul className="space-y-1">
          {data.usedIn.map((project, idx) => (
            <li key={idx} className="flex items-center gap-1.5 text-xs text-gray-300">
              <span className="select-none text-blue-500/70">•</span> {project}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-gray-500">Concepts</span>
        <div className="flex flex-wrap gap-1">
          {data.concepts.map((concept, idx) => (
            <span key={idx} className="inline-block rounded-md border border-gray-800/60 bg-gray-900 px-2 py-0.5 text-[10px] text-gray-400">
              {concept}
            </span>
          ))}
        </div>
      </div>
    </Motion.div>
  );
}

export default SkillDetailCard;
