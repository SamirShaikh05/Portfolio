import { FaArrowUp } from "react-icons/fa";
import Profiles from "../ui/Profiles";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#05080d] border-t border-gray-900/60 pt-12 pb-8 px-6 text-gray-400">
            <div className="max-w-7xl mx-auto flex flex-col gap-10">
                
                {/* Top Row: Info & Navigation */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h2 className="text-lg font-display font-semibold text-gray-200 tracking-tight">
                            Samir Jamil Shaikh
                        </h2>
                        <p className="text-gray-500 mt-1 text-xs max-w-sm leading-relaxed">
                            Building scalable web applications and solving complex problems with the MERN stack.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 text-xs font-medium tracking-wide">
                        <nav className="flex gap-5 text-gray-400">
                            <a href="#about" className="hover:text-gray-200 transition-colors">About</a>
                            <a href="#projects" className="hover:text-gray-200 transition-colors">Projects</a>
                            <a href="#skills" className="hover:text-gray-200 transition-colors">Skills</a>
                            <a href="#contact" className="hover:text-gray-200 transition-colors">Contact</a>
                        </nav>
                        <div className="hidden sm:block h-4 w-[1px] bg-gray-800" />
                        <Profiles iconClassName="text-lg" />
                    </div>
                </div>

                {/* Bottom Row: Scope & System Metrics */}
                <div className="pt-6 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 tracking-wide">
                    <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4 text-center sm:text-left">
                        <p>© {new Date().getFullYear()} All rights reserved.</p>
                        <span className="hidden sm:inline text-gray-700">|</span>
                        <p className="text-gray-600">Built with React & Tailwind CSS</p>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-1.5 hover:text-gray-200 transition-colors group text-gray-500"
                        aria-label="Back to top"
                    >
                        <span>Back to top</span>
                        <FaArrowUp className="text-[10px] group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>

            </div>
        </footer>
    );
}

export default Footer;