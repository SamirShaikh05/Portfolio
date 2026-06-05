import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const profiles = [
    {
        label: "LinkedIn profile",
        href: "https://www.linkedin.com/in/samir-shaikh-b8372a322/",
        icon: FaLinkedin,
        hoverClass: "hover:text-[#4EA7FF] hover:drop-shadow-[0_0_12px_rgba(78,167,255,0.45)]",
    },
    {
        label: "GitHub profile",
        href: "https://github.com/SamirShaikh05",
        icon: FaSquareGithub,
        hoverClass: "hover:text-white hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.32)]",
    },
    {
        label: "LeetCode profile",
        href: "https://leetcode.com/u/Samir_shaikh_05/",
        icon: SiLeetcode,
        hoverClass: "hover:text-[#FFA116] hover:drop-shadow-[0_0_12px_rgba(255,161,22,0.42)]",
    },
];

function Profiles({ className = "", iconClassName = "text-2xl", linkClassName = "" }) {
    return (
        <div className={`flex shrink-0 items-center gap-2 text-slate-400 sm:gap-3 ${className}`}>
            {profiles.map(({ label, href, icon: Icon, hoverClass }) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`rounded-full p-1.5 transition duration-200 hover:scale-[1.12] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400 ${hoverClass} ${linkClassName}`}
                >
                    <Icon className={iconClassName} />
                </a>
            ))}
        </div>
    );
}

export default Profiles;
