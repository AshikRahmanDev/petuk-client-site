import React from "react";

const ReviewCard = ({ review }) => {
  const { displayName, email, photoURL, reviewMessage, date } = review;
  return (
    <div className="p-3 border rounded-lg">
      <div className="flex items-center">
        <img
          className="w-[50px] h-[50px] object-cover rounded-full"
          src={photoURL}
          alt=""
        />
        <div className="ml-2">
          <p className="font-bold p-0 m-0">{displayName}</p>
          <p className="text-gray-500 m-0 p-0">{date}</p>
        </div>
      </div>
      <p>{reviewMessage}</p>
    </div>
  );
};

export default ReviewCard;
