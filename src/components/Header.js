import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-white shadow-lg fixed top-0 left-0 right-0">
      <a
        href="#"
        className="flex justify-start items-center text-xl text-black space-x-1"
      >
        <span>NeedFund</span>
      </a>
      <div className="flex space-x-2 justify-center">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-full shadow-md hover:bg-indigo-700"
        >
          {" "}
          Connect Wallet{" "}
        </button>
      </div>
    </header>
  );
};

export default Header;
