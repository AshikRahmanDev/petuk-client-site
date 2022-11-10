import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { SiCodechef } from "react-icons/si";
import { TbTruckDelivery, TbShoppingCartDiscount } from "react-icons/tb";

const AboutServices = () => {
  return (
    <div className="my-16 grid grid-cols-1 md:grid-cols-4 w-[95%] mx-auto gap-4">
      <div className="mx-auto border-2 rounded-lg p-4">
        <IoFastFoodOutline className="text-8xl" />
        <h1 className="text-2xl font-bold">Real Ingredients</h1>
        <p>
          No processed frankenfoods here, eat healthy products made with
          wholesome real-food ingredients you can find in household kitchens.
        </p>
      </div>

      <div className="mx-auto border-2 rounded-lg p-4">
        <TbTruckDelivery className="text-8xl" />
        <h1 className="text-2xl font-bold">Fast Delivery</h1>
        <p>
          Get the food you want delivered, fast. Order food delivery & take out
          from the best restaurants near you. Skip has 16000 restaurants
          Nationwide. Order Now.
        </p>
      </div>

      <div className="mx-auto border-2 rounded-lg p-4">
        <TbShoppingCartDiscount className="text-8xl" />
        <h1 className="text-2xl font-bold">Affordable Price</h1>
        <p>
          No processed frankenfoods here, eat healthy products made with
          wholesome real-food ingredients you can find in household kitchens.
        </p>
      </div>

      <div className="mx-auto border-2 rounded-lg p-4">
        <SiCodechef className="text-8xl" />
        <h1 className="text-2xl font-bold">Made With Experience</h1>
        <p>
          No processed frankenfoods here, eat healthy products made with
          wholesome real-food ingredients you can find in household kitchens.
        </p>
      </div>
    </div>
  );
};

export default AboutServices;
