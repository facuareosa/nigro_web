import React, { useEffect, useState, useRef } from 'react'
import imgTest from "../assets/images/revs/albaDelgado.png";


const openParagraph = {
  display: 'flex',
}

function ReviewCard({revData}) {

  const [isOpen, setIsOpen] = useState (false)

  const [showBtn, setShowBtn] = useState(false)

  const ref = useRef(null)
  
  
  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.scrollHeight, ref.current.clientHeight)
      setShowBtn(
        !(ref.current.scrollHeight >= ref.current.clientHeight -1 && ref.current.scrollHeight <= ref.current.clientHeight +1))
    }
  }, [])

  return (
    
      <div className='h-56 my-2 w-96 rounded-md bg-white p-5 shadow-custom flex flex-col items-start gap-4'>

        <div className='w-full flex justify-start gap-4'>
          <div className='w-10 h-10'>
            <img src={revData.img} alt="imagen perfil" className='h-full' />
          </div>
          <p className="text-sm font-bold">{revData.name}</p>
        </div>
        <div className='self-start'>
          <p className='text-yellow-500 text-base font-bold'>
          &#9733;&#9733;&#9733;&#9733;&#9733;
          </p>
        </div>
        <div className='w-full'>
        <p
          className={`w-full text-sm overflow-hidden ${isOpen ? openParagraph : ''}`}
          ref={ref}
          style={{
            display: isOpen ? 'flex' : '-webkit-box',
            WebkitLineClamp: 5,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {revData.description}
          </p>
        </div>
        {showBtn &&(
          <button 
          className='cursor-pointer rounded-none p-0 opacity-50 text-xs'
          onClick={()=>setIsOpen(!isOpen)}>
              {isOpen ? 'Leer menos' : 'Leer más'}
          </button>
        )}
        
      </div>
      
  )
}

export default ReviewCard