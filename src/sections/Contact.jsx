import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Profiles from "../components/ui/Profiles.jsx";
import ContactCard from "../components/ui/ContactCard.jsx";
import Strands from "../components/ui/Strands.jsx"; 

function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully");
        e.target.reset();
      })
      .catch(() => {
        setStatus("Something went wrong");
      });
  };

  return (
    <section id="contact" className="py-28 px-6 -scroll-mt-17 relative overflow-hidden">
      
      {/* GLOWING STRANDS BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
        <Strands
          colors={["#3B82F6", "#06B6D4", "#7C3AED"]} 
          count={8}             // Balanced strand count
          speed={0.2}           
          amplitude={1.1}       
          waviness={0.5}        
          thickness={0.7}       
          glow={1.8}            
          taper={2.5}           
          spread={1.2}          
          intensity={0.5}
          saturation={2}
          opacity={0.4}
          scale={1.6}
          glass={false}
        />
      </div>

      {/* FOREGROUND CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-semibold text-gray-100"
          >
            Contact
          </motion.h2>
          <div className="mx-auto mt-3 h-0.5 w-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-400" />

          <p className="text-gray-400 text-base max-w-xl mx-auto mt-4">
            Let’s connect and discuss opportunities, ideas, or collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            <h2 className="text-5xl font-semibold text-white leading-tight">
              Let’s build something
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> great together.</span>
            </h2>

            <p className="text-gray-400 max-w-md mt-4">
              I’m currently open to internships, freelance work, or collaborations.
            </p>

            {/* Socials */}
            <Profiles className="mt-6 text-2xl" iconClassName="text-2xl" linkClassName="p-2" />
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <ContactCard>
            <form onSubmit={sendEmail} className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="
bg-transparent
border-b
border-gray-700
py-3
text-white
placeholder-gray-400
outline-none
transition-all
duration-300
focus:border-blue-500
"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="
bg-transparent
border-b
border-gray-700
py-3
text-white
placeholder-gray-400
outline-none
transition-all
duration-300
focus:border-blue-500
"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="
bg-transparent
border-b
border-gray-700
py-3
text-white
placeholder-gray-400
outline-none
transition-all
duration-300
focus:border-blue-500
"
              ></textarea>

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                type="submit"
                className="mt-4 rounded-lg bg-blue-600 py-3 text-white transition hover:bg-blue-500
                shadow-[0_0_30px_rgba(59,130,246,0.25)]"
              >
                Send Message →
              </motion.button>

              {/* STATUS MESSAGE */}
              {status && (
                <p className="text-sm text-gray-400 mt-2">{status}</p>
              )}
            </form>
          </ContactCard>
        </div>

      </div>
    </section>
  );
}

export default Contact;