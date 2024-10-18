import React from 'react';
import { User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <User className="mr-2" /> About Me
      </h2>
      <p className="text-lg">
        A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my skills.
      </p>
    </section>
  );
};

export default About;