import { useState } from "react";
import { X, Menu } from "lucide-react";

function NavbarComponent() {    
    const [active, setActive] = useState(false);
    const [linkActive, setLinkActive] = useState("");

    const handleLink = (link) => {
        setLinkActive(link);
        setActive(false);
    };

    return (
        <>
            {/* ---- NAV DESKTOP ---- */}
            <nav className="hidden sm:block fixed top-0 w-full bg-black/70 border-b border-gray-800 backdrop-blur-lg z-10">
                <div className="flex gap-6 justify-center items-center h-18">
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>
            </nav>

            {/* ---- NAV MOBILE ---- */}
            <button 
                className="sm:hidden fixed top-4 right-4 z-20 cursor-pointer" 
                onClick={() => setActive(!active)}
            >
                {active ? <X size={40} color="#ffffff" /> : <Menu size={40} color="#ffffff" />}
            </button>

            <nav
                className={`sm:hidden fixed top-0 left-0 w-full h-full flex flex-col 
                items-center justify-center gap-10 bg-black/70 backdrop-blur-lg 
                border-b border-gray-800 z-10 transition-transform duration-300
                ${active ? "translate-x-0" : "translate-x-full"}`}
            >
                <a href="#home" onClick={() => handleLink("home")} 
                    className={`mobile-link ${linkActive === "home" ? "text-white" : "text-gray-400"}`}>
                    Home
                </a>
                <a href="#about" onClick={() => handleLink("about")}
                    className={`mobile-link ${linkActive === "about" ? "text-white" : "text-gray-400"}`}>
                    About
                </a>
                <a href="#projects" onClick={() => handleLink("projects")}
                    className={`mobile-link ${linkActive === "projects" ? "text-white" : "text-gray-400"}`}>
                    Projects
                </a>
                <a href="#contact" onClick={() => handleLink("contact")}
                    className={`mobile-link ${linkActive === "contact" ? "text-white" : "text-gray-400"}`}>
                    Contact
                </a>
            </nav>
        </>
    );
}

export const NavBar = NavbarComponent;
