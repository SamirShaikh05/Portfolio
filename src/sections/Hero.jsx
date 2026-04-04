import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect'
import { useState, useEffect } from "react";

function Hero() {
  const [showTyping, setShowTyping] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyping(true);
    }, 800);

    return () => clearTimeout(timer);
  }, [])

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-7xl w-full flex items-center justify-between gap-10">

        {/* LEFT TEXT */}
        <div className="flex flex-col gap-4">

          {/* Name */}
          <motion.h1
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl font-semibold text-gray-100"
          >
            Samir Jamil Shaikh
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl text-blue-500"
          >
            Full Stack Developer
          </motion.h2>

          {/* Small line */}
          {
            showTyping && (
              <div className="text-gray-400 max-w-lg leading-relaxed text-base font-normal mt-2">
                <Typewriter
                  options={{
                    strings: [
                      "Building scalable web applications using MERN and modern technologies.",
                    ],
                    autoStart: true,
                    loop: false,
                    delay: 30,
                    deleteSpeed:Infinity
                  }}
                />
              </div>
            )
          }

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex items-center justify-center">

          {/* Glow background */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="absolute w-60 h-60 rounded-full bg-linear-to-r from-blue-500 via-blue-400 to-blue-600 blur-3xl opacity-30">
          </motion.div>

          {/* Image */}
          <motion.img
            src="my_photo.png"
            alt="profile"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative w-64 h-64 object-cover rounded-full border border-gray-700"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;