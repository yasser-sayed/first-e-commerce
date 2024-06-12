import React from "react";
import { FaTrash } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const CardHeader = ({ setCartProd, bg, resetItems }) => {
  return (
    <div
      className={`flex justify-center  flex-col  rounded-lg bg-opacity-60 relative ${
        bg ? "bg-slate-300" : "bg-neutral"
      }`}
    >
      <Link
        to="/products"
        title="back to products"
        className="group btn btn-square btn-ghost  absolute top-0"
      >
        <IoArrowBack className=" btn-rotate" />
      </Link>

      <h1 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold">
        Your Cart Items
      </h1>
      <div className="flex justify-evenly py-5">
        <button
          onClick={resetItems}
          className="group btn btn-ghost "
          title="Reset-Items"
        >
          <GrPowerReset className="btn-rotate" />
        </button>
        <button
          className="group btn  btn-ghost text-error"
          title="Empty-Cart"
          onClick={() => setCartProd([])}
        >
          <FaTrash className="btn-rotate" />
        </button>
      </div>
    </div>
  );
};

export default CardHeader;
