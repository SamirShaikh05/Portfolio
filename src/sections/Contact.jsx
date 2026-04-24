import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";

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
    <section className="py-28 px-6 relative">
      {/* HEADER */}
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold text-gray-100 mb-3"
        >
          Contact
        </motion.h2>

        <p className="text-gray-400 text-base max-w-xl mx-auto mb-4">
          Let’s connect and discuss opportunities, ideas, or collaborations.
        </p>

        <div className="w-24 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] -translate-x-1/2 -translate-y-1/2 -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-5xl font-semibold text-white leading-tight">
            Let’s build something
            <span className="text-blue-500"> great together.</span>
          </h2>

          <p className="text-gray-400 max-w-md">
            I’m currently open to internships, freelance work, or collaborations.
          </p>

          {/* Socials */}
          <div className="flex gap-5 mt-6 text-2xl text-gray-400">
            <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-gray-800 rounded-2xl p-8"
        >
          <form onSubmit={sendEmail} className="flex flex-col gap-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-blue-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-blue-500 transition"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="bg-transparent border-b border-gray-700 py-3 text-white outline-none focus:border-blue-500 transition resize-none"
            ></textarea>

            <button
              type="submit"
              className="mt-4 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white transition"
            >
              Send Message →
            </button>

            {/* STATUS MESSAGE */}
            {status && (
              <p className="text-sm text-gray-400 mt-2">{status}</p>
            )}

          </form>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;