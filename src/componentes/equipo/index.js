import "./equipo.css"
import Colaborador from "../Colaborador/index.js"
const Equipo = (props) => {
    //backgroundColor es un objeto 
    //Destructuracion
    const {colorPrimario, colorSecundario, titulo} = props.datos
    const {colaboradores, eliminarColaborador} = props
    console.log(colaboradores.length>0)
    const estiloTitulo = {borderColor:colorPrimario}

    
    return <>
        {
            colaboradores.length > 0  &&
            <section className="equipo" style={{ backgroundColor: colorSecundario }}>
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