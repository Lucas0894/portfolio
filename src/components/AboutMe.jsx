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
import { motion } from "framer-motion";
import { Star, Crosshair, GraduationCap , Users, User, Lightbulb, CodeXml, Rocket } from 'lucide-react';

export const AboutMe = ()=>{
    return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <section id="about" className="min-h-screen flex justify-center items-center mt-5">
        <div className="text-center mt-20">
        <h1 className="font-bold text-white text-2xl">Sobre mi</h1>
        <p className="text-white mt-2">Conoce mas sobre mi experiencia, habilidades y lo que me motiva a crear soluciones digitales.</p>
        <div className="flex flex-col xl:flex-row xl:justify-center xl:gap-8 xl:items-start mt-10 px-7">
        <div className="flex flex-col gap-3 text-left bg-[#202020] shadow-[0_6px_16px_rgba(0,0,0,0.45),0_28px_55px_rgba(0,0,0,0.85)] xl:w-[750px] p-2 rounded-md mt-5 xl:h-130 h-170">
        <div className="flex items-start gap-3 p-2">
        <User className="text-indigo-500" />
        <p className="font-bold text-white">Acerca de mi</p>
        </div>
        <p className="text-white p-2">Soy desarrollador web con foco en Frontend, especializado en la creación de interfaces modernas, dinámicas y responsivas utilizando tecnologías como JavaScript y React. Me gusta desarrollar experiencias web que no solo se vean bien visualmente, sino que también sean intuitivas, accesibles y fáciles de usar para las personas. En cada proyecto priorizo la experiencia del usuario, el rendimiento de la aplicación y la escritura de código limpio y mantenible aplicando buenas prácticas de desarrollo. 
        </p> 
        <p className="text-white p-2">Me considero una persona curiosa, comprometida y en constante aprendizaje, siempre buscando mejorar mis habilidades y adaptarme a nuevas tecnologías y herramientas del ecosistema web.</p>
        <p className="text-white p-2">
        Poseo conocimientos en Backend y bases de datos, lo que me permite comprender cómo funcionan las aplicaciones de forma integral y tener una visión más completa del desarrollo.
        </p>
        </div>
        <div className="flex flex-col gap-3  bg-[#202020] shadow-[0_6px_16px_rgba(0,0,0,0.45),0_28px_55px_rgba(0,0,0,0.85)] xl:w-[750px] p-2 rounded-md mt-5 xl:h-130 h-170">
        <div className="flex items-start p-2 gap-3">
            <Star className="text-indigo-500" />
            <p className="font-bold text-white">Lo que me define</p>
        </div>
        <div className="flex items-start gap-3">
          <Lightbulb className="text-indigo-500 mt-1" />
          <div className="flex flex-col text-left">
            <p className="m-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-blue-400">
                Pasión por lo que hago
            </p>
            <p className="m-0 text-white">
                Disfruto transformar ideas en experiencias digitales útiles y atractivas.
            </p>
        </div>
        </div>
        <div className="flex items-start gap-3 pt-3 border-t border-t-white/10">
          <Crosshair className="text-indigo-500 mt-1" />
          <div className="flex flex-col text-left">
            <p className="m-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-blue-400">
                Enfoque en el usuario
            </p>
            <p className="m-0 text-white">
                Diseño y desarrollo pensando siempre en las necesidades reales de las personas.
            </p>
        </div>
        </div>
        <div className="flex items-start gap-3 pt-3 border-t border-t-white/10">
          <GraduationCap  className="text-indigo-500 mt-1" />
          <div className="flex flex-col text-left">
            <p className="m-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-blue-400">
                Aprendizaje constante
            </p>
            <p className="m-0 text-white">
                La tecnologia evoluciona todos los dias y me mantengo en constante aprendizaje.
            </p>
        </div>
        </div>
        <div className="flex items-start gap-3 pt-3 border-t border-t-white/10">
          <Users className="text-indigo-500 mt-1" />
          <div className="flex flex-col text-left">
            <p className="m-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-blue-400">
                Trabajo en equipo
            </p>
            <p className="m-0 text-white">
                Me gusta colaborar, compartir ideas y construir soluciones junto a otros.
            </p>
        </div>
        </div>
        <div className="flex items-start gap-3 pt-3 border-t border-t-white/10">
          <CodeXml className="text-indigo-500 mt-1" />
          <div className="flex flex-col text-left">
            <p className="m-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-blue-400">
                Atencion al detalle
            </p>
            <p className="m-0 text-white">
                Cuido cada detalle en el codigo y en el diseño para lograr productos de calidad.
            </p>
        </div>
        </div>
        <div className="flex items-start gap-3 pt-3 border-t border-t-white/10">
          <Rocket className="text-indigo-500 mt-1" />
          <div className="flex flex-col text-left">
            <p className="m-0 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-indigo-400 to-blue-400">
                Mentalidad de crecimiento
            </p>
            <p className="m-0 text-white">
                Siempre busco superarme, asumir nuevos retos y seguir creciendo profesionalmente.
            </p>
        </div>
        </div>
        </div>
        </div>
            <h1 className="text-transparent bg-clip-text text-2xl m-10 bg-gradient-to-r from-indigo-500 via-indigo-400 to-blue-400">
                Tecnologias y Herramientas que utilizo
            </h1>
            <div className="mt-6 mx-4 mr-10 ml-10 bg-[#202020] shadow-[0_6px_16px_rgba(0,0,0,0.45),0_28px_55px_rgba(0,0,0,0.85)] p-2 rounded-md">
            <h3 className="text-transparent bg-clip-text text-2xl m-10 bg-gradient-to-r from-indigo-500 via-indigo-400 to-blue-400">Frontend</h3>
            <div className="grid xl:grid-flow-col xl:grid-rows-1 grid-flow-col grid-rows-3 justify-items-center gap-6 mt-2 mb-10">
            <img src={html5} height="55" width="55" />
            <img src={css3}height="55" width="55" />
            <img src={js} height="55" width="55" />
            <img src={react} height="55" width="55" />
            <img src={redux} height="55" width="55" />
            <img src={tailwind} height="55" width="55" />
            </div>
            </div>
            <div className="translate-y-12 xl:translate-y-18 mx-4 mr-10 ml-10 bg-[#202020] shadow-[0_6px_16px_rgba(0,0,0,0.45),0_28px_55px_rgba(0,0,0,0.85)] p-2 rounded-md">
            <h3 className="text-transparent bg-clip-text text-2xl m-10 bg-gradient-to-r from-indigo-500 via-indigo-400 to-blue-400">Backend</h3>
            <div className="grid xl:grid-flow-col xl:grid-rows-1 grid-flow-col grid-rows-3 justify-items-center gap-6 mt-2 mb-10">
            <img src={nodejs} height="55" width="55" />
            <img src={mysql} height="55" width="55" />
            <img src={postgresql} height="55" width="55" />
            <img src={express} height="55" width="55" />
            <img src={postman} height="55" width="55" />
            <img src={git} height="55" width="55" />
            </div>
            </div>
        </div>
        </section>
        </motion.div>
    )
}