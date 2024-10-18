import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Briefcase className="mr-2" /> Experience
      </h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold">Intern</h3>
        <p className="text-gray-600">Web Stack Academy</p>
        <p className="text-gray-600">Aug 2023 - Oct 2023</p>
        <p className="text-gray-600">Hyderabad, Telangana</p>
        <ul className="list-disc list-inside mt-2">
          <li>This Internship Provided Hands-On Exposure on Foundational Programming With HTML, CSS, JavaScript, React.</li>
          <li>SDLC Based Project Building Using MERN Stack</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;