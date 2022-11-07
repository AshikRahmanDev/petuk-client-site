import React from "react";
import "./CarouselItem.css";

const CarouselItem = ({ banner }) => {
  const { image, prev, next, id } = banner;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <div className="carousel-img w-full h-[85vh] rounded-lg">
        <img src={image} className="w-full h-[85vh] rounded-lg" alt="" />
      </div>
      <div className="absolute left-5 right-5 top-1/2">
        <h1 className="text-white text-5xl font-semibold text-center">
          Taste The Best <span className="text-orange-400">Homemade</span> Food
        </h1>
      </div>

      {/* slider btn */}
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a
          href={`#slide${prev}`}
          className="btn hover:bg-orange-400/50 btn-circle bg-orange-400/50 border-0"
        >
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn hover:bg-orange-400/50 btn-circle bg-orange-400/50 border-0"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;
