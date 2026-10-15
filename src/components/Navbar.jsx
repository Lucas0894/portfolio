import { useState, useEffect } from "react";
import { X, Menu, ArrowUpZA } from "lucide-react";


export const NavBar = () => {
    const [response, setResponse] = useState(false);
    const [active, setActive] = useState(false)
    const [linkActive, setLinkActive] = useState("")

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia("(max-width: 640px)").matches) {
                setResponse(true)
            } else {
                setResponse(false)
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    const handleLink = (linked) => {
        setLinkActive(linked)
        setActive(false)
    }


    return !response ? (
        <nav className="fixed top-0 w-full bg-[#0c0b10]/75 border-b border-white/[0.08] backdrop-blur-xl z-10">
            <div className="flex gap-8 justify-center items-center h-18">
                <a href="#home" className="border rounded-full text-center 
                     text-zinc-400 border-hidden font-medium relative pb-2 transition-colors duration-200
                     hover:text-white before:content-[''] before:absolute before:h-1 before:w-[100%]
                     before:bg-violet-400 before:left-0 before:bottom-0 before:duration-300 before:transition-transform before:rounded-full
                     before:scale-x-0 hover:before:scale-x-100">
                    Inicio
                </a>
                <a href="#about" className="border rounded-full text-center 
                     text-zinc-400 border-hidden font-medium relative pb-2 transition-colors duration-200
                     hover:text-white before:content-[''] before:absolute before:h-1 before:w-[100%]
                     before:bg-violet-400 before:left-0 before:bottom-0 before:duration-300 before:transition-transform before:rounded-full
                     before:scale-x-0 hover:before:scale-x-100">
                    Sobre mi
                </a>
                <a href="#projects" className="border rounded-full text-center 
                     text-zinc-400 border-hidden font-medium relative pb-2 transition-colors duration-200
                     hover:text-white before:content-[''] before:absolute before:h-1 before:w-[100%]
                     before:bg-violet-400 before:left-0 before:bottom-0 before:duration-300 before:transition-transform before:rounded-full
                     before:scale-x-0 hover:before:scale-x-100">
                    Proyectos
                </a>
                <a href="#contact" className="border rounded-full text-center 
                     text-zinc-400 border-hidden font-medium relative pb-2 transition-colors duration-200
                     hover:text-white before:content-[''] before:absolute before:h-1 before:w-[100%]
                     before:bg-violet-400 before:left-0 before:bottom-0 before:duration-300 before:transition-transform before:rounded-full
                     before:scale-x-0 hover:before:scale-x-100">
                    Contacto
                </a>
            </div>
        </nav>


    ) : (
        <>
            {
                active ? <button aria-label="Cerrar menú" className="fixed top-4 right-4 z-15 cursor-pointer rounded-full border border-white/10 bg-zinc-900/80 p-2 backdrop-blur-lg" onClick={() => setActive(false)}>
                    <X size={40} color="#ffffff" />
                </button> :
                    <button aria-label="Abrir menú" className="fixed top-4 right-4 z-15 cursor-pointer rounded-full border border-white/10 bg-zinc-900/80 p-2 backdrop-blur-lg" onClick={() => setActive(true)}>
                        <Menu size={40} color="#ffffff" />
                    </button>
            }
            {
                <>

                    <nav className={`flex items-center justify-center fixed top-0 left-0 flex-col w-full h-full gap-10 bg-[#0c0b10]/95 transition transform duration-300 border-l border-white/10 backdrop-blur-xl z-14 ${active ? "translate-x-0" : "translate-x-full"}`}>
                        <a href="#home" onClick={() => handleLink("home")} className={`border rounded-full text-center 
                      border-hidden font-semibold relative pb-2 text-2xl transition-colors ${linkActive === "home" ? "text-violet-300" : "text-zinc-400 hover:text-white"}`}>
                            Inicio
                        </a>
                        <a href="#about" onClick={() => handleLink("about")} className={`border rounded-full text-center 
                      border-hidden font-semibold relative pb-2 text-2xl transition-colors ${linkActive === "about" ? "text-violet-300" : "text-zinc-400 hover:text-white"}`}>
                            Sobre mi
                        </a>
                        <a href="#projects" onClick={() => handleLink("projects")} className={`border rounded-full text-center 
                      border-hidden font-semibold relative pb-2 text-2xl transition-colors ${linkActive === "projects" ? "text-violet-300" : "text-zinc-400 hover:text-white"}`}>
                            Proyectos
                        </a>
                        <a href="#contact" onClick={() => handleLink("contact")} className={`border rounded-full text-center 
                      border-hidden font-semibold relative pb-2 text-2xl transition-colors ${linkActive === "contact" ? "text-violet-300" : "text-zinc-400 hover:text-white"}`}>
                            Contacto
                        </a>
                    </nav>
                </>
            }
        </>
    )
}