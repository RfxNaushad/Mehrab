/* eslint-disable react/prop-types */
import gsap, { Elastic } from 'gsap';
import { useRef } from 'react';

const Button = ({
    text,
    bg = 'bg-green-600',
    onClick,
    size = 'px-4 md:px-6 py-2 md:py-4',
    textColor = 'text-white',
    icon,
}) => {
    const buttonRef = useRef(null);
    const btnFillRef = useRef(null);
    const strength = 20;

    const animateBtnFill = (btnFillRef, translateY, duration) => {
        const btnFill = btnFillRef.current;
        if (btnFill) {
            requestAnimationFrame(() => {
                btnFill.animate(
                    {
                        transform: `translate(-50%, ${translateY}%)`,
                    },
                    { duration, fill: 'forwards', easing: 'ease' }
                );
            });
        }
    };

    const handleMouseMove = (event) => {
        const magnetButton = buttonRef.current;
        const bounding = magnetButton.getBoundingClientRect();

        gsap.to(magnetButton, {
            duration: 1,
            x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
            y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
            ease: Elastic.easeOut.config(1, 0.3),
        });
    };

    const handleMouseLeave = () => {
        gsap.to(buttonRef.current, {
            duration: 1,
            x: 0,
            y: 0,
            ease: Elastic.easeOut.config(1, 0.3),
        });
    };

    const handleMouseEnter = () => {
        animateBtnFill(btnFillRef, 50, 0);
        animateBtnFill(btnFillRef, -50, 850);
    };

    const handleMouseLeaveBg = () => {
        animateBtnFill(btnFillRef, -150, 850);
    };

    return (
        <button
            ref={buttonRef}
            className={`relative ${size} ${textColor} border border-gray-400 rounded-full magnetic overflow-hidden`}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                handleMouseLeave();
                handleMouseLeaveBg();
            }}
            onMouseEnter={handleMouseEnter}
            onClick={onClick}
        >
            <div
                ref={btnFillRef}
                className={`absolute top-1/2 left-1/2 w-[150%] h-[200%] ${bg} rounded-[60%] transition-transform duration-500 ease-in-out translate-x-[-50%] translate-y-[50%]`}
            ></div>
            <span className={`relative z-20 text-xs md:text-[16px] ${icon ? 'flex flex-row-reverse items-center': ''} ${textColor}`}>
                {icon && <span className="ml-2">{icon}</span>}
                {text}
            </span>
        </button>
    );
};

export default Button;
