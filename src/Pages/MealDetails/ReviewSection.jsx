import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";

const ReviewSection = ({ meal }) => {
  const [reviews, setReviews] = useState([]);
  const notify = () => toast.success("Thanks For Your Review!");
  const { user } = useContext(AuthContext);

  var today = new Date(),
    date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

  useEffect(() => {
    fetch("http://localhost:5000/reviews", {
      headers: {
        meal: meal.name,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewMessage = form.review.value;
    const review = {
      reviewMessage,
      displayName: user?.displayName,
      email: user?.email,
      photoURL: user?.photoURL,
      date,
      meal: meal.name,
      mealDetails: meal,
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

    review._id = "343456h54j6h";
    const newReviews = [review, ...reviews];
    setReviews(newReviews);
  };

  return (
    <div className="my-6">
      <h1 className="text-4xl font-bold mb-3">Customer Reviews</h1>
      <div className="grid grid-cols-4">
        <div className="col-span-3 grid grid-cols-2 gap-4 w-[90%]">
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </div>

        <div className="col-span-1">
          {user?.email ? (
            <>
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
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="btn w-full rounded-3xl bg-orange-500 border-0"
              >
                Login
              </Link>
              <h4 className="text-xl font-bold text-center ">
                Please Login For Add Your Review!
              </h4>
            </>
          )}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ReviewSection;
