import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/YourGitHubUsername',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sai-kiran-annoju-50972924a/',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      href: 'mailto:annojusaikiran@gmail.com',
    },
  ];

  return (
    <footer className="w-full bg-slate-800/95 text-white py-6 px-4 backdrop-blur border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-sm md:max-w-none">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-full 
                       bg-white/10 hover:bg-blue-500 transition-all duration-300
                       hover:-translate-y-1 hover:shadow-lg group min-w-[140px]"
            >
              <span className="transition-transform duration-300 group-hover:scale-110">
                {link.icon}
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Sai Kiran Annoju. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
