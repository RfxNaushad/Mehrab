import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { horizontalLoop } from './horizontalLoop'; // The helper function

gsap.registerPlugin(ScrollTrigger);

const TextMarquee = () => {
  useEffect(() => {
    const loops = gsap.utils.toArray('.text-single').map((line, i) => {
      const links = line.querySelectorAll(".js-text");
      return horizontalLoop(links, {
        repeat: -1,
        speed: 1.5 + i * 0.5,
        reversed: false,
        paddingRight: parseFloat(gsap.getProperty(links[0], "marginRight", "px"))
      });
    });

    let currentScroll = 0;
    let scrollDirection = 1;

    const onScroll = () => {
      let direction = (window.pageYOffset > currentScroll) ? 1 : -1;
      if (direction !== scrollDirection) {
        loops.forEach(tl => {
          gsap.to(tl, { timeScale: direction, overwrite: true });
        });
        scrollDirection = direction;
      }
      currentScroll = window.pageYOffset;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="scroll bg-zinc-950 text-white flex justify-center items-center">
      <div className="text-marquee relative flex items-center overflow-hidden -mt-24 md:-mt-48">
        <div className="text-single leading-none whitespace-nowrap relative will-change-transform">
          <span className="text js-text inline-block mr-8 font-semibold text-[5rem] md:text-[12rem]">Mehrab Islam -</span>
          <span className="text js-text inline-block mr-8 font-semibold text-[5rem] md:text-[12rem]">Mehrab Islam -</span>
          <span className="text js-text inline-block mr-8 font-semibold text-[5rem] md:text-[12rem]">Mehrab Islam -</span>
          <span className="text js-text inline-block mr-8 font-semibold text-[5rem] md:text-[12rem]">Mehrab Islam -</span>
        </div>
      </div>
    </div>
  );
};

export default TextMarquee;
