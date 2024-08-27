import React from 'react';

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      company: 'Pillzen Pvt. Ltd',
      position: 'Front-End Web Developer',
      period: '2023 - Present',
    },
    {
      company: 'Pillzen Pvt. Ltd',
      position: 'Front-End Web Developer',
      period: '2023 - Present',
    },
    {
      company: 'Pillzen Pvt. Ltd',
      position: 'Front-End Web Developer',
      period: '2023 - Present',
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-section-title font-light text-white mb-6 md:text-4xl text-3xl">Work Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-4 flex items-start relative top-4 ">
          <div className="mr-4 text-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-item-title text-yellow-400 font-light md:text-xl ">{exp.company}</h3>
            <p className="text-item-subtitle text-white">{exp.position}</p>
            <p className="text-item-period text-gray-400 italic">{exp.period}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;