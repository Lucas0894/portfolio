import html5 from "../assets/html.svg"
import css3 from "../assets/css3.svg"
import js from "../assets/javascript.svg"
import nodejs from "../assets/nodejs.svg"
import react from "../assets/react1.svg"
import mysql from "../assets/mysql.svg"
import postgresql from "../assets/postgresql.svg"
import express from "../assets/express2.svg"
import postman from "../assets/postman.svg"
import redux from "../assets/redux.svg"
import git from "../assets/git1.svg"
import tailwind from "../assets/tailwind.svg"
import sequelize from "../assets/Sequelize.svg"
import typescript from "../assets/Typescript.svg"
import { motion } from "framer-motion";
import { Star, Crosshair, GraduationCap, Users, User, Lightbulb, CodeXml, Rocket } from 'lucide-react';
import { useState } from "react"

export const AboutMe = () => {
    const [selectedTech, setSelectedTech] = useState(null)

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <section id="about" className="min-h-screen flex justify-center items-center mt-5">
                <div className="text-center mt-20 w-full max-w-[360px] xl:max-w-[1600px] mx-auto px-4">
                    <h1 className="font-bold text-zinc-300 text-2xl">Sobre mi</h1>
                    <p className="text-zinc-400 text-sm md:text-lg mt-2 xl:p-0">Conoce mas sobre mi experiencia, habilidades y lo que me motiva a crear soluciones digitales.</p>
                    <div className="flex flex-col gap-15 xl:flex-row xl:justify-center xl:gap-12 xl:items-start mt-10">
                        <div className="flex w-full flex-col gap-3 text-left bg-[#202020] shadow-[0_6px_16px_rgba(0,0,0,0.45),0_28px_55px_rgba(0,0,0,0.85)]  p-2 rounded-3xl mt-5 xl:h-150">
                            <div className="flex items-start gap-3 p-2">
                                <User className="text-violet-500" />
                                <p className="font-bold text-zinc-300 text-sm md:text-lg">Acerca de mi</p>
                            </div>
                            <p className="text-zinc-400 text-sm md:text-lg p-2 ">Soy desarrollador web con foco en Frontend, especializado en la creación de interfaces modernas, dinámicas y responsivas utilizando tecnologías como JavaScript y React. Me gusta desarrollar experiencias web que no solo se vean bien visualmente, sino que también sean intuitivas, accesibles y fáciles de usar para las personas. En cada proyecto priorizo la experiencia del usuario, el rendimiento de la aplicación y la escritura de código limpio y mantenible aplicando buenas prácticas de desarrollo.
                            </p>
                            <p className="text-zinc-400 text-sm md:text-lg p-2">Me considero una persona curiosa, comprometida y en constante aprendizaje, siempre buscando mejorar mis habilidades y adaptarme a nuevas tecnologías y herramientas del ecosistema web.</p>
                            <p className="text-zinc-400 text-sm md:text-lg p-2">
                                Poseo conocimientos en Backend y bases de datos, lo que me permite comprender cómo funcionan las aplicaciones de forma integral y tener una visión más completa del desarrollo.
                            </p>
                        </div>
                        <div className="flex w-full flex-col gap-3 text-left bg-[#202020] shadow-[0_6px_16px_rgba(0,0,0,0.45),0_28px_55px_rgba(0,0,0,0.85)]  p-2 rounded-3xl mt-5 xl:h-150">
                            <div className="flex items-start p-2 gap-3">
                                <Star className="text-violet-500" />
                                <p className="font-bold text-zinc-300 text-sm md:text-lg">Lo que me define</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <Lightbulb className="text-violet-500 mt-1 shrink-0 w-6 h-6" />
                                <div className="flex flex-col text-left">
                                    <p className="m-0 text-sm md:text-lg text-violet-500">
                                        Pasión por lo que hago
                                    </p>
                                    <p className="m-0 text-zinc-400 text-sm md:text-lg">
                                        Disfruto transformar ideas en experiencias digitales útiles y atractivas.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 pt-3 border-t border-t-white/10">
                                <Crosshair className="text-violet-500 mt-1 shrink-0 w-6 h-6" />
                                <div className="flex flex-col text-left">
                                    <p className="m-0 text-sm md:text-lg text-violet-500">
                                        Enfoque en el usuario
                                    </p>
                                    <p className="m-0 text-zinc-400 text-sm md:text-lg">
                                        Diseño y desarrollo pensando siempre en las necesidades reales de las personas.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 pt-3 border-t border-t-white/10">
                                <GraduationCap className="text-violet-500 mt-1 shrink-0 w-6 h-6" />
                                <div className="flex flex-col text-left">
                                    <p className="m-0 text-sm md:text-lg text-violet-500">
                                        Aprendizaje constante
                                    </p>
                                    <p className="m-0 text-zinc-400 text-sm md:text-lg">
                                        La tecnologia evoluciona todos los dias y me mantengo en constante aprendizaje.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 pt-3 border-t border-t-white/10">
                                <Users className="text-violet-500 mt-1 shrink-0 w-6 h-6" />
                                <div className="flex flex-col text-left">
                                    <p className="m-0 text-sm md:text-lg text-violet-500">
                                        Trabajo en equipo
                                    </p>
                                    <p className="m-0 text-zinc-400 text-sm md:text-lg">
                                        Me gusta colaborar, compartir ideas y construir soluciones junto a otros.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 pt-3 border-t border-t-white/10">
                                <CodeXml className="text-violet-500 mt-1 shrink-0 w-6 h-6" />
                                <div className="flex flex-col text-left">
                                    <p className="m-0 text-sm md:text-lg text-violet-500">
                                        Atencion al detalle
                                    </p>
                                    <p className="m-0 text-zinc-400 text-sm md:text-lg">
                                        Cuido cada detalle en el codigo y en el diseño para lograr productos de calidad.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 pt-3 border-t border-t-white/10">
                                <Rocket className="text-violet-500 mt-1 shrink-0 w-6 h-6" />
                                <div className="flex flex-col text-left">
                                    <p className="m-0 text-sm md:text-lg text-violet-500">
                                        Mentalidad de crecimiento
                                    </p>
                                    <p className="m-0 text-zinc-400 text-sm md:text-lg">
                                        Siempre busco superarme, asumir nuevos retos y seguir creciendo profesionalmente.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}>
                        <h1 className="text-2xl m-10 text-violet-500">
                            Tecnologias y Herramientas que utilizo
                        </h1>
                        <div className="mt-6 mx-auto w-full xl:max-w-[1600px] bg-[#202020] shadow-[0_6px_16px_rgba(0,0,0,0.45),0_28px_55px_rgba(0,0,0,0.85)] p-2 rounded-3xl">
                            <h3 className=" text-2xl m-10 text-violet-500">Frontend</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 justify-items-center gap-6 mt-2 mb-10">
                                <div onClick={() => setSelectedTech("html")} className={`w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-2xl
            bg-[#18181b] border 
             transition-all duration-300 
            ${selectedTech === "html"
                                        ? "border-violet-500/40 shadow-[0_0_30px_rgba(124,58,237,0.20)] -translate-y-1"
                                        : "border-white/5 shadow-[0_6px_16px_rgba(0,0,0,0.45)] hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.20)] hover:-translate-y-1"
                                    }`}>
                                    <img
                                        src={html5}
                                        alt="Html"
                                        className="
            w-12 h-12
            md:w-14 md:h-14
            transition-transform
            duration-300
            hover:scale-110"
                                    />
                                    <p className="text-zinc-400 text-xs md:text-sm mt-3">
                                        Html
                                    </p>
                                </div>
                                <div onClick={() => setSelectedTech("css")} className={`w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-2xl
            bg-[#18181b] border 
             transition-all duration-300 ${selectedTech === "css"
                                        ? "border-violet-500/40 shadow-[0_0_30px_rgba(124,58,237,0.20)] -translate-y-1"
                                        : "border-white/5 shadow-[0_6px_16px_rgba(0,0,0,0.45)] hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.20)] hover:-translate-y-1"
                                    }`}>
                                    <img
                                        src={css3}
                                        alt="Css"
                                        className="
            w-12 h-12
            md:w-14 md:h-14
            transition-transform
            duration-300
            hover:scale-110"
                                    />
                                    <p className="text-zinc-400 text-xs md:text-sm mt-3">
                                        Css
                                    </p>
                                </div>
                                <div onClick={() => setSelectedTech("javascript")} className={`w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-2xl
            bg-[#18181b] border 
             transition-all duration-300 ${selectedTech === "javascript"
                                        ? "border-violet-500/40 shadow-[0_0_30px_rgba(124,58,237,0.20)] -translate-y-1"
                                        : "border-white/5 shadow-[0_6px_16px_rgba(0,0,0,0.45)] hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.20)] hover:-translate-y-1"
                                    }`}>
                                    <img
                                        src={js}
                                        alt="Javascript"
                                        className="
            w-12 h-12
            md:w-14 md:h-14
            transition-transform
            duration-300
            hover:scale-110"
                                    />
                                    <p className="text-zinc-400 text-xs md:text-sm mt-3">
                                        Javascript
                                    </p>
                                </div>
                                <div onClick={() => { setSelectedTech("react") }} className={`w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-2xl
            bg-[#18181b] border 
             transition-all duration-300 ${selectedTech === "react"
                                        ? "border-violet-500/40 shadow-[0_0_30px_rgba(124,58,237,0.20)] -translate-y-1"
                                        : "border-white/5 shadow-[0_6px_16px_rgba(0,0,0,0.45)]  hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.20)] hover:-translate-y-1"
                                    }`}>
                                    <img
                                        src={react}
                                        alt="React"
                                        className="
            w-12 h-12
            md:w-14 md:h-14
            transition-transform
            duration-300
            hover:scale-110"
                                    />
                                    <p className="text-zinc-400 text-xs md:text-sm mt-3">
                                        React
                                    </p>
                                </div>
                                <div onClick={() => setSelectedTech("redux")} className={`w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-2xl
            bg-[#18181b] border 
             transition-all duration-300 ${selectedTech === "redux"
                                        ? "border-violet-500/40 shadow-[0_0_30px_rgba(124,58,237,0.20)] -translate-y-1"
                                        : "border-white/5 shadow-[0_6px_16px_rgba(0,0,0,0.45)]  hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.20)] hover:-translate-y-1"
                                    }`}>
                                    <img
                                        src={redux}
                                        alt="Redux"
                                        className="
            w-12 h-12
            md:w-14 md:h-14
            transition-transform
            duration-300
            hover:scale-110"
                                    />
                                    <p className="text-zinc-400 text-xs md:text-sm mt-3">
                                        Redux
                                    </p>
                                </div>
                                <div onClick={() => setSelectedTech("tailwind")} className={`w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-2xl
            bg-[#18181b] border 
             transition-all duration-300 ${selectedTech === "tailwind"
                                        ? "border-violet-500/40 shadow-[0_0_30px_rgba(124,58,237,0.20)] -translate-y-1"
                                        : "border-white/5 shadow-[0_6px_16px_rgba(0,0,0,0.45)]  hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.20)] hover:-translate-y-1"
                                    }`}>
                                    <img
                                        src={tailwind}
                                        alt="Tailwind"
                                        className="
            w-12 h-12
            md:w-14 md:h-14
            transition-transform
            duration-300
            hover:scale-110"
                                    />
                                    <p className="text-zinc-400 text-xs md:text-sm mt-3">
                                        Tailwind
                                    </p>
                                </div>
                                <div onClick={() => setSelectedTech("typescript")} className={`w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-2xl col-span-2 justify-self-center md:col-span-1 md:justify-self-auto
            bg-[#18181b] border 
             transition-all duration-300 ${selectedTech === "typescript"
                                        ? "border-violet-500/40 shadow-[0_0_30px_rgba(124,58,237,0.20)] -translate-y-1"
                                        : "border-white/5 shadow-[0_6px_16px_rgba(0,0,0,0.45)]  hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.20)] hover:-translate-y-1"
                                    }`}>
                                    <img
                                        src={typescript}
                                        alt="Typescript"
                                        className="
            w-12 h-12
            md:w-14 md:h-14
            transition-transform
            duration-300
            hover:scale-110"
                                    />
                                    <p className="text-zinc-400 text-xs md:text-sm mt-3">
                                        Typescript
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}>
                        <div className="translate-y-12 xl:translate-y-18 mx-auto w-full xl:max-w-[1600px] bg-[#202020] shadow-[0_6px_16px_rgba(0,0,0,0.45),0_28px_55px_rgba(0,0,0,0.85)] p-2 rounded-3xl">
                            <h3 className="text-2xl m-10 text-violet-500">Backend</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-7 justify-items-center gap-6 mt-2 mb-10">
                                <div onClick={() => setSelectedTech("nodejs")} className={`w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-2xl
            bg-[#18181b] border 
             transition-all duration-300 ${selectedTech === "nodejs"
                                        ? "border-violet-500/40 shadow-[0_0_30px_rgba(124,58,237,0.20)] -translate-y-1"
                                        : "border-white/5 shadow-[0_6px_16px_rgba(0,0,0,0.45)] hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.20)] hover:-translate-y-1"
                                    }`}>
                                    <img
                                        src={nodejs}
                                        alt="Node"
                                        className="
            w-12 h-12
            md:w-14 md:h-14
            transition-transform
            duration-300
            hover:scale-110"
                                    />
                                    <p className="text-zinc-400 text-xs md:text-sm mt-3">
                                        NodeJs
                                    </p>
                                </div>
                                <div onClick={() => setSelectedTech("mysql")} className={`w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-2xl
            bg-[#18181b] border
             transition-all duration-300 ${selectedTech === "mysql"
                                        ? "border-violet-500/40 shadow-[0_0_30px_rgba(124,58,237,0.20)] -translate-y-1"
                                        : "border-white/5 shadow-[0_6px_16px_rgba(0,0,0,0.45)]  hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.20)] hover:-translate-y-1"
                                    }`}>
                                    <img
                                        src={mysql}
                                        alt="Mysql"
                                        className="
            w-12 h-12
            md:w-14 md:h-14
            transition-transform
            duration-300
            hover:scale-110"
                                    />
                                    <p className="text-zinc-400 text-xs md:text-sm mt-3">
                                        Mysql
                                    </p>
                                </div>
                                <div onClick={() => setSelectedTech("postgres")} className={`w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-2xl
            bg-[#18181b] border 
             transition-all duration-300 ${selectedTech === "postgres"
                                        ? "border-violet-500/40 shadow-[0_0_30px_rgba(124,58,237,0.20)] -translate-y-1"
                                        : "border-white/5 shadow-[0_6px_16px_rgba(0,0,0,0.45)]  hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.20)] hover:-translate-y-1"
                                    }`}>
                                    <img
                                        src={postgresql}
                                        alt="Postgres"
                                        className="
            w-12 h-12
            md:w-14 md:h-14
            transition-transform
            duration-300
            hover:scale-110"
                                    />
                                    <p className="text-zinc-400 text-xs md:text-sm mt-3">
                                        Postgres
                                    </p>
                                </div>
                                <div onClick={() => setSelectedTech("express")} className={`w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-2xl
            bg-[#18181b] border 
             transition-all duration-300 ${selectedTech === "express"
                                        ? "border-violet-500/40 shadow-[0_0_30px_rgba(124,58,237,0.20)] -translate-y-1"
                                        : "border-white/5 shadow-[0_6px_16px_rgba(0,0,0,0.45)]  hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.20)] hover:-translate-y-1"
                                    }`}>
                                    <img
                                        src={express}
                                        alt="Express"
                                        className="
            w-12 h-12
            md:w-14 md:h-14
            transition-transform
            duration-300
            hover:scale-110"
                                    />
                                    <p className="text-zinc-400 text-xs md:text-sm mt-3">
                                        Express
                                    </p>
                                </div>
                                <div onClick={() => setSelectedTech("postman")} className={`w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-2xl
            bg-[#18181b] border 
             transition-all duration-300 ${selectedTech === "postman"
                                        ? "border-violet-500/40 shadow-[0_0_30px_rgba(124,58,237,0.20)] -translate-y-1"
                                        : "border-white/5 shadow-[0_6px_16px_rgba(0,0,0,0.45)]  hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.20)] hover:-translate-y-1"
                                    }`}>
                                    <img
                                        src={postman}
                                        alt="Postman"
                                        className="
            w-12 h-12
            md:w-14 md:h-14
            transition-transform
            duration-300
            hover:scale-110"
                                    />
                                    <p className="text-zinc-400 text-xs md:text-sm mt-3">
                                        Postman
                                    </p>
                                </div>
                                <div onClick={() => setSelectedTech("git")} className={`w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-2xl
            bg-[#18181b] border 
             transition-all duration-300 ${selectedTech === "git"
                                        ? "border-violet-500/40 shadow-[0_0_30px_rgba(124,58,237,0.20)] -translate-y-1"
                                        : "border-white/5 shadow-[0_6px_16px_rgba(0,0,0,0.45)]  hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.20)] hover:-translate-y-1"
                                    }`}>
                                    <img
                                        src={git}
                                        alt="Git"
                                        className="
            w-12 h-12
            md:w-14 md:h-14
            transition-transform
            duration-300
            hover:scale-110"
                                    />
                                    <p className="text-zinc-400 text-xs md:text-sm mt-3">
                                        Git
                                    </p>
                                </div>
                                <div onClick={() => setSelectedTech("sequelize")} className={`w-28 h-28 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-2xl col-span-2 justify-self-center md:col-span-1 md:justify-self-auto
            bg-[#18181b] border 
             transition-all duration-300 ${selectedTech === "sequelize"
                                        ? "border-violet-500/40 shadow-[0_0_30px_rgba(124,58,237,0.20)] -translate-y-1"
                                        : "border-white/5 shadow-[0_6px_16px_rgba(0,0,0,0.45)]  hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.20)] hover:-translate-y-1"
                                    }`}>
                                    <img
                                        src={sequelize}
                                        alt="Sequelize"
                                        className="
            w-12 h-12
            md:w-14 md:h-14
            transition-transform
            duration-300
            hover:scale-110"
                                    />
                                    <p className="text-zinc-400 text-xs md:text-sm mt-3">
                                        Sequelize
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}