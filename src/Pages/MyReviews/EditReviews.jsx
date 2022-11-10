import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const EditReviews = () => {
  const [reviewText, setReviewText] = useState(null);
  const [edit, setEdit] = useState(false);
  const reviewData = useLoaderData();
  const notify = () => toast.success("Review Edited Successfully!");
  const empty = () => toast.error("Please Enter Something for Save Change!");
  const { reviewMessage } = reviewData;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;

    if (review.length === 0) {
      return empty();
    }

    if (review.length > 0) {
      fetch("http://localhost:5000/updateReview", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ review, id: reviewData._id }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            notify();
            form.reset();
          }
        });
      setEdit(true);
    }
    setReviewText(review);
  };

  return (
    <div className="h-[90vh] flex items-center justify-center">
      <div className="border w-[70%] p-3 rounded-lg shadow-lg">
        <div className="flex items-center">
          <img
            className="w-[60px] h-[60px] mr-2 object-cover rounded-full"
            src={reviewData?.photoURL}
            alt=""
          />
          <div>
            <p className="font-bold">{reviewData?.displayName}</p>
            <p className="text-gray-500">{reviewData?.date}</p>
          </div>
        </div>
        <div className="my-3">
          <p className="font-bold">{reviewData?.meal}</p>
          <p>{edit ? reviewText : reviewMessage}</p>
        </div>
        <h4 className="text-lg font-bold">Edit Your Review :</h4>
        <form onSubmit={handleSubmit}>
          <textarea
            className="input border h-[150px] my-2 border-gray-300 w-full"
            name="review"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <div className="flex justify-end">
            <Link
              to={"/myReviews"}
              className="btn mx-2 bg-red-500 border-0 rounded-3xl"
            >
              {" "}
              Cancel
            </Link>
            <input
              className="btn mx-2 rounded-3xl bg-blue-600 border-0"
              type="submit"
              value="Save Change"
            />
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default EditReviews;
