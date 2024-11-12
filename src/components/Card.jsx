/* eslint-disable react/prop-types */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, Github } from "lucide-react";
import { useRef, useState } from "react";
const Card = ({
  title,
  image,
  link,
  isActive,
  handleMouseIsEnter,
  handleMouseIsLeave,
}) => {
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
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
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
    <a  href={link} target="_blank" >
      <div
        ref={cardRef}
        onMouseEnter={() => {
          handleMouseEnter();
          handleMouseIsEnter();
        }}
        onMouseLeave={() => {
          handleMouseLeave();
          handleMouseIsLeave();
        }}
        className={`group relative overflow-hidden rounded-3xl h-[230px] md:h-[400px] cursor-pointer transition-all duration-300 ${
          isActive ? "scale-110 z-10" : "scale-90"
        }`}
        // style={{
        //     minWidth: "20%", // Adjust for 5 items
        //     height: "400px",
        // }}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-3 md:p-6 w-full">
          <h3 className="text-white text-2xl font-bold mb-4">{title}</h3>
          <div className=" flex md:flex-row items-center justify-between sm:text-xs">
            <button className="bg-white/20 sm:text-xs hover:bg-white/30 text-white px-1 md:px-4 py-1 md:py-2 rounded-full flex items-center transition-colors">
              View Project <ArrowUpRight className="ml-2 w-4 h-4" />
            </button>
            <button className="bg-green-400 p-2 rounded-full">
              <Github className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
        {/* Cursor Mask */}
        <div
          ref={cursorRef}
          className="absolute hidden -top-14 -left-11 w-24 h-24 bg-[#00e676] rounded-full  md:flex items-center justify-center"
          style={{ opacity: 0, transform: "scale(0)" }} // Hidden by default
        >
          <span
            ref={textRef}
            className="text-lg  absolute left-7 top-8 font-bold text-white"
          >
            View
          </span>
        </div>
      </div>
    </a>
  );
};

export default Card;
