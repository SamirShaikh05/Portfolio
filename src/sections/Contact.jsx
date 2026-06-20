import { motion as Motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import SectionFlow from "../components/layout/SectionFlow";
import SectionHeading from "../components/layout/SectionHeading";
import Profiles from "../components/ui/Profiles.jsx";
import ContactCard from "../components/ui/ContactCard.jsx";
import Strands from "../components/ui/Strands.jsx";
import { slideFromLeft, slideFromRight, TRANSITION, VIEWPORT } from "../motion";

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
    <SectionFlow
      id="contact"
      className="-scroll-mt-16 px-6 py-24 sm:py-28"
      background={
        <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
          <Strands
            colors={["#3B82F6", "#06B6D4", "#7C3AED"]}
            count={8}
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
      }
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          title="Contact"
          subtitle="Let's connect and discuss opportunities, ideas, or collaborations."
          className="mb-14 sm:mb-16"
        />

        <div className="grid items-center gap-12 md:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* LEFT SIDE */}
          <Motion.div
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <h2 className="max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Let's build something
              <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> great together.</span>
            </h2>

            <p className="text-gray-400 max-w-md mt-4">
              I'm currently open to internships, freelance work, or collaborations.
            </p>

            <Profiles className="mt-6 text-2xl" iconClassName="text-2xl" linkClassName="p-2" />
          </Motion.div>

          {/* RIGHT SIDE FORM */}
          <Motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
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

              <Motion.button
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
              </Motion.button>

              {/* STATUS MESSAGE */}
              {status && (
                <p className="text-sm text-gray-400 mt-2">{status}</p>
              )}
            </form>
            </ContactCard>
          </Motion.div>
        </div>
      </div>
    </SectionFlow>
  );
}

export default Contact;

