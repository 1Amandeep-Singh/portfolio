import React, { useState } from "react";
import profilephoto from "../assets/profilepic.jpg";
import ShinyEffect from "./ShinyEffect";

// import project1 from '../assets/'
// import project2 from '../assets/'
// import project3 from '../assets/'
// import project4 from '../assets/'
import { AiFillGithub } from "react-icons/ai";

const projects = [
  {
    img: profilephoto,
    title: "Project 1",
    description: "UI for frontend development using React",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: profilephoto,
    title: "Project 2",
    description: "UI for frontend development using React",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: profilephoto,
    title: "Project 3",
    description: "UI for frontend development using React",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: profilephoto,
    title: "Project 4",
    description: "UI for frontend development using React",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: profilephoto,
    title: "Project 5",
    description: "UI for frontend development using React",
    links: {
      site: "#",
      github: "#",
    },
  },
  {
    img: profilephoto,
    title: "Project 6",
    description: "UI for frontend development using React",
    links: {
      site: "#",
      github: "#",
    },
  },
];

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0) 
  return (
    <div
      className="relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row"
      id="portfolio"
    >
      <div className="z-10 glass p-6 w-full border-2 max-w-[600px]">
        <div className="w-full h-80">
          <img
            src={projects[currentProject].img}
            alt={projects[currentProject].title}
            className=" w-full h-full object-cover rounded-lg mb-4"
          />
        </div>
        <p className="text-gray-200 my-4">{projects[currentProject].description}</p>
        <div className="flex space-x-4">
          <a
            href={projects[currentProject].links.site}
            className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
          >
            View Site
          </a>
          <a
            href={projects[currentProject].links.github}
            className="px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
      <div className="absolute inset-0">
        <div className="hidden md:block">
          <ShinyEffect left={100} top={0} size={900} />
        </div>
      </div>
      <ul className="z-10 ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1">
        {projects.map((project, index) => (
          <li
            key={index}
            onClick={() => setCurrentProject(index)}
            className={
              `cursor-pointer text-gray-300 bg-slate-700 rounded-lg p-2 max-w-[100px] hover:bg-slate-800 transition duration-300 ${currentProject === index ? "bg-slate-900" : ""}`
            }
          >{project.title}</li>
        ))}
        <li></li>
      </ul>
    </div>
  );
};

export default Portfolio;
