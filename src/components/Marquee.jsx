/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { horizontalLoop } from "./horizontalLoop";
import Card from "./Card";

const Marquee = ({ cards }) => {
  const marqueeRef = useRef(null);
  const loopTimeline = useRef(null);

  useEffect(() => {
    const items = marqueeRef.current.children;

    // Call horizontalLoop for continuous scrolling of cards
    loopTimeline.current = horizontalLoop(items, {
      speed: 1,
      snap: 1,
      repeat: -1,
    });

    // Scale the center card based on distance from the center
    loopTimeline.current.eventCallback("onUpdate", () => {
      const rect = marqueeRef.current.getBoundingClientRect();
      Array.from(items).forEach((item) => {
        const itemRect = item.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const distanceFromCenter = Math.abs(
          itemRect.left + itemRect.width / 2 - centerX
        );
        const scaleValue =
          1.3 - Math.min(distanceFromCenter / (rect.width / 2), 0.4);
        gsap.to(item, {
          scale: scaleValue > 0.6 ? scaleValue : 0.6, // minimum scale at 0.6
          duration: 0.5,
          ease: "power3.out",
        });
      });
    });

    // Cleanup the timeline on unmount
    return () => {
      loopTimeline.current.kill();
    };
  }, [cards]);

  // Event handlers to control pause and play on hover
  const handleMouseEnter = () => {
    loopTimeline.current && loopTimeline.current.pause();
  };

  const handleMouseLeave = () => {
    loopTimeline.current && loopTimeline.current.play();
  };

  return (
    <div
      className="picker pt-10 md:pt-20 h-[500px]"

      ref={marqueeRef}
    >
      {cards.map((card, index) => (
        <div key={index} className="cell">
          <Card
            link={card.link}
            title={card.title}
            handleMouseIsEnter={handleMouseEnter}
            handleMouseIsLeave={handleMouseLeave}
            image={card.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Marquee;
