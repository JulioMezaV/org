import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/Index.js"
import ListaOpciones from "../ListaOpciones/Index.js"
import Boton from "../Boton/Index.js"

const Formulario = (props) => {
    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

   const manejarEnvio = (e) =>{
        e.preventDefault();
        console.log("manejar el envio")
        let datosaEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosaEnviar)
   }

   const manejarNuevoEnvio = (e) =>{
    e.preventDefault();
    crearEquipo({titulo,colorPrimario: color})

   }

   return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador

            </h2>
            <Campo titulo = "Nombre" placeholder = "ingresar nombre" required valor={nombre} setValor={actualizarNombre}/>
            <Campo titulo = "Puesto" placeholder = "ingresar puesto" required valor={puesto} setValor={actualizarPuesto}/>
            <Campo titulo = "Foto"   placeholder = "ingresar enlace de foto" required = {true} valor={foto} setValor={actualizarFoto}/>
            <ListaOpciones valor = {equipo} setEquipo = {actualizarEquipo}
            equipos={props.equipos}/>
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEnvio}>
            <h2>
                Rellena el formulario para crear el equipo

            </h2>
            <Campo titulo = "Titulo" placeholder = "ingresar titulo" 
            required valor={titulo} 
            setValor={actualizarTitulo}/>
            <Campo titulo = "Color" placeholder = "ingresar el color en hexadecimal" 
            required valor={color} 
            setValor={actualizarColor}
            type="color"
            />
            <Boton>
                Registrar equipo
            </Boton>
        </form>
    </section>
}

export default Formulario