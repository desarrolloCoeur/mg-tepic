'use client'
/* eslint-disable no-undef */
import zenScroll from "zenscroll";

const Navbar = () => {
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;

    if (scrolled > 900) {
      document.getElementById("navbar").style.width = "80%";
    } else {
      document.getElementById("navbar").style.width = "90%";
    }
  });

  return (
    <div className="nav fixed flex justify-center w-full text-white bg-[#101010] z-10">
      <div
        id="navbar"
        className="align-self w-[90%] h-[60px] max-lg:h-[60px] flex ease-in-out duration-200"
      >
        <div className="flex justify-between w-full ">
          <div className="py-3">
            {/* <img
              onClick={() => zenScroll.toY(0)}
              className="ease-in-out duration-200 cursor-pointer
              max-lg:w-[50px]
              "
              width={70}
              src="/img/logo-blanco.png"
              alt="COAM Urbanizacion"
            /> */}
            Logo
          </div>
          <div className="flex py-5 text-md max-lg:text-sm max-lg:py-5">
            <div className="mr-10 cursor-pointer hover:text-gray-500 ease-in-out duration-200">
              SERVICIO
            </div>
            <div className="mr-10 cursor-pointer hover:text-gray-500 ease-in-out duration-200">
              VENTAS
            </div>
            <div className=" cursor-pointer hover:text-gray-500 ease-in-out duration-200">
              CONTACTO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
