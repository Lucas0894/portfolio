

export const Footer = ()=>{
    return (
        <>
        <section className="flex items-center justify-center m-5 border-t-gray-800 border-1">
            <div>
            <div className="flex gap-5 m-3 items-center justify-center">
                <a className="text-gray-400 font-bold cursor-pointer hover:text-white">Home</a>
                <a className="text-gray-400 font-bold cursor-pointer hover:text-white">About</a>
                <a className="text-gray-400 font-bold cursor-pointer hover:text-white">Projects</a>
                <a className="text-gray-400 font-bold cursor-pointer hover:text-white">Contact</a>
            </div>
            <div className="text-gray-400">
                2025 Designed & Developed by Lucas Caño. All rights reserved
            </div>
            </div>
        </section>
        </>
    )
}