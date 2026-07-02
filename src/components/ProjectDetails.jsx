import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode } from 'react-icons/fa';
import { projects } from '../data/projects';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    const renderHighlightedText = (text) => {
        if (!text) return null;
        return text.split('**').map((part, index) =>
            index % 2 === 1 ? (
                <span key={index} className="font-bold text-accentCyan px-1 rounded">{part}</span>
            ) : (
                part
            )
        );
    };

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-darkBg text-darkText font-inter">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4 font-outfit">Project Not Found</h2>
                    <Link to="/" className="text-accentCyan hover:underline hover:text-cyan-400 transition-colors">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto px-6 py-12 md:py-20"
        >
            <Link to="/#work" className="inline-flex items-center gap-2 text-darkTextMuted hover:text-white mb-10 transition-colors font-medium">
                <FaArrowLeft /> Back to Projects
            </Link>

            <h1 className="text-4xl md:text-6xl font-black text-white font-outfit mb-6 tracking-wide">{project.title}</h1>

            <div className="flex flex-wrap gap-3 mb-10">
                {project.languages.map((tech, index) => (
                    <span key={index} className="bg-darkCard border border-white/10 text-darkTextMuted px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                        <FaCode className="text-accentCyan" /> {tech}
                    </span>
                ))}
            </div>

            <div className="mb-16">
                <div className="relative rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/5 bg-darkBg">
                    <div className="absolute inset-0 bg-gradient-to-t from-darkCard to-transparent opacity-20 pointer-events-none z-10"></div>
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover max-h-[600px]"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 font-outfit">Project Overview</h2>
                            <p className="text-lg text-darkTextMuted leading-relaxed">
                                {renderHighlightedText(project.description)}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-6 font-outfit">My Role & Responsibilities</h2>
                            <p className="text-lg text-darkTextMuted leading-relaxed">
                                <span className="font-bold text-white mb-2 block">{project.role}</span>
                                {project.roleDescription ? (
                                    <span className="block">{renderHighlightedText(project.roleDescription)}</span>
                                ) : (
                                    <span>
                                        Responsibilities included designing the user interface, implementing responsive layouts, and integrating backend APIs.
                                        Collaborated with the team to ensure code quality and performance optimization.
                                    </span>
                                )}
                            </p>
                        </section>
                    </div>

                    <div className="md:col-span-1 border-l border-white/5 pl-0 md:pl-8 space-y-8 flex flex-col justify-start">
                        <h2 className="text-xl font-bold text-white font-outfit">Links</h2>
                        <div className="flex flex-col gap-4">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-darkCard border border-white/10 text-white font-bold rounded-xl hover:border-accentCyan transition-all"
                                >
                                    <FaGithub size={20} /> View Source
                                </a>
                            )}
                            {project.link && project.link !== "#" && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-accentCyan text-darkBg font-bold rounded-xl hover:bg-cyan-400 transition-all font-outfit tracking-wide"
                                >
                                    <FaExternalLinkAlt size={18} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {project.gallery && project.gallery.length > 0 && (
                <div className="mb-12 pt-12 border-t border-white/5">
                    <h3 className="text-2xl font-bold text-white font-outfit mb-8">Concept & Gallery</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.gallery.map((img, idx) => (
                            <div key={idx} className="overflow-hidden rounded-xl bg-darkCard border border-white/5 group relative shadow-lg">
                                <div className="absolute inset-0 bg-accentCyan/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                                <img
                                    src={img}
                                    alt={`${project.title} screenshot ${idx + 1}`}
                                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default ProjectDetails;
