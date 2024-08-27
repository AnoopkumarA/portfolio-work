import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      name: 'Web Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Web Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Web Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  return (
    <div>
      <h2 className="text-section-title font-light text-white mb-6 md:text-4xl text-3xl">Services</h2>
      {services.map((service, index) => (
        <div key={index} className="mb-4 flex items-start  relative top-4">
          <div className="mr-4 text-[#9290C3]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h3 className="text-item-title text-[#9290C3] font-normal md:text-xl">{service.name}</h3>
            <p className="text-description text-gray-300">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;