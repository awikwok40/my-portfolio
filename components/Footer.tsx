"use client";

import { Github, Linkedin, Instagram } from 'lucide-react';
import { socialLinks } from './utils';

const Footer = () => {
    return (
        <footer className="py-12 text-center border-t border-gray-100">
            <div className="flex justify-center gap-6 mb-6">
                <a href={socialLinks.github} target="_blank" className="p-2 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all"><Github size={20} /></a>
                <a href={socialLinks.linkedin} target="_blank" className="p-2 bg-gray-50 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={20} /></a>
                <a href={socialLinks.instagram} target="_blank" className="p-2 bg-gray-50 rounded-full hover:bg-pink-600 hover:text-white transition-all"><Instagram size={20} /></a>
            </div>
            <p className="text-gray-400 text-sm font-bold tracking-tight uppercase">© {new Date().getFullYear()} Mohamad Irfan Maulana • Information Systems UG</p>
        </footer>
    );
};

export default Footer;
