import { motion as Motion } from "framer-motion";

const NavItem = ({ text, id }) => {
    const letters = text.split("");

    const handleClick = () => {
        const section = document.getElementById(id);

        if (!section) return;

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    return (
        <Motion.div
            onClick={handleClick}
            className="relative cursor-pointer overflow-visible pt-2"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {/* Text */}
            <div className="flex">
                {letters.map((letter, i) => (
                    <Motion.span
                        key={i}
                        className="inline-block"
                        variants={{
                            rest: { y: 0, scale: 1 },
                            hover: {
                                y: -5,
                                scale: 1.1,
                                transition: {
                                    delay: i * 0.03,
                                    type: "spring",
                                    stiffness: 300,
                                },
                            },
                        }}
                    >
                        {letter}
                    </Motion.span>
                ))}
            </div>

            {/* Underline */}
            <Motion.div
                className="absolute left-0 bottom-0 h-0.5 bg-blue-500"
                variants={{
                    rest: { width: "0%" },
                    hover: {
                        width: "100%",
                        transition: { duration: 0.3, ease: "easeOut" },
                    },
                }}
            />
        </Motion.div>
    );
};

export default NavItem;
