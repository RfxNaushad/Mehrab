import {  useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'tailwindcss/tailwind.css'; // Assuming Tailwind is set up
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

// eslint-disable-next-line react/prop-types
const TextReveal2 = ({quote}) => {
  const textRefs = useRef([]); // Array of refs for multiple lines
  const overlayRefs = useRef([]);

   
  function sliceTextByKeywords(text, keywords, keywords2, keywords3) {
    let selectedKeywords;

      // Check which keyword array to use based on the starting phrase of the text
      if (text.includes("interaction")) {
        selectedKeywords = keywords;
    } else if (text.includes("fantastic.")) {
        selectedKeywords = keywords2;
    } else if (text.includes("attention")) {
        selectedKeywords = keywords3;
    } else {
        return [text];
    }
    
    const linesArray = [];
    let startIndex = 0;

    selectedKeywords.forEach((keyword) => {
        const endIndex = text.indexOf(keyword, startIndex) + keyword.length;
        
        if (endIndex > startIndex) {
            linesArray.push(text.slice(startIndex, endIndex).trim());
            startIndex = endIndex;
        }
    });

    // Push the remaining text after the last keyword
    if (startIndex < text.length) {
        linesArray.push(text.slice(startIndex).trim());
    }

    return linesArray;
}


const keywords = ["Mehrab", "productive."];
const keywords2 =["Mehrab","supported"];
const keywords3 =["detail","all","beyond"];

const lines = sliceTextByKeywords(quote, keywords, keywords2, keywords3);

  useGSAP(() => {
    textRefs.current.forEach((textRef, index) => {
      gsap.fromTo(
        overlayRefs.current[index],
        { width: '100%' }, 
        {
          width: '0%', 
          scrollTrigger: {
            trigger: textRef,
            start: () => `top+=${index * 100} 95%`, // Start for each line adjusted by its index
            end: () => `top+=${index * 100 + 160} 100%`, // Adjust end to allow for reveal
            scrub: 0.75,
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
              scrub: 0.75,
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="h-full text-center bg-black"> {/* Increased height for more scrolling */}
      {lines.map((line, i) => (
        <div className="relative my-4" key={i}>
          {/* Overlay for each line */}
          <div
            ref={(el) => (overlayRefs.current[i] = el)} // Set individual ref for each overlay
            className="absolute  right-0 bg-black z-10 opacity-70 min-h-[30px] md:min-h-[90px]"
          />
          {/* Text container for each line */}
          <div
            className="text-xl leading-none md:text-[68px] font-medium md:font-bold text-white  md:leading-[76px] relative text-left mx-auto"
            ref={(el) => (textRefs.current[i] = el)} // Set individual ref for each text line
          >
            {line.includes("full-stack developer") ? (
              <>
                {"I'm a "}
                <span className="full-stack-developer text-green-500 opacity-50">
                  full-stack developer
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

export default TextReveal2;