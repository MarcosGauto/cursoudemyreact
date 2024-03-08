import Pacientes from "./pacientes"

Pacientes

function ListadoPacientes({pacientes}) {
    

  return (
    <div className='md:w-1/2 lg-3/5 md:h-screen overflow-y-scroll'>
        <h2 className='font-black text-3xl text-center'>LIstado de Pacientes </h2>
        <p className='text-xl mt-5 mg-10 text-center'>
          Administra tus {""}
          <span className='text-indigo-600 font bold'>Pacientes y citas</span>
        </p>

        { pacientes.map( ({paciente}) => {
          return(
            <Pacientes
              paciente={paciente}
            />
          )
        } )}
        

    </div>
  )
}

export default ListadoPacientes
