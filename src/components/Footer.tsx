import React from 'react';
import { Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Sai Kiran Annoju</h3>
            <p>Software Devloper</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <Globe className="mr-2" /> Languages
            </h4>
            <ul>
              <li>English</li>
              <li>Telugu</li>
              <li>Hindi</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>&copy; 2024 Sai Kiran Annoju. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;