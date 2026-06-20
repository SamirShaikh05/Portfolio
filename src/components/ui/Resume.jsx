import { useEffect, useState } from "react";

const RESUME_URL =
    "https://drive.google.com/file/d/1qWVbXJI5vL3YGOQ9mMkAEtd3SYr1S-Ys/view?usp=sharing";

function SlideRevealText({ text }) {
    return (
        <span className="relative inline-block h-[1em] overflow-hidden leading-none">
            <span className="sr-only">{text}</span>
            <span
                aria-hidden="true"
                className="block text-[#8f96a3]/65 transition duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-0 group-hover:text-[#f2f2f2]"
            >
                {text}
            </span>
            <span
                aria-hidden="true"
                className="absolute left-0 top-full block text-[#f2f2f2] opacity-0 transition duration-300 ease-out group-hover:-translate-y-full group-hover:opacity-100"
            >
                {text}
            </span>
        </span>
    );
}

function ResumeIcon() {
    return (
        <img
            src="/resume.svg"
            alt=""
            aria-hidden="true"
            className="size-4 opacity-40 invert transition-opacity duration-300 ease-out group-hover:opacity-90 sm:size-4.5"
        />
    );
}

function Resume() {
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footer = document.querySelector("footer");

        if (!footer) return undefined;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFooterVisible(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0,
                rootMargin: "0px 0px -10% 0px",
            }
        );

        observer.observe(footer);

        return () => observer.disconnect();
    }, []);

    return (
        <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume"
            aria-hidden={isFooterVisible}
            tabIndex={isFooterVisible ? -1 : 0}
            className={`group fixed bottom-5 right-4 z-9999 inline-flex
            items-center gap-2.5 text-sm font-semibold uppercase leading-none
            tracking-[0.44em] transition-all duration-300 
            ease-out focus:outline-none sm:bottom-16 sm:right-20
            sm:text-base lg:bottom-10 lg:right-15 ${
                isFooterVisible
                    ? "pointer-events-none translate-y-3 opacity-0"
                    : "translate-y-0 opacity-85 hover:opacity-100"
            }`}
        >
            <SlideRevealText text="RESUME" />
            <ResumeIcon />
        </a>
    );
}

export default Resume;
