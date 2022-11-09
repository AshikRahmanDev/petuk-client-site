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

  return (
    <div className="my-5">
      <div className="overflow-x-auto w-[90%] mx-auto rounded-lg">
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
              <TableItem key={review._id} review={review} />
            ))}
          </tbody>
          {/* footer */}
          {/* <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot> */}
        </table>
      </div>
    </div>
  );
};

export default MyReviews;
