import { useState, useEffect } from "react";
import { X, Menu, ArrowUpZA } from "lucide-react";


export const NavBar = ()=>{
    const [response, setResponse] = useState(false);
    const [active, setActive] = useState(false)
    const [linkActive, setLinkActive]= useState("")

    useEffect(()=>{
        const handleResize = ()=>{
            if(window.matchMedia("(max-width: 640px)").matches){
               setResponse(true)
            }else{
               setResponse(false)
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize)
        }
    },[])

    const handleLink = (linked)=>{
        setLinkActive(linked)
        setActive(false)
    }

    

    
        return !response? (
                <nav className="xl:fixed fixed top-0 w-full bg-black/70 border-1 border-b-gray-800 backdrop-blur-lg xl:flex-col z-10">
                    <div className="flex gap-6 justify-center items-center h-18">
                <a href="#home" className="border rounded-full text-center 
                     text-gray-400 border-hidden font-bold relative pb-2
                     hover:text-white before:content-[''] before:absolute before:h-1 before:w-[100%]
                     before:bg-indigo-500 before:left-0 before:bottom-0 before:duration-300 before:transition-transform 
                     before:scale-x-0 hover:before:scale-x-100">
                    Home
                </a>
                <a href="#about" className="border rounded-full text-center 
                     text-gray-400 border-hidden font-bold relative pb-2
                     hover:text-white before:content-[''] before:absolute before:h-1 before:w-[100%]
                     before:bg-indigo-500 before:left-0 before:bottom-0 before:duration-300 before:transition-transform 
                     before:scale-x-0 hover:before:scale-x-100">
                    About
                </a>
                <a href="#projects" className="border rounded-full text-center 
                     text-gray-400 border-hidden font-bold relative pb-2
                     hover:text-white before:content-[''] before:absolute before:h-1 before:w-[100%]
                     before:bg-indigo-500 before:left-0 before:bottom-0 before:duration-300 before:transition-transform 
                     before:scale-x-0 hover:before:scale-x-100">
                    Projects
                </a>
                <a href="#contact" className="border rounded-full text-center 
                     text-gray-400 border-hidden font-bold relative pb-2
                     hover:text-white before:content-[''] before:absolute before:h-1 before:w-[100%]
                     before:bg-indigo-500 before:left-0 before:bottom-0 before:duration-300 before:transition-transform 
                     before:scale-x-0 hover:before:scale-x-100">
                    Contact
                </a>
                </div>
                </nav>
                
           
        ) : (
            <>
            {
                active? <button className="fixed top-4 right-4 z-15 cursor-pointer" onClick={ ()=> setActive(false)}>
                <X size={40} color="#ffffff" />
             </button> :
            <button className="fixed top-4 right-4 z-15 cursor-pointer" onClick={()=> setActive(true)}>
                <Menu size={40} color="#ffffff" />
             </button>
            } 
            {
                <>
                
                <nav className={`flex items-center justify-center fixed top-0 left-0 flex-col w-full h-full gap-10 bg-black/70 transition transform duration-300 border-1 border-b-gray-800 backdrop-blur-lg z-14 ${active?"translate-x-0":"translate-x-full"}`}>
                    <a href="#home" onClick={()=>handleLink("home")} className={`border rounded-full text-center 
                      border-hidden font-bold relative pb-2 text-2xl ${linkActive === "home"? "text-white": "text-gray-400"}`}>
                    Home
                </a>
                <a href="#about" onClick={()=>handleLink("about")} className={`border rounded-full text-center 
                      border-hidden font-bold relative pb-2 text-2xl ${linkActive === "about"? "text-white": "text-gray-400"}`}>
                    About
                </a>
                <a href="#projects" onClick={()=>handleLink("projects")} className={`border rounded-full text-center 
                      border-hidden font-bold relative pb-2 text-2xl ${linkActive === "projects"? "text-white": "text-gray-400"}`}>
                    Projects
                </a>
                <a href="#contact" onClick={()=>handleLink("contact")} className={`border rounded-full text-center 
                      border-hidden font-bold relative pb-2 text-2xl ${linkActive === "contact"? "text-white": "text-gray-400"}`}>
                    Contact
                </a>
                </nav>
                </>
            }
            </>
        ) 
}