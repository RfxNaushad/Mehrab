import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'tailwindcss/tailwind.css'; // Assuming Tailwind is set up

gsap.registerPlugin(ScrollTrigger);

const TextReveal = () => {
  const textRefs = useRef([]); // Array of refs for multiple lines
  const overlayRefs = useRef([]);

  useEffect(() => {
    textRefs.current.forEach((textRef, index) => {
      gsap.fromTo(
        overlayRefs.current[index],
        { width: '100%' }, 
        {
          width: '0%', 
          scrollTrigger: {
            trigger: textRef,
            start: () => `top+=${index * 100} bottom`, // Start for each line adjusted by its index
            end: () => `top+=${index * 100 + 160} bottom`, // Adjust end to allow for reveal
            scrub: 0.5,
          },
        }
      );

      // Animate the opacity of "full-stack developer" separately
      const developerText = textRef.querySelector('.full-stack-developer');
      if (developerText) {
        gsap.fromTo(
          developerText,
          { opacity: 0.5 }, // Start with reduced opacity
          {
            opacity: 1, // End with full opacity
            scrollTrigger: {
              trigger: textRef,
              start: () => `top+=${index * 100} bottom`, // Sync with line reveal
              scrub: 0.5,
            },
          }
        );
      }
    });
  }, []);

  const lines = [
    "I'm a full stack developer focused",
    "on creating scalable, efficient apps",
    "using the MERN stack for seamless",
    "user experiences and functionality."
  ];
  

  return (
    <div className="h-full text-center bg-black"> {/* Increased height for more scrolling */}
      {lines.map((line, i) => (
        <div className="relative  my-0 md:my-4" key={i}>
          {/* Overlay for each line */}
          <div
            ref={(el) => (overlayRefs.current[i] = el)} // Set individual ref for each overlay
            className="absolute right-0 bg-black z-10 opacity-70 min-h-[30px] md:min-h-[90px]"
          />
          {/* Text container for each line */}
          <div
            className="text-3xl md:text-[68px] font-bold text-white leading-[38px] md:leading-[76px] relative text-left mx-auto"
            ref={(el) => (textRefs.current[i] = el)} // Set individual ref for each text line
          >
            {line.includes("full stack developer") ? (
              <>
                {"I'm a "}
                <span className="full-stack-developer text-green-500 opacity-50">
                full stack developer
                </span>
                {" focused"}
              </>
            ) : (
              line.split("").map((char, index) => (
                <span key={index} className={`inline-block ${char === " " ? "mr-4" : ""}`}>
                  {char}
                </span>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TextReveal;
