import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDownload, FaMapMarkerAlt, FaEnvelope, FaPhone, FaCode, FaMobileAlt, FaTools, FaHandsHelping, FaChalkboardTeacher, FaUserFriends } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import cv from "../assets/Yeabsira-Zelalem-Tilahun-Resume.pdf";
import { projects } from '../data/projects';

const MainContent = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const to = "yeabsirazelalem791@gmail.com";
        const subject = `New Message from ${formData.name}`;
        const body = `${formData.message}\n\nFrom: ${formData.name} <${formData.email}>`;
        window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
            {/* Intro Section */}
            <motion.section
                id="intro"
                className="mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={itemVariants}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight">
                    Front-end and Mobile App <br /> Developer seeking to <br /> <span className="text-gray-400">solve real-world problems.</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                    I'm comfortable working both independently and as part of a team. I'm always excited to grow my skills by collaborating with peers and learning from tech experts.
                </p>
                <a
                    href={cv}
                    download="Yeabsira_Zelalem_CV.pdf"
                    className="inline-flex items-center gap-3 px-8 py-3 border-2 border-gray-800 text-gray-800 font-bold uppercase tracking-widest hover:bg-gray-800 hover:text-white transition-all duration-300 group"
                >
                    Download CV <FaDownload className="group-hover:translate-y-1 transition-transform" />
                </a>
            </motion.section>

            {/* My Projects */}
            <motion.section
                id="work"
                className="mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}
            >
                <h3 className="text-xl font-bold text-gray-800 uppercase tracking-widest mb-10 border-b pb-4">My Projects</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <Link to={`/project/${project.id}`} key={index} className="block h-full">
                            <ProjectCard project={project} />
                        </Link>
                    ))}
                </div>
            </motion.section>

            {/* Skills */}
            <motion.section
                id="skills"
                className="mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}
            >
                <h3 className="text-xl font-bold text-gray-800 uppercase tracking-widest mb-10 border-b pb-4">Skills</h3>
                <div className="space-y-8">
                    {[
                        {
                            category: "Web Development",
                            icon: FaCode,
                            skills: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL", "HTML5", "CSS3"]
                        },
                        {
                            category: "Mobile App Development",
                            icon: FaMobileAlt,
                            skills: ["Flutter", "Dart", "BLoC State Management", "Provider"]
                        },
                        {
                            category: "Tools & Others",
                            icon: FaTools,
                            skills: ["Git", "GitHub", "RESTful APIs", "Figma", "UI/UX Principles"]
                        }
                    ].map((group, index) => (
                        <div key={index} className="flex flex-col md:flex-row group border-b border-gray-100 last:border-0 pb-8 last:pb-0 hover:border-gray-200 transition-colors">
                            <div className="md:w-1/3 mb-4 md:mb-0 flex items-start gap-3">
                                <group.icon className="text-gray-400 mt-1" size={18} />
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-800 transition-colors">
                                    {group.category}
                                </h4>
                            </div>
                            <div className="md:w-2/3">
                                <div className="flex flex-wrap gap-x-6 gap-y-3">
                                    {group.skills.map(skill => (
                                        <span key={skill} className="text-lg font-light text-gray-600 hover:text-black transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Volunteering */}
            <motion.section
                id="volunteering"
                className="mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}
            >
                <h3 className="text-xl font-bold text-gray-800 uppercase tracking-widest mb-10 border-b pb-4">Volunteering</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-100 p-6 hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
                        <div className="flex items-center gap-3 mb-3">
                            <FaUserFriends className="text-gray-400" size={20} />
                            <h4 className="text-lg font-bold text-gray-800">AASTU Charity Club</h4>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                            Active member participating in various charity events and community service activities.
                        </p>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest border border-gray-200 px-2 py-1 rounded">Member</span>
                    </div>
                    <div className="bg-white border border-gray-100 p-6 hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
                        <div className="flex items-center gap-3 mb-3">
                            <FaHandsHelping className="text-gray-400" size={20} />
                            <h4 className="text-lg font-bold text-gray-800">SheCodes AASTU</h4>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                            Mentoring and supporting female students in tech to bridge the gender gap in the industry.
                        </p>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest border border-gray-200 px-2 py-1 rounded">Mentor</span>
                    </div>
                    <div className="bg-white border border-gray-100 p-6 hover:shadow-lg transition-transform hover:-translate-y-1 duration-300">
                        <div className="flex items-center gap-3 mb-3">
                            <FaChalkboardTeacher className="text-gray-400" size={20} />
                            <h4 className="text-lg font-bold text-gray-800">Tutoring & Mentoring</h4>
                        </div>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                            Provided academic support and mentorship to junior students in programming and software engineering concepts.
                        </p>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest border border-gray-200 px-2 py-1 rounded">Tutor</span>
                    </div>
                </div>
            </motion.section>

            {/* Contact */}
            <motion.section
                id="contact"
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}
            >
                <h3 className="text-xl font-bold text-gray-800 uppercase tracking-widest mb-10 border-b pb-4">Get In Touch</h3>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Have a project in mind or just want to say hi? Feel free to send me a message. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>
                        <div className="space-y-4 text-gray-600">
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-gray-400" />
                                <span>Addis Ababa, Ethiopia</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-gray-400" />
                                <a href="mailto:yeabsirazelalem791@gmail.com" className="hover:text-black transition-colors">yeabsirazelalem791@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhone className="text-gray-400" />
                                <span>+251 976647859</span>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-gray-500 focus:outline-none transition-colors"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-gray-500 focus:outline-none transition-colors"
                                required
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="4"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-gray-500 focus:outline-none transition-colors"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full md:w-auto px-10 py-3 bg-gray-800 text-white font-bold uppercase tracking-widest hover:bg-gray-600 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </motion.section>

        </div>
    );
};

export default MainContent;
