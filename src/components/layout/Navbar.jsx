import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import NavItem from "../ui/NavItem";

function Navbar() {
    return (
        <nav data-site-navbar className="relative isolate z-20 select-none px-4 pt-4 pb-3 text-sm font-medium text-gray-300 sm:px-6 sm:pt-5 lg:pt-6">
            <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-24 w-full max-w-5xl -translate-x-1/2 rounded-b-full bg-linear-to-b from-[#0B0F19] via-[#0B0F19]/90 to-transparent blur-lg sm:w-[88vw] md:w-[78vw] lg:w-[62vw] xl:w-[56vw]" />

            <div className="mx-auto flex w-full max-w-5xl flex-col items-center  gap-4 rounded-full border border-white/10 bg-white/3 px-5 py-4 shadow-[0_0_40px_rgba(59,130,246,0.08)] backdrop-blur-md sm:w-[88vw] sm:flex-row sm:justify-between sm:px-6 md:w-[78vw] lg:w-[62vw] xl:w-[56vw]">

                {/* Logo */}
                <img src="logo2.png" alt="Logo" className="h-8 shrink-0 cursor-pointer" />

                {/* Links */}
                <div className="flex flex-wrap items-center justify-center mb-1.5 gap-x-6 gap-y-3 leading-relaxed text-sm font-medium text-gray-300 sm:gap-x-7 lg:gap-x-9">
                    <NavItem text="About" id="about" />
                    <NavItem text="Projects" id="projects" />
                    <NavItem text="Skills" id="skills" />
                    <NavItem text="Contact" id="contact" />
                </div>

                {/* Icons */}
                <div className="flex shrink-0 items-center gap-4 text-gray-400 sm:gap-5">
                    <a href="https://github.com/SamirShaikh05" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition duration-200"><FaSquareGithub className="text-2xl" /></a>
                    <a href="https://www.linkedin.com/in/samir-shaikh-b8372a322/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 hover:scale-110 transition duration-200"><FaLinkedin className="text-2xl" /></a>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;
