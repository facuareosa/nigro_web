import React from 'react'
import SliderRev from '../components/SliderRev'
import googleImg from '../assets/images/google.png'

function Reviews() {
  return (
    <section className='py-8 font-saira' id="revs">
        <div className='flex flex-col bg-white gap-8 px-4 w-full max-w-7xl my-8 mx-auto items-center'>
            <h2 className='font-saira font-bold text-6xl text-custom-gray drop-shadow-custom'>Reseñas</h2>
            <div className='flex items-end'>
              <img src={googleImg} alt="imagen google" className='h-8' />
              <p className='font-sans font-bold'>Reviews</p>
            </div>
            <SliderRev/>
            <a href="https://acortar.link/a14NTA" target='_blank' className="uppercase py-2 px-5 bg-custom-gray text-xl text-white font-bold rounded-[1.25rem] hover:scale-95">
              Ver más reseñas
            </a>
        </div>
    </section>
  )
}

export default Reviews