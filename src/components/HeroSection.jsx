
import lucas from "../assets/lucas.png"


export const HeroSection = ()=>{
    return (
        <section id="home" className="min-h-screen container mx-auto flex flex-col justify-center items-center xl:-pt-20 -mt-15 xl:flex-row xl:mt-0 relative">
        <div className="text-center px-4">
        <h1 className="text-white text-2x1 font-bold xl:text-4xl">Software Developer</h1>
        <p className=" text-indigo-700 text-4xl xl:text-7xl">Hi, I'm Lucas Caño.</p>
        <p className="text-white mt-6">I'm a front-end developer who creates
            incredible web experiences.</p>
        <p className="text-white">
            I transform ideas into dynamic, responsive web interfaces, combining design and technology to deliver unique user experiences.
        </p>
        </div>
            <img alt="img Lucas" src={lucas} className="mt-6 w-60 h-60 xl:w-130 xl:h-130 object-cover mask-radial-from-50% mask-radial-to-70%" />
        </section>
    )
}