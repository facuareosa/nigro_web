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
    <header className="bg-custom-lightblue border-b border-solid border-custom-gray flex justify-center overflow-visible fixed w-screen top-0 z-50">
      <div className="w-full max-w-7xl py-2 grid grid-cols-2 md:grid-cols-3 items-center font-saira font-bold text-white overflow-visible">
        
          
            <img
              src={logo}
              alt="bodegón nigro logo"
              className="mx-8 md:mx-0 md:justify-self-start rounded-full w-20 md:w-28 h-20 md:h-28 shadow-custom border-solid border border-gray-400"
            />
          
         
        <Nav isOpen={isOpen} toggleNavbar={toggleNavbar} className="overflow-visible"/>

        <div className={`order-4 flex ${isOpen ? 'items-center justify-center col-span-2' : 'h-0 overflow-hidden'} md:h-auto md:col-span-1 md:justify-end md:items-center gap-3`}>
          <a href="https://www.instagram.com/bodegonnigro/" target="_blank" title="enlace a instagram" className={`${isOpen ? 'hidden' : ''} md:block`}>
            <FaInstagram className='w-6 h-6 hover:text-custom-gray hover:scale-110'/>
          </a>
          <a href="https://api.whatsapp.com/send?phone=34686680821" target="_blank" className="uppercase py-2 px-5 bg-custom-gray text-xl rounded-[1.25rem] hover:scale-95">
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
