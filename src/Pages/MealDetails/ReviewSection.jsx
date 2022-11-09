import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const ReviewSection = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
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
    };
    console.log(review);
  };
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
    </div>
  );
};

export default ReviewSection;
