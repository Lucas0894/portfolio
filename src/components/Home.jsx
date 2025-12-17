import { NavBar } from "./Navbar"
import { HeroSection } from "./HeroSection"
import { AboutMe } from "./AboutMe"
import { Projects } from "./Projects"
import { Form } from "./Form"
import { Footer } from "./Footer"

export const Home = ()=>{
    return (
        <>
        
        
          
          <HeroSection />
          <AboutMe />
          <Projects />
          <Form />
          <Footer />
        </>
    )
}