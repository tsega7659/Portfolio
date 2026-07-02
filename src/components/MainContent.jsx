import React from 'react';
import HeroSection from './HeroSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';
import ContactSection from './ContactSection';

const MainContent = () => {
    return (
        <div className="space-y-10">
            <HeroSection />
            <ProjectsSection />
            <SkillsSection />
            <ExperienceSection />
            <ContactSection />
        </div>
    );
};

export default MainContent;
