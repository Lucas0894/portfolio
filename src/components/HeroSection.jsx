
import lucas from "../assets/lucas.png"
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa"; 
import { IoDocumentAttachOutline } from "react-icons/io5";
import  LucasC_CV  from "../assets/Lucas_Caño_CV_Ingles.pdf"




export const HeroSection = ()=>{
    return (
        <section id="home" className="min-h-screen container mx-auto flex flex-col justify-center items-center xl:-pt-20 mt-5 xl:flex-row xl:mt-0 relative">
        <div className="text-center px-4">
        <h1 className="text-white text-2x1 font-bold xl:text-4xl">Frontend Developer</h1>
        <p className=" text-indigo-700 text-4xl xl:text-7xl">Hola, soy Lucas Caño.</p>
        <p className="text-white mt-6 mx-20">Desarrollador Frontend especializado en React y JavaScript, enfocado en crear interfaces web claras, funcionales y responsivas con foco en UX.</p>
        <div className="xl:mt-20">
                <a className="relative group inline-block rounded-3xl xl:m-10 p-4 m-4  shadow-[0_0_15px_rgba(255,255,255,0.3)] cursor-pointer transition transform hover:scale-110 hover:shadow-[0_0_15px_rgba(75,0,130,1)]" href="https://github.com/Lucas0894">
                <div className="absolute text-white opacity-0 -top-16 bg-gray-900 group-hover:opacity-100 pointer-events-none transition-opacity left-1/2 -translate-x-1/2 p-2 rounded-full duration-200" >Github<div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 -bottom-1 rotate-45 bg-gray-900" /></div>
                <PiGithubLogoFill size={50} className="text-white" />
                </a>
                <a className="relative group inline-block rounded-3xl xl:m-10 p-4 m-4  shadow-[0_0_15px_rgba(255,255,255,0.3)] cursor-pointer transition transform hover:scale-110 hover:shadow-[0_0_15px_rgba(75,0,130,1)]" href="http://www.linkedin.com/in/lucas-ca%C3%B1o-0a5406223">
                <div className="absolute text-white opacity-0 -top-16 bg-gray-900 group-hover:opacity-100 pointer-events-none transition-opacity left-1/2 -translate-x-1/2 p-2 rounded-full duration-200 ">Linkedin <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 -bottom-1 rotate-45 bg-gray-900" /></div>
                <FaLinkedinIn size={50} className="text-white" />
                </a> 
                <a className="relative group inline-block rounded-3xl xl:m-10 p-4 m-4  shadow-[0_0_15px_rgba(255,255,255,0.3)] cursor-pointer transition transform hover:scale-110 hover:shadow-[0_0_15px_rgba(75,0,130,1)]" href={LucasC_CV} download>
                <div className="absolute text-white opacity-0 -top-16 bg-gray-900 group-hover:opacity-100 pointer-events-none transition-opacity left-1/2 -translate-x-1/2 p-2 rounded-full duration-200 ">CV<div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 -bottom-1 rotate-45 bg-gray-900" /></div>
                <IoDocumentAttachOutline size={50} className="text-white" /></a> 
        </div>
        </div>
            <img alt="img Lucas" src={lucas} className="mt-6 w-60 h-60 xl:w-130 xl:h-130 object-cover mask-radial-from-50% mask-radial-to-70%" />
        </section>
    )
}