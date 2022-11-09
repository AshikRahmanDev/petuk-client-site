import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import TableItem from "./TableItem";

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/user/reviews/?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/review/?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.deletedCount > 0) {
          const reviewLeft = reviews.filter((rev) => rev._id !== id);
          setReviews(reviewLeft);
        }
      });
  };

  return (
    <div className="my-5 h-[90vh] ">
      <div className="overflow-x-auto w-[90%] mx-auto rounded-lg">
        {reviews.length === 0 ? (
          <div className="flex items-center justify-center h-[80vh] mx-auto ">
            <h1 className="text-5xl font-bold">
              No <span className="text-orange-400">reviews</span> were added!
            </h1>
          </div>
        ) : (
          <table className="border border-orange-400 p-2 w-full ">
            <thead className="bg-orange-400 ">
              <tr>
                <th className="py-3 text-white">Meal</th>
                <th className="py-3 text-white">Review</th>
                <th className="py-3 text-white">Date</th>
                <th className="py-3 text-white"></th>
                <th className="py-3 text-white"></th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <TableItem
                  key={review._id}
                  review={review}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyReviews;
