import React from "react";
import { useLoaderData } from "react-router-dom";
import MealCard from "../Home/Menu/MealCard";

const AllMenu = () => {
  const meals = useLoaderData();
  return (
    <div className="w-[97%] mx-auto mb-10">
      <h4 className="text-3xl font-bold normal-case mb-4">All Popular Menu</h4>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {meals.map((meal) => (
          <MealCard key={meal._id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default AllMenu;
