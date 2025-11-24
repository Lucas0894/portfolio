

export const NavBar = ()=>{
    return (
            <nav className="xl:fixed fixed top-0 w-full bg-black border-1 border-b-gray-800 backdrop-blur-lg xl:flex-col z-10">
                <div className="flex gap-6 justify-center items-center h-18">
            <a href="#home" className="border rounded-full text-center 
                 text-gray-400 border-hidden font-bold relative pb-2
                 hover:text-white before:content-[''] before:absolute before:h-1 before:w-[100%]
                 before:bg-indigo-500 before:left-0 before:bottom-0 before:duration-300 before:transition-transform 
                 before:scale-x-0 hover:before:scale-x-100">
                Home
            </a>
            <a href="#about" className="border rounded-full text-center text-gray-400 border-hidden 
                 font-bold relative pb-2 hover:text-white before:content-[''] before:absolute before:h-1 
                 before:w-[100%] before:bg-indigo-500 before:left-0 before:bottom-0 before:duration-300 
                 before:transition-transform before:scale-x-0 hover:before:scale-x-100">
                About
            </a>
            <a href="#projects" className="border rounded-full text-gray-400 border-hidden font-bold relative
                 pb-2 hover:text-white before:content-[''] before:absolute before:h-1 before:w-[100%]
                 before:bg-indigo-500 before:left-0 before:bottom-0 before:duration-300 
                 before:transition-transform before:scale-x-0 hover:before:scale-x-100">
                Projects
            </a>
            <a href="#contact" className="border rounded-full text-gray-400 border-hidden font-bold 
                 relative pb-2 hover:text-white before:content:content-[''] before:absolute before:w-[100%] 
                 before:h-1 before:bg-indigo-500 before:left-0 before:bottom-0 before:duration-300 
                 before:transition-transform before:scale-x-0 hover:before:scale-x-100">
                Contact
            </a>
            </div>
            </nav>
       
    )
}