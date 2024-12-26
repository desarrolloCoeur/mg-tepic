"use client";
import { useEffect, useState } from "react";
import zenScroll from "zenscroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    zenScroll.setup(500, 100);
    const handleScroll = () => {
      const scrolled = window.scrollY;

      if (scrolled > 900) {
        document.getElementById("navbar").style.width = "80%";
      } else {
        document.getElementById("navbar").style.width = "90%";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleMenu() {
    if (isOpen === true) {
      document.getElementById("menu").style.transform = "translate(100%, 0%)";
      setIsOpen(false);
    } else {
      document.getElementById("menu").style.transform = "translate(0%, 0%)";
      setIsOpen(true);
    }
  }

  

  return (
    <div className="nav fixed flex justify-center w-full text-white bg-[#101010] z-10">
      <div
        id="navbar"
        className="align-self w-[90%] h-[60px] max-lg:h-[60px] flex ease-in-out duration-200"
      >
        <div className="flex justify-between w-full ">
          <div className="py-3">
            <img
              onClick={() => zenScroll.toY(0)}
              className="ease-in-out duration-200 cursor-pointer              
              "
              width={90}
              src="/img/mg.png"
              alt="logo mg"
            />          
          </div>
          <div className="flex py-5 text-md max-lg:text-sm max-lg:py-5 max-md:hidden">
            <div
              onClick={() => zenScroll.to(servicio)}
              className="mr-10 cursor-pointer hover:text-gray-500 ease-in-out duration-200"
            >
              SERVICIO
            </div>
            <div className="mr-10 cursor-pointer hover:text-gray-500 ease-in-out duration-200">
              VENTAS
            </div>
            <div
              onClick={() => zenScroll.to(contact)}
              className=" cursor-pointer hover:text-gray-500 ease-in-out duration-200"
            >
              CONTACTO
            </div>
          </div>
          <button
            className="my-2 hidden relative z-20 flex-col justify-center items-center w-10 h-10 group max-md:flex"
            onClick={() => handleMenu()}
          >
            <span
              className={`block w-8 h-1 bg-white transition-transform ${
                isOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-white transition-all ${
                isOpen ? "opacity-0" : "opacity-100 my-1"
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-white transition-transform ${
                isOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>
      <div id="menu" className="absolute text-xl p-10 translate-x-[100%] h-[100vh] w-full top-[60px] bg-[#1a1a1a] ease-in-out duration-200
      text-center z-20
      ">
        <div
          onClick={() => {
            handleMenu();
            zenScroll.toY(0);
          }}
          className="my-10 cursor-pointer hover:text-gray-500 ease-in-out duration-200"
        >
          INICIO
        </div>
        <div
          onClick={() => {
            handleMenu();
            zenScroll.to(servicio);
          }}
          className="my-10 cursor-pointer hover:text-gray-500 ease-in-out duration-200"
        >
          SERVICIO
        </div>
        <div 
        onClick={() => {
          handleMenu();
          
        }}
        className="my-10 cursor-pointer hover:text-gray-500 ease-in-out duration-200">
          VENTAS
        </div>
        <div
          onClick={() => {
            handleMenu();
            zenScroll.to(contact);
          }}
          className="my-10 cursor-pointer hover:text-gray-500 ease-in-out duration-200"
        >
          CONTACTO
        </div>
      </div>
    </div>
  );
};

export default Navbar;
