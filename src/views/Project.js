import React from "react";
import ProjectDetails from "../components/ProjectDetails";
import ProjectBackers from "../components/ProjectBackers";
import UpdateProject from "../components/UpdateProject.js";
import InvestProject from "../components/InvestProject.js";
import DeleteProject from "../components/DeleteProject.js";

const Project = () => {
  return (
    <>
      <ProjectDetails/>
      <ProjectBackers/>
      <UpdateProject/>
      <InvestProject/>
      <DeleteProject/>
    </>
  );
};

export default Project;
