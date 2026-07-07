import { motion as Motion } from "framer-motion";
import Profiles from "../../ui/Profiles";
import { slideFromLeft, VIEWPORT } from "../../../motion";

function ContactIntro() {
  return (
    <Motion.div
      variants={slideFromLeft}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      <h2 className="max-w-xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
        Let&apos;s build something
        <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> great together.</span>
      </h2>

      <p className="mt-4 max-w-md text-gray-400">
        I&apos;m currently open to internships, freelance work, or collaborations.
      </p>

      <Profiles className="mt-6 text-2xl" iconClassName="text-2xl" linkClassName="p-2" />
    </Motion.div>
  );
}

export default ContactIntro;
