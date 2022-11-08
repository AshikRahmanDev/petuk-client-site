import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SiFoodpanda } from "react-icons/si";
import { AuthContext } from "../../Context/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigationOption = (
    <>
      <li>
        <Link
          to={"/"}
          className="btn bg-transparent border-0 hover:bg-white hover:text-orange-400"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to={"/addMeal"}
          className="btn bg-transparent border-0 hover:bg-white hover:text-orange-400"
        >
          Add Service
        </Link>
      </li>

      <li>
        <Link className="btn bg-transparent border-0 hover:bg-white hover:text-orange-400">
          Blog
        </Link>
      </li>
      <li>
        <Link
          to={"/login"}
          className="btn bg-transparent border-0 hover:bg-white hover:text-orange-400"
        >
          Login
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navigationOption}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          <SiFoodpanda className="text-orange-400" />{" "}
          <p className="ml-1">PETUK</p>
        </Link>
      </div>
      <div className="navbar-end hidden md:flex">
        <ul className="menu menu-horizontal p-0">{navigationOption}</ul>
      </div>
    </div>
  );
};

export default Header;
