import React, { useEffect, useState, useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: 'Figma', percentage: 90 },
  { name: 'Bootstrap', percentage: 99 },
  { name: 'React Js.', percentage: 60 },
  { name: 'HTML/CSS', percentage: 97 },
];

const Skills: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-4 md:space-x-24 py-8">
      {skills.map((skill, index) => (
        <SkillCircle key={index} skill={skill} />
      ))}
    </div>
  );
};

const SkillCircle: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing once it's in view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
      }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = skill.percentage;
      const duration = 2000;
      const incrementTime = duration / end;

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, skill.percentage]);

  return (
    <div ref={circleRef} className="flex flex-col items-center mb-8 md:mb-0">
      <div className="relative">
        <svg
          className="w-24 h-24 md:w-36 md:h-36"
          viewBox="0 0 36 36"
        >
          {/* Background Circle */}
          <path
            className="text-gray-800"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          {/* Moving Circle */}
          <path
            className="text-[#9290C3]"
            strokeDasharray={`${count}, 100`}
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-xl">
          {count}%
        </div>
      </div>
      <span className="text-gray-200 text-sm md:text-lg mt-4">{skill.name}</span>
    </div>
  );
};

export default Skills;
