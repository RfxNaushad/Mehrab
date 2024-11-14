import Button from "./shared/Button";
import bg from '../assets/images/footerImg.png'
import { FaSquareUpwork } from "react-icons/fa6";
/* eslint-disable react/prop-types */
const SocialLink = ({ platform, username, icon }) => (
    <div className="flex flex-row-reverse items-center justify-between">
        <div className="w-12 h-12 flex items-center justify-center">
            {icon}
        </div>
        <div className="flex-1">
            <p className="text-[20px] leading-[26px] font-medium">{platform}</p>
            <p className="text-[16px] leading-[20.83px] text-gray-400">{username}</p>
        </div>
    </div>
);

export default function Footer() {

    return (
        <footer className="bg-[#0C0E0D] text-white py-16 px-4 sm:px-4 lg:px-8 bg-no-repeat bg-bottom" style={{ backgroundImage: `url(${bg})` }}>
            <div className="max-w-[1120px] mx-auto">
                <h2 className="text-xs uppercase tracking-wider mb-8 text-center">
                    Let&apos;s talk
                </h2>
                <h3 className="text-3xl md:text-5xl  md:text-[68px] leading-[40px] font-bold text-center mb-12 max-w-3xl mx-auto border-t border-[#FDFDFD59]">
                    Ready to Bring Your Ideas to Life?
                </h3>
                <div className="flex flex-col sm:flex-row gap-8 pt-4 pb-16 md:py-32 w-full">
                    <Button text={"Write a Message"} size="w-full py-4" />
                    <Button text={"Discuss Project"} size="w-full py-4"/>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <a
            href="https://www.upwork.com/freelancers/~0113297ade1ebad0c8"
            target="_blank"
            className="border-t border-[#FDFDFD59] pt-4"
          >
            <SocialLink
              platform="Up work"
              username="@mehrab"
              icon={<FaSquareUpwork className="w-8 h-8" />}
            />
          </a>
                    <div className="border-t border-[#FDFDFD59] pt-4">
                        <SocialLink
                            platform="Instagram"
                            username="@mehrabinstagram"
                            icon={
                                <svg
                                    className="w-8 h-8 text-white"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            }
                        />
                    </div>
                    <div className="border-t border-[#FDFDFD59] pt-4">
                        <SocialLink
                            platform="GitHub"
                            username="@mehrabgithub"
                            icon={
                                <svg
                                    className="w-8 h-8 text-white"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            }
                        />
                    </div>
                    <div className="border-t border-[#FDFDFD59] pt-4">
                        <SocialLink
                            platform="Dribbble"
                            username="@mehrabdribbble"
                            icon={
                                <svg
                                    className="w-8 h-8 text-white"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.795 6.043 2.072zm-8.228-1.82c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.816 8.293c0-.092.001-.183.006-.273 3.801-.013 7.168-.456 10.027-1.331.308.6.613 1.204.91 1.813-3.868 1.105-7.408 3.093-10.582 5.943-.346-.632-.604-1.313-.766-2.025-.106-.463-.16-.945-.16-1.437zm3.349 6.828c2.97-2.665 6.263-4.514 9.863-5.539 1.108 2.871 1.888 5.831 2.341 8.876-3.927-1.719-7.188-3.485-12.204-3.337zm10.87 2.894c-.466-2.826-1.235-5.581-2.302-8.261 2.021-.281 4.188-.247 6.522.127-.423 2.969-2.009 5.534-4.22 7.295z" />
                                </svg>
                            }
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}



