import { motion as Motion } from "framer-motion";
import { fadeUp, VIEWPORT } from "../../motion";

/**
 * Shared section heading block — consistent typography rhythm and entrance.
 */
function SectionHeading({ title, subtitle, className = "" }) {
  return (
    <Motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      className={`text-center ${className}`}
    >
      <h2 className="text-4xl font-display font-semibold tracking-tight text-gray-100">
        {title}
      </h2>
      <div className="mx-auto mt-3 h-0.5 w-24 rounded-full bg-linear-to-r from-blue-500 to-cyan-400" />
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
          {subtitle}
        </p>
      )}
    </Motion.div>
  );
}

export default SectionHeading;
