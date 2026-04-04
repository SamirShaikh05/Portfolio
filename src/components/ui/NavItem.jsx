import { motion } from "framer-motion";

const NavItem = ({ text }) => {
    const letters = text.split("");

    return (
        <motion.div
            className="relative cursor-pointer overflow-visble pt-2"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {/* Text */}
            <div className="flex">
                {letters.map((letter, i) => (
                    <motion.span
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
                    </motion.span>
                ))}
            </div>

            {/* Underline */}
            <motion.div
                className="absolute left-0 bottom-0 h-0.5 bg-blue-500"
                variants={{
                    rest: { width: "0%" },
                    hover: {
                        width: "100%",
                        transition: { duration: 0.3, ease: "easeOut" },
                    },
                }}
            />
        </motion.div>
    );
};

export default NavItem;