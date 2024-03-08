
const Pacientes = (paciente) => {
        const {nombre} = paciente
    return (
        <div className='m- bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold -mb-3 text-gray-700 uppercase'>
                Mombre: {""}
                <span className='font-normal normal-case'>{nombre}</span>
            </p>
            <p className=' mt-3 font-bold -mb-3 text-gray-700 uppercase'>
                Propietario: {""}
                <span className='font-normal normal-case'>aaaa@aaa.com</span>
            </p>
            <p className='mt-3 font-bold -mb-3 text-gray-700 uppercase'>
                Email: {""}
                <span className='font-normal normal-case'>Hook</span>
            </p>
            <p className='mt-3 font-bold -mb-3 text-gray-700 uppercase'>
                Fecha de alta: {""}
                <span className='font-normal normal-case'>06/12/2023</span>
            </p>
            <p className='mt-3 font-bold -mb-3 text-gray-700 uppercase'>
                Sintomas: {""}
                <span className='font-normal normal-case'>samdañksdjklasndklasndklasndklandklan</span>
            </p>
        </div>
    )
}

export default Pacientes