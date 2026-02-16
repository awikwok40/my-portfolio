"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, X, Globe, AppWindow, ChevronRight } from 'lucide-react';
import { socialLinks, fadeInUp } from './utils';

const Contact = () => {
    const [emailForm, setEmailForm] = useState({
        name: '',
        subject: '',
        message: ''
    });

    const [showSendOption, setShowSendOption] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setEmailForm({ ...emailForm, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!emailForm.name || !emailForm.message) {
            alert("Please fill in your name and message.");
            return;
        }
        setShowSendOption(true);
    };

    const openGmail = () => {
        const { name, subject, message } = emailForm;
        const body = `Name: ${name}\n\nMessage:\n${message}`;
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${socialLinks.targetEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(gmailUrl, '_blank');
        setShowSendOption(false);
        setEmailForm({ name: '', subject: '', message: '' });
    };

    const openDefaultMail = () => {
        const { name, subject, message } = emailForm;
        const body = `Name: ${name}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:${socialLinks.targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
        setShowSendOption(false);
        setEmailForm({ name: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="max-w-6xl mx-auto px-6 py-20 pb-40 scroll-mt-24">
            <AnimatePresence>
                {showSendOption && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
                        onClick={() => setShowSendOption(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-white w-full max-w-sm p-6 rounded-[2rem] shadow-2xl relative border border-gray-100"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowSendOption(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <h3 className="text-xl font-bold text-center mb-2">Send via?</h3>
                            <p className="text-gray-500 text-center text-sm mb-6">Choose how you want to send this message.</p>

                            <div className="space-y-3">
                                <button
                                    onClick={openGmail}
                                    className="w-full flex items-center justify-between p-4 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-bold transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <Globe size={20} />
                                        <span>Gmail Web</span>
                                    </div>
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <button
                                    onClick={openDefaultMail}
                                    className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold transition-all group"
                                >
                                    <div className="flex items-center gap-3">
                                        <AppWindow size={20} />
                                        <span>Email App (Default)</span>
                                    </div>
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div className="bg-white rounded-[4rem] p-10 md:p-16 flex flex-col md:flex-row gap-16 items-start shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100" {...fadeInUp}>
                <div className="flex-1 space-y-8">
                    <h2 className="text-5xl font-bold leading-tight">Let’s Work <span className="text-blue-600 italic">Together</span></h2>
                    <div className="space-y-4">
                        <motion.a
                            href={`mailto:${socialLinks.targetEmail}`}
                            whileHover={{ x: 10 }}
                            className="flex items-center gap-5 p-4 bg-[#F8F9FA] rounded-2xl group transition-all cursor-pointer"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all"><Mail size={20} /></div>
                            <div><p className="text-xs text-gray-400 font-bold uppercase">Email</p><p className="text-gray-700 font-bold">muhamadirfan.mi966@gmail.com</p></div>
                        </motion.a>

                        <motion.a href={socialLinks.linkedin} target="_blank" whileHover={{ x: 10 }} className="flex items-center gap-5 p-4 bg-[#F8F9FA] rounded-2xl group transition-all cursor-pointer">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all"><Linkedin size={20} /></div>
                            <div><p className="text-xs text-gray-400 font-bold uppercase">LinkedIn</p><p className="text-gray-700 font-bold">Mohamad Irfan Maulana</p></div>
                        </motion.a>
                    </div>
                </div>

                <form onSubmit={handleFormSubmit} className="flex-1 w-full space-y-4 bg-[#F8F9FA] p-8 md:p-10 rounded-[3rem] shadow-inner">
                    <input
                        required
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        value={emailForm.name}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:border-blue-500 font-medium shadow-sm"
                    />
                    <input
                        required
                        name="subject"
                        type="text"
                        placeholder="Subject / Email"
                        value={emailForm.subject}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:border-blue-500 font-medium shadow-sm"
                    />
                    <textarea
                        required
                        name="message"
                        placeholder="Message..."
                        rows={4}
                        value={emailForm.message}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-white border border-gray-100 rounded-2xl focus:outline-none focus:border-blue-500 font-medium resize-none shadow-sm"
                    ></textarea>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-3 transition-colors">Send Message <ChevronRight size={20} /></motion.button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
