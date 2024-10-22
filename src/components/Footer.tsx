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
    <footer className="w-full bg-slate-800/95 text-white mt-8 backdrop-blur border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col items-center">
          {/* Social Links */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg group w-48 md:w-auto justify-center"
              >
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} Sai Kiran Annoju. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
