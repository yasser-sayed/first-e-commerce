import React from "react";
import { Link } from "react-router-dom";

const PageError = ({ bg }) => {
  return (
    <>
      <main
        className={`h-screen w-full flex flex-col justify-center items-center bg-[#1A2238] bg-cover bg-fixed ${
          bg ? "bg-sec-bg" : "bg-main-bg text-white"
        }`}
      >
        <h1 className="text-9xl font-extrabold text-white tracking-widest">
          404
        </h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <Link to="/" className="mt-5 btn btn-info btn-outline">
          <p>Go Home</p>
        </Link>
      </main>
    </>
  );
};

export default PageError;
