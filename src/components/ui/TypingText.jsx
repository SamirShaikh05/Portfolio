import { useEffect, useState } from "react";
import {motion} from 'framer-motion'

function TypingText({ text, speed = 30 }) {
    const [displayed, setDisplayed] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            let i = 0;

            const interval = setInterval(() => {
                setDisplayed(text.slice(0, i));
                i++;

                if (i > text.length) clearInterval(interval);
            }, speed);

        }, 1000); // delay after heading

        return () => clearTimeout(timeout);
    }, [text, speed]);

    return (
        <p className="text-gray-400 max-w-lg leading-relaxed text-base">
            {displayed}
            <motion.span
             initial={{opacity:0}}
             animate={{opacity:100}}
             transition={{delay:0.6}}
             className="ml-1 animate-pulse text-blue-500">|</motion.span>
        </p>
    );
}

export default TypingText;