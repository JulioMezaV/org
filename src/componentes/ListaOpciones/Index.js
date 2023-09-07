import "./ListaOpciones.css"
const ListaOpciones = (props) => {
    //Metodo map -> arreglo.map((equipo, index)=>{ return <option></option> })
    const equipos = [
        "Programacion",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Movil",
        "Innovacion y Gestion"

    ]
    const manejarCambio = (e) =>{
       // console.log("cambio",e.target.value)
        props.setEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label> 
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>seleccionar equipo...</option>
            {equipos.map((equipo, index)=>
                <option key = {index} value={equipo}>{equipo}</option>
            )}
        </select>
        </div>
}

export default ListaOpciones;