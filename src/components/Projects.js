import React from "react";
import {Link} from 'react-router-dom';

const Projects = () => {
  return (
    <div className="flex flex-col px-6">
      <div className="flex justify-center items-center flex-wrap">
        {Array(6).fill().map((card, i) => (
            <ProjectCard key={i} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ card, id }) => (
  <div id="projects" className="rounded-lg shadow-lg bg-white w-64 m-4">
    <Link to={"/projects/" + id}>
        <img
            src="https://www.hdwallpapers.in/download/cell_biology_background_hd_wallpaper_cellular-HD.jpg"
            alt="title"
            className="rounded-xl h-64 w-full object-cover"
        />
    </Link>
  </div>
);

export default Projects;
