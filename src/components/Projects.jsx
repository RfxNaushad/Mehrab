/* eslint-disable react/prop-types */

import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import Button from "./shared/Button";

const projects = [
  {
    id: 1,
    title: "People desk",
    link: "https://peopledesk.io/",
    image: "/recent_project1.png",
    category: "Wordpress",
    technologies: ["Wordpress", "Elementor", "PHP", "MySQL", "jQuery", "GSAP"],
  },
  {
    id: 2,
    title: "Aerodrop",
    link: "https://aerodrop.ai/",
    image: "/recent_project2.png",
    category: "Wordpress",
    technologies: ["Wordpress", "Elementor", "MySQL", "PHP", "jQuery"],
  },
  {
    id: 3,
    title: "Creatibuzz",
    link: "https://creatibuzz.com/",
    image: "/recent_project3.png",
    category: "Wordpress",
    technologies: ["Wordpress", "Elementor", "PHP", "MySQL", "jQuery", "GSAP"],
  },
  {
    id: 4,
    title: "iBOS",
    link: "https://ibos.io/",
    image: "/recent_project4.png",
    category: "Wordpress",
    technologies: ["Wordpress", "Elementor", "PHP", "MySQL", "jQuery"],
  },
  {
    id: 5,
    title: "Managerium",
    link: "https://managerium.io/",
    image: "/recent_project5.png",
    category: "Wordpress",
    technologies: ["Wordpress", "PHP", "jQuery", "MySQL"],
  },
  {
    id:6,
    title: "CargoCore",
    link: "https://cargcore.netlify.app/",
    image: "/recent_project11.png",
    category: "React JS",
    technologies: ["React", "Redux", "Rechart", "Tailwind CSS", "GSAP"],
  },
  {
    id: 7,
    title: "Hire vision",
    link: "https://jovial-cuchufli-ac15e0.netlify.app/",
    image: "/recent_project12.png",
    category: "React JS",
    technologies: ["React", "Redux", "Lenis", "GSAP", "Tailwind CSS"],
  },
  {
    id: 8,
    title: "Happiem",
    link: "https://happiem.netlify.app/",
    image: "/recent_project13.png",
    category: "React JS",
    technologies: ["React", "Redux", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 9,
    title: "Resolver",
    link: "https://resolver-rouge.vercel.app/",
    image: "/recent_project14.png",
    category: "React JS",
    technologies: ["React", "Redux", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 10,
    title: "Minimal Goods",
    link: "https://gsapminimal.netlify.app/",
    image: "/recent_project15.png",
    category: "React JS",
    technologies: ["React", "Redux", "GSAP", "Tailwind CSS"],
  },
  {
    id: 11,
    title: "Nothing-studio",
    link: "https://nothing-studio.vercel.app/",
    image: "/recent_project16.png",
    category: "React JS",
    technologies: ["React", "Redux", "GSAP", "Tailwind CSS"],
  },
  {
    id: 12,
    title: "Aero apps",
    link: "https://aeroapps.io/",
    image: "/recent_project21.png",
    category: "Wordpress",
    technologies: ["Wordpress", "GSAP", "MySQL", "PHP", "jQuery"],
  },
  {
    id: 13,
    title: "Track force",
    link: "https://trackforce.io/",
    image: "/recent_project22.png",
    category: "Wordpress",
    technologies: ["Wordpress", "MySQL", "PHP", "jQuery"],
  },
];
const FilterButton = ({ label, isActive, onClick }) => (
  <button
    className={`px-6 py-3 text-nowrap rounded-full text-xs md:text-sm font-medium ${
      isActive ? "bg-green-600 text-white" : "bg-gray-700 text-white"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

export default function Projects() {
  const containerRef = useRef();

  const [filter, setFilter] = useState("All");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  const loadMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 4);
  };
  const showLess = () => {
    setVisibleProjects(6);
    containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const spans = [
    [7, 5], // Pair 1
    [5, 7], // Pair 2
  ];
  return (
    <div
      ref={containerRef}
      className="bg-black min-h-fit text-white py-8 md:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-[1120px] mx-auto">
        <div className="flex space-x-4 mb-12 overflow-x-auto">
          {["All","React JS", "Wordpress"].map((category) => (
            <FilterButton
              key={category}
              label={category}
              isActive={filter === category}
              onClick={() => setFilter(category)}
            />
          ))}
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-12 gap-8 mb-6 md:mb-12">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => {
            const pairIndex = Math.floor(index / 2) % spans.length;
             const span = spans[pairIndex][index % 2];
            return   <ProjectCard
              key={project.id}
              project={project}
              isWide={span }
            />
          })}
        </div>
          <div className="flex items-center gap-4 justify-center" >
          {visibleProjects < filteredProjects.length && (
          <div className="text-center">
            <Button text="Show More" onClick={loadMore} />
          </div>
        )}
        {visibleProjects >  8 && (
          <div className="text-center">
            <Button text="Show Less" onClick={showLess} />
          </div>
        )}
          </div>
      </div>
    </div>
  );
}
