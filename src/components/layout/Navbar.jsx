import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import NavItem from "../ui/NavItem";

function Navbar() {
    return (
        <nav className="w-full select-none">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <img src="logo2.png" alt="Logo" className="h-8 cursor-pointer" />

                {/* Links */}
                <div className="flex items-center leading-relaxed gap-10 text-md font-medium text-gray-300">
                    <NavItem text="About" />
                    <NavItem text="Projects" />
                    <NavItem text="Skills" />
                    <NavItem text="Contact" />
                </div>

                {/* Icons */}
                <div className="flex items-center gap-5 text-gray-300">
                    <a href="https://github.com/SamirShaikh05" target="_blank" rel="noopener"><FaSquareGithub className="text-2xl hover:text-white hover:scale-110 cursor-pointer transition" /></a>
                    <a href="https://www.linkedin.com/in/samir-shaikh-b8372a322/" target="_blank" rel="noopener"><FaLinkedin className="text-2xl hover:text-blue-500 hover:scale-110 cursor-pointer transition" /></a>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;