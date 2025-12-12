import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode } from 'react-icons/fa';
import { projects } from '../data/projects';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                    <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-4xl mx-auto px-6 py-12 md:py-20"
        >
            <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-black mb-8 transition-colors">
                <FaArrowLeft /> Back to Projects
            </Link>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">{project.title}</h1>

            <div className="flex flex-wrap gap-4 mb-8">
                {project.languages.map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
                        <FaCode className="text-gray-400" /> {tech}
                    </span>
                ))}
            </div>

            <div className="mb-12">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full md:w-auto md:max-h-96 mx-auto rounded-lg shadow-lg mb-8"
                />

                <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {project.description}
                </p>

                <h2 className="text-2xl font-bold text-gray-800 mb-4">My Role</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    <span className="font-bold text-gray-800">{project.role}</span>.
                    {project.roleDescription ? (
                        <span className="block mt-2">{project.roleDescription}</span>
                    ) : (
                        <span>
                            Responsibilties included designing the user interface, implementing responsive layouts, and integrating backend APIs.
                            Collaborated with the team to ensure code quality and performance optimization.
                        </span>
                    )}
                </p>

                <div className="flex gap-4">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-bold rounded hover:bg-gray-700 transition-colors"
                        >
                            <FaGithub size={20} /> GitHub
                        </a>
                    )}
                    {project.link && project.link !== "#" && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-800 text-gray-800 font-bold rounded hover:bg-gray-50 transition-colors"
                        >
                            <FaExternalLinkAlt size={18} /> Live Demo
                        </a>
                    )}
                </div>
            </div>

            <div className="mb-12">
                <h3 className="text-xl font-bold text-gray-800 uppercase tracking-widest mb-6 border-b pb-4">Project Gallery</h3>
                <div className="grid md:grid-cols-3 gap-4">
                    {project.gallery && project.gallery.map((img, idx) => (
                        <div key={idx} className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow bg-gray-50">
                            <img
                                src={img}
                                alt={`${project.title} screenshot ${idx + 1}`}
                                className="w-full h-48 object-contain hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetails;
