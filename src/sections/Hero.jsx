import { motion as Motion } from "framer-motion";
import Typewriter from 'typewriter-effect'
import { useState, useEffect } from "react";
import DotField from "../components/ui/DotField";
import { DURATION, EASE } from "../motion";

function Hero() {
  const [showTyping, setShowTyping] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyping(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [])

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

      {/* Bleed into About */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-48 bg-linear-to-t from-[#0B0F19] via-[#0B0F19]/70 to-transparent"
      />

      <div className="relative z-10 flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-10 py-16 text-center md:flex-row md:py-0 md:text-left">

        {/* LEFT TEXT */}
        <div className="flex max-w-2xl select-none flex-col gap-4">

          {/* Name */}
          <Motion.h1
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: DURATION.hero, ease: EASE.out }}
            className="text-4xl font-semibold text-gray-100 sm:text-5xl lg:text-6xl"
          >
            Samir Jamil Shaikh
          </Motion.h1>

          {/* Role */}
          <Motion.h2
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: DURATION.slow, ease: EASE.out, delay: 0.2 }}
            className="text-2xl text-blue-500 sm:text-3xl"
          >
            Full Stack Developer
          </Motion.h2>

          {/* Small line */}
          <div className="mx-auto mt-2 min-h-15 max-w-lg text-base font-normal leading-relaxed text-gray-400 md:mx-0">
            {showTyping && (
              <Typewriter
                options={{
                  strings: [
                    "Building scalable web applications using MERN and modern technologies.",
                  ],
                  autoStart: true,
                  loop: false,
                  delay: 30,
                  deleteSpeed: Infinity
                }}
              />
            )}
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex items-center justify-center">

          {/* Glow background */}
          <Motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: DURATION.base, ease: EASE.out, delay: 0.5 }}
            className="absolute w-50 h-50 rounded-full bg-linear-to-r from-blue-500 via-blue-400 to-blue-600 blur-3xl opacity-30">
          </Motion.div>

          {/* Image */}
          <Motion.img
            src="my_photo.png"
            alt="profile"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: DURATION.base, ease: EASE.out, delay: 0.3 }}
            className="relative h-52 w-52 rounded-full border border-gray-700 object-cover sm:h-60 sm:w-60 md:h-64 md:w-64"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;
