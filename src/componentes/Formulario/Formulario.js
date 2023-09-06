import "./Formulario.css"
import CampoTexto from "../CampoTexto/Index.js"
import ListaOpciones from "../ListaOpciones/Index.js"
import Boton from "../Boton/Index.js"

const Formulario = () => {
   const manejarEnvio = (e) =>{
        e.preventDefault();
        console.log("manejar el envio",e)
   }

   return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>
                Rellena el formulario para crear el colaborador

            </h2>
            <CampoTexto titulo = "Nombre" placeholder = "ingresar nombre" required />
            <CampoTexto titulo = "Puesto" placeholder = "ingresar puesto" required />
            <CampoTexto titulo = "Foto"   placeholder = "ingresar enlace de foto" required = {true} />
            <ListaOpciones />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario