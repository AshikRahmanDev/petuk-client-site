import React from "react";
import { Link } from "react-router-dom";

const TableItem = ({ review, handleDelete }) => {
  const { mealDetails, meal, reviewMessage, date, _id } = review;
  return (
    <tr>
      <td className="p-3 rounded-xl">
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={mealDetails?.picture}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{meal}</div>
            <div className="text-sm opacity-50">
              Price ${mealDetails?.price}
            </div>
          </div>
        </div>
      </td>
      <td>
        {reviewMessage.length > 50
          ? reviewMessage.slice(0, 50) + "..."
          : reviewMessage}
      </td>
      <td className="hidden md:block">{date}</td>

      <td className="md:w-[150px] text-center">
        <button
          onClick={() => handleDelete(_id)}
          className="btn m-1 bg-red-500 rounded-3xl border-0"
        >
          Delete
        </button>
        <br className="hidden md:visible" />
        <Link
          to={`/editReview/${_id}`}
          className="btn bg-green-500 rounded-3xl border-0"
        >
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default TableItem;
