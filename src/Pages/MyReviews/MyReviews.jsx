import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import TableItem from "./TableItem";
import toast, { Toaster } from "react-hot-toast";
import setTitle from "../../Hooks/TiitleHooks";

const MyReviews = () => {
  setTitle("My Review");
  const [reviews, setReviews] = useState([]);
  const { user, logout } = useContext(AuthContext);
  const notify = () => toast.success("Review Deleted!");

  useEffect(() => {
    fetch(
      `https://petuk-server-mohammdashik.vercel.app/user/reviews/?email=${user?.email}`,
      {
        headers: {
          authorization: localStorage.getItem("petuk-token"),
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user]);

  console.log(reviews);

  const handleDelete = (id) => {
    const conformation = window.confirm("Confirm if your want to delete!");
    if (conformation) {
      fetch(
        `https://petuk-server-mohammdashik.vercel.app/delete/review/?id=${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.deletedCount > 0) {
            const reviewLeft = reviews.filter((rev) => rev._id !== id);
            setReviews(reviewLeft);
            notify();
          }
        });
    }
  };

  return (
    <div className="my-5 h-[90vh] ">
      <div className="overflow-x-auto md:w-[90%] mx-auto rounded-lg">
        {reviews.length === 0 ? (
          <div className="flex items-center justify-center h-[80vh] mx-auto ">
            <h1 className="text-5xl text-center font-bold">
              No <span className="text-orange-400">reviews</span> were added!
            </h1>
          </div>
        ) : (
          <table className="border border-orange-400 p-2 w-full ">
            <thead className="bg-orange-400 ">
              <tr>
                <th className="py-3 text-start px-3 text-white">Meal</th>
                <th className="py-3 text-start px-3 text-white">Review</th>
                <th className="py-3 hidden md:block text-start px-3 text-white">
                  Date
                </th>
                <th className="py-3 text-start px-3 text-white"></th>
                <th className="py-3 text-start px-3 text-white"></th>
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
      <Toaster />
    </div>
  );
};

export default MyReviews;
