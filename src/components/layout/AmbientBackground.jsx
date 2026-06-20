import { motion as Motion, useScroll, useTransform } from "framer-motion";

/**
 * Fixed, scroll-linked ambient layer that gives every section a shared
 * atmospheric backdrop — orbs drift subtly as the user scrolls.
 */
function AmbientBackground() {
  const { scrollYProgress } = useScroll();

  const orbPrimaryY = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], ["0%", "18%", "42%", "58%"]);
  const orbSecondaryY = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], ["12%", "-8%", "-22%", "-32%"]);
  const orbTertiaryY = useTransform(scrollYProgress, [0, 0.5, 1], ["30%", "10%", "-12%"]);
  const orbPrimaryOpacity = useTransform(scrollYProgress, [0, 0.25, 0.55, 0.85, 1], [0.55, 0.45, 0.5, 0.38, 0.32]);
  const orbSecondaryOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0.35, 0.42, 0.48, 0.4]);
  const orbTertiaryOpacity = useTransform(scrollYProgress, [0, 0.45, 0.75, 1], [0.2, 0.32, 0.38, 0.28]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#0B0F19]" />

      {/* Soft vignette keeps edges anchored to the dark theme */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(59,130,246,0.07),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(6,182,212,0.04),transparent_65%)]" />

      <Motion.div
        style={{ y: orbPrimaryY, opacity: orbPrimaryOpacity }}
        className="absolute -top-[18%] left-[8%] h-[min(680px,90vw)] w-[min(680px,90vw)] rounded-full bg-blue-600/[0.09] blur-[120px]"
      />
      <Motion.div
        style={{ y: orbSecondaryY, opacity: orbSecondaryOpacity }}
        className="absolute top-[38%] -right-[12%] h-[min(560px,80vw)] w-[min(560px,80vw)] rounded-full bg-cyan-500/[0.07] blur-[110px]"
      />
      <Motion.div
        style={{ y: orbTertiaryY, opacity: orbTertiaryOpacity }}
        className="absolute bottom-[6%] left-[28%] h-[min(720px,95vw)] w-[min(720px,95vw)] rounded-full bg-indigo-600/[0.06] blur-[130px]"
      />
    </div>
  );
}

export default AmbientBackground;
