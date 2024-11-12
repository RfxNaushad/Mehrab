import { useState } from "react";
import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectShowcase from "../components/ProjectShowcase";
import RecentProjects from "../components/RecentProjects";
import Testimonial from "../components/Testimonial";
import WhatIDo from "../components/WhatIDo";
import WorkExperience from "../components/WorkExperience";
import TextMarquee from "../components/TextMarquee";
import Button from "../components/shared/Button";
function MainPage() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="main-section ">
            {/* Navbar */}
            <nav
                id="menu-navbar "
                className=" bg-black text-white flex justify-between items-center p-4 border-b border-gray-300"
            >
                <div className="font-bold text-xl">Mehrab Islam</div>

                <div className="hidden md:flex space-x-4 justify-center items-center">
                    <a href="#work" className="hover:text-gray-400 text-sm">
                        Work
                    </a>
                    <a href="#about" className="hover:text-gray-400 text-sm">
                        About
                    </a>
                    <Button text='Contact' bg="bg-[#00e676]" size="px-6 py-2" textColor="text-white"/>
                </div>

                <button
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-black text-white md:hidden">
                        <div className="flex flex-col space-y-2 p-4">
                            <a href="#work" className="hover:text-gray-400">
                                Work
                            </a>
                            <a href="#about" className="hover:text-gray-400">
                                About
                            </a>
                            <a
                                href="#contact"
                                className="bg-transparent border border-white 
                            rounded-md px-4 py-2 hover:bg-white hover:text-black transition duration-300"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </nav>

            <Hero />
            <TextMarquee />
            <About />
            {/* <WhatWeDo /> */}
            <WhatIDo />
            <RecentProjects />
            <WorkExperience />
            <Testimonial />
            <ProjectShowcase />
            <Footer />

        </div>
    );
}

export default MainPage;
