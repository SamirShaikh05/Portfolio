import { motion as Motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { DURATION, EASE } from "../../../motion";

function HeroContent({ showTyping }) {
  return (
    <div className="relative z-10 flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-10 py-16 text-center md:flex-row md:py-0 md:text-left">
      <div className="flex max-w-2xl select-none flex-col gap-4">
        <Motion.h1
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: DURATION.hero, ease: EASE.out }}
          className="text-4xl font-semibold text-gray-100 sm:text-5xl lg:text-6xl"
        >
          Samir Jamil Shaikh
        </Motion.h1>

        <Motion.h2
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: DURATION.slow, ease: EASE.out, delay: 0.2 }}
          className="text-2xl text-blue-500 sm:text-3xl"
        >
          Full Stack Developer
        </Motion.h2>

        <div className="mx-auto mt-2 min-h-15 max-w-lg text-base font-normal leading-relaxed text-gray-400 md:mx-0">
          {showTyping && (
            <Typewriter
              options={{
                strings: ["Building scalable web applications using MERN and modern technologies."],
                autoStart: true,
                loop: false,
                delay: 30,
                deleteSpeed: Infinity,
              }}
            />
          )}
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <Motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: DURATION.base, ease: EASE.out, delay: 0.5 }}
          className="absolute h-50 w-50 rounded-full bg-linear-to-r from-blue-500 via-blue-400 to-blue-600 opacity-30 blur-3xl"
        />

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
  );
}

export default HeroContent;
