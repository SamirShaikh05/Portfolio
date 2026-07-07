import { motion as Motion } from "framer-motion";
import { cardReveal } from "../../../motion";

function SkillCategoryCard({ category, children }) {
  return (
    <Motion.div
      variants={cardReveal}
      className="flex w-full flex-col gap-4"
    >
      <div className="flex flex-col px-1">
        <h3 className="mb-1 text-lg font-display font-semibold tracking-wide text-gray-200">{category.title}</h3>
        <p className="text-xs font-light leading-relaxed text-gray-400 sm:text-sm">{category.description}</p>
      </div>

      <div className="flex w-full flex-col gap-2.5 rounded-2xl border border-gray-800/40 bg-gray-950/20 p-5 shadow-2xl shadow-black/40 backdrop-blur-md">
        {children}
      </div>
    </Motion.div>
  );
}

export default SkillCategoryCard;
