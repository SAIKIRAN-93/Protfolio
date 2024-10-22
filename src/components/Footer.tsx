import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'GitHub',
      href: 'https://github.com/YourGitHubUsername',
    },
    {
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sai-kiran-annoju-50972924a/',
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Email',
      href: 'mailto:annojusaikiran@gmail.com',
    },
  ];

  return (
    <footer className="w-full bg-slate-800/95 text-white py-4 sm:py-6 px-3 sm:px-4 backdrop-blur border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 sm:gap-6">
        <div className="grid grid-cols-1 sm:flex sm:flex-row justify-center gap-3 sm:gap-4 w-full">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full 
                       bg-white/10 hover:bg-blue-500 transition-all duration-300
                       active:scale-95 hover:-translate-y-1 hover:shadow-lg group
                       text-sm sm:text-base min-w-0 sm:min-w-[140px]"
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {link.icon}
              </span>
              <span className="whitespace-nowrap">{link.label}</span>
            </a>
          ))}
        </div>
        <p className="text-xs sm:text-sm opacity-80 text-center">
          © {new Date().getFullYear()} Sai Kiran Annoju. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
