import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import Carousel from "../Banner/Carousel";
import Menu from "../Menu/Menu";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-7 w-[97%] mx-auto gap-4">
        <div className="col-span-7 lg:col-span-5">
          <Carousel />
        </div>
        <div className="lg:grid hidden col-span-2 grid-cols-1 gap-4 ">
          {/* discount */}
          <div className="bg-black rounded-lg h-[100%] food-side-banner flex items-center">
            <h2 className="text-center text-white text-3xl font-bold">
              Great <span className="text-orange-400">Food</span> With Real
              Ingredients
            </h2>
          </div>
          <div className="bg-black rounded-lg h-[100%] free-delivery flex items-center">
            <h2 className="text-center text-white text-3xl font-bold">
              <span className="text-orange-400">Free</span> Delivery At Your
              Home
            </h2>
          </div>
        </div>
      </div>

      {/* menu section */}
      <Menu />

      {/* about me section */}
      <AboutMe />
    </div>
  );
};

export default Home;
