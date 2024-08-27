import React, { useEffect, useRef, useState } from 'react';

const WavyLine: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (pathRef.current && isInView) {
      const length = pathRef.current.getTotalLength();
      pathRef.current.style.strokeDasharray = `${length} ${length}`;
      pathRef.current.style.strokeDashoffset = `${length}`;
      pathRef.current.style.animation = 'drawWave 3s ease-out forwards';
    }
  }, [isInView]);

  return (
    <div ref={sectionRef} className="w-full h-24 bg-transparentflex items-center justify-center ">
      <svg width="140" height="40" viewBox="0 0 300 40" className='mx-5 md:mx-12'>
        <path
          ref={pathRef}
          d="M0,20 Q15,5 30,20 T60,20 T90,20 T120,20 T150,20 T180,20 T210,20 T240,20 T270,20 T300,20,"
          fill="none"
          stroke="white"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};

export default WavyLine;

