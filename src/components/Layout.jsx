import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { FaBars, FaTimes } from 'react-icons/fa';

const Layout = ({ children }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
            {/* Mobile Toggle Button (Fixed top-right) */}
            <div className="md:hidden fixed top-4 right-4 z-50">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="bg-[#1F1F1F] text-white p-3 rounded shadow-lg hover:bg-black transition-colors"
                >
                    {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>

            {/* Sidebar Container */}
            <div className={`
          fixed inset-y-0 left-0 z-40 w-[280px] md:w-[35%] lg:w-[30%] xl:w-[25%] bg-[#1F1F1F] 
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
       `}>
                <Sidebar />
            </div>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Main Content Area */}
            <main className="w-full md:w-[65%] lg:w-[70%] xl:w-[75%] md:ml-auto min-h-screen transition-all duration-300">
                {children}
            </main>
        </div>
    );
};

export default Layout;
