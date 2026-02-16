"use client";

import { motion } from 'framer-motion';
import { Code2, Palette, BarChart4, Cpu } from 'lucide-react';
import { fadeInUp } from './utils';

const Services = () => {
    return (
        <section id="services" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-24">
            <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6" {...fadeInUp}>
                {[
                    { title: "Web Dev", icon: <Code2 size={32} /> },
                    { title: "UI/UX Design", icon: <Palette size={32} /> },
                    { title: "Data Analysis", icon: <BarChart4 size={32} /> },
                    { title: "System Solutions", icon: <Cpu size={32} /> }
                ].map((service, index) => (
                    <div key={index} className="p-8 bg-white border border-gray-100 rounded-[2.5rem] text-center hover:bg-black group transition-all duration-500 shadow-sm">
                        <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-white/10 group-hover:text-white transition-all duration-500 group-hover:rotate-[15deg]">{service.icon}</div>
                        <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                        <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors font-medium">Professional solutions for your digital needs.</p>
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default Services;
