import React from "react";

const ReviewSection = () => {
  return (
    <div className="border-2 my-6 p-3">
      <h1 className="text-4xl font-bold">Customer Reviews</h1>
      <div className="grid grid-cols-4">
        <div className="col-span-3"></div>
        <div className="col-span-1">
          <h4 className="text-xl font-bold">Review This Meal</h4>
          <form>
            <textarea
              name="reviewMessage"
              className="input border-gray-400 h-[150px] my-2"
              cols="30"
              rows="10"
            ></textarea>
            <div>
              <input
                type="submit"
                className="btn rounded-3xl bg-orange-500 border-0"
                value="Post your review"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
