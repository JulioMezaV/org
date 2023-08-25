import "./Formulario.css"
import CampoTexto from "../CampoTexto/Index.js"
import ListaOpciones from "../ListaOpciones/Index.js"
const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>
                Rellena el formulario para crear el colaborador

            </h2>
            <CampoTexto titulo = "Nombre" placeholder = "ingresar nombre" />
            <CampoTexto titulo = "Puesto" placeholder = "ingresar puesto" />
            <CampoTexto titulo = "Foto"   placeholder = "ingresar enlace de foto"/>
            <ListaOpciones />
        </form>
    </section>
}

export default Formulario