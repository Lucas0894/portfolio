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
import typescript from "../assets/TypeScript.svg"
import { motion } from "framer-motion";
import { Star, Crosshair, GraduationCap, Users, User, Lightbulb, CodeXml, Rocket } from 'lucide-react';
import { useState } from "react"

export const AboutMe = () => {
    const [selectedTech, setSelectedTech] = useState(null)

    const frontendTech = [
        { id: "html", label: "Html", icon: html5, alt: "Html" },
        { id: "css", label: "Css", icon: css3, alt: "Css" },
        { id: "javascript", label: "Javascript", icon: js, alt: "Javascript" },
        { id: "react", label: "React", icon: react, alt: "React" },
        { id: "redux", label: "Redux", icon: redux, alt: "Redux" },
        { id: "tailwind", label: "Tailwind", icon: tailwind, alt: "Tailwind" },
        { id: "typescript", label: "Typescript", icon: typescript, alt: "Typescript" },
    ]

    const backendTech = [
        { id: "nodejs", label: "NodeJs", icon: nodejs, alt: "Node" },
        { id: "mysql", label: "Mysql", icon: mysql, alt: "Mysql" },
        { id: "postgres", label: "Postgres", icon: postgresql, alt: "Postgres" },
        { id: "express", label: "Express", icon: express, alt: "Express" },
        { id: "postman", label: "Postman", icon: postman, alt: "Postman" },
        { id: "git", label: "Git", icon: git, alt: "Git" },
        { id: "sequelize", label: "Sequelize", icon: sequelize, alt: "Sequelize" },
    ]

    const TechCard = ({ id, label, icon, alt }) => (
        <button
            type="button"
            key={id}
            onClick={() => setSelectedTech(id)}
            className={`group flex w-full max-w-[120px] aspect-square flex-col items-center justify-center rounded-2xl bg-[#18181b] border transition-all duration-300 ${selectedTech === id
                ? "border-violet-500/40 shadow-[0_0_30px_rgba(124,58,237,0.20)] -translate-y-1"
                : "border-white/5 shadow-[0_6px_16px_rgba(0,0,0,0.45)] hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(124,58,237,0.20)] hover:-translate-y-1"
                }`}
        >
            <img
                src={icon}
                alt={alt}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110"
            />
            <p className="text-zinc-400 text-[10px] sm:text-xs md:text-sm mt-2 text-center">
                {label}
            </p>
        </button>
    )

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <section id="about" className="min-h-screen flex justify-center items-center mt-5">
                <div className="text-center mt-20 w-full max-w-[360px] xl:max-w-[1600px] mx-auto px-4">
                    <h1 className="font-bold text-zinc-300 text-2xl">Sobre mi</h1>
                    <p className="text-zinc-400 text-sm md:text-lg mt-2 xl:p-0">Conoce mas sobre mi experiencia, habilidades y lo que me motiva a crear soluciones digitales.</p>
                    <div className="flex flex-col gap-15 xl:flex-row xl:justify-center xl:gap-12 xl:items-stretch mt-10">
                        <div className="flex w-full flex-col gap-3 text-left bg-[#202020] shadow-[0_6px_16px_rgba(0,0,0,0.45),0_28px_55px_rgba(0,0,0,0.85)] p-2 rounded-3xl mt-5 flex-1 min-h-0 break-words overflow-auto">
                            <div className="flex items-start gap-3 p-2">
                                <User className="text-violet-500" />
                                <p className="font-bold text-zinc-300 text-sm md:text-lg">Acerca de mi</p>
                            </div>
                            <p className="text-zinc-400 text-sm md:text-lg p-2 ">Soy desarrollador Fullstack con foco en Frontend, especializado en la creación de interfaces modernas, dinámicas y responsivas utilizando tecnologías como JavaScript y React. Me gusta desarrollar experiencias que no solo se vean bien visualmente, sino que también sean intuitivas, accesibles y fáciles de usar para las personas. En cada proyecto priorizo la experiencia del usuario, el rendimiento de la aplicación y la escritura de código limpio y mantenible aplicando buenas prácticas de desarrollo.
                            </p>
                            <p className="text-zinc-400 text-sm md:text-lg p-2 break-words whitespace-normal">Me considero una persona curiosa, comprometida y en constante aprendizaje, siempre buscando mejorar mis habilidades y adaptarme a nuevas tecnologías y herramientas del ecosistema Fullstack.</p>
                            <p className="text-zinc-400 text-sm md:text-lg p-2 break-words whitespace-normal">
                                Poseo conocimientos en Backend y bases de datos, lo que me permite comprender cómo funcionan las aplicaciones de forma integral y tener una visión más completa del desarrollo.
                            </p>
                        </div>
                        <div className="flex w-full flex-col gap-3 text-left bg-[#202020] shadow-[0_6px_16px_rgba(0,0,0,0.45),0_28px_55px_rgba(0,0,0,0.85)] p-2 rounded-3xl mt-5 flex-1 min-h-0 break-words overflow-auto">
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
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 justify-items-center gap-4 sm:gap-5 md:gap-6 mt-2 mb-10 mx-auto max-w-[1000px] xl:max-w-none">
                                {frontendTech.map((tech) => (
                                    <TechCard
                                        key={tech.id}
                                        id={tech.id}
                                        label={tech.label}
                                        icon={tech.icon}
                                        alt={tech.alt}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}>
                        <div className="translate-y-12 xl:translate-y-18 mx-auto w-full xl:max-w-[1600px] bg-[#202020] shadow-[0_6px_16px_rgba(0,0,0,0.45),0_28px_55px_rgba(0,0,0,0.85)] p-2 rounded-3xl">
                            <h3 className="text-2xl m-10 text-violet-500">Backend</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 justify-items-center gap-4 sm:gap-5 md:gap-6 mt-2 mb-10 mx-auto max-w-[1000px] xl:max-w-none">
                                {backendTech.map((tech) => (
                                    <TechCard
                                        key={tech.id}
                                        id={tech.id}
                                        label={tech.label}
                                        icon={tech.icon}
                                        alt={tech.alt}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}