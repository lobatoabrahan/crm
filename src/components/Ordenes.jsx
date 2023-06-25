import React from "react";

function Ordenes(props) {
  const { isOpen, setIsOpen } = props;
  return (
    <div className={`w-full  ${isOpen ? "lg:pl-60" : "lg:pl-20"}`}>
      <h1>
        Ordenes de nosotros
        asldfalsdjflaskdjflkasjdlfjasldkfjlaskdjflksadjflasdjflaksdjflasdjflkasdfjlkasdjflkasdjflkasdjf
      </h1>
    </div>
  );
}

export default Ordenes;
