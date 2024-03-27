import React from 'react'
import SliderRev from '../components/SliderRev'
import googleImg from '../assets/images/google.png'

function Reviews() {
  return (
    <section className='py-8 font-saira'>
        <div className='flex flex-col bg-white gap-8 px-4 w-full max-w-7xl my-8 mx-auto items-center'>
            <h2 className='font-saira font-bold text-6xl text-custom-gray drop-shadow-custom'>Reseñas</h2>
            <div className='flex items-end font-sans font-bold'>
              <img src={googleImg} alt="imagen google" className='h-8' />
              <p className=''>Reviews</p>
            </div>
            <SliderRev/>
        </div>
    </section>
  )
}

export default Reviews