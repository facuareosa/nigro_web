import menuImg from "../assets/images/img-logo2.png";
import { useEffect, useState } from "react";

function MenuCard({ plato }) {
  const precioFormateado = () => {
    return plato.precio > 0 ? plato.precio.toFixed(2) + "€" : "";
  };
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  
  useEffect(() => {
    setTriggerAnimation(true);
    const timeout = setTimeout(() => {
      setTriggerAnimation(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [plato]);

  return (
    <div className={`flex justify-between py-2 px-4 md:py-4 md:px-8 bg-custom-lightblue rounded-[1.25rem] w-full h-24 md:h-[9.5rem] ${triggerAnimation ? 'blur-in-expand' : ''}`}>
      <div className="flex flex-col w-full justify-between">
        <div className="card__content-wraper">
          <h3 className="font-bold md:text-2xl">{plato.nombre}</h3>
          <p className="text-sm md:text-base md:mt-2 italic">{plato.descripcion}</p>
        </div>
        <span className="md:text-2xl font-bold justify-self-end">{precioFormateado()}</span>
      </div>
      <div className="h-[4.5rem] md:h-[7.5rem] self-center">
        <img src={menuImg} alt="imagen comida" className="h-full object-cover" />
      </div>
    </div>
  );
}

export default MenuCard;