import "./equipo.css"
import Colaborador from "../Colaborador/index.js"
import hexToRgba from "hex-to-rgba";

const Equipo = (props) => {
    //backgroundColor es un objeto 
    //Destructuracion
    const {colorPrimario, colorSecundario, titulo} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor} = props
    const estiloTitulo = {borderColor:colorPrimario}

    
    return <>
        {
            colaboradores.length > 0  &&
            <section className="equipo" style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }}>
                <input 
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(evento)=>{
                        actualizarColor(evento.target.value, titulo)
                    }}

                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">

                    {
                        colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} key={index} colorPrimario = {colorPrimario} eliminarColaborador = {eliminarColaborador} />)
                    }

                </div>

            </section>
        }
    </>
}

export default Equipo