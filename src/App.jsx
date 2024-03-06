import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";


function App() {

    const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20 bg-gray-100">
      <Header/>
      <div className="mt-12 md:flex" >
      <Formulario
        pacientes = {pacientes}
        setPacientes = {setPacientes}
        />  {/*props y la funcion siempre llamarla igual para que no haya errores*/}
      <ListadoPacientes/>
      </div>
    </div>
  )
}

export default App
