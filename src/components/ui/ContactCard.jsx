import { motion as Motion } from "framer-motion";
import ShineBorder from "./ShineBorder";

function ContactCard({ children }) {
  return (
    <Motion.div
      initial={{
        opacity: 0,
        x: 60,
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
      className=" relative rounded-2xl border border-white/10 bg-slate-900/75 p-8
        shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)]"
      >
      <ShineBorder
        borderWidth={1}
        duration={20}
        shineColor={["#3B82F6", "#06B6D4", "#8B5CF6"]}
      />
      {children}
    </Motion.div>
  );
}

export default ContactCard;
