import { useState } from "react"
import { RingLoader } from "react-spinners"
import { motion } from "framer-motion";
import { User, Mail, Tag, MessageCircle } from "lucide-react"
import { useForm } from "react-hook-form"

export const Form = ()=>{
    const API_URL = import.meta.env.VITE_API_URL;
    const [sending, setSending] = useState(false)

    const {
        register, 
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({ shouldUseNativeValidation: true})


    const onSubmit = async (data)=>{
        setSending(true)
        try {
            const res = await fetch(`https://backend-portfolio-7c6b.onrender.com/send`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            })
    
            const result = await res.json();
            console.log(result)
            if(result.success){
                alert("correo enviado correctamente")
                reset()
            }else{
                alert("el mensaje no se envio")
            }
        } catch (error) {
            console.error(error)
            alert("error en el servidor")
        }finally{
            setSending(false)
        }
    }


   return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}>
    <section id="contact" className=" min-h-screen flex flex-col justify-center items-center mt-10">
    <div className="text-center w-full max-w-[360px] xl:max-w-[800px] mx-auto px-4">
    <div className="flex flex-col items-center">
    <div className="p-3 rounded-2xl bg-violet-500/10 border border-violet-500/20 shadow-[0_0_25px_rgba(124,58,237,0.15)]">
    <MessageCircle
    size={32}
    className="text-violet-500"
    />
    </div>
    <h1 className="text-zinc-300 text-center font-bold text-2xl mt-10">Contacto</h1> 
    <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-md mx-auto text-center">
    ¿Tenés un proyecto o una oportunidad laboral?
    <br />
    Me encantaría conocerte.
    </p>
    </div>
    <div className="relative w-full mx-auto bg-[#202020] shadow-[0_6px_16px_rgba(0,0,0,0.45),0_28px_55px_rgba(0,0,0,0.85)] mt-10 border border-white/5 rounded-3xl p-2 sm:p-5">
    <form className="flex flex-col gap-4 items-center justify-center backdrop-blur-sm mt-8 p-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="relative w-full">
        <input {...register("nombre",{required: "El nombre es obligatorio"})} className="w-full border border-white/5 pl-10 text-zinc-200 bg-zinc-800 transition-all duration-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-700" placeholder="Nombre y Apellido" />
        <User className="absolute left-2 top-1/2 -translate-y-1/2 text-violet-500" />
        </div>
        <div className="relative w-full">
        <input type="email" {...register("email",{required: "El email es obligatorio", pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/}})} className="w-full pl-10 border border-white/5 text-zinc-200 bg-zinc-800 transition-all duration-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-700" placeholder="E-mail" />
        <Mail className="absolute left-2 top-1/2 -translate-y-1/2 text-violet-500" />
        
        </div>
        <div className="relative w-full">
        <input {...register("asunto",{required: "El asunto es obligatorio"})} className="w-full pl-10 border border-white/5 text-zinc-200 bg-zinc-800 transition-all duration-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-700" placeholder="Asunto" />
        <Tag className="absolute left-2 top-1/2 -translate-y-1/2 text-violet-500" />
        </div>
        <div className="relative w-full">
        <textarea {...register("mensaje",{required: "El mensaje es obligatorio"})} className="resize-none border border-white/5 text-zinc-200 transition-all duration-300 w-full pl-10 h-60 bg-zinc-800 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-700" placeholder="Mensaje" />
        <MessageCircle className="absolute left-2 top-2 text-violet-500" />
        </div>
        <button className="text-zinc-300 font-bold bg-gradient-to-r from-violet-600 to-indigo-800 p-2 w-full rounded-md cursor-pointer hover:bg-indigo-700 hover:shadow-[0_0_20px_4px_rgba(99,102,241,0.8)] duration-300">Enviar mensaje</button>
        {
            sending?
            <div className={`absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center rounded-md z-10`}>
    <RingLoader size={70} color="rgba(31, 26, 97, 1)" />
    </div>: "" 
        }
    </form>
    </div>
    </div>
    </section>
    </motion.div>
   )
}