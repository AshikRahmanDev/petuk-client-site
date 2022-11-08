import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddMeal from "../Pages/AddMeal/AddMeal";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/addMeal", element: <AddMeal /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);
