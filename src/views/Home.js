import React from "react";
import Hero from "../components/Hero.js";
import Projects from "../components/Projects.js";
import CreateProject from "../components/CreateProject.js";

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <div className="flex justify-center items-center my-5">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-full shadow-md hover:bg-indigo-700"
        >
          {" "}
          Load More{" "}
        </button>
      </div>
      <CreateProject/>
    </>
  );
};

export default Home;
