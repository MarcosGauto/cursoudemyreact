import React from 'react'
import { useState, useStaten } from 'react'

function Formulario() {
  const [nombre, setnombre] = useState("");
  

  return (
    <div className='md:w-1/2 lg:2/5'>
        <h2 className='font-black text-3xl text-center'>Seguimientos de pacientes</h2>
          <p className='text-lg mt-5 text-center mb-10'>
            Añade pacientes y {" "}
            <span className='text-indigo-600 font-bold'>Administralos</span>
          </p>
          <form className='bg-white shadow-md rounded-lg pv-10 px-5 mb-10'>
            <div className='mb-5'>
              <label htmlFor='mascota' className='block text-grey-700 uppercase font-bold'>Nombre Mascota</label> {/**se usa el htmlfpr para cuando haga click en label vaya al id del input */}
              <input id='mascota' type='text' placeholder='Nombre de la mascota'className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mb'value={nombre} onChange={ (e) => setnombre(e.target.value) }/>
            </div>
            <div className='mb-5'>
              <label htmlFor='propietario' className='block text-grey-700 uppercase font-bold'>Nombre Propietario</label> {/**se usa el htmlfpr para cuando haga click en label vaya al id del input */}
              <input id='propietario' type='text' placeholder='Nombre Propietario'className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mb'/>
            </div>
            <div className='mb-5'>
              <label htmlFor='mascota' className='block text-grey-700 uppercase font-bold'>Nombre Mascota</label> {/**se usa el htmlfpr para cuando haga click en label vaya al id del input */}
              <input id='mascota' type='text' placeholder='Nombre de la mascota'className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mb'/>
            </div>
            <div className='mb-5'>
              <label htmlFor='email' className='block text-grey-700 uppercase font-bold'>Email</label> {/**se usa el htmlfpr para cuando haga click en label vaya al id del input */}
              <input id='Email' type='email' placeholder='Email contacto propietario'className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mb'/>
            </div>
            <div className='mb-5'>
              <label htmlFor='date' className='block text-grey-700 uppercase font-bold'>Dia de alta</label> {/**se usa el htmlfpr para cuando haga click en label vaya al id del input */}
              <input id='date' type='date' placeholder='Email contacto propietario'className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mb'/>
            </div>
            <div className='mb-5'>
              <label htmlFor='sintomas' className='block text-grey-700 uppercase font-bold'>Describe los sintomas</label> {/**se usa el htmlfpr para cuando haga click en label vaya al id del input */}
              <textarea id='sintomas' type='date' placeholder='Describe los sintomas'className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-mb'/>
            </div>
            <input type='submit' className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700' ></input> {/**El value es para dalr nombre al boton */}
          </form>
      
    </div>
  )
}

export default Formulario
