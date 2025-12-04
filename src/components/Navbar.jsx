import { useState, useEffect } from "react";
import { X, Menu, ArrowUpZA } from "lucide-react";


export const NavBar = ()=>{
    const [response, setResponse] = useState(false);
    const [active, setActive] = useState(false)
    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth < 640){
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

    

    
        return !response? (
                <nav className="xl:fixed fixed top-0 w-full bg-black border-1 border-b-gray-800 backdrop-blur-lg xl:flex-col z-10">
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
                active? <button className="fixed top-2 right-2 z-15" onClick={ ()=> setActive(false)}>
                <X color="#ffffff" />
             </button> :
            <button className="fixed top-2 right-2 z-15" onClick={()=> setActive(true)}>
                <Menu color="#ffffff" />
             </button>
            } 
            {
                active && ( 
                <>
                
                <nav className="flex fixed top-0 left-0 flex-col w-full h-full gap-10 bg-black border-1 border-b-gray-800 backdrop-blur-lg z-14">
                    <a href="#home" className="border rounded-full text-center 
                     text-gray-400 border-hidden font-bold relative pb-2 text-2xl">
                    Home
                </a>
                <a href="#about" className="border rounded-full text-center 
                     text-gray-400 border-hidden font-bold relative pb-2 text-2xl">
                    About
                </a>
                <a href="#projects" className="border rounded-full text-center 
                     text-gray-400 border-hidden font-bold relative pb-2 text-2xl">
                    Projects
                </a>
                <a href="#contact" className="border rounded-full text-center 
                     text-gray-400 border-hidden font-bold relative pb-2 text-2xl">
                    Contact
                </a>
                </nav>
                </>
                )
            }
            </>
        ) 
    
    
}