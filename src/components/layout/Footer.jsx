import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#05080d] border-t border-gray-800 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Top Section: Branding & Links */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Samir Jamil Shaikh
                        </h2>
                        <p className="text-gray-500 mt-2 text-sm max-w-xs">
                            Building scalable web applications and solving complex problems with the MERN stack.
                        </p>
                    </div>

                    <nav className="flex gap-6 text-gray-400 text-sm font-medium">
                        <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                        <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                        <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
                        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
                    </nav>

                    <div className="flex gap-5">
                        <a href="https://github.com/SamirShaikh05" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-xl transition-all hover:-translate-y-1">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/samir-shaikh-b8372a322/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-xl transition-all hover:-translate-y-1">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                {/* Middle Section: Back to Top */}
                <button
                    onClick={scrollToTop}
                    className="group flex flex-col items-center gap-2 mb-8 text-gray-500 hover:text-blue-400 transition-all"
                >
                    <div className="p-3 border border-gray-800 rounded-full group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all">
                        <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em]">Back to top</span>
                </button>

                {/* Bottom Section: Copyright */}
                <div className="w-full pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-xs">
                    <p>© {new Date().getFullYear()} Samir Jamil Shaikh. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span>Built with</span>
                        <span className="text-blue-500">React</span>
                        <span>&</span>
                        <span className="text-cyan-500">Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;