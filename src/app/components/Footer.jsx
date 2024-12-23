'use client'
/* eslint-disable no-undef */
import zenScroll from "zenscroll";

const Footer = () => {
  return (
    <div className="bg-[#10100e] text-[#f0e7db]">
      <div className="w-full h-[230px]  flex justify-center ">
        <div className="w-[80%] align-self h-full flex justify-between">
          <div className="p-8 max-lg:text-sm max-lg:py-8 max-lg:px-0">
            Logo
            {/* <img
              className="mb-4"
              width={90}
              src="/img/logo-blanco.png"
              alt=""
            /> */}
            <p className="my-2">De Los Insurgentes Pte. 608, Estadios, 63109 Tepic, Nay.</p>
            <p className="mb-2"> +52 311 275 1920</p>
            <p> correo</p>
          </div>
          <div className="w-[50%] p-10 max-lg:text-sm max-lg:w-auto max-lg:px-0">
            <h1 className="mb-3 text-red-700 font-bold text-xl max-lg:text-sm">
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
            <p className="mb-3 cursor-pointer hover:text-gray-500 ease-in-out duration-200">Ventas</p>
            <p className="mb-3 cursor-pointer hover:text-gray-500 ease-in-out duration-200">Contacto</p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[80%] text-center p-5 border-t-[1px] border-red-700 align-self">
          <p>MG Tepic - 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
