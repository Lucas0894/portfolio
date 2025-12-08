import videogamePage from "../assets/VideogameProject.png"
import foodPage from "../assets/FoodProject.png"
import reparo from "../assets/Reparo.io.png"
import portfolio from "../assets/portfolio.png"
import { useState, useEffect, useRef } from "react"

export const Projects = ()=>{

  const arrProject = [ /* ... tus items ... */ ];

  const [projectPerPage, setProjectPerPage]= useState(3);
  const [animation, setAnimation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const containerRef = useRef(null); // <-- ref para forzar reflow
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

  // función helper que reinicia la animación de forma fiable
  const playAnimation = (className) => {
    // quitar clase
    setAnimation("");
    // forzar reflow y luego aplicar la clase en el próximo frame
    // preferible: requestAnimationFrame -> lectura offsetWidth -> setAnimation
    requestAnimationFrame(() => {
      // lectura forzada para reflow
      if (containerRef.current) containerRef.current.offsetWidth;
      // ahora sí aplicamos la clase
      setAnimation(className);
    });
  }

  const goPrev = () => {
    if (currentPage > 1) {
      setDirection("left");
      setCurrentPage(prev => prev - 1);
      playAnimation("slide-In-Right"); // cuando vas a la izquierda, animás entrada desde la derecha
    }
  }

  const goNext = () => {
    if (currentPage < totalPages) {
      setDirection("right");
      setCurrentPage(prev => prev + 1);
      playAnimation("slide-In-Left"); // entrada desde la izquierda
    }
  }

    return(
    <section id="projects" className="min-h-screen flex justify-center items-center -mt-20">
      <div>
        
        <h1 className="text-white font-bold text-2xl text-center">Projects</h1>
        <p className="text-white mt-4 text-center">In this section...</p>

        <div className="relative flex items-center justify-center w-full max-w-[1600px] overflow-hidden">

          <button onClick={goPrev} className="absolute left-2 top-1/2 -translate-y-1/2 z-10">Prev</button>

          <div className="mt-8 border p-5 rounded-md flex items-center justify-center w-full">
            <div ref={containerRef} className={`grid xl:grid-flow-col gap-6 ${animation}`}>
              
              {currentProjects.map(item => (
                <div key={item.id} className="relative w-90 h-70 border rounded-md">
                  <img src={item.image} className="w-full h-full object-contain"/>
                </div>
              ))}

            </div>
          </div>

          <button onClick={goNext} className="absolute right-2 top-1/2 -translate-y-1/2 z-10">Next</button>

        </div>
      </div>
    </section>
  )
}
