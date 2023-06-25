import React from "react";

function Inicio(props) {
  const { isOpen, setIsOpen } = props;
  return (
    <>
      <div className={`w-full  ${isOpen ? "lg:pl-60" : "lg:pl-20"}`}>
        <h1>Página de inicio</h1>
        <div>jJAJAJA</div>
      </div>
    </>
  );
}

export default Inicio;
