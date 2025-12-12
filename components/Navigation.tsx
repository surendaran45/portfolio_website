import React from 'react';
import { Section } from '../types';
import { Home, User, Cpu, Briefcase, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: Section;
  setSection: (s: Section) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setSection }) => {
  const navItems = [
    { id: Section.HOME, label: 'Home', icon: Home, color: 'border-indigo-500' },
    { id: Section.ABOUT, label: 'About', icon: User, color: 'border-pink-500' },
    { id: Section.SKILLS, label: 'Skills', icon: Cpu, color: 'border-teal-500' },
    { id: Section.PROJECTS, label: 'Projects', icon: Briefcase, color: 'border-orange-500' },
    { id: Section.CONTACT, label: 'Contact', icon: Mail, color: 'border-green-500' },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 p-2 rounded-2xl glass-panel flex gap-3 md:gap-6 shadow-2xl">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setSection(item.id)}
          className={`
            group relative flex flex-col items-center justify-center 
            w-14 h-14 md:w-16 md:h-16 rounded-xl border-b-4 
            bg-slate-800 text-slate-300 transition-all duration-100
            hover:bg-slate-700
            ${item.color}
            ${activeSection === item.id ? 'key-active border-transparent' : 'key-shadow'}
          `}
          aria-label={item.label}
        >
          <item.icon size={24} className="mb-1" />
          <span className="text-[10px] uppercase font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 bg-black px-2 py-1 rounded text-white">
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;