"use client";

import { motion } from 'framer-motion';
import { Layout, Github, ExternalLink, BriefcaseBusiness, ChevronRight, BarChart4 } from 'lucide-react';
import { fadeInUp, socialLinks } from './utils';

const Projects = () => {
    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-24">
            <motion.div className="text-center mb-16" {...fadeInUp}><h2 className="text-4xl font-bold mb-4">Featured Work</h2><div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div></motion.div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[200px]">

                {/* Card 1: Hospital Web */}
                <motion.div {...fadeInUp} className="md:col-span-8 md:row-span-2 bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden relative">
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-4"><div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all"><Layout size={24} /></div><div className="flex gap-2"><span className="px-3 py-1 bg-gray-50 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-gray-100">PHP</span><span className="px-3 py-1 bg-gray-50 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-gray-100">MySQL</span></div></div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">Hospital Web System</h3>
                            <p className="text-gray-500 max-w-sm leading-relaxed font-medium">An independently developed hospital management system designed to streamline administrative tasks.</p>
                        </div>
                        <div className="flex gap-6 mt-4">
                            <a href={socialLinks.github} target="_blank" className="flex items-center gap-2 text-sm font-bold hover:translate-x-1 transition-transform"><Github size={18} /> Source Code</a>
                            <a href="#" className="flex items-center gap-2 text-sm font-bold hover:translate-x-1 transition-transform"><ExternalLink size={18} /> Live Demo</a>
                        </div>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 group-hover:bg-blue-100 transition-colors"></div>
                </motion.div>

                {/* Card 2: Job Portal */}
                <motion.div {...fadeInUp} transition={{ delay: 0.1 }} className="md:col-span-4 md:row-span-3 bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 group relative">
                    <div className="flex flex-col h-full">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-12"><BriefcaseBusiness size={24} /></div>
                        <h3 className="text-xl font-bold mb-3">Job & Internship Portal</h3>
                        <p className="text-gray-500 text-sm leading-relaxed font-medium mb-6">A web platform built to help students discover career opportunities at Gunadarma University.</p>
                        <div className="mt-auto space-y-4">
                            <div className="flex flex-wrap gap-2"><span className="px-2 py-1 bg-gray-50 text-[10px] font-bold rounded-md">Tailwind</span><span className="px-2 py-1 bg-gray-50 text-[10px] font-bold rounded-md">PHP</span></div>
                            <a href={socialLinks.github} target="_blank" className="flex items-center gap-2 text-sm font-bold text-blue-600 underline">View Project <ChevronRight size={16} /></a>
                        </div>
                    </div>
                </motion.div>

                {/* Card 3: Text Analysis */}
                <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="md:col-span-8 md:row-span-1 bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden relative">
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all"><BarChart4 size={24} /></div>
                                <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">Indonesian Text Analysis</h3>
                            </div>
                            <div className="flex gap-2"><span className="px-3 py-1 bg-gray-50 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-gray-100">Research</span><span className="px-3 py-1 bg-gray-50 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-gray-100">Python</span></div>
                        </div>
                        <p className="text-gray-500 text-sm font-medium">Research analyzing maximal frequent sequences in Indonesian documents.</p>
                        <div className="flex gap-6">
                            <a href={socialLinks.github} target="_blank" className="flex items-center gap-2 text-sm font-bold hover:translate-x-1 transition-transform"><Github size={18} /> Code</a>
                            <a href="#" className="flex items-center gap-2 text-sm font-bold hover:translate-x-1 transition-transform"><ExternalLink size={18} /> Demo</a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
