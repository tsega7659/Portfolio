import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-darkBg text-darkText font-inter selection:bg-accentCyan selection:text-darkBg">
            <Navbar />
            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 transition-all duration-300">
                {children}
            </main>
        </div>
    );
};

export default Layout;
