import React, { useContext, useState } from "react";
import { MdEmail, MdPassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const [error, setError] = useState(null);
  const { googleLogin, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathName || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      return setError("password must be 6 character or more.");
    }

    login(email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        form.reset();
        setError(null);
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("petuk-token", data.token);
          });
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="md:h-[92vh] h-[92vh] md:flex justify-between">
      <div className="mx-auto w-[30%] pt-16 md:pt-0 md:my-auto">
        <h1 className=" text-3xl normal-case font-bold">Login</h1>
        <p className="my-3 text-gray-500">Register or Login for order Meals.</p>
        {/* login with email */}
        <div>
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white rounded-3xl hover:bg-white border-orange-400 text-black w-full"
          >
            <FcGoogle className="mx-2" />
            Sign in with Google
          </button>
          <p className="my-3 text-center text-gray-500">
            ----Or Sign in with Email ----
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-5 ">
            <label className="flex items-center">
              <MdEmail />
              <span className="ml-1">Email</span>
            </label>
            <input
              className="bg-transparent outline-none border rounded-3xl px-3 p-2 w-[100%]"
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

          <p className="text-red-500">{error}</p>
          <div className="text-center mt-5">
            <input
              className="btn w-full mb-3 bg-orange-400 rounded-3xl border-0"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <p>
          Not registered yet?{" "}
          <Link to={"/register"} className="text-orange-400">
            Create an Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
