"use client";

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FileText } from 'lucide-react';
import AnimatedText from './AnimatedText';
import { socialLinks } from './utils';

const Hero = () => {
    return (
        <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen max-w-6xl mx-auto px-6 pt-20">
            <div className="flex-1 space-y-6">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block px-4 py-1 rounded-full bg-white border border-gray-200 text-xs font-bold uppercase tracking-widest text-blue-600 shadow-sm">Available for Projects</motion.div>
                <div className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                    <AnimatedText text="Hi, I'm" />
                    <span className="text-blue-600"><AnimatedText text="Mohamad Irfan Maulana" /></span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 h-10">
                    <span className="text-blue-600">
                        <Typewriter words={['Information Systems Student', 'Data Science Enthusiast', 'UI/UX Designer', 'Web Developer']} loop={true} cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1500} />
                    </span>
                </h2>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }} className="text-lg text-gray-500 max-w-md leading-relaxed">
                    Information Systems student at Gunadarma University specializing in PHP, MySQL, and Java-based web solutions.
                </motion.p>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="flex items-center gap-4 pt-4">
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-black text-white rounded-full shadow-xl font-bold cursor-pointer"
                    >
                        Hire Me
                    </motion.a>
                    <motion.a
                        href={socialLinks.cv}
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-white border border-gray-200 rounded-full font-bold cursor-pointer flex items-center gap-2"
                    >
                        Download CV <FileText size={18} />
                    </motion.a>
                </motion.div>
            </div>

            {/* HERO IMAGE */}
            <motion.div
                className="flex-1 flex justify-center mt-12 md:mt-0 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-[300px] h-[380px] md:w-[400px] md:h-[500px] bg-white rounded-[3rem] border-4 border-white shadow-2xl overflow-hidden group ring-1 ring-gray-100 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-blue-100/30 to-blue-200/20"></div>
                    <motion.div className="absolute top-[-20%] left-[-20%] w-[140%] h-[140%] bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
                    <img
                        src="/profile-irfan.png"
                        alt="Mohamad Irfan Maulana"
                        className="relative z-10 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none z-20"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
