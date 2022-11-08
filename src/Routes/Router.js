import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddFood from "../Pages/AddFood/AddFood";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/addFood", element: <AddFood /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);
