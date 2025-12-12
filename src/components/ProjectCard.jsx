import React from 'react';


const ProjectCard = ({ project }) => {
    return (
        <div className="group bg-white border border-gray-100 rounded-none overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative overflow-hidden aspect-video bg-gray-50">
                <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold uppercase tracking-widest border-2 border-white px-6 py-2">
                        View Details
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                    {project.languages.map((lang, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-50 text-gray-800 font-bold border border-gray-100 uppercase tracking-wide">
                            {lang}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
