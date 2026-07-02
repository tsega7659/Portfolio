import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import cv from "../assets/Yeabsira-Zelalem-Tilahun-Resume.pdf";
import me from '../assets/me1.jpg';

const HeroSection = () => {
    return (
        <section id="intro" className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-12 py-20">
            {/* Text Content */}
            <motion.div
                className="flex-1 space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div>
                    <h2 className="text-xl md:text-2xl font-medium text-accentCyan mb-4 tracking-wider">Hello, I'm Yeabsira Zelalem</h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white font-outfit leading-none mb-2">
                        FULL STACK
                    </h1>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentYellow font-outfit leading-none">
                        DEVELOPER.
                    </h1>
                </div>

                <p className="text-lg text-darkTextMuted max-w-xl leading-relaxed">
                    I build accessible, pixel-perfect, performant, and beginner-friendly web and mobile experiences. Comfortable working independently and as part of a team, seeking to solve real-world problems.
                </p>

                <div className="flex gap-6 pt-4">
                    <a
                        href="#work"
                        className="px-8 py-4 bg-white text-darkBg font-bold uppercase tracking-widest hover:bg-accentCyan hover:text-white transition-all duration-300 rounded-sm"
                    >
                        View Work
                    </a>
                    <a
                        href={cv}
                        download="Yeabsira_Zelalem_CV.pdf"
                        className="group flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:border-accentYellow hover:text-accentYellow transition-all duration-300 rounded-sm"
                    >
                        Resume <FaDownload className="group-hover:translate-y-1 transition-transform" />
                    </a>
                </div>
            </motion.div>

            {/* Image / Avatar */}
            <motion.div
                className="flex-1 flex justify-center md:justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-accentCyan to-accentYellow rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-darkCard bg-darkBg">
                        <img src={me} alt="Yeabsira Zelalem" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
