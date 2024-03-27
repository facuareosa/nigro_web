import React, { useEffect, useState } from 'react';
import nigroLogo from '../assets/images/img-logo3.png';
import nigroFrase from '../assets/images/frase.png';

function Banner() {

    const [displayLogo, setDisplayLogo] = useState(false);

    useEffect (()=>{
        const timeout = setTimeout(() => {
            setDisplayLogo(true);
          }, 100);
      
          return () => clearTimeout(timeout);
    },[]);

  return (
    <section className='bg-custom-lightblue flex justify-center'>
        <div className='flex relative justify-center w-full max-w-7xl h-32 md:h-96 overflow-visible'>
            <img src={nigroFrase} alt="Fondo" className='absolute opacity-10 w-full max-h-32 md:max-h-96 md:h-96' />
            <img src={nigroLogo} alt="logo bodegón nigro" className={`absolute inset-1/2 transform -translate-x-1/2 -translate-y-[57%] h-28 md:h-80 transition-all duration-[2s] ${displayLogo ? 'opacity-100 scale-100' : 'opacity-0 scale-150'}`} />
        </div>
    </section>
  );
}

export default Banner;

// bg-center bg-no-repeat h-[30rem] bg-[url('./assets/images/frase.png')]