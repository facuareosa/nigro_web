import React from 'react'
import logo from "../assets/images/img-logo2.png";

function Footer() {
  return (
    <footer className='bg-custom-lightblue pt-8 font-saira'>
        <div className='flex flex-col gap-8 px-4 w-full max-w-7xl my-8 mx-auto items-center'>
            <div className='grid grid-cols-3 w-full'>
                <div className='flex flex-col gap-4'>
                    <h3 className='uppercase w-fit border-y-2 border-solid border-custom-gray text-white text-2xl font-bold'>contacto</h3>
                    <div className='text-white text-xl'>
                        <p><span className='text-custom-gray font-bold'>Dir:</span>Carrer d'Andreu Feliu 3</p>
                        <p><span className='text-custom-gray font-bold'>Tel:</span>+34 686 68 08 21</p>
                    </div>
                </div>
                <img
                src={logo}
                alt="bodegón nigro logo"
                className="mx-8 md:mx-0 md:justify-self-center rounded-full md:w-28 h-20 md:h-28 shadow-custom border-solid border border-gray-400"
                />
                <div className='flex flex-col justify-self-end gap-4'>
                    <h3 className='uppercase w-fit border-y-2 border-solid border-custom-gray text-white text-2xl font-bold'>horario</h3>
                    <div className='text-white text-xl'>
                        <p><span className='text-custom-gray font-bold'>Mié-Sab:</span> 13-16hs y 19:30-00hs</p>
                        <p><span className='text-custom-gray font-bold'>    Dom:</span> 13-16hs</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='border-t-2 border-solid border-custom-gray flex justify-center py-2 text-xl text-white'>
            <a href="#" className=''> Diseñado y desarrollado por <span className='text-custom-gray font-bold'>Facundo Areosa</span></a>
        </div>
    </footer>
  )
}

export default Footer