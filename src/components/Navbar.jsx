import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Spin as Hamburger } from "hamburger-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <nav>
          <div className={`lg:flex-row-reverse lg:justify-end justify-between w-full bg-blue-500 flex items-center p-2 px-4 duration-300 ${isOpen ? "lg:pl-60" : "lg:pl-20"}`}>
            <div className="ml-7">Abrahans</div>
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={20}/>
          </div>
          <div
            className={`p-6 w-1/2 h-screen bg-white z-20 fixed border-r border-[#e5eaef] top-0 lg:left-0 lg:w-60 ease-out delay-150 duration-300 ${
              isOpen ? "left-0" : "lg:w-20 -left-[600px]"
            }`}
          >
            {" "}
            <div className="flex flex-col justify-start item-center">
              <Link to={"/"}>
                <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
                  Virtual Dashboard
                </h1>
              </Link>
              <div className=" my-4 border-b border-gray-100 pb-4">
                <Link to={"/acerca"}>
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
