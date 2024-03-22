import menuImg from "../assets/images/img-logo1.png";
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
    <div className={`card__container ${triggerAnimation ? 'blur-in-expand' : ''}`}>
      <div className="card__content">
        <div className="card__content-wraper">
          <h1 className="card__title">{plato.nombre}</h1>
          <p className="card__description">{plato.descripcion}</p>
        </div>
        <span className="card__price">{precioFormateado()}</span>
      </div>
      <div className="card__img w-8">
        <img src={menuImg} alt="imagen comida" />
      </div>
    </div>
  );
}

export default MenuCard;