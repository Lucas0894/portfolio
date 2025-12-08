import videogamePage from "../assets/VideogameProject.png"
import foodPage from "../assets/FoodProject.png"
import reparo from "../assets/Reparo.io.png"
import portfolio from "../assets/portfolio.png"
import { useState, useEffect } from "react"


export const Projects = ()=>{

   const arrProject = [
    {
      id: 1,
      name: "Videogame",
      image: videogamePage,
      description: "En este proyecto se creo una spa de videojuegos en la cual buscamos el que queremos encontrar de manera ascendente y descendente y podemos agregar alguno que no este en el catalogo"

    },
    {
      id: 2,
      name: "foodProject",
      image: foodPage,
      description: "En este proyecto se creo una spa de videojuegos en la cual buscamos el que queremos encontrar de manera ascendente y descendente y podemos agregar alguno que no este en el catalogo"
    },
    {
      id: 3,
      name: "reparoProject",
      image: reparo,
      description: "En este proyecto se creo una spa de videojuegos en la cual buscamos el que queremos encontrar de manera ascendente y descendente y podemos agregar alguno que no este en el catalogo"
    },
    {
      id: 4,
      name: "portfolio",
      image: portfolio,
      description: "En este proyecto se creo una spa de videojuegos en la cual buscamos el que queremos encontrar de manera ascendente y descendente y podemos agregar alguno que no este en el catalogo"
    }
   ];

   const [projectPerPage, setProjectPerPage]= useState(3);
   const [currentPage, setCurrentPage] = useState(1);
   const indexOfLastPage = projectPerPage * currentPage;
   const indexOfFirstPage = indexOfLastPage - projectPerPage;
   const currentProjects = arrProject.slice(indexOfFirstPage, indexOfLastPage);
   const totalPages = Math.ceil(arrProject.length/projectPerPage)
   const [direction, setDirection] = useState("right");
   useEffect(()=>{
    const handleResize = ()=>{
      if(window.innerWidth < 640){
        setProjectPerPage(1)
      }else{
        setProjectPerPage(3)
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize)
    return ()=>{
      window.removeEventListener("resize", handleResize)
    }
   },[])
   

    return(
        <>
        <section id="projects" className="min-h-screen flex justify-center items-center mt-10">
            <div>
            <h1 className="text-white font-bold text-2xl text-center">
                Projects
            </h1>
            <p className="text-white mt-4 text-center">In this section, you'll find a selection of my most notable projects, which reflect my experience and skills in web development.</p>
            <div className="relative flex items-center justify-center w-full max-w-[1600px]">
            <button onClick={()=>{
              if(currentPage > 1){
                setDirection("");
                setDirection("left")
                setCurrentPage(currentPage - 1)
              }
            }} className="z-10 absolute left-2 sm:-left-8 top-1/2 -translate-y-1/2 cursor-pointer text-white text-2xl hover:scale-110 transform  rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-700/80 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  
            </button>
            <div className="mt-8  border p-5 rounded-md flex gap-3 items-center justify-center relative w-full ">
            <div key={`${currentPage}-${direction}`} className={`grid xl:grid-flow-col justify-items-center gap-6  ${direction === "left"? "slide-In-Left": "slide-In-Right"}`}>
              {
                currentProjects.map((item, i)=>{

                  return (
                    <div key={i} className="relative w-90 h-70 sm:w-115 sm:h-90 flex items-center justify-center rounded-md overflow-hidden hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition duration-300">
                      <img src={item.image} className="w-full h-full object-contain object-center rounded-md cursor-pointer hover:grayscale hover:duration-300 border"/>
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center text-white text-center opacity-0 hover:opacity-100 transition duration-300">
                      {item.description}
                      </div>
                      </div>
    
                  )
                })
              }
            </div>
            </div>
            <button disabled={currentPage == totalPages} onClick={()=>{
              if(currentPage < totalPages){
                setDirection("")
                setDirection("right")
                setCurrentPage(currentPage + 1)
              }
            }} className="absolute z-10 right-2 sm:-right-8 top-1/2 -translate-y-1/2 cursor-pointer  text-white text-2xl hover:scale-110 transform rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-700/80 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
            </button>           
            </div>
            </div>
                      
        </section>
        </>
    )
}




