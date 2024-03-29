import React from "react";
import { useState } from "react";

function MenuNav({ onFoodFilter }) {
  const [activeLi, setActiveLi] = useState("platos");

  const foodType = ["entrantes", "pastas", "platos", "pizzas"];

  const handleFoodClick = (type) => {
    setActiveLi(type);
    onFoodFilter(type);
  };

  return (
    <nav className="flex items-center justify-center py-4 w-full bg-white border border-solid rounded-[2.5rem]">
      <ul className="flex justify-around w-full px-4">
        {foodType.map((type, index) => (
          <li
            className={`text-center md:text-xl list-none w-44 text-white font-bold mx-1 md:py-2 rounded-[1.25rem] capitalize cursor-pointer hover:bg-custom-gray hover:scale-95 shadow-custom ${activeLi === type ? "bg-custom-gray" : "bg-custom-lightblue"}`}
            key={index}
            onClick={() => handleFoodClick(type)}
          >
            {type}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuNav;