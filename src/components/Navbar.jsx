import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/#work' },
        { name: 'Skills', path: '/#skills' },
        { name: 'Community', path: '/#volunteering' },
        { name: 'Contact', path: '/#contact' },
    ];

    const socialLinks = [
        { icon: FaGithub, url: 'https://github.com/tsega7659' },
        { icon: FaLinkedin, url: 'https://www.linkedin.com/in/yeabsira-zelalem-8455052ab/' },
        { icon: FaEnvelope, url: 'mailto:yeabsirazelalem791@gmail.com' },
        { icon: FaTelegram, url: 'https://t.me/yeabsiraZelalem' },
    ];

    return (
        <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-darkBg/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo/Name */}
                    <Link to="/" className="text-xl md:text-2xl font-bold font-outfit text-white tracking-wide">
                        YZ<span className="text-accentCyan">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="text-sm font-medium text-darkTextMuted hover:text-white transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Socials */}
                    <div className="hidden md:flex items-center gap-5">
                        <div className="h-6 w-px bg-white/10 mx-2"></div>
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-darkTextMuted hover:text-accentCyan transition-colors duration-200"
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-darkTextMuted hover:text-white p-2"
                    >
                        {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-darkCard border-b border-white/5 overflow-hidden absolute top-full left-0 w-full"
                    >
                        <div className="px-4 py-6 space-y-4 flex flex-col">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className="text-lg font-medium text-darkTextMuted hover:text-white transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 border-t border-white/5 flex gap-6 mt-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-darkTextMuted hover:text-accentCyan transition-colors"
                                    >
                                        <social.icon size={22} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
