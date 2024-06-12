import React from "react";
import { FaMinus } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";
import { GiHealthIncrease } from "react-icons/gi";
import { Link } from "react-router-dom";

const CartProd = ({ prod, bg, incItem, decItem, delProd }) => {
  return (
    <div
      className={`flex justify-around items-center p-4 text-lg font-medium text-center  rounded-lg bg-opacity-70 ${
        bg ? "bg-slate-300  " : "bg-neutral  "
      }`}
    >
      <Link
        title="view product"
        to={`/products/${prod.id}`}
        className="w-[10%]"
      >
        <img src={prod.image} className="h-20 w-full" alt="" />
      </Link>

      <h1>
        name :{" "}
        <Link
          title="view product"
          to={`/products/${prod.id}`}
          className="text-sm w-[70%] inline-flex "
        >
          {prod.title}
        </Link>
      </h1>
      <h1>price : {prod.price?.toFixed(2)}$</h1>
      <h1>items : {prod.items}</h1>
      <button
        className="group btn btn-ghost"
        title="Add-Item"
        onClick={() => incItem(prod.id)}
      >
        <GiHealthIncrease className="btn-rotate text-success" />
      </button>
      <button
        className="group btn btn-ghost"
        title="Remove-Item"
        onClick={() => decItem(prod.id)}
      >
        <FaMinus className="btn-rotate text-warning" />
      </button>
      <button
        onClick={() => delProd(prod.id)}
        className="group btn btn-ghost"
        title="Delete-Product"
      >
        <IoTrashBinSharp className="btn-rotate text-error" />
      </button>
      <h1>total : {(prod.items * prod.price).toFixed(2)}$</h1>
    </div>
  );
};

export default CartProd;
