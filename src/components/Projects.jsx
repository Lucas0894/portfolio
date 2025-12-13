import videogamePage from "../assets/VideogameProject.png"
import foodPage from "../assets/FoodProject.png"
import reparo from "../assets/Reparo.io.png"
import portfolio from "../assets/portfolio.png"
import { useState, useEffect } from "react"
import { ChevronsLeft, ChevronsRight  } from 'lucide-react';


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
   const [selected, setSelected] = useState(null)
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

   const handleSelected = (select)=>{
    if(select === selected){
      setSelected("")
    }else
      setSelected(select)   
   }
   

    return(
        <>
        <section id="projects" className="min-h-screen flex justify-center items-center mt-10">
            <div>
            <h1 className="text-white font-bold text-2xl text-center">
                Projects
            </h1>
            <p className="text-white mt-4 text-center p-2">In this section, you'll find a selection of my most notable projects, which reflect my experience and skills in web development.</p>
            <div className="relative flex items-center justify-center w-full max-w-[1600px]">
            <button onClick={()=>{
              if(currentPage > 1){
                setDirection("");
                  setDirection("left")
                  setCurrentPage(currentPage - 1)
              }
            }} className="z-10 absolute left-2 sm:-left-8 top-1/2 -translate-y-1/2 cursor-pointer text-white text-2xl hover:scale-110 transform  rounded-full w-10 h-10 flex justify-center items-center hover:bg-gray-700/80 transition"
                >
                  <ChevronsLeft />
                  
            </button>
            <div className="mt-8  border p-5 rounded-md flex gap-3 items-center justify-center relative w-full ">
            <div key={currentPage} className={`grid xl:grid-flow-col justify-items-center gap-6  ${direction === "left"? "slide-In-Left": "slide-In-Right"}`}>
              {
                currentProjects.map((item, i)=>{

                  return (
                    <div onClick={()=>handleSelected(item.name)} key={i} className={`relative w-70 h-50 sm:w-115 sm:h-90 flex items-center justify-center rounded-md overflow-hidden hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] cursor-pointer ${item.name === selected? "shadow-[0_0_15px_rgba(255,255,255,0.3)]": ""} transition duration-300`}>
                      <img src={item.image} className="w-full h-full object-contain object-center rounded-md cursor-pointer hover:grayscale hover:duration-300 border"/>
                      <div className={`text-[14px] absolute inset-0 bg-black/0 p-2 hover:bg-black/50 backdrop-blur-sm flex items-center justify-center text-white text-center opacity-0 hover:opacity-100 transition duration-300  ${item.name === selected ? "opacity-100 bg-black/60" : "opacity-0"}
      group-hover:opacity-100 group-hover:bg-black/60`}>
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
                  <ChevronsRight />
            </button>           
            </div>
            </div>
                      
        </section>
        </>
    )
}




