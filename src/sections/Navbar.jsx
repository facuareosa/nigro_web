import { useState } from "react";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/img-logo2.png";
import Nav from "../components/Nav";

function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  
  const toggleNavbar = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-custom-lightblue flex justify-center">
      <div className="w-full max-w-7xl py-3 grid grid-cols-2 md:grid-cols-3 items-center font-saira font-bold text-white">
        <h1 className="mx-8 md:mx-0 md:justify-self-start">
          <img
            src={logo}
            alt="bodegón nigro logo"
            className="rounded-full h-28 shadow-custom border-solid border border-gray-400"
          />
        </h1>
        
        <Nav isOpen={isOpen}/>

        <div className={`order-4 flex ${isOpen ? 'items-center justify-center col-span-2' : 'h-0 overflow-hidden'} md:h-auto md:col-span-1 md:justify-end md:items-center gap-3`}>
          <a href="#" className={`${isOpen ? 'hidden' : ''} md:block`}>
            <FaInstagram className='w-6 h-6 hover:text-custom-gray hover:scale-110'/>
          </a>
          <a href="#"className="uppercase py-2 px-5 bg-custom-gray text-xl rounded-[1.25rem] hover:scale-95">
            hacé tu reserva
          </a>
        </div>

        {isOpen
          ?<FaTimes className="flex justify-self-end md:hidden text-3xl mx-8" onClick={toggleNavbar}/>
          :<FaBars className="flex justify-self-end md:hidden text-3xl mx-8" onClick={toggleNavbar}/>
        }
      </div>
    </header>
  );
}

export default Navbar;
