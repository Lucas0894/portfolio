

export const Footer = ()=>{
    return (
        <>
        <section className="flex items-center justify-center m-2 border-t-gray-800 border-1">
            <div>
            <div className="flex gap-5 m-3 items-center justify-center">
                <a href="#home" className="text-gray-400 font-bold cursor-pointer hover:text-white">Home</a>
                <a href="#about" className="text-gray-400 font-bold cursor-pointer hover:text-white">About</a>
                <a href="#projects" className="text-gray-400 font-bold cursor-pointer hover:text-white">Projects</a>
                <a href="#contact" className="text-gray-400 font-bold cursor-pointer hover:text-white">Contact</a>
            </div>
            <div className="text-gray-400 text-[12px] xl:text-[15px]">
                2025 Designed & Developed by Lucas Caño. All rights reserved
            </div>
            </div>
        </section>
        </>
    )
}