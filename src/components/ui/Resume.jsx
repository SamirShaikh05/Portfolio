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
    return (
        <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume"
            className="group fixed bottom-5 right-4 z-9999 inline-flex
            items-center gap-2.5 text-sm font-semibold uppercase leading-none
            tracking-[0.44em] opacity-85 transition-opacity duration-300 
            ease-out hover:opacity-100 focus:outline-none sm:bottom-16 sm:right-20
            sm:text-base lg:bottom-10 lg:right-15"
        >
            <SlideRevealText text="RESUME" />
            <ResumeIcon />
        </a>
    );
}

export default Resume;
