import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import SectionFlow from "../components/layout/SectionFlow";
import SectionHeading from "../components/layout/SectionHeading";
import ShapeGrid from "../components/ui/ShapeGrid";
import SkillCategoryCard from "../components/sections/skills/SkillCategoryCard";
import SkillChip from "../components/sections/skills/SkillChip";
import SkillDetailCard from "../components/sections/skills/SkillDetailCard";
import { staggerContainer, VIEWPORT } from "../motion";
import { SKILL_DATA, getSkillDetailData } from "../data/skills";

const containerVariants = staggerContainer(0.1, 0.05);

export default function Skills() {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [cardMeta, setCardMeta] = useState({ top: 0, left: 0, direction: "right" });

  const handleMouseEnter = (techName, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const cardWidth = 280;
    const cardHeightEstimate = 220;
    const gap = 12;
    const margin = 16;

    const chipCenter = rect.left + rect.width / 2;
    const direction = chipCenter > windowWidth / 2 ? "right" : "left";

    const preferredLeft = direction === "right"
      ? rect.right + gap
      : rect.left - cardWidth - gap;

    setCardMeta({
      top: Math.min(
        Math.max(rect.top - 6, margin),
        windowHeight - cardHeightEstimate - margin
      ),
      left: Math.min(
        Math.max(preferredLeft, margin),
        windowWidth - cardWidth - margin
      ),
      direction
    });
    setHoveredTech(techName);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <SectionFlow
      id="skills"
      className="-scroll-mt-40 px-6 py-50 z-10 w-full"
      background={
        <div className="absolute inset-0 z-0 opacity-70 pointer-events-none">
          <ShapeGrid
            shape="square"
            squareSize={45}
            speed={0.6}
            borderColor="#2a2a3a"
            hoverFillColor="#3B82F6"
            hoverTrailAmount={3}
          />
        </div>
      }
    >
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center z-10">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A structured look at my technical ecosystem and engineering capabilities. Hover over a technology to see its application."
          className="mb-16"
        />

        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="flex w-full max-w-2xl flex-col gap-12"
        >
          {Object.entries(SKILL_DATA).map(([key, category]) => (
            <SkillCategoryCard key={key} category={category}>
              {category.rows.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-2 gap-2.5">
                  {row.map((chip) => (
                    <SkillChip
                      key={chip.name}
                      chip={chip}
                      onMouseEnter={(event) => handleMouseEnter(chip.name, event)}
                      onMouseLeave={handleMouseLeave}
                    />
                  ))}
                  {row.length === 1 && <div className="hidden grid-cols-1"></div>}
                </div>
              ))}
            </SkillCategoryCard>
          ))}
        </Motion.div>
      </div>

      {/* Pop-out Overlay Tooltips */}
      <AnimatePresence>
        {hoveredTech && (
          <SkillDetailCard
            techName={hoveredTech}
            meta={cardMeta}
            data={getSkillDetailData(hoveredTech)}
          />
        )}
      </AnimatePresence>
    </SectionFlow>
  );
}

