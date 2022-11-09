import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddMeal from "../Pages/AddMeal/AddMeal";
import AllMenu from "../Pages/AllMenu/AllMenu";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import MealDetails from "../Pages/MealDetails/MealDetails";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/addMeal", element: <AddMeal /> },
      {
        path: "/allMenu",
        loader: () => fetch("http://localhost:5000/menu/meals"),
        element: <AllMenu />,
      },
      {
        path: "/mealDetails/:id",
        loader: ({ params }) => {
          const id = params.id;
          return fetch(`http://localhost:5000/mealWithId/${id}`);
        },
        element: <MealDetails />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
