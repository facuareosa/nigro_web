import React from 'react'
import { FaInstagram } from 'react-icons/fa'

function Recomendation() {
  return (
    <section className='flex justify-center'>
        <div className='px-4 flex justify-center items-center gap-10 w-full max-w-7xl my-8'>
            <FaInstagram className='text-custom-gray w-28 h-28'/>
            <p className='text-2xl md:text-[2rem] font-saira text-custom-gray'>Revisa nuestro instagram y enterate de nuestras propuestas semanales</p>
        </div>
    </section>
  )
}

export default Recomendation