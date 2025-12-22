
import lucas from "../assets/lucas.png"
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa"; 
import { IoDocumentAttachOutline } from "react-icons/io5";




export const HeroSection = ()=>{
    return (
        <section id="home" className="min-h-screen container mx-auto flex flex-col justify-center items-center xl:-pt-20 mt-5 xl:flex-row xl:mt-0 relative">
        <div className="text-center px-4">
        <h1 className="text-white text-2x1 font-bold xl:text-4xl">Software Developer</h1>
        <p className=" text-indigo-700 text-4xl xl:text-7xl">Hi, I'm Lucas Caño.</p>
        <p className="text-white mt-6">I'm a front-end developer who creates
            incredible web experiences.</p>
        <p className="text-white">
            I transform ideas into dynamic, responsive web interfaces, combining design and technology to deliver unique user experiences.
        </p>
        <div className="xl:mt-20">
            <button className="rounded-3xl xl:m-10 p-4 m-4  shadow-[0_0_15px_rgba(255,255,255,0.3)] cursor-pointer transition transform hover:scale-110 hover:shadow-[0_0_15px_rgba(75,0,130,1)]">
                <a href="https://github.com/Lucas0894">
                <PiGithubLogoFill size={50} className="text-white" />
                </a>
        </button>
        <button className="rounded-3xl xl:m-10 p-4 m-4 shadow-[0_0_15px_rgba(255,255,255,0.3)] cursor-pointer  transition transform hover:scale-110 hover:shadow-[0_0_15px_rgba(75,0,130,1)]">
                <a href="http://www.linkedin.com/in/lucas-ca%C3%B1o-0a5406223">
                <FaLinkedinIn size={50} className="text-white" />
                </a> 
        </button>
        <button className="rounded-3xl xl:m-10 p-4 m-4 shadow-[0_0_15px_rgba(255,255,255,0.3)] cursor-pointer  transition transform hover:scale-110 hover:shadow-[0_0_15px_rgba(75,0,130,1)]">
            <a href="/public/LucasC_CV.pdf" download><IoDocumentAttachOutline size={50} className="text-white" /></a>
        </button>
        </div>
        </div>
            <img alt="img Lucas" src={lucas} className="mt-6 w-60 h-60 xl:w-130 xl:h-130 object-cover mask-radial-from-50% mask-radial-to-70%" />
        </section>
    )
}