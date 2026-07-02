import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="h-full group bg-darkCard border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-accentCyan/10">
            <div className="relative overflow-hidden aspect-video bg-darkBg">
                <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 opacity-100"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-darkBg/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white font-bold font-outfit uppercase tracking-wider text-sm px-6 py-3 border border-white/30 rounded-full bg-white/10 hover:bg-white hover:text-darkBg transition-colors">
                        View Details
                    </span>
                </div>
            </div>

            <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 font-outfit group-hover:text-accentCyan transition-colors">{project.title}</h3>
                <p className="text-darkTextMuted text-sm mb-6 leading-relaxed line-clamp-3 font-inter">{project.description}</p>

                <div className="flex flex-wrap gap-2 text-xs font-outfit font-medium">
                    {project.languages.map((lang, index) => (
                        <span key={index} className="px-3 py-1.5 bg-darkBg text-darkTextMuted border border-white/10 rounded-full tracking-wide">
                            {lang}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
