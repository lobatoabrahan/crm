import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";

function Navbar(props) {
  const {isOpen, setIsOpen} = props

  return (
    <>
      <div>
        <nav>
          <div
            className={`lg:flex-row-reverse lg:justify-end justify-between w-full bg-blue-500 flex items-center p-2 px-4 duration-300 ${
              isOpen ? "lg:pl-60" : "lg:pl-20"
            }`}
          >
            <div className="ml-7">Abrahans</div>
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} rounded />
          </div>
          <div
            className={`px-4 py-1 w-1/2 h-screen bg-white z-20 fixed border-r border-[#e5eaef] top-0 lg:left-0 lg:w-60 ease-out delay-150 duration-300 ${
              isOpen ? "left-0" : "lg:w-20 -left-[600px]"
            }`}
          >
            {" "}
            <div className="flex flex-col justify-start item-center w-full">
              <Link to={"/"} onClick={() => {isOpen ? setIsOpen(!isOpen) : ""}}>
                <div className="flex gap-2 p-2 items-center w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 1443.061 1249.993"
                  >
                    <path
                      fill="#3777e3"
                      d="M240.525 1249.993l240.492-416.664h962.044l-240.514 416.664z"
                    />
                    <path
                      fill="#ffcf63"
                      d="M962.055 833.329h481.006L962.055 0H481.017z"
                    />
                    <path
                      fill="#11a861"
                      d="M0 833.329l240.525 416.664 481.006-833.328L481.017 0z"
                    />
                  </svg>
                  <h1
                    className={`text-2xl cursor-pointer font-bold text-blue-900 border-gray-100 delay-150 ${
                      isOpen ? "" : "hidden"
                    }`}
                  >
                    Promaceca
                  </h1>
                </div>
              </Link>
              <div className=" my-4 border-b border-gray-100 pb-4">
                <Link to={"/ordenes"} onClick={() => {isOpen ? setIsOpen(!isOpen) : ""}}>
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      Ordenes
                    </h3>
                  </div>
                </Link>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Profile
                  </h3>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Comments
                  </h3>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Analytics
                  </h3>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Messages
                  </h3>
                </div>
                <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Integration
                  </h3>
                </div>
              </div>
              {/* setting  */}
              <div className=" my-4 border-b border-gray-100 pb-4">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Settings
                  </h3>
                </div>
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    More
                  </h3>
                </div>
              </div>
              {/* logout */}
              <div className=" my-4">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Logout
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
