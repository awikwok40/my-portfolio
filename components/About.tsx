"use client";

import { motion } from 'framer-motion';
import { Code2, Database } from 'lucide-react';
import { fadeInUp } from './utils';

const About = () => {
    return (
        <motion.section id="about" className="max-w-6xl mx-auto px-6 py-32 scroll-mt-24" {...fadeInUp}>
            <div className="flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1">
                    <div className="bg-white p-4 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden group">
                        <img src="/about-irfan.png" className="rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700" alt="About Me" />
                    </div>
                </div>
                <div className="flex-1 space-y-6">
                    <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm">About Me</h3>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">Building Meaningful Digital Experiences</h2>
                    <p className="text-gray-500 text-lg leading-relaxed font-medium">
                        I am interested in data science and UI/UX design. My background includes developing personal projects like a Hospital Web System independently.
                    </p>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm"><Code2 className="text-blue-600 mb-2" size={24} /><p className="font-bold text-gray-900">Languages</p><p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">PHP • Python • JS</p></div>
                        <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm"><Database className="text-blue-600 mb-2" size={24} /><p className="font-bold text-gray-900">Education</p><p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Gunadarma University</p></div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;
