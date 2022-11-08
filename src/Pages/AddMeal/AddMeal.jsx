import React from "react";

const AddMeal = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const picture = form.picture.value;
    const price = form.price.value;
    const delivery = form.delivery.value;
    const details = form.details.value;
    console.log(name, picture, price, delivery, details);
  };
  return (
    <div className="flex justify-between items-center">
      <div className="md:w-[40%] w-[95%] mx-auto">
        <h1 className="text-4xl text-center md:text-start font-bold my-3">
          Add A <span className="text-orange-400">New</span> Meal
        </h1>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 w-full">
          <div className="my-2 col-span-2 md:col-span-1">
            <label>Food Name :</label> <br />
            <input
              className="bg-transparent outline-none border rounded-3xl px-3 p-2 w-[100%]"
              type="text"
              name="name"
              placeholder="Enter Food Name"
              required
            />
          </div>

          <div className="my-2 col-span-2 md:col-span-1">
            <label>Food Picture :</label> <br />
            <input
              className="bg-transparent outline-none border rounded-3xl px-3 p-2 w-[100%]"
              type="text"
              name="picture"
              placeholder="Photo URL"
              required
            />
          </div>

          <div className="my-2 col-span-2 md:col-span-1">
            <label>Price :</label> <br />
            <input
              className="bg-transparent outline-none border rounded-3xl px-3 p-2 w-[100%]"
              type="number"
              name="price"
              placeholder="$ Price"
              required
            />
          </div>

          <div className="my-2 col-span-2 md:col-span-1">
            <label>Delivery Time :</label> <br />
            <input
              className="bg-transparent outline-none border rounded-3xl px-3 p-2 w-[100%]"
              type="number"
              name="delivery"
              placeholder="00"
              required
            />
          </div>

          <div className="my-2 col-span-2">
            <label>Details :</label> <br />
            <textarea
              className="bg-transparent outline-none border rounded-3xl px-3 p-2 w-[100%]"
              type="text"
              name="details"
              placeholder="Details must be in 250 character."
              required
            />
          </div>
          <div className="my-2 col-span-2 text-center">
            <input
              className="btn w-[50%] rounded-3xl bg-orange-400 border-0"
              type="submit"
              value="Upload"
            />
          </div>
        </form>
      </div>
      <div className="hidden md:flex">
        <img
          src="https://i.ibb.co/M9WHTcv/cooking.png"
          alt="cooking"
          border="0"
        ></img>
      </div>
    </div>
  );
};

export default AddMeal;
