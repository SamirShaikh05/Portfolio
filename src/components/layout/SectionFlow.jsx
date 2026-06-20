import { forwardRef, useRef } from "react";
import { motion as Motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { COLORS } from "../../motion";

/**
 * Wraps a section with gradient bleeds and scroll-linked presence so
 * content gently enters and exits rather than appearing in hard cuts.
 */
const SectionFlow = forwardRef(function SectionFlow(
  {
    id,
    children,
    background = null,
    className = "",
    bleedTop = true,
    bleedBottom = true,
    scrollPresence = true,
    bridge = false,
  },
  forwardedRef
) {
  const internalRef = useRef(null);
  const ref = forwardedRef ?? internalRef;
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = scrollPresence && !prefersReducedMotion;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.88, 1],
    shouldAnimate ? [0.55, 1, 1, 0.55] : [1, 1, 1, 1]
  );

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.12, 0.88, 1],
    shouldAnimate ? [36, 0, 0, -28] : [0, 0, 0, 0]
  );

  return (
    <>
      {bridge && (
        <div aria-hidden="true" className="relative z-[2] -mb-16 h-16 w-full">
          <div className="h-full bg-linear-to-b from-[#0B0F19]/0 via-[#0B0F19]/45 to-[#0B0F19]/0 blur-xl" />
        </div>
      )}

      <section
        ref={ref}
        id={id}
        className={`relative isolate overflow-hidden ${className}`}
      >
        {bleedTop && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-36 bg-linear-to-b from-[#0B0F19] via-[#0B0F19]/70 to-transparent"
          />
        )}

        {bleedBottom && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-36 bg-linear-to-t from-[#0B0F19] via-[#0B0F19]/70 to-transparent"
          />
        )}

        {background}

        <Motion.div
          style={
            shouldAnimate
              ? { opacity: contentOpacity, y: contentY }
              : undefined
          }
          className="relative z-[2]"
        >
          {children}
        </Motion.div>
      </section>
    </>
  );
});

export default SectionFlow;

export { COLORS };
