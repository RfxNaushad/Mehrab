
import { ChevronLeft } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import TextReveal2 from "./TextReveal2";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        id: 1,
        name: "Mathew Perry",
        role: "Ngeni Lab director",
        subRole: "Lead Developer",
        quote: "Every interaction with Mehrab was positive and productive. The final result speaks volumes!",
        avatar: "/testimonial_avatar1.png",
    },
    {
        id: 2,
        name: "Richard Newt",
        role: "Tech Innovators CEO",
        subRole: "Product Strategist",
        quote: "The experience with Mehrab was fantastic. We felt supported every step of the way!",
        avatar: "/testimonial_avatar2.png",
    },
    {
        id: 3,
        name: "Emmastone ",
        role: "StartUp Ventures Founder",
        subRole: "Software Architect",
        quote: "Mehrab's attention to detail and creative touch made all the difference. We’re beyond satisfied!",
        avatar: "/testimonial_avatar3.png",
    },
];

export default function Testimonial() {
    const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);
    const testimonialRefs = useRef([]);

    useEffect(() => {
        testimonials.forEach((testimonial, index) => {
            const textElement = testimonialRefs.current[index].querySelector('.reveal-type');
            const text = new SplitType(textElement, { types: "chars" });

            ScrollTrigger.create({
                trigger: testimonialRefs.current[index],
                start: "top 75%",
                scrub: true,
                onEnter: () => {
                    const revealTimeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: textElement,
                            start: "top 80%",
                            end: 'top 20%',
                            scrub: 1,
                        },
                    });

                    // Animate text reveal
                    revealTimeline.fromTo(
                        text.chars,
                        { opacity: 0 },
                        {
                            opacity: 1,
                            stagger: 0.05, // Staggered reveal for characters
                            ease: "none",
                        }
                    );

                    // Set the active testimonial
                    setActiveTestimonial(testimonials[index]);
                },
                onLeaveBack: () => {
                    const revealTimeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: textElement,
                            start: "top 80%",
                            end: 'top 20%',
                            scrub: 1,
                        },
                    });

                    // Animate text reset
                    revealTimeline.fromTo(
                        text.chars,
                        { opacity: 1 },
                        {
                            opacity: 0,
                            stagger: 0.05,
                            ease: "none",
                        }
                    );

                    // Reset to previous testimonial if needed
                    setActiveTestimonial(testimonials[index - 1] || testimonials[index]);
                },
            });
        });

        // Pin author section
        gsap.timeline({
            scrollTrigger: {
                trigger: '.author',
                start: "top 280",
                // end: 'top top-=650',
                end: window.innerWidth > 1024 ? 'top top-=1050' : 'top top-=550',
                scrub: true,
                pin: true,
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="bg-black text-white font-sans min-h-screen flex flex-col items-center testimonial">
            <div className="max-w-[1120px] mx-auto relative w-full">
                <div className="mb-6 md:mb-12 mt-8">
                    <h2 className="text-xs uppercase tracking-wider mb-4 text-center md:text-start">What they said</h2>
                    <hr className="border-gray-800" />
                </div>

                <div className="flex flex-col items-start gap-4 md:gap-8 px-4 md:px-7 content">
                    {testimonials.map((item, index) => (
                        <div
                            key={item.id}
                            ref={el => testimonialRefs.current[index] = el}
                            className="py-6 md:py-20 border-b w-full"
                        >
                            <div className="relative">
                                <RiDoubleQuotesL className="text-green-400 text-6xl absolute -left-20 -top-4" />
                                <div className="hidden md:block">
                                    <TextReveal2 quote={item.quote} />
                                </div>
                                <div className="text-2xl font-semibold mb-2 block md:hidden relative">
                                <RiDoubleQuotesL className="text-green-400 text-2xl absolute -lett-8" />
                                    <h1 className="ml-5">{item.quote}</h1>
                                </div>
                            </div>
                            <div className="flex gap-2 items-start md:block my-2 md:my-0">
                                <div className="block md:hidden">
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        className="size-[56px]  object-cover rounded-full p-2"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-gray-500 text-sm">{item.role}</p>
                                    <p className="text-gray-500 text-sm">{item.subRole}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Avatar Section - Fixed in the center */}
                <div className="hidden md:block">
                    <div className="flex flex-col items-end gap-4 absolute top-24  md:top-12 lg:top-36 right-0 md:right-5 lg:-right-10 author z-20">
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className={` flex items-center rounded-full overflow-hidden relative cursor-pointer transition-all duration-300 ${activeTestimonial.id === testimonial.id ? "" : "grayscale opacity-50"
                                    }`}
                            >
                                {activeTestimonial.id === testimonial.id && (
                                    <div className="">
                                        <ChevronLeft className="text-green-400 w-6 h-6 font-bold" />
                                    </div>
                                )}
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="size-[48px] md:size-[87px] object-cover rounded-full p-2"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
