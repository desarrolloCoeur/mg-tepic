"use client";
/* eslint-disable no-undef */
import zenScroll from "zenscroll";

const Footer = () => {
  return (
    <div className="bg-[#10100e] text-white">
      <div className="w-full   flex justify-center ">
        <div className="w-[80%] align-self h-full flex justify-between">
          <div className="p-8 max-lg:text-sm max-lg:py-8 max-lg:px-0">            
            <img
              className="mb-4"
              width={80}
              src="/img/logo-mg.png"
              alt=""
            />
            <p className="my-2">
              De Los Insurgentes Pte. 608, Estadios, 63109 Tepic, Nay.
            </p>
            <p className="mb-2"> +52 311 275 1920</p>
            <p> correo</p>
          </div>
          <div className="w-[50%] p-10 max-lg:text-sm max-lg:w-auto max-lg:px-0">
            <h1 className="mb-3 font-bold text-xl max-lg:text-sm">
              Navegacion:
            </h1>
            <p
              onClick={() => zenScroll.toY(0)}
              className="mb-3 cursor-pointer hover:text-gray-500 ease-in-out duration-200"
            >
              Inicio
            </p>
            <p
              onClick={() => zenScroll.to(servicio)}
              className="mb-3 cursor-pointer hover:text-gray-500 ease-in-out duration-200"
            >
              Servicio
            </p>
            <p className="mb-3 cursor-pointer hover:text-gray-500 ease-in-out duration-200">
              Ventas
            </p>
            <p
              onClick={() => zenScroll.to(contact)}
              className="mb-3 cursor-pointer hover:text-gray-500 ease-in-out duration-200"
            >
              Contacto
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[80%] text-center p-5 border-t-[1px] border-red-700 align-self">
          <p>©MG Tepic - 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
