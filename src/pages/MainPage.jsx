import {  useState } from "react";
import Button from "../components/shared/Button";
import { Link } from "react-router-dom";
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
                <Link to={'/'} className="hover:text-gray-400 text-sm">
                        Home
                    </Link>
                    <Link to={'/projects'} className="hover:text-gray-400 text-sm">
                        Work
                    </Link>
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
                    <div className="absolute top-16 left-0 w-full  z-10 bg-black text-white md:hidden">
                        <div className="flex  items-center gap-5 py-5 px-4">
                        <Link to={'/'} className="hover:text-gray-400">
                                Home
                            </Link>
                            <Link to={'/projects'} className="hover:text-gray-400">
                                Work
                            </Link>
                            
                            <a href="#about" className="hover:text-gray-400">
                                About
                            </a>
                            <a
                                href="#contact"
                                className="bg-transparent border border-white 
                            rounded-md px-4 py-2 hover:bg-white w-fit hover:text-black transition duration-300"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default MainPage;
