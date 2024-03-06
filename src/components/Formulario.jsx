import React from 'react'
import { useState, useEffect } from 'react';
import Error from './Error';

function Formulario({ pacientes, setPacientes }) {     {/* EXTRAEMOS A SET PACIENTES */}
  const [nombre, setnombre] = useState("");
  const [propietario, setpropietario] = useState("");
  const [mail, setmail] = useState("");
  const [fecha, setfecha] = useState("");
  const [sintomas, setsintomas] = useState("");

  const [error, setError] = useState(false)
  
  const handleSumit = (e) =>{
    e.preventDefault();

      //Validacion del formulario

      if([nombre, propietario, mail, fecha, sintomas].includes("")){ 
        console.log("Hay un campo vacio");

        setError(true)
        return;
      }

      if (error) {
        setError(false)
      }

      //obseto de pacientes
      const objetoPaciente = {
        nombre: nombre,
        propietario: propietario,
        mail: mail,
        fecha: fecha,
        sintomas: sintomas
      }

     console.log(objetoPaciente);

      setPacientes([...pacientes,objetoPaciente ])   //se usa el spread para mutar el arreglo original y devuelve un nuevo arreglo

      //Reinicier el formulario
      setnombre("")
      setpropietario("")
      setmail("")
      setfecha("")
      setsintomas("")
    }
  

  return (
    <div className='md:w-1/2 lg:2/5'>
        <h2 className='font-black text-3xl text-center'>Seguimientos de pacientes</h2>
          <p className='text-lg mt-5 text-center mb-10'>
            Añade pacientes y {" "}
            <span className='text-indigo-600 font-bold'>Administralos</span>
          </p>
          <form 
              onSubmit={handleSumit}
              className='bg-white shadow-md rounded-lg pv-10 px-5 mb-10'
              >

            { error ? <Error><p>Todos los campos son obligatorios</p></Error> : null }
            <div className='mb-5'>
              <label htmlFor='mascota' className='block text-grey-700 uppercase font-bold'>Nombre Mascota</label> {/**se usa el htmlfpr para cuando haga click en label vaya al id del input */}
              <input id='mascota' type='text' placeholder='Nombre de la mascota'className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mb' value={nombre} onChange={ (e) => setnombre(e.target.value) }/>
            </div>
            <div className='mb-5'>
              <label htmlFor='propietario' className='block text-grey-700 uppercase font-bold'>Nombre Propietario</label> {/**se usa el htmlfpr para cuando haga click en label vaya al id del input */}
              <input id='propietario' type='text' placeholder='Nombre Propietario'className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mb' value={propietario} onChange={ (e) => setpropietario(e.target.value) }/>
            </div>
            <div className='mb-5'>
              <label htmlFor='email' className='block text-grey-700 uppercase font-bold'>Email</label> {/**se usa el htmlfpr para cuando haga click en label vaya al id del input */}
              <input id='Email' type='email' placeholder='Email contacto propietario'className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mb' value={mail} onChange={ (e) => setmail(e.target.value) }/>
            </div>
            <div className='mb-5'>
              <label htmlFor='date' className='block text-grey-700 uppercase font-bold'>Dia de alta</label> {/**se usa el htmlfpr para cuando haga click en label vaya al id del input */}
              <input id='date' type='date' placeholder='Email contacto propietario'className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mb' value={fecha} onChange={ (e) => setfecha(e.target.value) }/>
            </div>
            <div className='mb-5'>
              <label htmlFor='sintomas' className='block text-grey-700 uppercase font-bold'>Describe los sintomas</label> {/**se usa el htmlfpr para cuando haga click en label vaya al id del input */}
              <textarea id='sintomas' type='date' placeholder='Describe los sintomas'className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mb' value={sintomas} onChange={ (e) => setsintomas(e.target.value) }/>
            </div>
            <input type='submit' value='Agregar Pacientes' className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700' ></input> {/**El value es para dar nombre al boton */}
          </form>
      
    </div>
  )
}

export default Formulario
