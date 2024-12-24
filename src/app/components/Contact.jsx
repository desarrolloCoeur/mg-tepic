"use client";
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex justify-center h-[640px]"
    >
      <img
        className="background absolute object-cover object-center h-[640px] w-full"
        src="/img/contact.jpg"
        alt="contact"
      />
      <div className="w-[80%] align-center flex justify-center py-10">
        <div className="align-center text-white  w-[40%] max-xl:w-[80%] max-md:w-full border-[1px] border-gray-600 p-10 bg-[#1a1a1aee] z-[1] ">
          <form action="" className="w-full text-white ">
            <h1 className="text-center text-2xl">CONTACTANOS</h1>
            <input
              type="text"
              placeholder="Nombre completo"
              className="p-1 border-b-[1px] h-[40px] border-gray-600 hover:bg-[#1a1a1a] w-full focus:border-red-500 my-5"
            />
            <br />
            <input
              type="text"
              placeholder="Tel. Celular"
              className="p-1 border-b-[1px] h-[40px] border-gray-600 hover:bg-[#1a1a1a] w-full focus:border-red-500 my-5"
            />
            <br />
            <input
              type="text"
              placeholder="Email"
              className="p-1 border-b-[1px] h-[40px] border-gray-600 hover:bg-[#1a1a1a] w-full focus:border-red-500 my-5"
            />
            <br />
            <textarea
              type="text"
              placeholder="Dejanos un mensaje"
              className="resize-none bg-transparent p-2 border-[1px] h-[100px] border-gray-600 hover:bg-[#1a1a1a] w-full focus:border-red-500 my-5"
            />
            <div className="flex justify-center">
              <button
                className="align-self border-[1px] border-red-700 w-[100px] py-1 hover:bg-red-700
            ease-in-out duration-200
            "
              >
                ENVIAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
