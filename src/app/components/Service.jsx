import React from "react";

const Service = () => {
  return (
    <div id="servicio">
      <div className="flex justify-center max-md:inline">
        <div className="flex align-self my-10 mr-5 max-md:mr-0 max-md:justify-center">
          <div className="max-w-sm overflow-hidden bg-[#1a1a1a]">
            <img
              className="w-full object-cover  h-[200px]"
              src="/img/servicio.jpg"
              alt="Card image"
            />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">
                Revestimiento y Acabados
              </h2>
              <p className="text-gray-400 text-base">
                Somos un centro de servicio autorizado, experto en reparación,
                trabajos de hojalatería y pintura.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://wa.me/+5213111091903?text=Hola,%20me%20gustaría%20agendar%20mi%20servicio."
                target="_blank"
              >
                <div
                  className="w-[190px] p-2 border-[1px] border-red-700 
              hover:bg-red-700 ease-in-out duration-200 text-center 
              mb-4 cursor-pointer
              "
                >
                  Agenda tu servicio
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex align-self my-10 max-md:justify-center">
          <div className="max-w-sm overflow-hidden bg-[#1a1a1a]">
            <img
              className="w-full object-cover  h-[200px]"
              src="/img/taller.jpg"
              alt="Card image"
            />
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">Taller MG</h2>
              <p className="text-gray-400 text-base">
                Confía en nuestro Taller de Servicio MG para mantener tu auto en
                perfecto estado.
              </p>
              <p className="text-gray-400">
                - Técnicos especializados
                <br />
                - Refacciones originales
                <br />- Atención personalizada
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://wa.me/+5213111091903?text=Hola,%20me%20gustaría%20agendar%20mi%20cita%20en%20el%20taller."
                target="_blank"
              >
                <div
                  className="w-[190px] p-2 border-[1px] border-red-700 
              hover:bg-red-700 ease-in-out duration-200 text-center 
              mb-4 cursor-pointer
              "
                >
                  Agenda tu cita hoy
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="relative w-full flex justify-center overflow-hidden bg-[#101010] my-10">
        <img
          className="absolute object-cover object-center h-full w-[50%] max-md:w-full"
          src="/img/servicio2.jpg"
          alt="servicio"
        />
        <div className="relative w-[85%] h-[500px] align-self">
          <div          
            className="absolute top-[50%] left-[80%] translate-y-[-50%] translate-x-[-50%] bg-[#1a1a1a] w-[400px] border-l-8 border-red-700 p-10
          max-md:left-[50%]
          max-md:w-full
          "
          >
            <h1 className="text-2xl pb-2">
              Elige tu MG y conquista cualquier camino
            </h1>
            <h2 className="text-md pb-2">
              Nosotros te ayudaremos a convertirte en dueño del MG ideal para
              ti, ofreciéndote los mejores beneficios y una experiencia de
              manejo inigualable.
            </h2>
          </div>
        </div>
      </div>
      <div className="relative w-full flex justify-center overflow-hidden bg-[#101010]">
        <img
          className="absolute object-cover object-center h-full w-full brightness-50"
          src="/img/cita.jpg"
          alt="servicio"
        />
        <div className="relative w-[85%] h-[300px] align-self">
          <div
            className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] 
           w-full text-center  p-10"
          >
            <h1 data-aos="fade-left" className="text-2xl pb-2">
              EL EQUIPO MG TEPIC ESTÁ LISTO PARA RECIBIRTE
            </h1>
            <h2 data-aos="fade-right" className="text-md pb-2">Agendemos tu prueba de manejo</h2>
            <div className="flex justify-center my-5">
              <a data-aos="fade-left"
                href="https://wa.me/+5213111091903?text=Hola,%20me%20gustaría%20más%20información."
                target="_blank"
              >
                <div
                  className="w-[190px] p-2 border-[1px] bg-[#00000075] border-red-700 
              hover:bg-red-700 ease-in-out duration-200 text-center 
              mb-4 cursor-pointer
              "
                >
                  Quiero saber más
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
