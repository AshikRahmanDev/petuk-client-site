import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const MealCard = ({ meal }) => {
  const { name, picture, price, details, _id } = meal;
  return (
    <div className="mx-auto p-3 border border-orange-400 rounded-lg">
      {/* <img
        className="w-[400px] h-[250px] object-cover rounded-lg"
        src={picture}
        alt=""
      /> */}
      <PhotoProvider>
        <PhotoView src={picture}>
          <img
            className="w-[400px] h-[250px] object-cover rounded-lg"
            src={picture}
            alt=""
          />
        </PhotoView>
      </PhotoProvider>
      <div>
        <h4 className="text-3xl font-bold normal-case">{name}</h4>
        <p className="my-2 text-gray-600">
          {details.length > 100 ? details.slice(0, 100) : details}...
        </p>
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold normal-case">
            Price: <span className="text-red-500">${price}</span>
          </p>
          <Link
            to={`/mealDetails/${_id}`}
            className="btn bg-white text-orange-500 border-2 border-orange-500 hover:bg-orange-600 hover:text-white hover:border-orange-500 "
          >
            view details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
