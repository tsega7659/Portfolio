import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const ProjectsSection = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.section
            id="work"
            className="py-20 border-t border-white/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
        >
            <div className="flex justify-between items-end mb-12">
                <h3 className="text-3xl md:text-5xl font-black text-white font-outfit uppercase tracking-wider">
                    My <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentYellow">Projects</span>
                </h3>
                <Link to="/#work" className="text-accentCyan hover:text-white font-medium transition-colors hidden md:block">
                    Explore all projects &rarr;
                </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Link to={`/project/${project.id}`} key={index} className="block h-full outline-none focus:ring-2 focus:ring-accentCyan rounded-xl">
                        <ProjectCard project={project} />
                    </Link>
                ))}
            </div>
        </motion.section>
    );
};

export default ProjectsSection;
