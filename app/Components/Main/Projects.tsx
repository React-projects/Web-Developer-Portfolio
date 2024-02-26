import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center py-20"
      id="Projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-12">
        <a  className="relative z-[150] " target="_blank" href="https://as3af-web.netlify.app/">
        <ProjectCard
          src="/assets/projects/eao.png"
          title="A web for the Egyptian Ambulance Authority"
          description=""
        />
        </a>
    
        <a  className="relative z-[150] " target="_blank" href="https://vistro.netlify.app/">
        <ProjectCard
          src="/assets/projects/vistro-web.png"
          title="A vistro-web "
          description=""
        />
        </a>
        <a  className="relative z-[150] " target="_blank" href="https://game-killer.netlify.app/">
        <ProjectCard
          src="/assets/projects/game-killer.png"
          title="Game-Killer"
          description=""
        />
        </a>
     
      </div>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <a  className="relative z-[150] " target="_blank" href="https://hilink-web.netlify.app/">
        <ProjectCard
          src="/assets/projects/hilink.png"
          title="A camping website"
          description=""

        />
        </a>
    
        <a  className="relative z-[150] " target="_blank" href="https://master--car-sitee.netlify.app/">
        <ProjectCard
          src="/assets/projects/car-hub.png"
          title="a car website" 
          description=""
        />
        </a>
        <a  className="relative z-[150] " target="_blank" href="https://systemira.com/">
        <ProjectCard
          src="/assets/projects/sysmira.png"
          title=" a company wesbite"
          description=""
        />
        </a>
     
      </div>
    </div>
  );
};

export default Projects;