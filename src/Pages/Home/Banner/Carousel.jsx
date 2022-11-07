import React from "react";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const bannerData = [
    {
      image:
        "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      prev: 4,
      id: 1,
      next: 2,
    },
    {
      image:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      prev: 1,
      id: 2,
      next: 3,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1663840344687-a91e96693fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      prev: 2,
      id: 3,
      next: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      prev: 3,
      id: 4,
      next: 1,
    },
  ];
  return (
    <div className="carousel w-full">
      {bannerData.map((banner) => (
        <CarouselItem key={banner._id} banner={banner} />
      ))}
    </div>
  );
};

export default Carousel;
