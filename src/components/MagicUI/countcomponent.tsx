import NumberTicker from "./count";

const NumberTickerDemo = () => {
  return (
    <> <div className="grid grid-cols-4 md:m-40">
    <p className="whitespace-pre-wrap text-4xl md:text-6xl font-medium tracking-tighter text-white dark:text-white">
      <NumberTicker value={20} />+<br></br><p className="text-xl md:text-2xl font-mono py-3 relative md:-left-0">Projects</p>
    </p>
    <p className="whitespace-pre-wrap text-4xl md:text-6xl  font-medium tracking-tighter text-white dark:text-white">
      <NumberTicker value={5} />+<br></br><p className="text-xl md:text-2xl font-mono py-3 relative md:-left-0">Clients</p>
    </p>
    <p className="whitespace-pre-wrap text-4xl md:text-6xl font-medium tracking-tighter text-white dark:text-white">
      <NumberTicker value={5} />+<br></br><p className="text-xl md:text-2xl font-mono py-3 relative md:-left-7">Happy Customers</p>
    </p>
    <p className="whitespace-pre-wrap text-4xl md:text-6xl font-medium tracking-tighter text-white dark:text-white p">
      <NumberTicker value={10} />+<br></br><p className="text-xl md:text-2xl font-mono py-3 relative md:-left-7">Cups of Coffee</p>
    </p>
  </div>
     
          </>
  );
};
export default NumberTickerDemo;
