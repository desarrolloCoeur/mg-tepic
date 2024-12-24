"use client";
import React from "react";

const Hero = () => {
  
  return (
    <div className="relative  min-h-max bg-black w-full h-[100vh] text-[#f0e7db]">
      <img
        className="background absolute object-cover object-center h-[100vh] w-full brightness-50"
        src="/img/Hero.jpg"
        alt="COAM Urbanizacion Hero"
      />
      <div className=" absolute w-[95%] left-[50%] translate-x-[-50%] h-[100vh] max-lg:h-[95vh]">
        <div className=" absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] p-3 w-full">
          <h1 className="late text-[5vh] bg-clip-text text-left align-self max-sm:text-[6vh]">
            Descubre la excelencia de <span className="text-red-600">MG</span> Tepic
          </h1>
          <h2 className="w-[50vw]">
            Nos enfocamos en brindarte una experiencia inigualable,
            donde la innovación, el diseño sofisticado y la tecnología avanzada
            se unen en cada uno de nuestros modelos.
          </h2>
          <div className="my-5 border-2 w-[200px] border-red-700 text-center hover:bg-red-700 ease-in-out duration-200 cursor-pointer">
            Mas informacion
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
