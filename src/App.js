import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/header.js';
import Formulario from './componentes/Formulario/Formulario.js';
import MiOrg from './componentes/MiOrg/Index.js';

function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(true)

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //Condicion && seMuestra
  
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  return (
    <div>
      <Header />
      { mostrarFormulario === true ? <Formulario /> : <></> }
      
      <MiOrg cambiarMostrar = {cambiarMostrar}/>
    </div>
  );
}

export default App;
