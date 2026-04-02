import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaCheck, FaChevronDown, FaArrowUp, FaFileDownload, FaSun, FaMoon } from 'react-icons/fa'
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiPostman, SiRedux, SiJquery } from 'react-icons/si'

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <motion.a href="#" className="text-3xl font-black"
          whileHover={{ scale: 1.1 }}>
<span className="gradient-text font-sans">R</span><span className="text-gray-500 font-sans">.</span>
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-400 hover:text-white transition-colors font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {link}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/Ranjithsrt"
              target="_blank"
              className="p-2 rounded-xl bg-white/5 hover:bg-primary transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ranjithsrt/"
              target="_blank"
              className="p-2 rounded-xl bg-white/5 hover:bg-blue-600 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-white/5 hover:bg-primary/20 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'dark' ? <FaSun className="w-5 h-5 text-yellow-400" /> : <FaMoon className="w-5 h-5 text-blue-600" />}
          </motion.button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mx-6 mt-4 rounded-2xl p-6"
          >
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-gray-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

const Hero = () => {
  const techStack = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'Express', icon: <SiExpress />, color: '#888888' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'GitHub', icon: <FaGithub />, color: '#FFFFFF' },
    { name: 'VS Code', icon: <span className="text-xs font-bold">VS</span>, color: '#007ACC' },
    { name: 'Docker', icon: <span className="text-xs font-bold">Do</span>, color: '#2496ED' },
    { name: 'Linux', icon: <span className="text-xs font-bold">Lin</span>, color: '#FCC624' },
    { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' },
    { name: 'Redux', icon: <span className="text-xs font-bold">Rx</span>, color: '#764ABC' },
    { name: 'Netlify', icon: <span className="text-xs font-bold">Nt</span>, color: '#00C7B7' }
  ]

  // Duplicate for seamless loop
  const duplicatedStack = [...techStack, ...techStack]

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-20 relative overflow-hidden">
      {/* Spider Web Background with Attractive Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated glowing orbs */}
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.4, 0.1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.35, 0.1], x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] bg-secondary/30 rounded-full blur-[80px]"
        />

        {/* Attractive Spider Web Lines with Glow */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            {/* Gradient for center glow lines */}
            <linearGradient id="centerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(99,102,241,0)" />
              <stop offset="50%" stopColor="rgba(99,102,241,0.5)" />
              <stop offset="100%" stopColor="rgba(99,102,241,0)" />
            </linearGradient>
            <linearGradient id="centerGlow2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(139,92,246,0)" />
              <stop offset="50%" stopColor="rgba(139,92,246,0.5)" />
              <stop offset="100%" stopColor="rgba(139,92,246,0)" />
            </linearGradient>
          </defs>
          
          {/* Main diagonal web lines with strong glow */}
          <motion.line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#centerGlow)" strokeWidth="2" 
            animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#centerGlow2)" strokeWidth="2"
            animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} />
          
          {/* Radiating web lines from center */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30) * Math.PI / 180
            const x2 = 50 + 50 * Math.cos(angle)
            const y2 = 50 + 50 * Math.sin(angle)
            return (
              <motion.line
                key={`radial-${i}`}
                x1="50%" y1="50%"
                x2={`${x2}%`} y2={`${y2}%`}
                stroke="rgba(99,102,241,0.15)"
                strokeWidth="1"
                strokeDasharray="4 8"
                animate={{ opacity: [0.1, 0.4, 0.1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
              />
            )
          })}
          
          {/* Concentric circles for spider web effect */}
          {[20, 35, 50, 65, 80].map((r, i) => (
            <motion.circle
              key={`circle-${i}`}
              cx="50%" cy="50%"
              r={`${r}%`}
              fill="none"
              stroke="rgba(99,102,241,0.1)"
              strokeWidth="1"
              strokeDasharray="6 12"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
          
          {/* Horizontal and vertical center lines */}
          <motion.line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(99,102,241,0.2)" strokeWidth="1"
            animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(139,92,246,0.2)" strokeWidth="1"
            animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }} />
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr_240px] gap-8 items-center relative z-10 min-h-[80vh] px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs md:text-sm"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for Work
          </motion.div>

          {/* Heading */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-base md:text-lg mb-2"
            >
              Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold font-sans mb-3"
            >
              <span className="gradient-text">Ranjith Srt</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-gray-400"
            >
              MERN Stack Developer
            </motion.p>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 text-base md:text-lg max-w-lg leading-relaxed"
          >
            Building full-stack web applications with modern technologies. 
            Passionate about creating clean, scalable solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3 md:gap-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 md:px-8 md:py-4 gradient-bg text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all text-sm md:text-base"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/Ranjithsrt"
              target="_blank"
              className="px-6 py-3 md:px-8 md:py-4 border border-white/20 rounded-xl font-semibold text-gray-300 hover:border-primary hover:text-white transition-all text-sm md:text-base"
            >
              View GitHub
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3 md:gap-4 pt-2 md:pt-4"
          >
            <a href="https://github.com/Ranjithsrt" target="_blank" className="p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all">
              <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ranjithsrt/" target="_blank" className="p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all">
              <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="mailto:ranjith201099@gmail.com" className="p-2.5 md:p-3 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 transition-all">
              <FaEnvelope className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </motion.div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center order-1 lg:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 gradient-bg rounded-full blur-3xl opacity-20" />
            <div className="absolute -inset-3 md:-inset-4 border border-dashed border-primary/30 rounded-full animate-spin-slow" />
            <img
              src="https://avatars.githubusercontent.com/u/170628147?v=4"
              alt="Ranjith Srt"
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-white/10"
            />
          </div>
        </motion.div>

        {/* 3 Vertical Tech Marquees on Right - Opposite Directions */}
        <div className="hidden lg:flex gap-3 h-[550px] order-3">
          {/* Marquee 1 - TOP to DOWN (↓) */}
          <div className="flex flex-col w-16 h-full overflow-hidden opacity-50">
            <motion.div
              className="flex flex-col gap-3"
              animate={{ y: ["0%", "-50%"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              {[...techStack, ...techStack].map((tech, i) => (
                <div 
                  key={`right1-${i}`} 
                  className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-110"
                >
                  <span style={{ color: tech.color }} className="text-2xl">{tech.icon}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Marquee 2 - DOWN to TOP (↑) Opposite */}
          <div className="flex flex-col w-16 h-full overflow-hidden opacity-40">
            <motion.div
              className="flex flex-col gap-3"
              animate={{ y: ["-50%", "0%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, i) => (
                <div 
                  key={`right2-${i}`} 
                  className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-110"
                >
                  <span style={{ color: tech.color }} className="text-2xl">{tech.icon}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Marquee 3 - TOP to DOWN (↓) with different speed */}
          <div className="flex flex-col w-16 h-full overflow-hidden opacity-30">
            <motion.div
              className="flex flex-col gap-3"
              animate={{ y: ["0%", "-50%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              {[...techStack.slice(8), ...techStack.slice(0, 8), ...techStack.slice(8), ...techStack.slice(0, 8)].map((tech, i) => (
                <div 
                  key={`right3-${i}`} 
                  className="flex items-center justify-center w-16 h-16 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-110"
                >
                  <span style={{ color: tech.color }} className="text-2xl">{tech.icon}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <FaChevronDown className="w-6 h-6 text-gray-600 animate-bounce" />
      </motion.div>
    </section>
  )
}

const About = () => {
  const stats = [
    { number: '39+', label: 'Repositories', color: 'from-primary to-secondary' },
    { number: 'MERN', label: 'Full Stack', color: 'from-green-500 to-emerald-500' },
    { number: 'Node.js', label: 'Backend', color: 'from-orange-500 to-red-500' },
    { number: 'React', label: 'Frontend', color: 'from-cyan-500 to-blue-500' }
  ]

  return (
    <section id="about" className="py-24 px-6 border-b border-white/5 relative overflow-hidden">
      {/* Web Lines Background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="aboutGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(99,102,241,0)" />
            <stop offset="50%" stopColor="rgba(99,102,241,0.2)" />
            <stop offset="100%" stopColor="rgba(99,102,241,0)" />
          </linearGradient>
        </defs>
        
        {[...Array(5)].map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={`${20 + i * 15}%`} x2="100%" y2={`${20 + i * 15}%`}
            stroke="url(#aboutGlow)" strokeWidth="0.5" strokeDasharray="10 20" />
        ))}
        {[...Array(6)].map((_, i) => (
          <line key={`v-${i}`} x1={`${15 + i * 14}%`} y1="0" x2={`${15 + i * 14}%`} y2="100%"
            stroke="url(#aboutGlow)" strokeWidth="0.5" strokeDasharray="10 20" />
        ))}
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(99,102,241,0.1)" strokeWidth="1" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(99,102,241,0.1)" strokeWidth="1" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm md:text-base">Get To Know</span>
          <h1 className="text-2xl md:text-3xl font-bold mt-2 font-sans">About Me</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`p-4 sm:p-6 bg-gradient-to-br ${stat.color} rounded-2xl sm:rounded-3xl text-center`}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-white/80 text-xs sm:text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-xl md:text-2xl font-bold">Ranjith Srt</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              I'm a dedicated MERN stack developer with expertise in building full-stack web applications. My journey in web development has led me to explore MongoDB, Express.js, React, and Node.js to create complete, scalable solutions.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I specialize in building responsive user interfaces and robust server-side applications. I believe in writing clean, maintainable code and following best practices.
            </p>
            <div className="space-y-3">
              {['Full-Stack Development', 'RESTful APIs', 'Database Design'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center">
                    <FaCheck className="w-3 h-3 text-white" />
                  </div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-black/60 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27ca40]"></div>
              </div>
              <span className="text-xs text-gray-500 ml-4 font-sans tracking-wide">~/portfolio/stack</span>
            </div>
            <pre className="p-6 overflow-x-auto"><code className="font-mono text-[13px] leading-relaxed tracking-wide">
<span className="code-keyword">const</span> <span className="code-variable">stack</span> <span className="code-bracket">=</span> <span className="code-bracket">{'{'}</span>
  <span className="code-string">frontend</span><span className="code-bracket">:</span> <span className="code-bracket">[</span><span className="code-string">'React'</span><span className="code-bracket">,</span> <span className="code-string">'HTML'</span><span className="code-bracket">,</span> <span className="code-string">'CSS'</span><span className="code-bracket">,</span> <span className="code-string">'Tailwind'</span><span className="code-bracket">,</span> <span className="code-string">'jQuery'</span><span className="code-bracket">]</span><span className="code-bracket">,</span>
  <span className="code-string">backend</span><span className="code-bracket">:</span> <span className="code-bracket">[</span><span className="code-string">'Node.js'</span><span className="code-bracket">,</span> <span className="code-string">'Express'</span><span className="code-bracket">]</span><span className="code-bracket">,</span>
  <span className="code-string">database</span><span className="code-bracket">:</span> <span className="code-bracket">[</span><span className="code-string">'MongoDB'</span><span className="code-bracket">,</span> <span className="code-string">'MySQL'</span><span className="code-bracket">]</span><span className="code-bracket">,</span>
  <span className="code-string">tools</span><span className="code-bracket">:</span> <span className="code-bracket">[</span><span className="code-string">'Git'</span><span className="code-bracket">,</span> <span className="code-string">'Postman'</span><span className="code-bracket">]</span>
<span className="code-bracket">{'}'}</span><span className="code-bracket">;</span>
            </code></pre>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="w-8 h-8" />, color: '#E34F26', desc: 'Markup' },
    { name: 'CSS3', icon: <FaCss3Alt className="w-8 h-8" />, color: '#1572B6', desc: 'Styling' },
    { name: 'Bootstrap', icon: <FaBootstrap className="w-8 h-8" />, color: '#7952B3', desc: 'CSS Framework' },
    { name: 'Tailwind', icon: <SiTailwindcss className="w-8 h-8" />, color: '#06B6D4', desc: 'Utility CSS' },
    { name: 'JavaScript', icon: <FaJs className="w-8 h-8" />, color: '#F7DF1E', desc: 'Language' },
    { name: 'React', icon: <FaReact className="w-8 h-8" />, color: '#61DAFB', desc: 'Frontend' },
    { name: 'Redux', icon: <SiRedux className="w-8 h-8" />, color: '#764ABC', desc: 'State' },
    { name: 'Postman', icon: <SiPostman className="w-8 h-8" />, color: '#FF6C37', desc: 'API Tool' },
    { name: 'NPM', icon: <span className="text-2xl font-bold">N</span>, color: '#CB3837', desc: 'Package Manager' },
    { name: 'MySQL', icon: <SiMysql className="w-8 h-8" />, color: '#4479A1', desc: 'Database' },
    { name: 'jQuery', icon: <SiJquery className="w-8 h-8" />, color: '#0769AD', desc: 'Library' },
    { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" />, color: '#47A248', desc: 'NoSQL DB' },
    { name: 'Express', icon: <SiExpress className="w-8 h-8" />, color: '#888888', desc: 'Backend' },
    { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" />, color: '#339933', desc: 'Runtime' },
    { name: 'Mongoose', icon: <span className="text-xl font-bold">Mg</span>, color: '#880000', desc: 'ODM' },
    { name: 'Python', icon: <span className="text-2xl">🐍</span>, color: '#3776AB', desc: 'Language' },
  ]

  return (
    <section id="skills" className="py-24 px-6 border-b border-white/5 overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">My Expertise</span>
          <h1 className="text-2xl md:text-3xl font-bold font-sans mt-3">Skills & Technologies</h1>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">Complete tech stack for full-stack development</p>
        </motion.div>

        {/* Center Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 backdrop-blur-sm">
            <span className="text-sm font-bold gradient-text">FULL STACK DEVELOPER</span>
          </div>
        </motion.div>

        {/* Bento Grid Skills - 4 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              <div 
                className="relative p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                {/* Glow effect */}
                <div 
                  className="absolute -top-10 -right-10 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                  style={{ backgroundColor: skill.color }}
                />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon */}
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ 
                      backgroundColor: `${skill.color}15`,
                      color: skill.color
                    }}
                  >
                    {skill.icon}
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-sm font-bold text-gray-200 mb-1">{skill.name}</h3>
                  <p className="text-[10px] text-gray-500">{skill.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {[
            { label: 'Experience', value: '2+' },
            { label: 'Projects', value: '20+' },
            { label: 'Technologies', value: '16' },
            { label: 'GitHub Repos', value: '39+' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-4 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="text-xl md:text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const Projects = () => {
  const projects = [
    { name: 'myBookapp', desc: 'A full-stack bookstore application built with the MERN stack (MongoDB, Express, React, Node.js).', color: 'from-primary to-secondary' },
    { name: 'MERN-Stack', desc: 'Comprehensive collection of MERN stack development resources and projects.', color: 'from-pink-500 to-rose-500' },
    { name: 'MERN-Mini-Project', desc: 'A collection of mini-projects demonstrating core MERN stack concepts and functionalities.', color: 'from-emerald-500 to-teal-500' },
    { name: 'React-Concept', desc: 'Deep dive into advanced React concepts, hooks, and state management patterns.', color: 'from-yellow-500 to-orange-500' },
    { name: 'october-bootcamp-main', desc: 'Main repository for the full-stack web development bootcamp projects and assignments.', color: 'from-blue-500 to-indigo-500' },
    { name: 'githubemc1', desc: 'Initial exploration and project implementations for web development fundamentals.', color: 'from-cyan-500 to-blue-600' }
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-semibold text-sm md:text-base">My Work</span>
          <h1 className="text-2xl md:text-3xl font-bold mt-2 font-sans">Featured Projects</h1>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <motion.svg
                  className="w-20 h-20 text-white/90"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </motion.svg>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold bg-white/10 px-3 py-1 rounded-full">HTML/CSS</span>
                <h3 className="text-xl font-bold mt-3 mb-2">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                <motion.a
                  href={`https://github.com/Ranjithsrt/${project.name.replace(/\s+/g, '-')}`}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-sans text-sm"
                  whileHover={{ x: 5 }}
                >
                                    View Project 
                  <FaExternalLinkAlt className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Ranjithsrt"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-bg text-white font-bold rounded-2xl"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <FaGithub className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  const API_URL = 'http://localhost:5000/api'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch(`${API_URL}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || data.messages?.[0] || 'Failed to send message')
      }

      setStatus({ type: 'success', message: 'Message sent successfully!' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Error sending message:', error)
      setStatus({ type: 'error', message: error.message || 'Something went wrong. Please try again.' })
    } finally {
      setIsLoading(false)
      setTimeout(() => setStatus({ type: '', message: '' }), 5000)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    { label: 'Email', value: 'ranjith201099@gmail.com', href: 'mailto:ranjith201099@gmail.com', icon: <FaEnvelope />, color: 'bg-white/5 border-white/10' },
    { label: 'Discord', value: 'Ranjith', href: 'https://discord.com/channels/@me', icon: <span className="text-xl text-indigo-400">🎮</span>, color: 'bg-indigo-500/10 border-indigo-500/30' },
    { label: 'GitHub', value: '@Ranjithsrt', href: 'https://github.com/Ranjithsrt', icon: <FaGithub />, color: 'bg-white/5 border-white/10' },
    { label: 'LinkedIn', value: 'ranjithsrt', href: 'https://www.linkedin.com/in/ranjithsrt/', icon: <FaLinkedin />, color: 'bg-blue-500/10 border-blue-500/30' }
  ]

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm md:text-base">Get In Touch</span>
          <h1 className="text-2xl md:text-3xl font-bold mt-2 font-sans">Contact Me</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-xl md:text-2xl font-bold">Let's Work Together</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : '_self'}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all group ${item.color || 'bg-white/5 border-white/10 hover:border-primary/50'}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center text-white text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{item.label}</div>
                    <div className="font-semibold group-hover:text-primary transition-colors font-sans">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white/5 rounded-3xl p-8 border border-white/10 space-y-6"
          >
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl text-sm font-medium ${
                  status.type === 'success' 
                    ? 'bg-green-500/20 border border-green-500/30 text-green-400' 
                    : 'bg-red-500/20 border border-red-500/30 text-red-400'
                }`}
              >
                {status.message}
              </motion.div>
            )}
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors font-sans disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors font-sans disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Message Subject"
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors font-sans disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary transition-colors resize-none font-sans disabled:opacity-50"
              />
            </div>
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-4 gradient-bg text-white font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              whileHover={{ scale: isLoading ? 1 : 1.02, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : status.type === 'success' ? (
                <>
                  <FaCheck className="w-5 h-5" />
                  Message Sent!
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

const Footer = () => (
  <footer className="py-8 px-6 border-t border-white/10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-2xl font-bold">
        <span className="gradient-text font-sans">R</span><span className="text-gray-500 font-sans">.</span>
      </div>
      <p className="text-gray-500 text-sm font-sans">© 2024 Ranjith Srt. All rights reserved.</p>
      <div className="flex gap-4">
        <motion.a
          href="https://github.com/Ranjithsrt"
          target="_blank"
          className="p-2 rounded-xl bg-white/5 hover:bg-white hover:text-gray-900 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          <FaGithub className="w-5 h-5" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/ranjithsrt/"
          target="_blank"
          className="p-2 rounded-xl bg-white/5 hover:bg-blue-600 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          <FaLinkedin className="w-5 h-5" />
        </motion.a>
      </div>
    </div>
  </footer>
)

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I\'m Ranjith\'s AI assistant. Ask me about his skills, projects, or how to contact him!' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const restrictedTopics = ['hacking', 'illegal', 'drugs', 'weapons', 'violence', 'adult', 'porn', 'scam', 'fraud']

  const handleSend = async () => {

    if (!input.trim()) return

    // Check for restricted topics
    const lowerInput = input.toLowerCase()
    const hasRestricted = restrictedTopics.some(topic => lowerInput.includes(topic))
    
    if (hasRestricted) {
      setMessages(prev => [...prev, 
        { role: 'user', text: input },
        { role: 'bot', text: 'I\'m sorry, I can only answer questions related to Ranjith\'s portfolio, skills, and services. Please ask something relevant!' }
      ])
      setInput('')
      return
    }

    setMessages(prev => [...prev, { role: 'user', text: input }])
    const currentInput = input
    setInput('')
    setIsTyping(true)

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentInput }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response')
      }

      setMessages(prev => [...prev, { role: 'bot', text: data.response }])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: 'I\'m sorry, I\'m having trouble connecting right now. Please try again later!' 
      }])
    } finally {
      setIsTyping(false)
    }
  }


  return (
    <>
      {/* WhatsApp Button - Above ChatBot */}
      <motion.a
        href="https://wa.me/8610791655"
        target="_blank"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-32 right-4 sm:bottom-40 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-2xl flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.955L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
        </svg>
      </motion.a>

      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-16 right-4 sm:bottom-24 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-primary to-secondary text-white shadow-2xl flex items-center justify-center text-xl sm:text-2xl"
      >
        {isOpen ? '✕' : '🤖'}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-32 right-4 sm:bottom-40 sm:right-8 z-50 w-[calc(100vw-2rem)] max-w-sm sm:max-w-md md:w-96 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 dark:border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">
                  🤖
                </div>
                <div>
                  <h4 className="font-bold text-white">AI Assistant</h4>
                  <p className="text-white/70 text-xs">Online</p>
                </div>
              </div>
              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/8610791655"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-xl shadow-lg"
                title="Chat on WhatsApp"
              >
                💬
              </motion.a>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-50/50 dark:bg-gray-900/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-gradient-to-r from-primary to-secondary text-white rounded-br-none' 
                      : 'bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-gray-200 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-200 dark:bg-white/10 p-3 rounded-2xl rounded-bl-none text-sm">
                    <span className="animate-pulse">Typing...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-gray-900">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about skills, projects, contact..."
                  className="flex-1 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-sm focus:outline-none focus:border-primary dark:text-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSend}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold"
                >
                  Send
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500)
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl gradient-bg text-white shadow-2xl hover:scale-110 transition-all"
        >
          <FaArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="min-h-screen font-sans antialiased selection:bg-primary/30">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <AIChatBot />
      <ScrollToTop />
    </div>
  )
}

export default App
