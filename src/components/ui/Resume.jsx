function Resume() {
    return (
        <a
            href="https://drive.google.com/file/d/1qWVbXJI5vL3YGOQ9mMkAEtd3SYr1S-Ys/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-9999 group"
        >
            {/* Text */}
            <div className="relative h-6 overflow-hidden">
                <span
                    className="block text-cyan-400 font-medium
          transition-transform duration-500
          group-hover:-translate-y-full"
                >
                    RESUME
                </span>

                <span
                    className="absolute left-0 top-full text-cyan-300 font-medium
          transition-transform duration-500
          group-hover:-translate-y-full"
                >
                    RESUME
                </span>
            </div>

            {/* Icon */}
            <div className="relative h-6 w-6 overflow-hidden">
                <img
                    src="/resume.svg"
                    alt="resume"
                    className="absolute inset-0 h-full w-full
          transition-transform duration-500
          group-hover:-translate-y-full"
                />

                <img
                    src="/resume.svg"
                    alt="resume"
                    className="absolute inset-0 h-full w-full translate-y-full
          transition-transform duration-500
          group-hover:translate-y-0"
                />
            </div>
        </a>
    );
}

export default Resume;