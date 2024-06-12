import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PageError from "./pages/PageError";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import axios from "axios";
import Prod from "./pages/Prod";

function App() {
  const [bg, setBg] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartProd, setCartProd] = useState([]);

  const getProducts = () => {
    axios({ method: "get", url: "http://localhost:3000/products" }).then(
      (data) => setProducts(data.data)
    );
  };

  const addToCart = (prod) => {
    const check = cartProd.some((obj) => prod.id == obj.id);

    if (check) {
      incItem(prod.id);
    } else {
      const newProd = [...cartProd, { ...prod, items: 1 }];
      setCartProd(newProd);
    }
  };

  const incItem = (prodId) => {
    const newProd = cartProd.map((cartobj) =>
      cartobj.id == prodId ? { items: cartobj.items++, ...cartobj } : cartobj
    );
    setCartProd(newProd);
  };

  const decItem = (prodId) => {
    const newProd = cartProd.map((cartobj) =>
      cartobj.id == prodId && cartobj.items > 1
        ? { items: cartobj.items--, ...cartobj }
        : cartobj
    );
    setCartProd(newProd);
  };

  const delProd = (prodId) => {
    const newProd = cartProd.filter((cartobj) => cartobj.id !== prodId);
    setCartProd(newProd);
  };

  const resetItems = () => {
    const newProd = cartProd.map((cartobj) => {
      return { ...cartobj, items: 1 };
    });
    setCartProd(newProd);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div
      className={
        bg ? "bg-white text-black min-h-screen" : " bg-[#1d232a] min-h-screen"
      }
    >
      <NavBar bg={bg} setBg={setBg} cartProd={cartProd} />
      <Routes>
        <Route path="/" element={<Home bg={bg} />} />
        <Route
          path="/products"
          element={
            <Products products={products} bg={bg} addToCart={addToCart} />
          }
        />
        <Route
          path="/products/:prodid"
          element={<Prod bg={bg} addToCart={addToCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              bg={bg}
              cartProd={cartProd}
              setCartProd={setCartProd}
              incItem={incItem}
              decItem={decItem}
              delProd={delProd}
              resetItems={resetItems}
            />
          }
        />
        <Route path="*" element={<PageError bg={bg} />} />
      </Routes>
      <Footer bg={bg} />
    </div>
  );
}

export default App;
