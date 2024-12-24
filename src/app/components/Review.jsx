"use client";
import React, { useState, useEffect } from "react";

const reviewsData = {
  reviews: [
    {
      name: "Andrea Atilano",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      review: `Excelente lugar!
      Gran variedad de modelos disponibles, la calidad del servicio al cliente es inmejorable, la transparencia en los precios y las políticas de garantía. Cuentan con grandes opciones de financiamiento y programas de mantenimiento Gratuitos!`,
    },
    {
      name: "Eduardo Arreola Ramirez",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      review: `Siempre atentos, y con buena actitud resolvieron mis dudas sobre mi próxima compra`,
    },
    {
      name: "Paulina Rangel",
      rating: "⭐️⭐️⭐️⭐️⭐️",
      review: `Excelente servicio y atención, me encantó mi mg4. Espero pongan un cargador pronto.`,
    },
  ],
};

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1280);
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviewsData.reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviewsData.reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full flex justify-center overflow-hidden bg-[#101010]">
      <img
        className="background absolute object-cover object-center h-full w-full brightness-50 blur-sm"
        src="/img/review.jpg"
        alt="servicio"
      />
      <div className="relative w-[85%] align-self">
        <h1 className="text-center pt-10 text-4xl text-white">
          Reseñas de nuestros clientes
        </h1>
        <div className="flex justify-center py-10">
          {isMobile ? (
            <div className="relative w-full flex items-center">
              <button
                className="absolute left-0 text-white text-2xl"
                onClick={prevReview}
              >
                ❮
              </button>
              <div className="border-[1px] border-gray-700 p-5 w-full m-5 bg-[#0000004f] text-center max-xl:h-[220px] max-sm:h-[350px]">
                <h1>{reviewsData.reviews[currentIndex].name}</h1>
                <p className="my-2">
                  {reviewsData.reviews[currentIndex].rating}
                </p>
                <p>{reviewsData.reviews[currentIndex].review}</p>
              </div>
              <button
                className="absolute right-0 text-white text-2xl"
                onClick={nextReview}
              >
                ❯
              </button>
            </div>
          ) : (
            reviewsData.reviews.map((review, index) => (
              <div
                key={index}
                className="border-[1px] border-gray-700 p-5 w-[20%] m-5 bg-[#0000004f]"
              >
                <h1>{review.name}</h1>
                <p className="my-2">{review.rating}</p>
                <p>{review.review}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
