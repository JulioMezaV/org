import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/Index.js';
import Equipo from './componentes/equipo/index.js';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(true)

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

  return (
    <div>
      <Header />
      { mostrarFormulario === true ? <Formulario equipos ={equipos.map((equipo)=> equipo.titulo)} /> : <></> }
      
      <MiOrg cambiarMostrar = {cambiarMostrar}/>
      {
        //metodo map es para moverse en arreglos en jsx
        equipos.map((equip)=> <Equipo datos={equip} key={equip.titulo}/> )
//cada que se usa map debe llevar una key ( para identificar de elemento)    
      }
    </div>
  );
}

export default App;
