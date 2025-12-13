import { useState } from "react"


export const Form = ()=>{
    const API_URL = import.meta.env.VITE_API_URL;

    const [form, setForm] = useState({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: ""
    })

    function handleChange(e){
        
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
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

            }else{
                alert("el mensaje no se envio")
            }
        } catch (error) {
            console.error(error)
            alert("error en el servidor")
        }
    }


   return (
    <>
    <section className="min-h-screen flex justify-center items-center mt-10">
    <div className="shadow-[0_0_15px_rgba(255,255,255,0.3)] border rounded-md sm:p-5">
    <h1 className="text-white text-center font-bold text-2xl mt-10">Contact</h1>
    
    <form id="contact" className="flex flex-col gap-4 items-center justify-center mt-8 p-5" onSubmit={handleSubmit}>
        <input name="nombre" className="w-75 sm:w-160 bg-white rounded-md p-2" value={form.nombre} onChange={(e)=>handleChange(e)} placeholder="Nombre y Apellido" />
        <input name="email" className="w-75 sm:w-160 bg-white rounded-md p-2" value={form.email} onChange={(e)=>handleChange(e)} placeholder="E-mail" />
        <input name="asunto" className="w-75 sm:w-160 bg-white rounded-md p-2" value={form.asunto} onChange={(e)=>handleChange(e)} placeholder="Asunto" />
        <textarea name="mensaje" className="w-75 sm:w-160 h-60 bg-white rounded-md p-2" value={form.mensaje} onChange={(e)=>handleChange(e)} placeholder="Mensaje" />
        <button className="text-white font-bold bg-indigo-600 p-2 w-75 sm:w-160 rounded-md cursor-pointer hover:bg-indigo-700 hover:shadow-[0_0_20px_4px_rgba(99,102,241,0.8)] transition duration-300">Send</button>
    </form>
    </div>
    </section>
    </>
   )
}