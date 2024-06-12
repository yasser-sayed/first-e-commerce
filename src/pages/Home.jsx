import React from "react";

const Home = ({ bg }) => {
  return (
    <div
      className={`h-[80vh] flex flex-col px-10  gap-10 bg-cover bg-fixed ${
        bg ? "bg-sec-bg" : "bg-main-bg"
      }`}
    >
      <h1 className="  text-6xl md:text-8xl  w-1/3 [text-shadow:_8px_5px_20px_#00e2ff]">
        welcome to our market
      </h1>
      <h1 className="  text-end  text-6xl md:text-8xl   [text-shadow:_8px_5px_20px_#00e2ff]">
        AboEls3oud <br /> Market
      </h1>
    </div>
  );
};

export default Home;
