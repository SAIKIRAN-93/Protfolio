import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <GraduationCap className="mr-2" /> Education
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
          <p>Sri Indu College of Engineering and Technology</p>
          <p>2020 - 2024</p>
          <p>Percentage: 68%</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Intermediate</h3>
          <p>Sri Gayatri Junior College</p>
          <p>2018 - 2020</p>
          <p>Percentage: 72%</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">School</h3>
          <p>Narayan Concept School</p>
          <p>2017 - 2018</p>
          <p>Percentage: 80%</p>
        </div>
      </div>
    </section>
  );
};

export default Education;