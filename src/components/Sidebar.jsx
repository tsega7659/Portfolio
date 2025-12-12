import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram } from 'react-icons/fa';
import me from '../assets/me1.jpg';

const Sidebar = () => {
    return (
        <div className="h-full flex flex-col justify-between p-8 lg:p-12 text-right bg-[#1F1F1F] text-gray-400">
            <div className="flex flex-col items-end">
                {/* Avatar */}
                <div className="mb-8 relative group">
                    <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-gray-700 bg-gray-800 group-hover:ring-white transition-all duration-300">
                        <img src={me} alt="Yeabsira Zelalem" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Intro */}
                <h1 className="text-4xl font-bold text-white mb-4">
                    <span className="font-light">I am</span> Yeabsira Zelalem
                </h1>
                <h2 className="text-lg font-light uppercase tracking-widest text-gray-500 mb-6">
                    Front-end & Mobile Dev
                </h2>
                <p className="text-base leading-relaxed mb-6 text-gray-400 font-light">
                    I build accessible, pixel-perfect, performant, and beginner-friendly web and mobile experiences.
                </p>
            </div>

            {/* Footer */}
            <div className="mt-auto">
                <div className="flex gap-4 justify-end mb-6">
                    <a href="https://github.com/tsega7659" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/yeabsira-zelalem-8455052ab/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="mailto:yeabsirazelalem791@gmail.com" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110">
                        <FaEnvelope size={24} />
                    </a>
                    <a href="https://t.me/yeabsiraZelalem" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors transform hover:scale-110">
                        <FaTelegram size={24} />
                    </a>
                </div>
                <p className="text-xs text-gray-600 uppercase tracking-widest">
                    &copy; {new Date().getFullYear()} Yeabsira. <br />
                    All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Sidebar;
