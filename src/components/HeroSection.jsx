import { motion } from "framer-motion";
import lucas from "../assets/lucas.png"
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa"; 
import { IoDocumentAttachOutline } from "react-icons/io5";
import  LucasC_CV  from "../assets/Lucas_Cano_CV.pdf"
import { TypeAnimation } from "react-type-animation";

export const HeroSection = ()=>{
    
    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <section id="home" className="min-h-screen container mx-auto flex flex-col justify-center items-center xl:-pt-20 mt-5 xl:flex-row xl:mt-0 relative">
        <div className="text-center px-4">
        <h1 className="text-zinc-300 text-2xl xl:text-4xl"><TypeAnimation sequence={["Web Developer · ",1500, "", 500]} speed={50}repeat={Infinity}/><span className="text-violet-500">React</span></h1>
        <p className=" text-zinc-300 text-4xl xl:text-7xl font-semibold">Hola, soy {" "}<span className="text-violet-500">Lucas Caño.</span></p>
        <p className="text-zinc-400 text-sm md:text-lg mt-6 mx-20">Desarrollador Web especializado en <span className="font-bold">React</span> y <span className="font-bold">JavaScript</span>, enfocado en crear interfaces web claras, funcionales y responsivas con foco en UX.</p>
        <div className="xl:mt-20">
                <a className="relative bg-[#18181b] border border-white/5 group inline-block rounded-2xl xl:m-10 p-4 m-4  shadow-[0_6px_16px_rgba(0,0,0,0.45),0_28px_55px_rgba(0,0,0,0.85)] cursor-pointer transition transform hover:scale-110 hover:border-violet-500/40 hover:shadow-[0_6px_16px_rgba(124,58,237,0.35),0_28px_55px_rgba(124,58,237,0.55)]" href="https://github.com/Lucas0894">
                <div className="absolute text-white opacity-0 -top-16 bg-gray-900 group-hover:opacity-100 pointer-events-none transition-opacity left-1/2 -translate-x-1/2 p-2 rounded-full duration-200" >Github<div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 -bottom-1 rotate-45 bg-gray-900" /></div>
                <PiGithubLogoFill size={50} className="text-zinc-300" />
                </a>
                <a className="relative bg-[#18181b] border border-white/5 group inline-block rounded-2xl xl:m-10 p-4 m-4  shadow-[0_6px_16px_rgba(0,0,0,0.45),0_28px_55px_rgba(0,0,0,0.85)] cursor-pointer transition transform hover:scale-110 hover:border-violet-500/40 hover:shadow-[0_6px_16px_rgba(124,58,237,0.35),0_28px_55px_rgba(124,58,237,0.55)]" href="http://www.linkedin.com/in/lucas-ca%C3%B1o-0a5406223">
                <div className="absolute text-white opacity-0 -top-16 bg-gray-900 group-hover:opacity-100 pointer-events-none transition-opacity left-1/2 -translate-x-1/2 p-2 rounded-full duration-200 ">Linkedin<div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 -bottom-1 rotate-45 bg-gray-900" /></div>
                <FaLinkedinIn size={50} className="text-zinc-300" />
                </a> 
                
                <a className="relative bg-[#18181b] border border-white/5 group inline-block rounded-2xl xl:m-10 p-4 m-4  shadow-[0_6px_16px_rgba(0,0,0,0.45),0_28px_55px_rgba(0,0,0,0.85)] cursor-pointer transition transform hover:scale-110 hover:border-violet-500/40 hover:shadow-[0_6px_16px_rgba(124,58,237,0.35),0_28px_55px_rgba(124,58,237,0.55)]" href={LucasC_CV} download>
                <div className="absolute text-white opacity-0 -top-16 bg-gray-900 group-hover:opacity-100 pointer-events-none transition-opacity left-1/2 -translate-x-1/2 p-2 rounded-full duration-200 ">CV<div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 -bottom-1 rotate-45 bg-gray-900" /></div>
                <IoDocumentAttachOutline size={50} className="text-zinc-300" /></a> 
        </div>
        </div>
        <div className="blob-wrapper w-60 h-60 xl:w-110 xl:h-110 translate-y-8 xl:translate-y-0">
                <img style={{  boxShadow: `0 0 10px #6366f1, 0 0 20px #6366f1, 0 0 30px #8b5cf6, 0 0 40px #8b5cf6`}} alt="img Lucas" src={lucas} className="blob-image object-cover" />
        </div>
        </section>
        </motion.div>
    )
}