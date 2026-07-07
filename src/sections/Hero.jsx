import { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import DotField from "../components/ui/DotField";
import HeroContent from "../components/sections/hero/HeroContent";
import { DURATION, EASE } from "../motion";

function Hero() {
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowTyping(true);
    }, 800);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative -mt-28 flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28">
      <Motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: DURATION.hero, ease: EASE.out, delay: 0.15 }}
        className="absolute inset-0 z-0"
      >
        <DotField
          dotRadius={2.2}
          dotSpacing={18}
          bulgeStrength={40}
          glowRadius={0}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={300}
          cursorForce={0.05}
          bulgeOnly
          gradientFrom="rgba(59,130,246,0.35)"
          gradientTo="rgba(59,130,246,0.20)"
          glowColor="#2563EB"
        />
      </Motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48 bg-linear-to-t from-[#0B0F19] via-[#0B0F19]/70 to-transparent"
      />

      <HeroContent showTyping={showTyping} />
    </section>
  );
}

export default Hero;
