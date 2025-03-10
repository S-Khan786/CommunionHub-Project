// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-300 flex flex-col items-center justify-center px-6 py-12 text-center">
//       <h1 className="text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-lg">
//         Connecting People Across <span className="text-purple-600">Faiths</span> & <span className="text-blue-600">Interests</span>
//       </h1>
//       <p className="text-lg text-gray-700 mt-4 max-w-2xl">
//         Join our community to discover and share events that bring people together.
//       </p>
//       <Link to="/events">
//         <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-lg font-medium shadow-md transition-all">
//           Explore Events
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageVariants1 = {
    animate: {
      y: isMobile ? [0, 30, 0] : [0, 50, 0],
      transition: { duration: 4, ease: easeInOut, repeat: Infinity },
    },
  };

  const imageVariants2 = {
    animate: {
      x: isMobile ? [30, 0, 30] : [50, 0, 50],
      transition: { duration: 4, ease: easeInOut, repeat: Infinity },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-300 flex flex-col lg:flex-row items-center justify-center px-6 py-12 text-center lg:text-left gap-10">
      {/* Images Section (Left Side) */}
      <div className="flex flex-col items-center gap-4 flex-1">
        <motion.img
          variants={imageVariants1}
          animate="animate"
          src={p1}
          className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] border-l-8 border-b-8 border-purple-600 rounded-t-[54px] rounded-br-[54px] shadow-2xl"
        />
        <motion.img
          variants={imageVariants2}
          animate="animate"
          src={p2}
          className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] border-l-8 border-b-8 border-purple-600 rounded-t-[54px] rounded-br-[54px] shadow-2xl"
        />
      </div>

      {/* Text Section (Right Side) */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight drop-shadow-lg">
          Connecting People Across{" "}
          <span className="text-purple-600">Faiths</span> &{" "}
          <span className="text-blue-600">Interests</span>
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl">
          Join our community to discover and share events that bring people
          together. Find religious gatherings, social meetups, and charity
          events effortlessly.
        </p>
        <Link to="/events">
          <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-lg font-medium shadow-md transition-all shadow-md 
                           transition-all transform hover:scale-105 active:scale-95 cursor-pointer">
            Explore Events
          </button>
        </Link>
        <Link to="/abouts">
          <button className="ml-5 mt-6 px-6 py-3 text-purple-700 rounded-lg text-lg font-medium shadow-md transition-all border-1 border-purple-600 shadow-md 
                           transition-all transform hover:scale-105 active:scale-95 cursor-pointer">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

