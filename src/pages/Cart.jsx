import React from "react";
import { Link } from "react-router-dom";
import CardHeader from "./../components/cart/CardHeader";
import CartProd from "../components/cart/CartProd";

const Cart = ({
  bg,
  cartProd,
  setCartProd,
  incItem,
  decItem,
  delProd,
  resetItems,
}) => {
  return (
    <div
      className={`min-h-[80vh]  bg-cover bg-fixed    ${
        bg ? "bg-sec-bg" : "bg-main-bg"
      }`}
    >
      <div
        className={`${
          cartProd.length && "hidden"
        } flex flex-col gap-24 justify-center items-center  min-h-[80vh]`}
      >
        <h1 className="text-6xl font-bold ">your cart is empty</h1>
        <Link
          title="back to products"
          to="/products"
          className="group btn btn-primary"
        >
          go check products
        </Link>
      </div>

      <div
        className={`py-7  flex flex-col gap-8 ${!cartProd.length && "hidden"}`}
      >
        <CardHeader setCartProd={setCartProd} bg={bg} resetItems={resetItems} />

        {cartProd.map((prod) => (
          <CartProd
            prod={prod}
            bg={bg}
            incItem={incItem}
            decItem={decItem}
            delProd={delProd}
            key={prod.id}
          />
        ))}
        <h1 className="text-4xl text-center font-bold">
          total price :{" "}
          {cartProd.length &&
            cartProd
              .map((obj) => obj.price * obj.items)
              .reduce((num1, num2) => num1 + num2)
              .toFixed(2)}
        </h1>
      </div>
    </div>
  );
};

export default Cart;
