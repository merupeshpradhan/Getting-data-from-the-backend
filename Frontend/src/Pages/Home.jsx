import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='h-[100vh] bg-[url("./assets/bg-image.jpg")] bg-cover bg-center flex justify-center items-center'>
      <div className="flex gap-10">
        <Link to="/login">
          <button className="bg-green-500 hover:bg-green-600 hover:text-amber-100 transition duration-300 ease-in-out cursor-pointer px-10 py-3 rounded-xl text-white font-semibold tracking-widest">Register</button>
        </Link>
        <Link to='/signup'>
        <button className="bg-green-500 hover:bg-green-600 hover:text-amber-100 transition duration-300  ease-in-out cursor-pointer px-10 py-3 rounded-xl text-white font-semibold tracking-widest">Signup</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
