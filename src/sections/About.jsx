import { useState } from "react";
import SectionFlow from "../components/layout/SectionFlow";
import SectionHeading from "../components/layout/SectionHeading";
import AboutBackground from "../components/sections/about/AboutBackground";
import AboutIntroCard from "../components/sections/about/AboutIntroCard";
import TechStackSection from "../components/sections/about/TechStackSection";
import { ABOUT_TECH_GROUPS } from "../data/aboutTech";

function About() {
    const [showAll, setShowAll] = useState(false);
    const techItems = ABOUT_TECH_GROUPS;

    return (
        <SectionFlow id="about" className="relative -scroll-mt-15 min-h-[85vh] px-6 py-20">
            <AboutBackground showAll={showAll} />

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10">
                <SectionHeading title="About Me" />

                <div className="grid gap-8 md:grid-cols-2">
                    <AboutIntroCard
                        title="Who I Am"
                        direction="left"
                        body="I'm a Full-Stack Developer and B.Tech student who enjoys turning ideas into scalable digital products. Having solved over 500+ DSA problems, I approach development with a strong foundation in problem-solving, clean code, and continuous learning."
                        badges={["500+ DSA Problems", "Full-Stack MERN"]}
                    />
                    <AboutIntroCard
                        title="What I Do"
                        direction="right"
                        body="I build production-ready web applications, real-time experiences, and AI-driven solutions using modern technologies like React, Node.js, Express, and MongoDB. My focus is creating software that is fast, reliable, and capable of delivering real impact at scale."
                        badges={["4+ Production Projects", "Open to Internships"]}
                    />
                </div>

                <TechStackSection
                    showAll={showAll}
                    onShowAll={() => setShowAll(true)}
                    onCollapse={() => setShowAll(false)}
                    techItems={techItems}
                />
            </div>
        </SectionFlow>
    );
}

export default About;