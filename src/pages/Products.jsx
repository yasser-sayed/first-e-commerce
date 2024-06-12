import React from "react";
import Product from "../components/Product";

const Products = ({ products, bg, addToCart }) => {
  return (
    <div
      className={`flex flex-wrap gap-7 justify-center py-6 bg-cover bg-fixed ${
        bg ? "bg-sec-bg" : "bg-main-bg"
      }`}
    >
      {products.map((prod) => (
        <Product prod={prod} bg={bg} addToCart={addToCart} key={prod.id} />
      ))}
    </div>
  );
};

export default Products;
