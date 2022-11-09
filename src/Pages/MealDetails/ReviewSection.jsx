import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const ReviewSection = ({ meal }) => {
  const notify = () => toast.success("Thanks For Your Review!");
  const { user } = useContext(AuthContext);
  const { displayName, email, photoURL } = user;
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewMessage = form.review.value;
    const review = {
      reviewMessage,
      displayName,
      email,
      photoURL,
      meal,
      mealId: meal._id,
    };

    fetch("http://localhost:5000/add/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          notify();
        }
      });
  };

  //   fetch("http://localhost:5000/reviews").then((res) => res.json());

  return (
    <div className="border-2 my-6 p-3">
      <h1 className="text-4xl font-bold">Customer Reviews</h1>
      <div className="grid grid-cols-4">
        <div className="col-span-3"></div>

        <div className="col-span-1">
          <h4 className="text-xl font-bold">Review This Meal</h4>
          <form onSubmit={handleSubmit}>
            <textarea
              name="review"
              className="input border-gray-400 h-[150px] my-2"
              cols="30"
              rows="10"
            ></textarea>
            <input
              type="submit"
              className="btn rounded-3xl bg-orange-500 border-0"
              value="Post your review"
            />
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ReviewSection;
