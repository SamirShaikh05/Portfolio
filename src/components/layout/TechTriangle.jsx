import { motion as Motion } from "framer-motion";
import { DURATION, EASE } from "../../motion";

function buildPyramidRows(tech) {
    const rowPattern = [6, 5, 4, 3, 2, 1];
    const rows = [];
    let index = 0;

    for (const count of rowPattern) {
        if (index >= tech.length) break;
        rows.push(tech.slice(index, index + count));
        index += count;
    }

    if (index < tech.length) {
        rows.push(tech.slice(index));
    }

    return rows;
}

const rowVariants = {
    hidden: ({ rowIndex }) => ({
        opacity: 0,
        x: rowIndex % 2 === 0 ? -190 : 190,
        filter: "blur(8px)",
    }),
    visible: ({ rowIndex }) => ({
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.88,
            ease: EASE.out,
            delay: rowIndex * 0.08,
            staggerChildren: 0.045,
            delayChildren: rowIndex * 0.04,
        },
    }),
    exit: ({ rowIndex, totalRows }) => ({
        opacity: 0,
        x: rowIndex % 2 === 0 ? -120 : 120,
        filter: "blur(8px)",
        transition: {
            duration: DURATION.fast,
            ease: EASE.inOut,
            delay: (totalRows - 1 - rowIndex) * 0.06,
        },
    }),
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 14 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: EASE.out },
    },
    exit: {
        opacity: 0,
        scale: 0.88,
        y: -8,
        transition: { duration: DURATION.fast, ease: EASE.inOut },
    },
};

function TechTriangle({ tech }) {
    const rows = buildPyramidRows(tech);

    return (
        <Motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="relative w-full overflow-hidden sm:px-6 sm:py-8"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[min(780px,96vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.03] blur-[80px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-blue-500/15 to-transparent"
            />

            {/* Increased gaps from gap-3/gap-4 to gap-5/gap-6 for better spacing */}
            <div className="relative z-[1] flex w-full flex-col items-center gap-5 sm:gap-6">
                {rows.map((row, rowIndex) => (
                    <Motion.div
                        key={rowIndex}
                        custom={{ rowIndex, totalRows: rows.length }}
                        variants={rowVariants}
                        className="flex w-full flex-wrap justify-center gap-5 sm:flex-nowrap sm:gap-6"
                    >
                        {row.map((item) => {
                            const Icon = item.icon;

                            return (
                                <Motion.div
                                    key={item.name}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -6,
                                        scale: 1.06,
                                        borderColor: "rgba(59,130,246,0.35)",
                                        boxShadow: "0 20px 50px rgba(59,130,246,0.12), 0 8px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                                    }}
                                    className="group relative flex h-[6.5rem] w-[6.5rem] shrink-0 flex-col items-center justify-center gap-2.5 overflow-hidden rounded-2xl border border-white/[0.08] bg-linear-to-br from-slate-800/50 via-slate-900/60 to-slate-950/70 p-3 text-center shadow-[0_4px_20px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl transition-all duration-300"
                                >
                                    {/* Top accent shine */}
                                    <span className="absolute inset-x-2 top-2 h-px bg-linear-to-r from-transparent via-blue-400/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    {/* Bottom accent glow */}
                                    <span className="absolute inset-x-3 -bottom-px h-px bg-linear-to-r from-transparent via-cyan-400/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                                        <Icon
                                            className={`h-6 w-6 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(147,197,253,0.4)] ${item.color}`}
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <span className="w-full truncate text-xs font-semibold text-gray-300 px-0.5 transition-colors duration-300 group-hover:text-gray-100">
                                        {item.name}
                                    </span>
                                </Motion.div>
                            );
                        })}
                    </Motion.div>
                ))}
            </div>
        </Motion.div>
    );
}

export default TechTriangle;