


export function GridBackgroundDemo1() {
  return (
    <div className="h-[36rem] w-full  bg-[#020516]  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] bg-grid-custom relative flex items-center justify-center  md:-top-7  ">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-[#020516] [mask-image:radial-gradient(ellipse_at_center,transparent_-60%,black)]"></div>
    
  </div>
  );
}
