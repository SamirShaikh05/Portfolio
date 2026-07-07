import { motion as Motion } from "framer-motion";
import { slideFromLeft, slideFromRight, VIEWPORT } from "../../../motion";

function AboutIntroCard({ title, body, badges, direction = "left" }) {
  const variants = direction === "left" ? slideFromLeft : slideFromRight;

  return (
    <Motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className="rounded-3xl border border-blue-500/15 bg-linear-to-b from-slate-900/60 to-slate-950/40 p-6 shadow-[0_0_40px_rgba(37,99,235,0.08)] backdrop-blur-xl transition-all duration-300"
    >
      <h3 className="mb-4 bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-display font-semibold text-transparent">
        {title}
      </h3>
      <p className="leading-7 text-gray-400">{body}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {badges.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-blue-500/20 bg-linear-to-r from-blue-500/15 to-cyan-500/15 px-4 py-1.5 text-sm font-mono font-medium text-blue-300 backdrop-blur-sm"
          >
            {badge}
          </span>
        ))}
      </div>
    </Motion.div>
  );
}

export default AboutIntroCard;
