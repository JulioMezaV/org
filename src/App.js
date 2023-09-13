import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/Index.js';
import Equipo from './componentes/equipo/index.js';
import Footer from './componentes/Footer/index.jsx';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([])

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //Condicion && seMuestra
  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Lista de equipos

  const equipos = [
    {
      titulo:"Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    }
    ,
    {
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    {
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    {
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },

    {
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },

    {
      titulo:"Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },

    {
      titulo:"Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },

]

  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])

  }
  return (
    <div>
      <Header />
      {/*mostrarFormulario && <Formulario />*/}
      { mostrarFormulario === true ? <Formulario equipos ={equipos.map((equipo)=> equipo.titulo)}
      registrarColaborador = {registrarColaborador} /> : <></> }
      
      <MiOrg cambiarMostrar = {cambiarMostrar}/>
      {
        //metodo map es para moverse en arreglos en jsx
        equipos.map((equipo)=> <Equipo datos={equipo} key={equipo.titulo}
        colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        /> )
//cada que se usa map debe llevar una key ( para identificar de elemento)    
      }

      <Footer />
    </div>

  );
}

export default App;
