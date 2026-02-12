"use client"

import { useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion, AnimatePresence, Variants } from 'framer-motion'
import { 
  Github, 
  ExternalLink, 
  Database, 
  Mail, 
  Linkedin, 
  ChevronRight,
  Code2,
  House,         
  UserRound,     
  BriefcaseBusiness, 
  Sparkles,      
  Send,          
  Palette,       
  Cpu,           
  BarChart4,
  Layout,
  FileText,
  Instagram,
  X,
  AppWindow,
  Globe
} from 'lucide-react'

// --- Komponen Animasi Teks ---
const AnimatedText = ({ text, className }: { text: string, className?: string }) => {
  const words = text.split(" ");
  
  // FIX 1: Menambahkan tipe Variants eksplisit agar 'staggerChildren' dikenali
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  // FIX 2: Menambahkan tipe Variants eksplisit agar 'type: "spring"' valid
  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div className={`flex flex-wrap ${className}`} variants={container} initial="hidden" animate="visible">
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-2">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Home() {
  // --- PUSAT KONTROL LINK ---
  const socialLinks = {
    github: "https://github.com/awikwok40",       
    linkedin: "https://www.linkedin.com/in/username-kamu", 
    cv: "/cv-irfan.pdf", 
    instagram: "https://www.instagram.com/mohamadirfan.m?igsh=MWUweXA5ZGM2amRxNA==",
    targetEmail: "muhamadirfan.mi966@gmail.com" 
  };

  const [activeSection, setActiveSection] = useState('home');
  
  // State untuk Form Kontak
  const [emailForm, setEmailForm] = useState({
    name: '',
    subject: '',
    message: ''
  });

  // State untuk Modal Pilihan Pengiriman
  const [showSendOption, setShowSendOption] = useState(false);

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

  // Handle Input Change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailForm({ ...emailForm, [e.target.name]: e.target.value });
  };

  // 1. Trigger saat tombol "Send Message" diklik (Buka Modal)
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailForm.name || !emailForm.message) {
      alert("Please fill in your name and message.");
      return;
    }
    setShowSendOption(true);
  };

  // 2. Logic Buka Gmail Web (Browser)
  const openGmail = () => {
    const { name, subject, message } = emailForm;
    const body = `Name: ${name}\n\nMessage:\n${message}`;
    // Format URL Gmail Compose
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${socialLinks.targetEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(gmailUrl, '_blank');
    setShowSendOption(false);
    setEmailForm({ name: '', subject: '', message: '' });
  };

  // 3. Logic Buka Default Mail App (Outlook/HP)
  const openDefaultMail = () => {
    const { name, subject, message } = emailForm;
    const body = `Name: ${name}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:${socialLinks.targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    setShowSendOption(false);
    setEmailForm({ name: '', subject: '', message: '' });
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: <House size={18} /> },
    { id: 'about', label: 'About', icon: <UserRound size={18} /> },
    { id: 'projects', label: 'Projects', icon: <BriefcaseBusiness size={18} /> },
    { id: 'services', label: 'Services', icon: <Sparkles size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Send size={18} /> },
  ];

  // FIX 3: Mengubah tipe array 'ease' menjadi Tuple yang spesifik agar kompatibel dengan Framer Motion Transition
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number] 
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-black font-sans selection:bg-blue-100 scroll-smooth relative">
      
      {/* --- MODAL PILIHAN PENGIRIMAN (SEND OPTION) --- */}
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
                {/* OPSI 1: GMAIL WEB */}
                <button 
                  onClick={openGmail}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 font-bold transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Globe size={20} />
                    <span>Gmail Web</span>
                  </div>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>

                {/* OPSI 2: DEFAULT APP */}
                <button 
                  onClick={openDefaultMail}
                  className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <AppWindow size={20} />
                    <span>Email App (Default)</span>
                  </div>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Navbar */}
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

      {/* 2. Hero Section */}
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
              Download CV <FileText size={18}/>
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

      {/* 3. About Section */}
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

      {/* 4. Projects Section (Bento Grid) */}
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
                <a href={socialLinks.github} target="_blank" className="flex items-center gap-2 text-sm font-bold text-blue-600 underline">View Project <ChevronRight size={16}/></a>
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

      {/* 5. Services Section */}
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

      {/* 6. Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 pb-40 scroll-mt-24">
        <motion.div className="bg-white rounded-[4rem] p-10 md:p-16 flex flex-col md:flex-row gap-16 items-start shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100" {...fadeInUp}>
          <div className="flex-1 space-y-8">
            <h2 className="text-5xl font-bold leading-tight">Let’s Work <span className="text-blue-600 italic">Together</span></h2>
            <div className="space-y-4">
              {/* LINK EMAIL - Langsung Mailto */}
              <motion.a 
                href={`mailto:${socialLinks.targetEmail}`} 
                whileHover={{ x: 10 }} 
                className="flex items-center gap-5 p-4 bg-[#F8F9FA] rounded-2xl group transition-all cursor-pointer"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all"><Mail size={20} /></div>
                <div><p className="text-xs text-gray-400 font-bold uppercase">Email</p><p className="text-gray-700 font-bold">muhamadirfan.mi966@gmail.com</p></div>
              </motion.a>
              
              {/* LINK LINKEDIN */}
              <motion.a href={socialLinks.linkedin} target="_blank" whileHover={{ x: 10 }} className="flex items-center gap-5 p-4 bg-[#F8F9FA] rounded-2xl group transition-all cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all"><Linkedin size={20} /></div>
                <div><p className="text-xs text-gray-400 font-bold uppercase">LinkedIn</p><p className="text-gray-700 font-bold">Mohamad Irfan Maulana</p></div>
              </motion.a>
            </div>
          </div>
          
          {/* FORM KONTAK VISUAL - Saat disubmit membuka Modal Pilihan */}
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

      {/* FOOTER - Bersih tanpa Icon Email */}
      <footer className="py-12 text-center border-t border-gray-100">
        <div className="flex justify-center gap-6 mb-6">
           <a href={socialLinks.github} target="_blank" className="p-2 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all"><Github size={20} /></a>
           <a href={socialLinks.linkedin} target="_blank" className="p-2 bg-gray-50 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={20} /></a>
           <a href={socialLinks.instagram} target="_blank" className="p-2 bg-gray-50 rounded-full hover:bg-pink-600 hover:text-white transition-all"><Instagram size={20} /></a>
        </div>
        <p className="text-gray-400 text-sm font-bold tracking-tight uppercase">© {new Date().getFullYear()} Mohamad Irfan Maulana • Information Systems UG</p>
      </footer>

    </main>
  )
}