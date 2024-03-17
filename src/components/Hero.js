import React from "react";

const Hero = () => {
  return (
    <div className="text-center bg-white py-24 px-6 text-gray-800">
      <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
        <span>Fueling Web3 Dreams Together With</span>
        <br />
        <span className="text-indigo-600">NeedFund.</span>
      </h1>
      <button
        type="button"
        className="inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-full shadow-md hover:bg-indigo-700"
      >
        {" "}
        Add Project{" "}
      </button>
      <button
        type="button"
        className="inline-block px-6 py-2.5  text-indigo-600 font-medium rounded-full shadow-md bg-transparent hover:bg-slate-50 border border-indigo-600"
      >
        {" "}
        Back Project{" "}
      </button>
    </div>
  );
};

export default Hero;
