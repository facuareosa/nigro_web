import React from "react";

function Nav({isOpen, toggleNavbar}) {


  return (
    <nav className={`${isOpen ? 'flex h-44 my-8' : 'h-0 overflow-hidden'} col-span-2 justify-self-center order-3 md:h-auto md:order-none md:col-span-1 transition-[height] md:w-full md:flex text-xl`}>
        <ul className="flex flex-col items-center justify-center gap-8 md:flex md:flex-row md:justify-between md:w-full md:items-center">
            <li>
                <a href="#" className="hover:text-custom-gray" onClick={toggleNavbar}>Inicio</a>
            </li>
            <li>
              <a href="#nosotros" className="hover:text-custom-gray" onClick={toggleNavbar}>Nosotros</a>
            </li>
            <li>
              <a href="#menu" className="hover:text-custom-gray" onClick={toggleNavbar}>Menú</a>
            </li>
            <li>
              <a href="#revs" className="hover:text-custom-gray" onClick={toggleNavbar}>Reseñas</a>
            </li>
        </ul>
    </nav>
  );
}

export default Nav;

