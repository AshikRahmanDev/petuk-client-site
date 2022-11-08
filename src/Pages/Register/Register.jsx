import React from "react";
import { MdEmail, MdPassword } from "react-icons/md";
import { BsFillPersonCheckFill, BsLink45Deg } from "react-icons/bs";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="md:h-[92vh] h-[92vh] md:flex justify-between">
      <div className="mx-auto w-[30%] pt-16 md:pt-0 md:my-auto">
        <h1 className=" text-3xl normal-case font-bold">Register Now</h1>
        <p className="my-3 text-gray-500">Register or Login for order Meals.</p>

        <form action="">
          <div className="mt-5 ">
            <label className="flex items-center">
              <BsFillPersonCheckFill />
              <span className="ml-1">Your Name</span>
            </label>
            <input
              className="bg-transparent outline-none border rounded-3xl px-3 p-2 w-[100%]"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mt-5 ">
            <label className="flex items-center">
              <BsLink45Deg />
              <span className="ml-1">Your Photo</span>
            </label>
            <input
              className="bg-transparent outline-none border rounded-3xl p-2 px-3 w-[100%]"
              type="text"
              name="image"
              placeholder="Image URL"
              required
            />
          </div>

          <div className="mt-5 ">
            <label className="flex items-center">
              <MdEmail />
              <span className="ml-1">Email</span>
            </label>
            <input
              className="bg-transparent outline-none border rounded-3xl p-2 px-3 w-[100%]"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mt-5 ">
            <label className="flex items-center">
              <MdPassword />
              <span className="ml-1">Password</span>
            </label>
            <input
              className="bg-transparent outline-none border rounded-3xl p-2 px-3 w-[100%]"
              type="password"
              name="password"
              placeholder="Min. 8 Character"
              required
            />
          </div>

          <p className="text-red-500"></p>
          <div className="text-center mt-5">
            <input
              className="btn w-full mb-3 bg-orange-400 rounded-3xl border-0"
              type="submit"
              value="Register"
            />
          </div>
        </form>
        <p>
          Already have an Account?{" "}
          <Link to={"/login"} className="text-orange-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
