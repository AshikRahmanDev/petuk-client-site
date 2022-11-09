import React from "react";
import { useLoaderData } from "react-router-dom";
import { GiForkKnifeSpoon, GiSandsOfTime } from "react-icons/gi";
import ReviewSection from "./ReviewSection";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const MealDetails = () => {
  const meal = useLoaderData();
  const { name, picture, _id, details, delivery, price } = meal;
  console.log(meal);
  return (
    <div className="w-[93%] mx-auto">
      <div className="flex border-2">
        <PhotoProvider>
          <PhotoView src={picture}>
            <img className="w-[400px]" src={picture} alt="" />
          </PhotoView>
        </PhotoProvider>

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
      <ReviewSection meal={meal} />
    </div>
  );
};

export default MealDetails;
