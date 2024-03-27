import React from 'react'
import salonImg from '../assets/images/img-e1.jpg'

function About() {
  return (
    <section id="nosotros">
        <div className='flex flex-col gap-8 px-4 w-full max-w-7xl my-8 mx-auto items-center   '>
            <h2 className='font-saira font-bold text-6xl text-custom-gray drop-shadow-custom'>Sobre nosotros</h2>
            <div className='flex flex-col md:flex-row md:justify-between'>
                <div className=' md:w-2/5 font-saira text-xl md:text-2xl my-auto'>
                    <p>En el corazón de la tradición gastronómica argentina, donde el aroma del asado se mezcla con la dulzura del mate, surge un bodegón lleno de sabores auténticos y calidez criolla. Este rincón pintoresco, con sus mesas de madera gastada y sillas de hierro forjado, es más que un simple restaurante; es un santuario de la cocina argentina</p>
                    <p>El menú, impreso en letras cursivas y adornado con ilustraciones de gauchos y paisajes pampeanos, invita a sumergirse en un festín de sabores inconfundibles. Comienza tu experiencia con unas empanadas jugosas, rellenas de carne sazonada con ese toque argentino que hace la diferencia. Mientras esperas, puedes disfrutar de un buen vino tinto, cosecha de las vastas viñas de Mendoza.</p>
                </div>
                <span className='hidden md:block border border-solid m-4'></span>
                <img src={salonImg} alt="salon bodegon" className='w-full md:w-2/5' />
            </div>
        </div>
    </section>
  )
}

export default About