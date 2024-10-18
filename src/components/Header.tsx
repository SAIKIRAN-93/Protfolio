import React from 'react';
import { User, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">SAI KIRAN ANNOJU</h1>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <Phone size={18} className="mr-2" />
            <span>+919398884536</span>
          </div>
          <div className="flex items-center">
            <MapPin size={18} className="mr-2" />
            <span>Hyderabad, Telangana</span>
          </div>
          <div className="flex items-center">
            <Mail size={18} className="mr-2" />
            <a href="mailto:annojusaikiran@gmail.com">annojusaikiran@gmail.com</a>
          </div>
          <div className="flex items-center">
            <Linkedin size={18} className="mr-2" />
            <a href="https://www.linkedin.com/in/sai-kiran-annoju" target="_blank" rel="noopener noreferrer">
              LinkedIn: sai-kiran-annoju
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;