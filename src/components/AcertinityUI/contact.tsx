import React from 'react';
import WavyLine from './wavyline'; // Adjust the import path as necessary

const ContactForm: React.FC = () => {
  return (
    <div className="min-h-screen  flex justify-center items-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 w-full max-w-5xl">
        {/* Left Column - Form */}
        <div className=" p-8 rounded-md">
          <h2 className="text-white text-4xl md:text-5xl mb-0 font-light ">Get In Touch</h2>
          <WavyLine /> {/* Add the WavyLine component here */}
          
          <form className="space-y-6">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent border-b border-white w-full focus:outline-none focus:border-yellow-500 text-white py-2 font-light"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-b border-white w-full focus:outline-none focus:border-yellow-500 text-white py-2 "
              />
            </div>
            <textarea
              placeholder="Write Your Message..."
              className="bg-transparent border-b border-white w-full h-36 focus:outline-none focus:border-yellow-500 text-white resize-none py-5"
            />
            <button className="bg-transparent border-4 border-[#55595E] text-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition duration-300  relative top-6">
              Send Message
            </button>
          </form>
        </div>

        {/* Right Column - Contact Details */}
        <div className="bg-[#2c305a] bg-opacity-40 p-8 rounded-md space-y-12">
          <div>
            <h4 className="text-yellow-400 font-light text-xl">EMAIL</h4>
            <p className="text-white mt-2">sample@gmail.com</p>
          </div>
          <div>
            <h4 className="text-yellow-400 font-light text-xl">PHONE</h4>
            <p className="text-white mt-2">+210 876 2341 5543</p>
          </div>
          <div>
            <h4 className="text-yellow-400 font-light text-xl">FAX</h4>
            <p className="text-white mt-2">+210 876 2341 5543</p>
          </div>
          <div>
            <h4 className="text-yellow-400 font-light text-xl">ADDRESS</h4>
            <p className="text-white mt-2">
              San Francisco, CA
              <br />
              4th Floor8 Lower
              <br />
              San Francisco street, M1 50F
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
