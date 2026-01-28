import { useState } from "react"
import { RingLoader } from "react-spinners"



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
    <>
    <section className=" min-h-screen flex justify-center items-center mt-10">
    <div className="relative shadow-[0_0_15px_rgba(255,255,255,0.3)] mt-25 border rounded-md sm:p-5">
    <h1 className="text-white text-center font-bold text-2xl mt-10">Contacto</h1> 
    <form id="contact" className="flex flex-col gap-4 items-center justify-center backdrop-blur-sm mt-8 p-5" onSubmit={handleSubmit}>
        <input name="nombre" className="w-75 sm:w-160 bg-white rounded-md p-2" value={form.nombre} onChange={(e)=>handleChange(e)} placeholder="Nombre y Apellido" />
        {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
        <input name="email" className="w-75 sm:w-160 bg-white rounded-md p-2" value={form.email} onChange={(e)=>handleChange(e)} placeholder="E-mail" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        <input name="asunto" className="w-75 sm:w-160 bg-white rounded-md p-2" value={form.asunto} onChange={(e)=>handleChange(e)} placeholder="Asunto" />
        {errors.asunto && <p className="text-red-500 text-sm">{errors.asunto}</p>}
        <textarea name="mensaje" className="w-75 sm:w-160 h-60 bg-white rounded-md p-2" value={form.mensaje} onChange={(e)=>handleChange(e)} placeholder="Mensaje" />
        {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje}</p>}
        <button className="text-white font-bold bg-indigo-600 p-2 w-75 sm:w-160 rounded-md cursor-pointer hover:bg-indigo-700 hover:shadow-[0_0_20px_4px_rgba(99,102,241,0.8)] transition transform hover:scale-105 duration-300">Enviar</button>
        {
            sending?
            <div className={`absolute inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center rounded-md z-10`}>
    <RingLoader size={70} color="rgba(31, 26, 97, 1)" />
    </div>: "" 
        }
    </form>

    </div>
    </section>
    </>
   )
}