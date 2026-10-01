import { useState } from "react"
import { RingLoader } from "react-spinners"
import { motion } from "framer-motion";
import { User, Mail, Tag, MessageCircle } from "lucide-react"
import { PiGithubLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";
import LucasC_CV from "../assets/Lucas_Cano_CV.pdf"
import { useForm } from "react-hook-form"

export const Form = () => {
    const API_URL = import.meta.env.VITE_API_URL;
    const [sending, setSending] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ shouldUseNativeValidation: true })


    const onSubmit = async (data) => {
        setSending(true)
        try {
            const res = await fetch(`https://backend-portfolio-7c6b.onrender.com/send`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })

            const result = await res.json();
            console.log(result)
            if (result.success) {
                alert("correo enviado correctamente")
                reset()
            } else {
                alert("el mensaje no se envio")
            }

        } catch (error) {
            console.error(error)
            alert("error en el servidor")
        } finally {
            setSending(false)
        }

    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
            <section id="contact" className=" min-h-screen flex flex-col justify-center items-center mt-10">
                <div className="text-center mt-20 w-full max-w-[360px] xl:max-w-[1600px] mx-auto px-4">
                    <div className="flex flex-col items-center xl:hidden">
                        <div className="p-3 rounded-2xl bg-violet-500/10 border border-violet-500/20 shadow-[0_0_25px_rgba(124,58,237,0.15)]">
                            <MessageCircle size={32} className="text-violet-500" />
                        </div>
                        <h1 className="text-zinc-300 text-center font-bold text-2xl mt-10">Contacto</h1>
                        <p className="text-zinc-400 text-sm md:text-lg mt-4 text-center p-2 w-full max-w-[360px] xl:max-w-[900px] mx-auto">
                            ¿Tenés un proyecto, una propuesta freelance o una búsqueda laboral?
                            <br />
                            Soy desarrollador Fullstack, con experiencia en frontend y backend, trabajando con tecnologías como React, JavaScript, TypeScript, Node.js y bases de datos. Contame brevemente tu propuesta y hablemos.
                        </p>
                    </div>

                    <div className="mt-10 w-full">
                        <div className="flex flex-col xl:flex-row items-stretch gap-6 xl:gap-16 w-full">
                            <aside className="w-full xl:w-[40%] flex justify-center xl:justify-start items-stretch py-6 xl:pr-16">
                                <div className="flex flex-col xl:justify-start gap-0 xl:gap-0 w-full h-full">
                                    <div className="hidden xl:flex flex-col items-center text-center px-2">
                                        <div className="p-4 rounded-2xl bg-violet-500/10 border border-violet-500/20 shadow-[0_0_25px_rgba(124,58,237,0.15)] flex items-center justify-center">
                                            <MessageCircle size={32} className="text-violet-500" />
                                        </div>
                                        <h2 className="text-zinc-300 font-bold text-2xl mt-4">Contacto</h2>
                                        <p className="text-zinc-400 text-sm md:text-lg mt-4 text-center p-2 w-full max-w-[360px] xl:max-w-[900px] mx-auto">¿Tenés un proyecto, una propuesta freelance o una oportunidad laboral?

                                            Soy desarrollador Fullstack, con experiencia en frontend y backend, trabajando con tecnologías como React, JavaScript, TypeScript, Node.js y bases de datos. Contame brevemente tu propuesta y hablemos.</p>
                                    </div>
                                    <div className="flex flex-col gap-4 w-full items-stretch xl:gap-5 xl:mt-6">
                                        <a
                                            href="https://github.com/Lucas0894"
                                            aria-label="Github"
                                            className="relative bg-[#18181b] border border-white/5 group flex items-center w-full justify-start rounded-2xl px-4 py-3 sm:px-6 sm:py-4 shadow-[0_4px_16px_rgba(0,0,0,0.45)] hover:scale-[1.02] transition-transform hover:border-violet-500/40 hover:shadow-[0_6px_16px_rgba(124,58,237,0.18),0_28px_55px_rgba(124,58,237,0.28)]"
                                        >
                                            <PiGithubLogoFill size={24} className="text-zinc-300 mr-3 shrink-0" />
                                            <div className="flex flex-col text-start">
                                                <span className="text-zinc-400 font-medium text-sm sm:text-lg">
                                                    Github
                                                </span>
                                                <span className="text-white text-xs sm:text-sm font-light">
                                                    github.com/Lucas0894
                                                </span>
                                            </div>
                                        </a>

                                        <a
                                            href="http://www.linkedin.com/in/lucas-ca%C3%B1o-0a5406223"
                                            aria-label="Linkedin"
                                            className="relative bg-[#18181b] border border-white/5 group flex items-center w-full justify-start rounded-2xl px-4 py-3 sm:px-6 sm:py-4 shadow-[0_4px_16px_rgba(0,0,0,0.45)] hover:scale-[1.02] transition-transform hover:border-violet-500/40 hover:shadow-[0_6px_16px_rgba(124,58,237,0.18),0_28px_55px_rgba(124,58,237,0.28)]"
                                        >
                                            <FaLinkedinIn size={24} className="text-zinc-300 mr-3 shrink-0" />
                                            <div className="flex flex-col text-start">
                                                <span className="text-zinc-400 font-medium text-sm sm:text-lg">
                                                    Linkedin
                                                </span>
                                                <span className="text-white text-xs sm:text-sm font-light">
                                                    linkedin.com/in/lucas-caño
                                                </span>
                                            </div>
                                        </a>

                                        <a
                                            href={LucasC_CV}
                                            download
                                            aria-label="CV"
                                            className="relative bg-[#18181b] border border-white/5 group flex items-center w-full justify-start rounded-2xl px-4 py-3 sm:px-6 sm:py-4 shadow-[0_4px_16px_rgba(0,0,0,0.45)] hover:scale-[1.02] transition-transform hover:border-violet-500/40 hover:shadow-[0_6px_16px_rgba(124,58,237,0.18),0_28px_55px_rgba(124,58,237,0.28)]"
                                        >
                                            <IoDocumentAttachOutline size={24} className="text-zinc-300 mr-3 shrink-0" />
                                            <div className="flex flex-col text-start">
                                                <span className="text-zinc-400 font-medium text-sm sm:text-lg">
                                                    CV
                                                </span>
                                                <span className="text-white text-xs sm:text-sm font-light">
                                                    Descarga mi CV
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </aside>

                            <div className="relative w-full xl:w-[60%] mx-auto bg-[#202020] shadow-[0_6px_16px_rgba(0,0,0,0.45),0_28px_55px_rgba(0,0,0,0.85)] border border-white/5 rounded-3xl p-4 sm:p-6 xl:p-8 xl:pl-12 h-full">
                                <form className="flex flex-col gap-4 items-center xl:items-start justify-center backdrop-blur-sm mt-8 p-2 sm:p-5 w-full h-full" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="relative w-full">
                                        <input {...register("nombre", { required: "El nombre es obligatorio" })} className="w-full border border-white/5 pl-10 text-zinc-200 bg-zinc-800 transition-all duration-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-700" placeholder="Nombre y Apellido" />
                                        <User className="absolute left-2 top-1/2 -translate-y-1/2 text-violet-500" />
                                    </div>
                                    <div className="relative w-full">
                                        <input type="email" {...register("email", { required: "El email es obligatorio", pattern: { value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/ } })} className="w-full pl-10 border border-white/5 text-zinc-200 bg-zinc-800 transition-all duration-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-700" placeholder="E-mail" />
                                        <Mail className="absolute left-2 top-1/2 -translate-y-1/2 text-violet-500" />
                                    </div>
                                    <div className="relative w-full">
                                        <input {...register("asunto", { required: "El asunto es obligatorio" })} className="w-full pl-10 border border-white/5 text-zinc-200 bg-zinc-800 transition-all duration-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-700" placeholder="Asunto" />
                                        <Tag className="absolute left-2 top-1/2 -translate-y-1/2 text-violet-500" />
                                    </div>
                                    <div className="relative w-full">
                                        <textarea {...register("mensaje", { required: "El mensaje es obligatorio" })} className="resize-none border border-white/5 text-zinc-200 transition-all duration-300 w-full pl-10 h-60 xl:h-72 bg-zinc-800 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-700" placeholder="Mensaje" />
                                        <MessageCircle className="absolute left-2 top-2 text-violet-500" />
                                    </div>
                                    <button className="text-zinc-300 font-bold bg-gradient-to-r from-violet-600 to-indigo-800 p-2 w-full rounded-md cursor-pointer hover:bg-indigo-700 hover:shadow-[0_0_20px_4px_rgba(99,102,241,0.8)] duration-300">Enviar mensaje</button>
                                    {sending ? (
                                        <div className={`absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center rounded-md z-10`}>
                                            <RingLoader size={70} color="rgba(31, 26, 97, 1)" />
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}