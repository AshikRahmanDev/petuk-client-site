import React from "react";
import { useLoaderData } from "react-router-dom";
import { GiForkKnifeSpoon, GiSandsOfTime } from "react-icons/gi";
import ReviewSection from "./ReviewSection";

const MealDetails = () => {
  const meals = useLoaderData();
  const { name, picture, _id, details, delivery, price } = meals;
  console.log(meals);
  return (
    <div className="w-[93%] mx-auto">
      <div className="flex border-2">
        <img className="w-[400px]" src={picture} alt="" />
        <div className="p-2 pl-5 md:w-[40%] ">
          <h4 className="text-3xl font-bold">{name}</h4>
          <p className="py-2">{details}</p>
        </div>
        <div className="mx-auto">
          <div className="flex items-center justify-center border p-2">
            <GiForkKnifeSpoon className="text-5xl" />
            <h4 className="text-2xl">Price: ${price}</h4>
            <button className="btn">Order Now</button>
          </div>
        </div>
      </div>

      {/* review section */}
      <ReviewSection />
    </div>
  );
};

export default MealDetails;
