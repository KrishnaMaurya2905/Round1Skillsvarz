// import React from 'react';

// const Button = () => {
//   return (
//     <div className="relative group h-fit w-fit p-1 rounded-sm overflow-hidden   backdrop-blur-lg drop-shadow-lg cursor-pointer bg-white/10 border-[1px] border-white/20 ">
//       {/* Expanding background on hover */}
//       <div className="absolute inset-0 w-0 group-hover:w-full h-full transition-all duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] z-0  bg-white/20   backdrop-blur-2xl drop-shadow-2xl" />

//       {/* Text stays on top */}
//       <div className="relative z-10 flex justify-center items-center text-white text-lg max-md:text-sm  px-6 py-2 transition-all duration-300 ">
//         EXPLORE
//       </div>
//     </div>
//   );
// };

// export default Button;


import React from "react";
import {  useNavigate } from "react-router-dom";


const Button = ({ children, className = "" , navigate }) => {
  const navi = useNavigate()
  return (
    <div
       onClick={() => navi(navigate)}
      className={`relative group h-fit w-fit overflow-hidden p-1 cursor-pointer border backdrop-blur-lg drop-shadow-lg
      ${className}
      `}
    >
      {/* Hover expanding background */}
      <div className="absolute inset-0 w-0 group-hover:w-full h-full transition-all duration-300 ease-[cubic-bezier(0.33,1,0.68,1)] z-0 bg-white/15 backdrop-blur-2xl drop-shadow-2xl" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center transition-all duration-300">
        {children}
      </div>
    </div>
  );
};

export default Button;
