import React from "react";
import { useLoaderData } from "react-router-dom";
import { GiForkKnifeSpoon, GiSandsOfTime } from "react-icons/gi";
import ReviewSection from "./ReviewSection";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const MealDetails = () => {
  const meal = useLoaderData();
  const { name, picture, details, delivery, price } = meal;
  console.log(meal);
  return (
    <div className="w-[93%] mx-auto mb-10">
      <div className="flex border-2 p-2 rounded-lg">
        <PhotoProvider>
          <PhotoView src={picture}>
            <img className="w-[400px] rounded-lg" src={picture} alt="" />
          </PhotoView>
        </PhotoProvider>

        <div className="p-2 pl-5 ">
          <h4 className="text-3xl font-bold">{name}</h4>
          <p className="py-2">{details}</p>
          <div>
            <p className="flex items-center">
              <GiSandsOfTime className="text-orange-500" /> Price
              <span className="text-red-500 ml-1"> ${price}</span>
            </p>

            <p className="flex items-center">
              <GiSandsOfTime className="text-orange-500" />{" "}
              <span>Delivery {delivery} min</span>
            </p>
            <button className="btn my-2 w-[200px] bg-orange-500 border-0">
              Order now
            </button>
          </div>
        </div>
      </div>

      {/* review section */}
      <ReviewSection meal={meal} />
    </div>
  );
};

export default MealDetails;
