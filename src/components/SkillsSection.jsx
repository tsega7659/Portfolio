import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaTools } from 'react-icons/fa';

const SkillsSection = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const skillGroups = [
        {
            category: "Web Development",
            icon: FaCode,
            color: "text-accentCyan",
            skills: ["React.js", "Next.js", "Tailwind CSS", "BootStrap", "Node.js", "Express.js", "MySQL", "PostgreSQL", "MongoDB", "HTML5", "CSS3", "JavaScript (ES6+)", "Python"]
        },
        {
            category: "Mobile App Development",
            icon: FaMobileAlt,
            color: "text-accentYellow",
            skills: ["Flutter", "Dart", "BLoC State Management", "Provider"]
        },
        {
            category: "Tools & Others",
            icon: FaTools,
            color: "text-white",
            skills: ["Git", "GitHub", "RESTful APIs", "Figma", "UI/UX Principles"]
        }
    ];

    return (
        <motion.section
            id="skills"
            className="py-20 border-t border-white/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
        >
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6">
                <h3 className="text-3xl md:text-5xl font-black text-white font-outfit uppercase tracking-wider">
                    Current<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-accentCyan to-accentYellow">Technologies</span>
                </h3>
                <p className="text-darkTextMuted max-w-md text-lg">
                    I'm proficient in a range of modern technologies that empower me to build highly functional solutions.
                </p>
            </div>

            <div className="space-y-12">
                {skillGroups.map((group, index) => (
                    <div key={index} className="flex flex-col group border-l-2 border-white/10 hover:border-white/30 pl-6 transition-colors duration-300">
                        <div className="flex items-center gap-4 mb-6">
                            <div className={`p-3 rounded-lg bg-white/5 ${group.color}`}>
                                <group.icon size={24} />
                            </div>
                            <h4 className="text-2xl font-bold text-white tracking-wide">
                                {group.category}
                            </h4>
                        </div>
                        <div className="flex flex-wrap gap-x-4 gap-y-4">
                            {group.skills.map(skill => (
                                <span key={skill} className="px-4 py-2 bg-darkCard border border-white/5 text-darkTextMuted hover:text-white hover:border-white/20 transition-all cursor-default rounded-md whitespace-nowrap">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default SkillsSection;
