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
                        body="I'm a B.Tech student at Jamia Millia Islamia who enjoys building full-stack applications, backend systems, and real-time software. I enjoy turning complex ideas into scalable solutions. I approach software development with a focus on problem-solving, clean architecture, and continuously improving through hands-on development."
                        badges={[
                            "550+ DSA Solved",
                            "LeetCode 1656",
                        ]}
                    />
                    <AboutIntroCard
                        title="What I Do"
                        direction="right"
                        body="I build modern web applications using React, Node.js, Express, MongoDB, PostgreSQL, and Socket.IO, with experience in AI integrations, secure backend APIs, and real-time systems. I enjoy developing products from the ground up, focusing on scalable architecture, maintainable code, and user experiences that are both functional and polished."
                        badges={[
                            "Real-Time Systems",
                            "Full-Stack Development",
                        ]}
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