import React from 'react';
import { motion } from 'framer-motion';
import { FaUserFriends, FaHandsHelping, FaChalkboardTeacher, FaTrophy } from 'react-icons/fa';

const ExperienceSection = () => {
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <motion.section
            id="volunteering"
            className="py-20 border-t border-white/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={itemVariants}
        >
            <div className="grid lg:grid-cols-2 gap-16">
                {/* Community & Leadership */}
                <div>
                    <h3 className="text-3xl font-black text-white font-outfit uppercase tracking-wider mb-10">
                        Community & <span className="text-accentCyan">Leadership</span>
                    </h3>
                    <div className="space-y-6">
                        <div className="bg-darkCard border border-white/5 p-6 rounded-xl hover:border-white/20 transition-colors duration-300 group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-accentCyan/10 text-accentCyan rounded-lg">
                                    <FaHandsHelping size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">Mentoring</h4>
                                    <p className="text-sm text-accentCyan">Mentor @ SheCodes AASTU</p>
                                </div>
                            </div>
                            <p className="text-darkTextMuted text-sm leading-relaxed">
                                Mentoring and supporting female students in tech to bridge the gender gap in the industry. Provided academic support in programming concepts. The two teams that I mentored secured 1st and 3rd place in competitions.
                            </p>
                        </div>

                        <div className="bg-darkCard border border-white/5 p-6 rounded-xl hover:border-white/20 transition-colors duration-300 group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-accentYellow/10 text-accentYellow rounded-lg">
                                    <FaUserFriends size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">Volunteering</h4>
                                    <p className="text-sm text-accentYellow">Member @ AASTU Charity Club</p>
                                </div>
                            </div>
                            <p className="text-darkTextMuted text-sm leading-relaxed">
                                Active member participating in various charity events and community service activities.
                            </p>
                        </div>

                        <div className="bg-darkCard border border-white/5 p-6 rounded-xl hover:border-white/20 transition-colors duration-300 group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white/10 text-white rounded-lg">
                                    <FaChalkboardTeacher size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">Tutoring</h4>
                                    <p className="text-sm text-gray-400">Independent</p>
                                </div>
                            </div>
                            <p className="text-darkTextMuted text-sm leading-relaxed">
                                Provided academic support and mentorship to junior students in programming and software engineering concepts.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Achievements */}
                <div>
                    <h3 className="text-3xl font-black text-white font-outfit uppercase tracking-wider mb-10">
                        Top <span className="text-accentYellow">Achievements</span>
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 bg-darkCard border border-white/5 p-5 rounded-lg hover:bg-white/5 transition-colors">
                            <FaTrophy className="text-accentYellow flex-shrink-0" size={24} />
                            <p className="text-white font-medium">Received 2 Presidential Awards for scoring the best grades</p>
                        </div>
                        <div className="flex items-center gap-4 bg-darkCard border border-white/5 p-5 rounded-lg hover:bg-white/5 transition-colors">
                            <FaTrophy className="text-accentYellow flex-shrink-0" size={24} />
                            <p className="text-white font-medium">Mentored 2 teams that secured 1st and 3rd place in competitions</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ExperienceSection;
