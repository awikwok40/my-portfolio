"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { House, UserRound, BriefcaseBusiness, Sparkles, Send } from 'lucide-react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'services', 'contact'];
            const scrollPosition = window.scrollY + 250;

            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                setActiveSection('contact');
                return;
            }

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: 'Home', icon: <House size={18} /> },
        { id: 'about', label: 'About', icon: <UserRound size={18} /> },
        { id: 'projects', label: 'Projects', icon: <BriefcaseBusiness size={18} /> },
        { id: 'services', label: 'Services', icon: <Sparkles size={18} /> },
        { id: 'contact', label: 'Contact', icon: <Send size={18} /> },
    ];

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-fit">
            <motion.div
                className="flex items-center justify-center gap-1 p-1.5 bg-white/70 backdrop-blur-xl rounded-full border border-gray-200/50 shadow-2xl"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
            >
                {navItems.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="relative flex items-center gap-2 px-4 py-2.5 rounded-full transition-colors duration-300 group">
                        {activeSection === item.id && (
                            <motion.div layoutId="activePill" className="absolute inset-0 bg-black rounded-full shadow-lg" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                        )}
                        <span className={`relative z-10 transition-colors duration-500 ${activeSection === item.id ? 'text-white' : 'text-gray-500 group-hover:text-black'}`}>{item.icon}</span>
                        <span className={`relative z-10 hidden md:inline text-sm font-bold transition-colors duration-500 ${activeSection === item.id ? 'text-white' : 'text-gray-500 group-hover:text-black'}`}>{item.label}</span>
                    </a>
                ))}
            </motion.div>
        </nav>
    );
};

export default Navbar;
