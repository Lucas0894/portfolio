import videogamePage from "../assets/VideogameProject.png"
import foodPage from "../assets/FoodProject.png"
import reparo from "../assets/Reparo.io.png"
import portfolio from "../assets/portfolio.png"
import todoList from "../assets/todoList.png"
import weatherApp from "../assets/weatherApp.png"
import { useState, useEffect } from "react"
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { motion } from "framer-motion";
import { Icon } from "@iconify/react"

export const Projects = () => {

  const arrProject = [
    {
      id: 1,
      name: "Videogame App",
      image: videogamePage,
      icon: "solar:gamepad-bold",
      shortDescription: "Exploración y gestión de videojuegos",
      technologies: ["React", "Redux", "React Router", "Javascript", "CSS", "Nodejs", "Express", "Sequelize", "PostgreSQL"],
      gitHub: "https://github.com/Lucas0894/AppVideogame",
      description: "Single Page Application (SPA) desarrollada para la exploración y gestión de videojuegos. Permite buscar títulos, ordenarlos alfabéticamente o por puntuación, y agregar videojuegos a una biblioteca personalizada con información como nombre e imagen."

    },
    {
      id: 2,
      name: "Food App",
      image: foodPage,
      icon: "fluent:food-16-filled",
      gitHub: "https://github.com/Lucas0894/deployFood",
      shortDescription: "Exploración de opciones gastronómicas",
      technologies: ["React", "Redux", "React Router", "Javascript", "CSS", "Nodejs", "Express", "Sequelize", "PostgreSQL"],
      description: "Single Page Application (SPA) enfocada en el descubrimiento y organización de recetas de cocina. Ofrece búsqueda interactiva, filtros de ordenamiento por nombre y valoración, y la posibilidad de guardar recetas en una colección personal con sus datos esenciales, como imagen e ingredientes."
    },
    {
      id: 3,
      name: "Reparo.io",
      image: reparo,
      icon: "mdi:tools",
      page: "https://reparoio.vercel.app/",
      gitHub: "https://github.com/Joel301/reparo_io_FrontEnd",
      shortDescription: "E-commerce para conectar con tecnicos",
      technologies: ["React", "Firebase", "Bootstrap", "Redux", "React Router", "Javascript", "Nodejs", "Express", "Sequelize", "PostgreSQL"],
      description: "Reparo.io es un ecommerce desarrollado en equipo (8 personas) bajo metodología Scrum, que conecta usuarios con técnicos especializados. Incluye autenticación, rol administrador y pasarela de pago integrada con Mercado Pago."
    },
    {
      id: 4,
      name: "Portfolio",
      image: portfolio,
      icon: "zondicons:portfolio",
      page: "https://lucascano.vercel.app/",
      gitHub: "https://github.com/Lucas0894/portfolio",
      shortDescription: "Portfolio para conocer mis proyectos, habilidades y experiencia.",
      technologies: ["React", "React Router", "Javascript", "Tailwind", "Nodejs", "Express", "Nodemailer"],
      description: "Portfolio personal desarrollado para presentar mis proyectos, información sobre mí y enlaces a mis perfiles profesionales (GitHub y LinkedIn). Incluye una sección de contacto vía correo electrónico, descarga de CV, y fue construido con HTML, CSS y JavaScript, utilizando React y Tailwind CSS en el frontend, Express en el backend y Vercel para el despliegue."
    },
    {
      id: 5,
      name: "Todo List",
      image: todoList,
      icon: "lucide:list-todo",
      page: "https://todo-list-lucas-pi.vercel.app/",
      gitHub: "https://github.com/Lucas0894/todo_list.git",
      shortDescription: "Organizador para listar tareas",
      technologies: ["React", "Javascript", "Tailwind", "Typescript"],
      description: "Una aplicación para gestionar tareas diarias. Permite agregar, editar, marcar como completadas y eliminar tareas, con persistencia de datos en localStorage. Construida con React, TailwindCSS y Vite."

    },
    {
      id: 6,
      name: "Weather App",
      image: weatherApp,
      icon: "solar:cloud-sun-bold",
      page: "https://weather-app-alpha-ten-c7jpokjvr8.vercel.app/",
      gitHub: "https://github.com/Lucas0894/weatherApp.git",
      shortDescription: "Clima en tiempo real",
      technologies: ["React", "Javascript", "RapidAPI (Geocoding)", "Tailwind", "OpenWeather API"],
      description: "Weather app desarrollada en React que muestra el clima en tiempo real mediante APIs externas. Permite buscar ciudades, obtener datos por geolocalización y cuenta con diseño responsive adaptado a dispositivos móviles y desktop."
    }
  ];

  const [projectPerPage, setProjectPerPage] = useState(3);
  const [selected, setSelected] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastPage = projectPerPage * currentPage;
  const indexOfFirstPage = indexOfLastPage - projectPerPage;
  const currentProjects = arrProject.slice(indexOfFirstPage, indexOfLastPage);
  const totalPages = Math.ceil(arrProject.length / projectPerPage)
  const [direction, setDirection] = useState("right");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setProjectPerPage(1)
      } else {
        setProjectPerPage(3)
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const handleSelected = (select) => {
    if (select === selected) {
      setSelected("")
    } else
      setSelected(select)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}>
      <section id="projects" className="min-h-screen flex justify-center items-center mt-10">

        <div className="w-full">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-white to-violet-300 font-bold text-3xl md:text-4xl text-center tracking-tight">
            Proyectos
          </h1>
          <p className="text-zinc-400 text-sm md:text-lg mt-4 text-center p-2 w-full max-w-[360px] xl:max-w-[760px] mx-auto leading-relaxed">En esta sección encontrarás una selección de mis proyectos más destacados, que reflejan mi experiencia y habilidades en el desarrollo Fullstack.</p>
          <div className="relative w-full max-w-[360px] xl:max-w-[1600px] mx-auto px-4">
            {
              currentPage > 1 && (
                <button onClick={() => {
                  if (currentPage > 1) {
                    setDirection("");
                    setDirection(window.innerWidth < 640 ? "top" : "left")
                    setCurrentPage(currentPage - 1)
                  }
                }} className="z-10 absolute border border-violet-400 text-violet-400 top-0 left-1/2 -translate-x-1/2 -translate-y-full mt-5 xl:-left-12 xl:top-1/2 xl:-translate-y-1/2 xl:translate-x-0 cursor-pointer text-2xl hover:scale-110 transform rounded-full w-10 h-10 flex justify-center items-center transition duration-200">
                  <ChevronsLeft className="rotate-90 xl:rotate-0" />

                </button>

              )
            }
            <div className="mt-8 py-12 xl:py-5 flex items-center justify-center w-full">
              <div key={currentPage} className={`grid grid-cols-1 xl:grid-cols-3 justify-items-center gap-7 ${direction === "top" ? "slide-In-Top" : direction === "bottom" ? "slide-In-Bottom" : direction === "left" ? "slide-In-Left" : "slide-In-Right"}`}>
                {
                  currentProjects.map((item, i) => {

                    return (
                      <div onClick={() => handleSelected(item.name)} key={i} className={`group bg-gradient-to-b from-zinc-900 to-[#111113] border relative w-full h-[400px] xl:w-[460px] xl:h-[390px] flex items-center justify-center transition transform hover:-translate-y-1 rounded-3xl overflow-hidden cursor-pointer ${item.name === selected ? "border-violet-400/60 shadow-[0_0_35px_4px_rgba(124,58,237,0.3),0_10px_24px_rgba(0,0,0,0.45)]" : "border-white/10 hover:border-violet-400/50 hover:shadow-[0_0_35px_4px_rgba(124,58,237,0.25),0_10px_24px_rgba(0,0,0,0.45)] shadow-[0_10px_24px_rgba(0,0,0,0.35)]"} duration-300`}>
                        <div className="w-full h-full flex flex-col">
                          <div className="h-[220px] xl:h-[58%] overflow-hidden relative">
                            <img src={item.image} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />
                          </div>
                          <div className="flex items-center px-1">
                            <div className="w-16 h-16 m-3 shrink-0 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-800 ring-1 ring-white/15 shadow-lg shadow-violet-950/40 flex items-center justify-center">
                              <Icon icon={item.icon} className="text-4xl text-white" />
                            </div>
                            <div className="flex flex-col justify-start min-w-0 pr-3">
                              <div>
                                {
                                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{item.name}</h3>
                                }
                              </div>
                              <div>
                                {
                                  <h4 className="text-sm text-zinc-400">{item.shortDescription}</h4>
                                }
                              </div>
                            </div>
                          </div>
                          <div className="flex ml-3 mt-2 flex-wrap gap-2">
                            {
                              item.technologies.slice(0, 4).map((tech) => (
                                <span className="text-[11px] px-2.5 py-1 font-medium text-violet-200 bg-violet-400/10 border border-violet-300/15 rounded-full" key={tech}>{tech}</span>
                              ))
                            }
                            {
                              item.technologies.length > 4 && (
                                <span className="text-[11px] px-2.5 py-1 font-medium text-violet-200 bg-violet-400/10 border border-violet-300/15 rounded-full">+ {item.technologies.length - 4}</span>
                              )
                            }
                          </div>
                        </div>
                        <div className={`text-[14px] absolute inset-0 bg-black/0 p-2 hover:bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center text-zinc-200 text-center opacity-0 hover:opacity-100 transition duration-300  ${item.name === selected ? "opacity-100 bg-black/60" : "opacity-0"}
                       group-hover:opacity-100 group-hover:bg-black/70`}>
                          {item.description}
                          <button className="p-2 m-2 sm:p-1 sm:m-1 bg-violet-700/80 rounded-3xl cursor-pointer transition border border-violet-300/30 hover:border-violet-200/60 hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] transform hover:scale-105">
                            <a className="p-3" href={item.gitHub}>Link Repositorio</a>
                          </button>
                          {
                            item.page ?
                              <button className="p-2 m-2 sm:p-1 sm:m-1 bg-violet-700/80 rounded-3xl cursor-pointer border border-violet-300/30 hover:border-violet-200/60 hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] transition transform hover:scale-105">
                                <a className="p-3" href={item.page}>Sitio Web</a>
                              </button> : ""
                          }
                        </div>

                      </div>

                    )
                  })
                }
              </div>
            </div>
            {
              currentPage < totalPages && (
                <button disabled={currentPage == totalPages} onClick={() => {
                  if (currentPage < totalPages) {
                    setDirection("")
                    setDirection(window.innerWidth < 640 ? "bottom" : "right")
                    setCurrentPage(currentPage + 1)
                  }
                }} className="absolute border border-violet-400 z-10 bottom-0 left-1/2 -translate-x-1/2 translate-y-full mt-5 xl:left-full xl:ml-5 xl:top-1/2 xl:bottom-auto xl:-translate-y-1/2 cursor-pointer text-violet-400 text-2xl hover:scale-110 transform rounded-full w-10 h-10 flex justify-center items-center transition duration-200">
                  <ChevronsRight className="-rotate-270 xl:rotate-0" />
                </button>

              )
            }
          </div>
        </div>

      </section>
    </motion.div>
  )
}



