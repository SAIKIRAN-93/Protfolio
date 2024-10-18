import React from 'react';
import { Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Award className="mr-2" /> Certifications
      </h2>
      <ul className="list-disc list-inside">
        <li>Internship Full Stack Web Development in MERN Certificate</li>
        <li>Internship Using IBM Skills Build In AI ML</li>
      </ul>
    </section>
  );
};

export default Certifications;