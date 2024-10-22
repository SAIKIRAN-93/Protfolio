import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'Java', 'C']
    },
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'React', 'Tailwind']
    },
    {
      title: 'Database',
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Soft Skills',
      skills: ['Communication', 'Problem-solving', 'Adaptability', 'Time Management', 'Multitasking']
    }
  ];

  return (
    <section className="py-20 bg-white/50 backdrop-blur-sm" id="skills">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card 
              key={category.title} 
              className="hover:shadow-lg transition-shadow duration-300 hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
