import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto/Index.js"
import ListaOpciones from "../ListaOpciones/Index.js"
import Boton from "../Boton/Index.js"

const Formulario = (props) => {
    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")


   const manejarEnvio = (e) =>{
        e.preventDefault();
        console.log("manejar el envio")
        let datosaEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        console.log(datosaEnviar)
   }

   return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador

            </h2>
            <CampoTexto titulo = "Nombre" placeholder = "ingresar nombre" required valor={nombre} setValor={actualizarNombre}/>
            <CampoTexto titulo = "Puesto" placeholder = "ingresar puesto" required valor={puesto} setValor={actualizarPuesto}/>
            <CampoTexto titulo = "Foto"   placeholder = "ingresar enlace de foto" required = {true} valor={foto} setValor={actualizarFoto}/>
            <ListaOpciones valor = {equipo} setEquipo = {actualizarEquipo}
            equipos={props.equipos}/>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario