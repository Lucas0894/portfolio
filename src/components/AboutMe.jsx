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

export const AboutMe = ()=>{
    return (
        <>
        <section id="about" className="min-h-screen flex justify-center items-center mt-10">
        <div className="text-center">
        <h1 className="font-bold text-white text-2xl">About Me</h1>
        <p className="text-white mt-5">I'm a persistent, adaptable front-end developer with strong teamwork skills. I focus on problem-solving and clear communication to improve the user experience on every project.</p>
        <div className="mt-6 mx-4 shadow-[0_0_15px_rgba(255,255,255,0.3)] p-3 rounded-md">
            <h1 className="text-white text-2xl">
                Skills
            </h1>
            <div className="grid xl:grid-flow-col xl:grid-rows-2 grid-flow-col grid-rows-6 justify-items-center gap-6 mt-4">
            <img src={html5} height="70" width="70" />
            <img src={css3}height="70" width="70" />
            <img src={js} height="70" width="70" />
            <img src={nodejs} height="70" width="70" />
            <img src={react} height="70" width="70" />
            <img src={mysql} height="70" width="70" />
            <img src={postgresql} height="70" width="70" />
            <img src={express} height="70" width="70" />
            <img src={postman} height="70" width="70" />
            <img src={redux} height="70" width="70" />
            <img src={git} height="70" width="70" />
            <img src={tailwind} height="70" width="70" />
            </div>
        </div>
        </div>
        </section>
        </>
    )
}