import React from "react";
import Carousel from "../Banner/Carousel";

const Home = () => {
  return (
    <div className="grid grid-cols-7 w-[97%] mx-auto gap-4">
      <div className="col-span-5">
        <Carousel />
      </div>
      <div className="col-span-2">2</div>
    </div>
  );
};

export default Home;
