import { useState } from 'react';
import {v4 as uuid} from 'uuid'
import './App.css';
import Header from './componentes/Header/header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/Index.js';
import Equipo from './componentes/equipo/index.js';
import Footer from './componentes/Footer/index.jsx';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Innovacion y Gestion",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: true
  }])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programacion",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    }
    ,
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },

    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },

    {
      id: uuid(),
      titulo:"Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },

    {
      id: uuid(),
      titulo:"Innovacion y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    },

])

  

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //Condicion && seMuestra
  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Actualizar color de equipo

  const actualizarColor = (color, id) => {
    console.log("actualizar color", color, id)
    const equiposActualizados = equipos.map((equipo)=>{
        if (equipo.id === id) {
          equipo.colorPrimario = color
        }
        return equipo;
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    //los tres puntos significan que crea una nueva copia del arreglo equipos, despues agrega un nuevo objeto que tambien crea una copia y despues agrega el id
    actualizarEquipos([...equipos,{...nuevoEquipo,id: uuid()}])
  }


  //Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }
   //Eliminar colaborador
  const eliminarColaborador = (id) =>{
    console.log("eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  const like = (id) =>{
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if (colaborador.id === id) {

        colaborador.fav = !colaborador.fav
      }
      return colaborador;
    })

    actualizarColaboradores(colaboradoresActualizados)
  }
  return (
    <div>
      <Header />
      {/*mostrarFormulario && <Formulario />*/}
      { mostrarFormulario === true ? <Formulario equipos ={equipos.map((equipo)=> equipo.titulo)}
      registrarColaborador = {registrarColaborador} 
      crearEquipo = {crearEquipo}
      /> : <></> }
      
      <MiOrg cambiarMostrar = {cambiarMostrar}/>
      {
        //metodo map es para moverse en arreglos en jsx
        equipos.map((equipo)=> <Equipo datos={equipo} key={equipo.titulo}
        colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor = {actualizarColor}
        like = {like}
        /> )
//cada que se usa map debe llevar una key ( para identificar de elemento)    
      }

      <Footer />
    </div>

  );
}

export default App;
