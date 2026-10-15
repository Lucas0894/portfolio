import { motion } from "framer-motion";
import lucas from "../assets/lucas.png"
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

                    <div className="blob-wrapper order-1 xl:order-2 w-60 h-60 xl:w-100 xl:h-100 translate-y-8 xl:translate-y-0 shrink-0">
                        <img
                            alt="img Lucas"
                            src={lucas}
                            className="blob-image object-cover"
                        />
                    </div>

                    <div className="order-2 mt-6 xl:mt-0 xl:order-1 text-center xl:text-left w-full max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/15 bg-violet-400/[0.07] px-4 py-2 text-sm font-medium text-violet-200 shadow-[0_0_25px_rgba(124,58,237,0.08)]">
                            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                            Disponible para oportunidades
                        </div>
                        <h1 className="mt-6 text-zinc-300 text-xl md:text-2xl xl:text-3xl">
                            <TypeAnimation
                                sequence={["Fullstack Developer · ", 1500, "", 500]}
                                speed={50}
                                repeat={Infinity}
                            />
                            <span className="text-violet-500">React</span>
                        </h1>

                        <p className="mt-3 text-zinc-100 text-4xl md:text-5xl xl:text-7xl font-semibold tracking-tight leading-tight">
                            Hola, soy <span className="text-violet-500">Lucas Caño.</span>
                        </p>

                        <p className="text-zinc-400 text-sm md:text-lg mt-6 mx-auto xl:mx-0 max-w-2xl leading-relaxed">
                            Desarrollador Fullstack especializado en{" "}
                            <span className="font-bold">React</span> y{" "}
                            <span className="font-bold">JavaScript</span>, enfocado en crear
                            interfaces claras, funcionales y responsivas con foco en UX.
                        </p>

                        <div className="mt-8 xl:mt-10 flex justify-center xl:justify-start items-center gap-4">
                            <a href="#projects" className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-full shadow-[0_8px_24px_rgba(109,40,217,0.28)] hover:shadow-[0_10px_30px_rgba(109,40,217,0.42)] hover:-translate-y-0.5 transition-all">Ver proyectos</a>
                            <a href="#contact" className="border border-white/10 bg-white/[0.03] text-zinc-200 font-semibold px-6 py-3 rounded-full hover:border-violet-300/40 hover:bg-violet-400/[0.06] transition-all">Contactarme</a>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )

}