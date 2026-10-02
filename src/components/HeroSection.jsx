import { motion } from "framer-motion";
import lucas from "../assets/lucas.png"
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";
import LucasC_CV from "../assets/Lucas_Cano_CV.pdf"
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <section
                id="home"
                className="min-h-screen flex justify-center items-center mt-5 xl:mt-0"
            >
                <div className="w-full max-w-[360px] xl:max-w-[1600px] mx-auto px-4 flex flex-col xl:flex-row justify-center items-center gap-8 xl:gap-16">

                    <div className="blob-wrapper order-1 xl:order-2 w-60 h-60 xl:w-110 xl:h-110 translate-y-8 xl:translate-y-0 shrink-0">
                        <img
                            style={{
                                boxShadow:
                                    "0 0 10px #6366f1, 0 0 20px #6366f1, 0 0 30px #8b5cf6, 0 0 40px #8b5cf6",
                            }}
                            alt="img Lucas"
                            src={lucas}
                            className="blob-image object-cover"
                        />
                    </div>

                    <div className="order-2 mt-6 xl:mt-0 xl:order-1 text-center w-full">
                        <h1 className="text-zinc-300 text-2xl xl:text-4xl">
                            <TypeAnimation
                                sequence={["Web Developer · ", 1500, "", 500]}
                                speed={50}
                                repeat={Infinity}
                            />
                            <span className="text-violet-500">React</span>
                        </h1>

                        <p className="text-zinc-300 text-4xl xl:text-7xl font-semibold">
                            Hola, soy <span className="text-violet-500">Lucas Caño.</span>
                        </p>

                        <p className="text-zinc-400 text-sm md:text-lg mt-6 mx-auto max-w-2xl">
                            Desarrollador Web especializado en{" "}
                            <span className="font-bold">React</span> y{" "}
                            <span className="font-bold">JavaScript</span>, enfocado en crear
                            interfaces web claras, funcionales y responsivas con foco en UX.
                        </p>

                        <div className="mt-8 xl:mt-20 flex justify-center items-center gap-4">
                            <a href="#projects" className="bg-gradient-to-r from-violet-600 to-indigo-800 text-zinc-100 font-semibold px-5 py-3 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.45)] hover:scale-105 transition-transform">Ver proyectos</a>
                            <a href="#contact" className="border border-white/5 text-zinc-300 font-semibold px-5 py-3 rounded-full hover:border-violet-500/40 shadow-[0_4px_16px_rgba(0,0,0,0.45)] hover:shadow-[0_6px_16px_rgba(124,58,237,0.18)] transition-all">Contactarme</a>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )

}