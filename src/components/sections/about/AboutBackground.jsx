import { motion as Motion } from "framer-motion";
import MagicRings from "../../ui/MagicRings";
import Orb from "../../ui/Orb";

function AboutBackground({ showAll }) {
  return (
    <div className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-screen -translate-x-1/2 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 flex h-full max-h-screen w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center">
        <Motion.div
          animate={{ opacity: showAll ? 0.65 : 0.8, scale: showAll ? 1.08 : 1 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="relative flex h-full w-full items-center justify-center"
        >
          <Motion.div
            className="absolute inset-0 flex h-full w-full items-center justify-center"
            animate={{ scale: showAll ? 1.15 : 1 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          >
            <MagicRings
              color="#3B82F6"
              colorTwo="#06B6D4"
              ringCount={5}
              speed={0.5}
              attenuation={12}
              lineThickness={1}
              baseRadius={0.45}
              radiusStep={0.12}
              scaleRate={0.05}
              opacity={0.4}
              blur={2}
              noiseAmount={0}
              rotation={0}
              ringGap={1.8}
              fadeIn={0.8}
              fadeOut={0.8}
              followMouse={false}
              hoverScale={1}
              parallax={0}
              clickBurst={false}
            />
          </Motion.div>

          <Motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: showAll ? 1.05 : 0.9 }}
            transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          >
            <Orb hoverIntensity={0.4} rotateOnHover hue={0} forceHoverState={false} backgroundColor="#000000" />
          </Motion.div>
        </Motion.div>
      </div>
    </div>
  );
}

export default AboutBackground;
