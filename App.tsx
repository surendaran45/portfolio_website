import React, { useState, useEffect } from 'react';
import { Section } from './types';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import TiltCard from './components/TiltCard';
import Typewriter from './components/Typewriter';
import CustomCursor from './components/CustomCursor';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Smartphone, Code, Database, 
  Cpu, Camera, Globe, GraduationCap, User
} from 'lucide-react';

// Resume Data
const resumeData = {
  name: "Surendaran V",
  role: "Aspiring IT Student",
  location: "Madurai, Tamilnadu",
  phone: "9524610086",
  email: "surendaran45@gmail.com",
  linkedin: "https://www.linkedin.com/in/surendaran-v-4953b5299",
  about: "Passionate and highly motivated Third-year Information Technology student with a solid foundation in Python, basic Java concepts and JavaScript. Seeking an internship opportunity to enhance technical skills, contribute to innovative projects, and gain practical experience in the IT industry.",
  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "Sethu Institute Of Technology",
      period: "Sept 2023 - May 2027 (Expected)",
      details: "Current CGPA: 8.1"
    },
    {
      degree: "Higher Secondary School",
      institution: "Don Bosco Hr.Sec School",
      period: "2022 - 2023",
      details: "Achieved an excellent academic record with 76%."
    }
  ],
  hardSkills: ["Python", "JavaScript (React)", "HTML, CSS", "Arduino, IOT", "Canva"],
  softSkills: ["Quick learner", "Adaptability", "Time management", "Teamwork"],
  projects: [
    {
      title: "Farming Assistant App",
      desc: "A Flutter and React based application helping farmers with crop management.",
      tags: ["Flutter", "React", "Mobile"],
      icon: <Smartphone className="text-green-400" size={32} />
    },
    {
      title: "E-commerce Website",
      desc: "Full stack shopping platform using MongoDB for database management.",
      tags: ["Web", "MongoDB", "Fullstack"],
      icon: <Globe className="text-blue-400" size={32} />
    },
    {
      title: "Gas Monitoring System",
      desc: "IoT based safety system using PI PICO to detect gas leaks.",
      tags: ["IoT", "Pi Pico", "Hardware"],
      icon: <Cpu className="text-red-400" size={32} />
    },
    {
      title: "Health Advisory AI",
      desc: "A chatbot based application providing health advice.",
      tags: ["AI", "Chatbot", "Python"],
      icon: <Database className="text-purple-400" size={32} />
    }
  ],
  interests: ["Data Analysis", "AI", "App Development", "Photography"]
};

const SectionWrapper = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className={`w-full max-w-5xl mx-auto px-6 pb-32 pt-10 ${className}`}
  >
    {children}
  </motion.div>
);

const App = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);

  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden relative cursor-none">
      
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Interactive Background */}
      <ParticleBackground />

      <main className="relative z-10 pt-4 h-full">
        <AnimatePresence mode="wait">
          
          {/* HOME SECTION */}
          {activeSection === Section.HOME && (
            <SectionWrapper key="home" className="flex flex-col items-center justify-center min-h-[80vh]">
              <div className="flex-1 space-y-6 text-center z-20 flex flex-col justify-center items-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-indigo-400 font-mono text-sm mb-4 backdrop-blur-sm"
                >
                  <span className="w-2 h-2 inline-block rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  OPEN_TO_WORK
                </motion.div>
                <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight">
                  I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-400">{resumeData.name}</span>
                </h1>
                <h2 className="text-2xl md:text-4xl text-slate-400 font-light h-16 md:h-20">
                  <Typewriter text={resumeData.role} speed={80} />
                </h2>
                <p className="max-w-xl mx-auto text-slate-400 leading-relaxed text-lg">
                  Based in {resumeData.location}. Building the future with Python, React, and IoT.
                </p>
                <div className="flex flex-wrap gap-4 justify-center pt-8">
                  <button onClick={() => setActiveSection(Section.PROJECTS)} className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-1 text-lg">
                    View Projects
                  </button>
                  <button onClick={() => setActiveSection(Section.CONTACT)} className="px-8 py-4 bg-slate-800/80 border border-slate-700 hover:bg-slate-700 rounded-xl font-bold transition-all backdrop-blur-sm hover:-translate-y-1 text-lg">
                    Contact Me
                  </button>
                </div>
              </div>
            </SectionWrapper>
          )}

          {/* ABOUT SECTION */}
          {activeSection === Section.ABOUT && (
            <SectionWrapper key="about">
              <h2 className="text-4xl font-bold mb-8 text-center"><span className="border-b-4 border-pink-500">About Me</span></h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <TiltCard className="glass-panel p-8 rounded-2xl">
                  <p className="text-lg leading-relaxed text-slate-300 mb-6">
                    {resumeData.about}
                  </p>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-pink-400 flex items-center gap-2">
                      <GraduationCap /> Education
                    </h3>
                    <div className="space-y-6 border-l-2 border-slate-700 pl-6 ml-2">
                      {resumeData.education.map((edu, idx) => (
                        <div key={idx} className="relative group">
                          <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-pink-500 border-4 border-slate-900 group-hover:scale-125 transition-transform"></span>
                          <h4 className="text-lg font-bold">{edu.degree}</h4>
                          <p className="text-slate-400 text-sm">{edu.institution}</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs px-2 py-1 bg-slate-800 rounded text-slate-300">{edu.period}</span>
                          </div>
                          <p className="text-sm mt-2 text-indigo-300">{edu.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>

                <div className="space-y-6">
                   <TiltCard className="glass-panel p-8 rounded-2xl h-full">
                      <h3 className="text-xl font-bold text-teal-400 mb-4 flex items-center gap-2">
                        <Camera /> Extra Curricular & Interests
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-center gap-3 p-2 rounded hover:bg-slate-800/50 transition-colors">
                          <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                          <span>Member of College Photography Club</span>
                        </li>
                        <li className="flex items-center gap-3 p-2 rounded hover:bg-slate-800/50 transition-colors">
                          <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                          <span>Active in coding workshops & challenges</span>
                        </li>
                        <li className="flex items-center gap-3 p-2 rounded hover:bg-slate-800/50 transition-colors">
                          <span className="w-2 h-2 bg-teal-400 rounded-full"></span>
                          <span>Volunteer for Tech Fests</span>
                        </li>
                      </ul>
                      <div className="mt-8">
                         <h4 className="text-sm uppercase text-slate-500 font-bold mb-3">Topics of Interest</h4>
                         <div className="flex flex-wrap gap-2">
                          {resumeData.interests.map(i => (
                            <span key={i} className="px-3 py-1 bg-slate-800 rounded-full text-xs font-mono border border-slate-700 hover:border-teal-400 transition-colors cursor-default">
                              {i}
                            </span>
                          ))}
                        </div>
                      </div>
                   </TiltCard>
                </div>
              </div>
            </SectionWrapper>
          )}

          {/* SKILLS SECTION */}
          {activeSection === Section.SKILLS && (
            <SectionWrapper key="skills">
              <h2 className="text-4xl font-bold mb-12 text-center"><span className="border-b-4 border-teal-500">My Arsenal</span></h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-indigo-400 flex items-center gap-2">
                    <Code /> Hard Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {resumeData.hardSkills.map((skill, i) => (
                      <motion.div 
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="p-4 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-indigo-500 hover:bg-slate-750 transition-all flex items-center gap-3 group cursor-default"
                      >
                        <div className="w-2 h-2 group-hover:h-8 bg-indigo-500 rounded-full transition-all duration-300"></div>
                        <span className="font-mono font-semibold">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 text-pink-400 flex items-center gap-2">
                    <User /> Soft Skills
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {resumeData.softSkills.map((skill, i) => (
                      <motion.div 
                        key={skill}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ translateX: 10 }}
                        className="p-4 bg-slate-800/80 backdrop-blur-sm rounded-xl border border-slate-700 flex justify-between items-center group cursor-default"
                      >
                        <span className="font-semibold group-hover:text-pink-300 transition-colors">{skill}</span>
                        <div className="flex gap-1">
                           {[1,2,3,4,5].map((dot, idx) => (
                             <div 
                                key={dot} 
                                className="w-2 h-2 rounded-full bg-pink-500"
                                style={{ opacity: 0.3 + (idx * 0.15) }}
                             ></div>
                           ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </SectionWrapper>
          )}

          {/* PROJECTS SECTION */}
          {activeSection === Section.PROJECTS && (
            <SectionWrapper key="projects">
              <h2 className="text-4xl font-bold mb-12 text-center"><span className="border-b-4 border-orange-500">Projects</span></h2>
              <div className="grid md:grid-cols-2 gap-6">
                {resumeData.projects.map((project, index) => (
                  <TiltCard key={index} className="h-full">
                    <div className="glass-panel p-6 rounded-2xl group relative overflow-hidden h-full border border-slate-700 hover:border-orange-500/50 transition-colors">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:rotate-12 group-hover:scale-125 duration-500">
                        {project.icon}
                      </div>
                      
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 bg-slate-800 rounded-lg text-white shadow-lg shadow-orange-500/10">
                          {project.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors">{project.title}</h3>
                          <div className="flex gap-2 mt-2 flex-wrap">
                            {project.tags.map(tag => (
                              <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-slate-900 rounded text-slate-400 border border-slate-800">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {project.desc}
                      </p>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </SectionWrapper>
          )}

          {/* CONTACT SECTION */}
          {activeSection === Section.CONTACT && (
            <SectionWrapper key="contact" className="max-w-3xl text-center">
              <h2 className="text-4xl font-bold mb-8"><span className="border-b-4 border-green-500">Get In Touch</span></h2>
              
              <TiltCard>
                <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
                   {/* Decorative circles */}
                   <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-green-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

                   <p className="text-xl text-slate-300 mb-8">
                     I'm always open to discussing new projects, internships, or creative ideas.
                   </p>

                   <div className="grid gap-4 max-w-sm mx-auto relative z-10">
                      <a href={`mailto:${resumeData.email}`} className="flex items-center justify-center gap-3 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 hover:text-green-400 transition-all group border border-transparent hover:border-green-500/50 shadow-lg">
                        <Mail className="group-hover:animate-bounce" />
                        <span>{resumeData.email}</span>
                      </a>
                      <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-4 bg-slate-800 rounded-xl hover:bg-blue-700 hover:text-white transition-all group border border-transparent hover:border-blue-400/50 shadow-lg">
                        <Linkedin className="group-hover:scale-110 transition-transform" />
                        <span>LinkedIn Profile</span>
                      </a>
                      <div className="flex items-center justify-center gap-3 p-4 bg-slate-800 rounded-xl cursor-default border border-slate-700">
                        <Smartphone className="text-indigo-400" />
                        <span>{resumeData.phone}</span>
                      </div>
                   </div>

                   <div className="mt-12 pt-8 border-t border-slate-700">
                     <p className="text-sm text-slate-500 font-mono">
                       Designed & Built by Surendaran V
                     </p>
                   </div>
                </div>
              </TiltCard>
            </SectionWrapper>
          )}
        </AnimatePresence>
      </main>

      {/* Navigation Bar */}
      <Navigation activeSection={activeSection} setSection={setActiveSection} />
    </div>
  );
};

export default App;