import { motion as Motion } from "framer-motion";

function ContactForm({ onSubmit, status }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="border-b border-gray-700 bg-transparent py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-blue-500"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="border-b border-gray-700 bg-transparent py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-blue-500"
      />

      <textarea
        name="message"
        rows="4"
        placeholder="Your Message"
        required
        className="border-b border-gray-700 bg-transparent py-3 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-blue-500"
      />

      <Motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="mt-4 rounded-lg bg-blue-600 py-3 text-white shadow-[0_0_30px_rgba(59,130,246,0.25)] transition hover:bg-blue-500"
      >
        Send Message →
      </Motion.button>

      {status && <p className="mt-2 text-sm text-gray-400">{status}</p>}
    </form>
  );
}

export default ContactForm;
