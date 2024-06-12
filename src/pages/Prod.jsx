import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaShoppingCart } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

const Prod = ({ bg, addToCart }) => {
  const [product, setProduct] = useState([]);

  const { prodid } = useParams();

  const getProduct = () => {
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products/${prodid}`,
    }).then((data) => setProduct(data.data));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div
      className={`   bg-cover bg-fixed flex justify-center items-center ${
        bg ? "bg-sec-bg" : "bg-main-bg"
      }`}
    >
      <div
        className={`card w-[80%]  justify-center text-center items-center gap-8 py-6 my-6 ${
          bg ? " bg-slate-300" : "bg-neutral"
        }`}
      >
        <Link
          to="/products"
          title="back to products"
          className="group btn btn-square btn-ghost  absolute start-0 top-0"
        >
          <IoArrowBack className=" btn-rotate" />
        </Link>

        <img src={product.image} width="288px" className="h-72" alt="" />
        <h1 className="font-medium text-2xl">{product.title}</h1>
        <p className="  text-lg">{product.description}</p>
        <p className="  text-xl">category: {product.category}</p>
        <h1 className="font-medium  text-xl">
          price: {product.price?.toFixed(2)} $
        </h1>
        <div>
          <h1 className="">rate: {product.rating?.rate}</h1>
          <h1 className=" ">people rated that: {product.rating?.count}</h1>
        </div>
        <button
          title="add to your cart"
          className="group btn btn-primary "
          onClick={() => addToCart(product)}
        >
          add to cart <FaShoppingCart className=" btn-rotate" />
        </button>
      </div>
    </div>
  );
};

export default Prod;
