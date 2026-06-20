import { useState } from "react";

function createMeteorStyles(number, minDelay, maxDelay, minDuration, maxDuration, angle) {
    return [...Array(number)].map(() => ({
        "--angle": `${-angle}deg`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * (maxDelay - minDelay) + minDelay}s`,
        animationDuration: `${Math.random() * (maxDuration - minDuration) + minDuration}s`,
    }));
}

export default function Meteors({
    number = 20,
    minDelay = 0.2,
    maxDelay = 1.2,
    minDuration = 2,
    maxDuration = 10,
    angle = 215,
    className = "",
}) {
    const [meteorStyles] = useState(() =>
        createMeteorStyles(number, minDelay, maxDelay, minDuration, maxDuration, angle)
    );

    return (
        <>
            {meteorStyles.map((style, idx) => (
                <span
                    key={idx}
                    style={style}
                    className={`meteor absolute pointer-events-none size-0.5 rounded-full bg-slate-400 ${className}`}
                >
                    <div className="absolute top-1/2 -z-10 h-px w-16 -translate-y-1/2 bg-linear-to-r from-slate-400 to-transparent" />
                </span>
            ))}
        </>
    );
}
