import { AnimatePresence, motion as Motion } from "framer-motion";
import { MdExpandMore } from "react-icons/md";
import TechTriangle from "../../layout/TechTriangle";
import { DURATION, EASE, fadeUp, VIEWPORT } from "../../../motion";

function TechStackSection({ showAll, onShowAll, onCollapse, techItems }) {
  return (
    <div className="flex flex-col items-center gap-6 select-none">
      <Motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="text-center">
        <h3 className="mb-3 text-2xl font-display font-semibold text-gray-100">Tech Stack</h3>
        <p className="text-sm text-gray-400">Technologies I work with to build scalable and modern applications</p>
        <div className="mx-auto mt-4 h-0.5 w-24 rounded-full bg-linear-to-r from-blue-500 to-cyan-500" />
      </Motion.div>

      <AnimatePresence mode="wait">
        {!showAll ? (
          <Motion.div
            key="rail"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -28, filter: "blur(6px)" }}
            transition={{ duration: DURATION.base, ease: EASE.out }}
            className="flex w-full flex-col gap-3"
          >
            <div className="relative w-full overflow-hidden">
              <TechRail tech={techItems.primary} duration={38} />
              <div className="pointer-events-none absolute left-0 top-0 h-full w-28 bg-linear-to-r from-[#0B0F19] to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-linear-to-l from-[#0B0F19] to-transparent" />
            </div>
            <div className="relative w-full overflow-hidden">
              <TechRail tech={techItems.secondary} direction="right" duration={42} />
              <div className="pointer-events-none absolute left-0 top-0 h-full w-28 bg-linear-to-r from-[#0B0F19] to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 h-full w-28 bg-linear-to-l from-[#0B0F19] to-transparent" />
            </div>
            <div className="mt-6 flex justify-center">
              <Motion.button
                onClick={onShowAll}
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
            className="relative z-20 flex w-full flex-col items-center gap-8"
          >
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/[0.06] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.025),transparent_60%)] p-4 backdrop-blur-sm sm:p-8">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_60%_35%_at_50%_0%,rgba(59,130,246,0.06),transparent)]" />
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_50%_30%_at_50%_100%,rgba(6,182,212,0.04),transparent)]" />
              <TechTriangle tech={[...techItems.primary, ...techItems.secondary]} />
            </div>

            <Motion.button
              onClick={onCollapse}
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
  );
}

function TechRail({ tech, direction = "left", duration = 35 }) {
  const railGroup = [...tech, ...tech];
  const isReverse = direction === "right";

  return (
    <div className="w-full overflow-hidden py-0">
      <Motion.div
        className="flex w-max will-change-transform"
        initial={{ x: isReverse ? "-50%" : "0%" }}
        animate={{ x: isReverse ? "0%" : "-50%" }}
        transition={{ repeat: Infinity, repeatType: "loop", duration, ease: "linear" }}
      >
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0 gap-4 pr-4">
            {railGroup.map((techItem, index) => {
              const Icon = techItem.icon;
              return (
                <div
                  key={`${techItem.name}-${group}-${index}`}
                  className="flex h-12 min-w-[145px] items-center gap-3 rounded-xl border border-white/10 bg-linear-to-br from-slate-800/80 via-slate-900/70 to-slate-950/80 px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition hover:scale-105"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                    <Icon className={`h-4.5 w-4.5 ${techItem.color}`} aria-hidden="true" />
                  </span>
                  <span className="truncate text-sm font-mono font-medium tracking-wide text-gray-200">{techItem.name}</span>
                </div>
              );
            })}
          </div>
        ))}
      </Motion.div>
    </div>
  );
}

export default TechStackSection;
