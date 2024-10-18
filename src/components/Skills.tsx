import React from 'react';
import { Code, MessageSquare } from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = ['Python', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Java', 'C'];
  const softSkills = ['Communication', 'Problem-solving', 'Adaptability', 'Time Management', 'Multitasking'];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <Code className="mr-2" /> Technical Skills
          </h3>
          <ul className="list-disc list-inside">
            {technicalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <MessageSquare className="mr-2" /> Soft Skills
          </h3>
          <ul className="list-disc list-inside">
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;