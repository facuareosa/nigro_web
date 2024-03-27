import React from 'react'
import SliderRev from '../components/SliderRev'

function Reviews() {
  return (
    <section className='py-8 font-saira'>
        <div className='flex flex-col bg-white gap-8 px-4 w-full max-w-7xl my-8 mx-auto items-center'>
            <h2 className='font-saira font-bold text-6xl text-custom-gray drop-shadow-custom'>Reseñas</h2>
            <SliderRev/>
        </div>
    </section>
  )
}

export default Reviews