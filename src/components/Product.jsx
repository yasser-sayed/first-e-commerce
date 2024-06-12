import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ prod, bg, addToCart }) => {
  const [readState, setread] = useState(false);

  return (
    <div
      className={`card w-96 bg-base-100 shadow-xl items-center ${
        bg ? " bg-slate-300" : "bg-neutral"
      }`}
    >
      <Link title="veiw product info" to={`/products/${prod.id}`}>
        <img
          width="288px"
          className=" h-72"
          src={prod.image}
          alt={prod.category}
        />
      </Link>
      <div className="card-body">
        <Link
          title="veiw product info"
          to={`/products/${prod.id}`}
          className="card-title text-lg"
        >
          {prod.title}
        </Link>
        <p>
          <span>{prod.description.slice(0, 50)}</span>

          <span className={readState ? "inline" : "hidden"}>
            {prod.description.slice(50, prod.description.length)}
          </span>
          <a
            className="cursor-pointer text-gray-500 "
            onClick={() => setread(!readState)}
          >
            {readState ? "show less" : "show more"}
          </a>
        </p>
        <p className="font-medium">price : {prod.price.toFixed(2)} $</p>
        <div className="card-actions justify-end">
          <button
            title="add to your cart"
            onClick={() => addToCart(prod)}
            className="group btn btn-primary "
          >
            add to cart <FaShoppingCart className=" btn-rotate" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
