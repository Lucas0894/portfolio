

export const Footer = () => {
    return (
        <>
            <section className="flex items-center justify-center mb-2 mt-16 border-t border-white/[0.08] bg-black/10">
                <div>
                    <div className="flex gap-5 m-3 mt-6 items-center justify-center">
                        <a href="#home" className="text-zinc-500 text-sm font-medium cursor-pointer transition-colors hover:text-violet-200">Inicio</a>
                        <a href="#about" className="text-zinc-500 text-sm font-medium cursor-pointer transition-colors hover:text-violet-200">Sobre mí</a>
                        <a href="#projects" className="text-zinc-500 text-sm font-medium cursor-pointer transition-colors hover:text-violet-200">Proyectos</a>
                        <a href="#contact" className="text-zinc-500 text-sm font-medium cursor-pointer transition-colors hover:text-violet-200">Contacto</a>
                    </div>
                    <div className="text-zinc-600 text-[11px] xl:text-xs text-center pb-5">
                        2025 Designed & Developed by Lucas Caño. All rights reserved
                    </div>
                </div>
            </section>
        </>
    )
}