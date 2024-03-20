import React from "react";

const ProjectDetails = () => {
  return (
    <div className="py-24 px-6">
      <div>
        <div className="flex justify-start items-start sm:space-x-4 flex-wrap">
          <img
            src="https://www.hdwallpapers.in/download/cell_biology_background_hd_wallpaper_cellular-HD.jpg"
            alt="title"
            className="rounded-xl h-64 w-full sm:w-1/3"
          />
          <div className="flex-1 sm:py-0 py-4">
            <div className="flex flex-col justify-start flex-wrap">
                <h5 className="text-gray-900 text-sm font-medium mb-2">
                    Biological Research
                </h5>
                <small className="text-gray-500">
                    2 days left
                </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
