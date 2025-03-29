import React from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";

function Login() {
  return (
    <HomeLayout>
      <div className="">
        <Link to="/">
          <i className="fa-solid fa-house text-2xl mt-10 ml-10 text-white"></i>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div className="px-10 py-10 bg-[url('./assets/bg-image.jpg')] bg-cover bg-center rounded-lg">
          <div className="flex justify-center flex-col items-center">
            <h2 className="text-center text-3xl mb-6 tracking-widest text-lime-400">
              Login
            </h2>
            <hr className="border border-lime-400 w-27 mb-9" />
            <form className="flex flex-col gap-6 items-center">
              <div className="email bg-white rounded-lg flex items-center">
                <i class="fa-regular fa-envelope pl-2 text-xl"></i>
                <input
                  type="email"
                  placeholder="email"
                  className="outline-0  w-full py-2 text-center placeholder:text-center font-medium tracking-wider"
                />
              </div>
              <div className="password bg-white rounded-lg flex items-center">
                <i class="fa-regular fa-calendar-minus pl-2 text-xl"></i>
                <input
                  type="password"
                  placeholder="Password"
                  className="outline-0 w-full py-2  text-center placeholder:text-center font-medium tracking-wider"
                />
              </div>
              <div className="flex justify-center">
                <button className="flex justify-center border-2 bg-white border-none hover:bg-green-300 transition duration-300 ease-in-out rounded-xl py-1 px-5 font-semibold cursor-pointer">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Login;
