import React from "react";

const Button = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className="absolute top-3 right-3 rounded-[50%] border-none bg-[#212529] aspect-square text-white text-[14px] font-bold cursor-pointer z-10 h-[24px]"
      onClick={() => setIsOpen((open) => !open)}
    >
      {isOpen ? "–" : "+"}
    </button>
  );
};

export default Button;
