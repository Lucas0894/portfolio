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
        <section id="about" className="min-h-screen flex justify-center items-center -mt-10">
        <div className="text-center">
        <h1 className="font-bold text-white text-2xl">About Me</h1>
        <p className="text-white mt-2 p-5">I'm a persistent, adaptable front-end developer with strong teamwork skills. I focus on problem-solving and clear communication to improve the user experience on every project.</p>
        <div className="mt-6 mx-4 shadow-[0_0_15px_rgba(255,255,255,0.3)] p-2 rounded-md">
            <h1 className="text-white text-2xl">
                Skills
            </h1>
            <div className="grid xl:grid-flow-col xl:grid-rows-2 grid-flow-col grid-rows-6 justify-items-center gap-6 mt-2">
            <img src={html5} height="55" width="55" />
            <img src={css3}height="55" width="55" />
            <img src={js} height="55" width="55" />
            <img src={nodejs} height="55" width="55" />
            <img src={react} height="55" width="55" />
            <img src={mysql} height="55" width="55" />
            <img src={postgresql} height="55" width="55" />
            <img src={express} height="55" width="55" />
            <img src={postman} height="55" width="55" />
            <img src={redux} height="55" width="55" />
            <img src={git} height="55" width="55" />
            <img src={tailwind} height="55" width="55" />
            </div>
        </div>
        </div>
        </section>
        </>
    )
}