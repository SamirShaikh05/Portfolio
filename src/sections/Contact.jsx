import emailjs from "@emailjs/browser";
import { useState } from "react";
import SectionFlow from "../components/layout/SectionFlow";
import SectionHeading from "../components/layout/SectionHeading";
import ContactCard from "../components/ui/ContactCard";
import Strands from "../components/ui/Strands";
import ContactForm from "../components/sections/contact/ContactForm";
import ContactIntro from "../components/sections/contact/ContactIntro";

function Contact() {
  const [status, setStatus] = useState("");

  const sendEmail = (event) => {
    event.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        event.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully");
        event.target.reset();
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
        <div className="pointer-events-none absolute inset-0 z-0 opacity-70">
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
      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          title="Contact"
          subtitle="Let's connect and discuss opportunities, ideas, or collaborations."
          className="mb-14 sm:mb-16"
        />

        <div className="grid items-center gap-12 md:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <ContactIntro />

          <div>
            <ContactCard>
              <ContactForm onSubmit={sendEmail} status={status} />
            </ContactCard>
          </div>
        </div>
      </div>
    </SectionFlow>
  );
}

export default Contact;
