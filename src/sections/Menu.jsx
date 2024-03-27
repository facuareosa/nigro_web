import { useState } from "react";
import MenuCard from "../components/MenuCard";
import MenuNav from "../components/MenuNav";
import MenuCarta from "../data/carta.json";

function Menu() {
    const [foodFilter, setFoodFilter] = useState("platos");
  
    const handleFoodFilter = (tipo) => {
      setFoodFilter(tipo);
    };
    return (
      <section className="bg-custom-gray py-8 font-saira" id="menu">
        <div className="flex flex-col gap-8 px-4 w-full max-w-7xl my-8 mx-auto items-center">

            <h2 className='font-saira font-bold text-6xl text-white drop-shadow-custom'>Menú</h2>
            <MenuNav onFoodFilter={handleFoodFilter} />
            <div className="flex flex-col gap-4 items-center w-full md:w-[54rem]">
              {foodFilter &&
                MenuCarta[foodFilter].map((plato, index) => (
                    <MenuCard key={index} plato={plato} />
                    ))}
            </div>

        </div>
      </section>
    );
  }

  export default Menu;