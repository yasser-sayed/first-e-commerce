import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BsLightbulbFill } from "react-icons/bs";
import { BsLightbulbOffFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBar = ({ bg, setBg, cartProd }) => {
  return (
    <div
      className={
        bg
          ? "navbar bg-slate-300  py-4  px-8 justify-between"
          : "navbar bg-neutral py-4  px-8 justify-between"
      }
    >
      <div className="">
        <Link
          to="/"
          title="go to home"
          className="btn btn-ghost text-base md:text-xl"
        >
          AboEls3oud-Market
        </Link>
      </div>

      <div className="gap-4">
        <Link to="/" title="go to home" className="group btn  btn-ghost">
          <p className="btn-rotate group-hover:[text-shadow:_0px_0px_20px_#00e2ff]">
            Home
          </p>
        </Link>
        <Link
          to="/products"
          title="go to products"
          className="group btn  btn-ghost"
        >
          <p className="btn-rotate group-hover:[text-shadow:_0px_0px_20px_#00e2ff]">
            products
          </p>
        </Link>
      </div>

      <div className="flex gap-6">
        <Link
          to="/cart"
          className="group btn btn-square btn-ghost "
          title="view cart"
        >
          <FaShoppingCart className=" btn-rotate" />
          <h1>{cartProd.length}</h1>
        </Link>

        <button
          className="group btn btn-square btn-ghost"
          title={bg ? "Dark-Mode" : "Light-Mode"}
          onClick={() => setBg(!bg)}
        >
          {bg ? (
            <BsLightbulbOffFill className=" btn-rotate" />
          ) : (
            <BsLightbulbFill className=" btn-rotate" />
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
