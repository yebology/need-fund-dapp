import React from "react";

const Projects = () => {
  return (
    <div className="flex flex-col px-6">
      <div className="flex justify-center items-center flex-wrap">
        {Array(6)
          .fill()
          .map((card, i) => {
            <ProjectCard key={i} />;
          })}
      </div>
    </div>
  );
};

const ProjectCard = ({ card, id }) => (
  <div id="projects" className="rounded-lg shadow-lg bg-white">
    Card
  </div>
);

export default Projects;
