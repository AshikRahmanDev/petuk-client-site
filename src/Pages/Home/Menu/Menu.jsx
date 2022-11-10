import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MealCard from "./MealCard";

const Menu = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://petuk-server-mohammdashik.vercel.app/home/meals")
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, []);
  return (
    <div className="w-[97%] mx-auto mt-8 mb-5">
      <h1 className="text-3xl font-bold normal-case my-5">Popular Menu</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <MealCard key={meal._id} meal={meal} />
        ))}
      </div>
      <div className="my-5 text-center">
        <Link
          to={"/allMenu"}
          className="btn bg-orange-500 border-0 w-[200px] hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default Menu;
