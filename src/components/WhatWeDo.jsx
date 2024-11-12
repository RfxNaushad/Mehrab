function WhatWeDo() {
    return (
        <div className="bg-black py-16 px-4 md:px-8 lg:px-12">
            <div className="max-w-[1120px] mx-auto">
                {/* Section Heading */}
                <div className="text-start mb-12 space-y-6">
                    <p className="text-gray-400 uppercase text-sm tracking-widest">
                        Service Offerings
                    </p>
                    <h2 className="text-4xl md:text-[4.25rem] font-bold text-white mb-4">
                        What <span className="text-green-500">I Do</span>
                    </h2>
                    <p className="text-gray-400 md:text-[2rem]  max-w-2xl text-start">
                        Expert development services tailored to bring your
                        vision to life with seamless functionality and
                        cutting-edge technology.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="bg-[#484848] rounded-2xl p-6">
                        <div className="mb-4">
                            <img
                                src="/code.png" 
                                alt="Frontend & Backend Development"
                                className="w-10 h-10"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Frontend & Backend development
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            End-to-end web development and scalable
                            architecture. Version Control: Git for collaboration
                            and code management.
                        </p>
                        <a
                            href="#"
                            className="text-green-500 flex items-center"
                        >
                            Read more <span className="ml-2">&rarr;</span>
                        </a>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#484848] rounded-2xl p-6">
                        <div className="mb-4">
                            <img
                                src="/code.png"
                                alt="DevOps & Deployment"
                                className="w-10 h-10"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            DevOps & Deployment
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            CI/CD pipelines, Docker, and cloud deployment (AWS,
                            Azure).
                        </p>
                        <a
                            href="#"
                            className="text-green-500 flex items-center"
                        >
                            Read more <span className="ml-2">&rarr;</span>
                        </a>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#484848] rounded-2xl p-6">
                        <div className="mb-4">
                            <img
                                src="/code.png"
                                alt="API Integration"
                                className="w-10 h-10"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            API Integration
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Third-party API integration and secure
                            authentication.
                        </p>
                        <a
                            href="#"
                            className="text-green-500 flex items-center"
                        >
                            Read more <span className="ml-2">&rarr;</span>
                        </a>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#484848] rounded-2xl p-6">
                        <div className="mb-4">
                            <img
                                src="/code.png"
                                alt="Database Optimization"
                                className="w-10 h-10"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Database Optimization
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            SQL/NoSQL database design and optimization for high
                            performance.
                        </p>
                        <a
                            href="#"
                            className="text-green-500 flex items-center"
                        >
                            Read more <span className="ml-2">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeDo;
