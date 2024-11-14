/* eslint-disable react/prop-types */
import { ArrowUpRight, Github } from "lucide-react";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


export default function ProjectCard({ project, isWide }) {
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef(null);
  const cursorRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const handleMouseMove = (e) => {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      // Move the mask smoothly with cursor
      gsap.to(cursorRef.current, {
        x: x,
        y: y,
        duration: 0.5,
        ease: "power3.out",
      });

      gsap.to(textRef.current, {
        y: e.movementY < 0 ? -2 : 2,
        x: e.movementX < 0 ? -2 : 2,
      });

      // Clear any previous timeout to reset text position
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set timeout to return text to original position after a short delay
      timeoutRef.current = setTimeout(() => {
        gsap.to(textRef.current, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }, 200);
    };
    if (hovered) {
      cardRef.current.addEventListener("mousemove", handleMouseMove);
    } else {
      cardRef.current.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [hovered]);

  const handleMouseEnter = () => {
    setHovered(true);
    // Show the mask with fromTo animation on hover
    gsap.fromTo(
      cursorRef.current,
      { opacity: 0, scale: 0 }, // Initially hidden and scaled down
      { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" } // Visible and smoothly scaling in
    );
  };

  const handleMouseLeave = () => {
    setHovered(false);
    // Hide the mask with a smooth animation on leave
    gsap.to(cursorRef.current, {
      opacity: 0,
      scale: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };

  return (
    <div
      // Link the cursor mask to the actual project URL
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex relative flex-col z-20 justify-end cursor-pointer w-full h-[30.3rem] object-cover rounded-3xl overflow-hidden ${isWide === 7 ? ' md:col-span-7' : ' md:col-span-5'} col-auto  bg-cover bg-no-repeat`}
      style={{ backgroundImage: `url(${project.image})` }}
    >
      <div className="flex items-center gap-4 p-6">
        <button className="bg-white text-black px-4 py-2 rounded-full flex items-center text-sm font-medium">
          View Project <ArrowUpRight className="ml-2 w-4 h-4" />
        </button>
        <button className="bg-green-400 p-2 rounded-full">
          <Github className="w-5 h-5 text-black" />
        </button>
      </div>

      <div className="p-6 bg-black opacity-90 ">
        <h3 className="text-white text-2xl font-bold mb-4">{project.title}</h3>
        <div className="w-full lg:w-8/12 flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="border-2 border-gray-700 text-gray-300 text-xs px-3 py-2 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Cursor Mask */}
      <a
        href={project.link}
        target="_blank"
        ref={cursorRef}
        className="absolute -top-14 -left-11 w-24 h-24 bg-[#00e676] rounded-full z-10 pointer-events-auto flex items-center justify-center"
        style={{ opacity: 0, transform: "scale(0)" }} // Hidden by default
      >
        <span
          ref={textRef}
          className="text-lg absolute left-7 top-8 font-bold text-white"
        >
          View
        </span>
      </a>
    </div>
  );
}

