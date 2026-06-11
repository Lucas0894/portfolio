import { useState } from "react"
import { RingLoader } from "react-spinners"
import { motion } from "framer-motion";
import { User, Mail, Tag, MessageCircle } from "lucide-react"

export const Form = ()=>{
    const API_URL = import.meta.env.VITE_API_URL;
    const [sending, setSending] = useState(false)
    const [errors, setErrors] = useState({})

    const [form, setForm] = useState({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: ""
    })

    const handleErrors = ()=>{
        const newErrors ={};
        if(!form.nombre.trim()){
            newErrors.nombre = "El nombre es obligatorio"
        }
        if(!form.email.trim()){
            newErrors.email = "El email es obligatorio"
        } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)){
            newErrors.email = "El mail no es valido"
        }
        if(!form.asunto.trim()){
            newErrors.asunto = "El asunto es obligatorio"
        }
        if(!form.mensaje.trim()){
            newErrors.mensaje = "El mensaje es obligatorio"
        }
        return newErrors

    }

    function handleChange(e){
        
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

        setErrors({
            ...errors,
            [e.target.name]: ""
        })

        console.log(form)
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const validationForm = handleErrors();
        setErrors(validationForm)
        if(Object.keys(validationForm).length > 0){
            return;
        }
        setSending(true)
        try {
            const res = await fetch(`https://backend-portfolio-7c6b.onrender.com/send`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(form)
            })
    
            const data = await res.json();
            console.log(data)
            if(data.success){
                alert("correo enviado correctamente")
                setForm({nombre: "", email: "", asunto: "", mensaje: ""})
                setErrors({})
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
    transition={{ duration: 0.8 }}>
    <section className=" min-h-screen flex flex-col justify-center items-center mt-10">
    <h1 className="text-zinc-300 text-center font-bold text-2xl mt-10">Contacto</h1> 
    <div className="relative bg-[#202020] shadow-[0_6px_16px_rgba(0,0,0,0.45),0_28px_55px_rgba(0,0,0,0.85)] mt-10 border border-white/5 rounded-3xl sm:p-5">
    <form id="contact" className="flex flex-col gap-4 items-center justify-center backdrop-blur-sm mt-8 p-5" onSubmit={handleSubmit}>
        <div className="relative w-75 sm:w-160">
        <input name="nombre" className="w-full pl-10 text-zinc-200 bg-zinc-800 transition-all duration-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-700" value={form.nombre} onChange={(e)=>handleChange(e)} placeholder="Nombre y Apellido" />
        <User className="absolute left-2 top-1/2 -translate-y-1/2 text-indigo-700" />
        </div>
        {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
        <div className="relative w-75 sm:w-160">
        <input name="email" className="w-full pl-10 text-zinc-200 bg-zinc-800 transition-all duration-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-700" value={form.email} onChange={(e)=>handleChange(e)} placeholder="E-mail" />
        <Mail className="absolute left-2 top-1/2 -translate-y-1/2 text-indigo-700" />
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        <div className="relative w-75 sm:w-160">
        <input name="asunto" className="w-full pl-10 text-zinc-200 bg-zinc-800 transition-all duration-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-700" value={form.asunto} onChange={(e)=>handleChange(e)} placeholder="Asunto" />
        <Tag className="absolute left-2 top-1/2 -translate-y-1/2 text-indigo-700" />
        </div>
        {errors.asunto && <p className="text-red-500 text-sm">{errors.asunto}</p>}
        <div className="relative w-75 sm:w-160">
        <textarea name="mensaje" className="resize-none text-zinc-200 transition-all duration-300 w-full pl-10 h-60 bg-zinc-800 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-700" value={form.mensaje} onChange={(e)=>handleChange(e)} placeholder="Mensaje" />
        <MessageCircle className="absolute left-2 top-2 text-indigo-700" />
        </div>
        {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje}</p>}
        <button className="text-zinc-300 font-bold bg-gradient-to-r from-violet-600 to-indigo-800 p-2 w-75 sm:w-160 rounded-md cursor-pointer hover:bg-indigo-700 hover:shadow-[0_0_20px_4px_rgba(99,102,241,0.8)] transition transform hover:scale-105 duration-300">Enviar mensaje</button>
        {
            sending?
            <div className={`absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center rounded-md z-10`}>
    <RingLoader size={70} color="rgba(31, 26, 97, 1)" />
    </div>: "" 
        }
    </form>

    </div>
    </section>
    </motion.div>
   )
}