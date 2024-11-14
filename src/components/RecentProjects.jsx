/* eslint-disable react/prop-types */

import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import Button from "./shared/Button";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Lugz",
    link: "https://lugz.com/",
    image: "/recent_project1.png",
    category: "Wordpress",
    technologies: ["Wordpress", "PHP", "MySQL", "jQuery", "Yoast SEO"],
  },
  {
    id: 2,
    title: "CargoCore",
    link: "https://cargcore.netlify.app/",
    image: "/recent_project11.png",
    category: "React JS",
    technologies: ["React", "Redux", "Rechart", "Tailwind CSS", "GSAP"],
  },

  {
    id: 3,
    title: "Pinchofyum",
    link: "https://pinchofyum.com/",
    image: "/recent_project3.png",
    category: "Wordpress",
    technologies: ["Wordpress", "MySQL", "PHP", "Yoast SEO"],
  },

  {
    id: 4,
    title: "Hire vision",
    link: "https://jovial-cuchufli-ac15e0.netlify.app/",
    image: "/recent_project12.png",
    category: "React JS",
    technologies: ["React", "Redux", "Lenis", "GSAP", "Tailwind CSS"],
  },
  {
    id: 5,
    title: "Academyselfdefense",
    link: "https://academyselfdefense.com/",
    image: "/recent_project5.png",
    category: "Wordpress",
    technologies: ["Wordpress", "PHP", "jQuery", "Yoast SEO", "MySQL"],
  },
  {
    id: 6,
    title: "Eden-grow",
    link: "hhttps://www.eden-grow.de/",
    image: "/recent_project6.png",
    category: "Wordpress",
    technologies: ["Wordpress", "jQuery", "Yoast SEO", "Nginx"],
  },
  {
    id: 7,
    title: "Bilberrry",
    link: "https://bilberrry.com/",
    image: "/recent_project7.png",
    category: "Wordpress",
    technologies: ["Wordpress", "PHP", "jQuery", "Yoast SEO", "MySQL"],
  },
  {
    id: 8,
    title: "Skysys",
    link: "https://myskysys.com/",
    image: "/recent_project8.png",
    category: "Wordpress",
    technologies: ["Wordpress", "PHP", "jQuery", "MySQL"],
  },
  {
    id: 9,
    title: "Sacballet",
    link: "https://www.sacballet.org/",
    image: "/recent_project9.png",
    category: "Wordpress",
    technologies: ["Wordpress", "PHP", "MySQL", "Nginx"],
  },
  {
    id: 10,
    title: "WebXd",
    link: "https://webxd.net/",
    image: "/recent_project10.png",
    category: "Wordpress",
    technologies: ["Wordpress", "PHP", "MySQL", "Nginx"],
  },
  {
    id: 11,
    title: "Playstation",
    link: "https://blog.playstation.com/",
    image: "/recent_project2.png",
    category: "Wordpress",
    technologies: ["Elementor Pro", "Wordpress", "Nginx", "PHP"],
  },
  {
    id: 12,
    title: "Walnut",
    link: "https://www.walnut.io/",
    image: "/recent_project4.png",
    category: "Wordpress",
    technologies: ["Wordpress", "PHP", "jQuery", "Yoast SEO", "MySQL"],
  },
  {
    id: 13,
    title: "Happiem",
    link: "https://happiem.netlify.app/",
    image: "/recent_project13.png",
    category: "React JS",
    technologies: ["React", "Redux", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 14,
    title: "Resolver",
    link: "https://resolver-rouge.vercel.app/",
    image: "/recent_project14.png",
    category: "React JS",
    technologies: ["React", "Redux", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 15,
    title: "Minimal Goods",
    link: "https://gsapminimal.netlify.app/",
    image: "/recent_project15.png",
    category: "React JS",
    technologies: ["React", "Redux", "GSAP", "Tailwind CSS"],
  },
  {
    id: 16,
    title: "Nothing-studio",
    link: "https://nothing-studio.vercel.app/",
    image: "/recent_project16.png",
    category: "React JS",
    technologies: ["React", "Redux", "GSAP", "Tailwind CSS"],
  },
  {
    id: 17,
    title: "Join.To.IT",
    link: "https://jointoit.com/",
    image: "/recent_project17.png",
    category: "React JS",
    technologies: ["React", "Redux", "Three.js", "Node.js", "Nginx"],
  },
  {
    id: 18,
    title: "Mariacharles",
    link: "https://www.mariacharles.co.uk/",
    image: "/recent_project18.png",
    category: "React JS",
    technologies: ["React", "Redux", "GSAP", "Bootstrap"],
  },
  {
    id: 19,
    title: "FIVELY",
    link: "https://5ly.co/",
    image: "/recent_project19.png",
    category: "React JS",
    technologies: ["React", "Redux", "GSAP", "Bootstrap"],
  },
  {
    id: 20,
    title: "Haven",
    link: "https://havenservicing.com/",
    image: "/recent_project20.png",
    category: "React JS",
    technologies: ["React", "Redux", "Gatsby", "Tailwind CSS"],
  },
  {
    id: 21,
    title: "Aero apps",
    link: "https://aeroapps.io/",
    image: "/recent_project21.png",
    category: "Wordpress",
    technologies: ["Wordpress", "GSAP", "MySQL", "PHP", "jQuery"],
  },
  {
    id: 22,
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

export default function ProjectShowcase() {
  const containerRef = useRef();

  const [filter, setFilter] = useState("All");
  // eslint-disable-next-line no-unused-vars
  const [visibleProjects, setVisibleProjects] = useState(4);

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

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
          {["All", "React JS", "Wordpress"].map((category) => (
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
            console.log(span);
            
            return (
              <ProjectCard key={project.id} project={project} isWide={span} />
            );
          })}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="text-center">
            <Link to={"/projects"}>
              <Button text="View More Projects" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
