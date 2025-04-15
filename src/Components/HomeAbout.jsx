import { motion } from "framer-motion";
import React from "react";
import BorderAnimation from "./BorderAnimation";

const HomeAbout = () => {
  return (
    <div className="w-full h-[150vh] max-md:h-[70vh] text-white">
      {/* Section 1: Headline Text */}
    
      <div className="h-[60vh] max-md:h-[20vh] w-full flex flex-col justify-center items-center text-[5vw] max-md:text-[5.5vw] px-4 pt-30 pb-20 max-md:py-5  leading-none font-bold ">
        <h1 className="w-full max-w-5xl flex justify-center gap-10 text-center  translate-x-[-10%]  ">
          <span className="text-lg max-md:text-sm opacity-70 font-medium font-['Primary'] ">
            (About)
          </span>
          Empower artists,
        </h1>
        <h1 className="text-center ">
          captivating global
          <motion.span
            initial={{ width: 0 }}
            whileInView={{
              width: `${window.innerWidth < 768 ? "10vh" : "12vw"}`,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="inline-block w-[5vw] h-[10vh]  max-md:h-[3vh] max-md:w-[4vh]  rounded-full overflow-hidden align-middle mx-6 max-md:mx-2 "
          >
            <img
              className="w-full h-full object-cover"
              src="https://i.pinimg.com/736x/64/b5/e5/64b5e5ef1d78470125e0efcd71b28d3d.jpg"
              alt=""
            />
          </motion.span>
          audiences,
        </h1>
        <h1 className="text-center">and redefining the future of music</h1>
        <h1 className="text-center">as a dynamic record label</h1>
      </div>

      {/* Section 2: Subtext */}
      <div className="w-full flex justify-end px-10 py-8 max-md:py-2 ">
        <div className="w-full max-w-xl p-10 flex justify-center items-center">
          <h2 className="text-xl  max-md:text-sm leading-tight opacity-80 text-justify ">
          Fueling music’s next movement,
with sounds that speak volumes.


          </h2>
        </div>
      </div>

      {/* Section 3: Placeholder */}
      <div className="h-[60vh] max-md:h-[20vh] flex items-center justify-centerw-full ">
        <DiscVisual />
      </div>
    </div>
  );
};

export default HomeAbout;

const DiscSide = ({ imageSrc, reversed = false, delay = 0 }) => {
  const svgPath =
    "M106.206 223.631L128.451 260.705C58.0961 259.286 1.5 201.81 1.5 131.116C1.5 60.4216 58.0961 2.94604 128.451 1.52686L106.206 38.6005C72.0393 95.5456 72.0393 166.686 106.206 223.631Z";

  return (
    <motion.div
      className={`relative ${reversed ? "scale-x-[-1]" : ""}`}
      initial={{
        opacity: 0,
        x: 100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1.2,
        ease: "easeInOut",
        delay,
      }}
    >
      <img
        className="h-full w-full object-contain"
        src={imageSrc}
        alt="Disc Side"
      />

      <svg
        height="100%"
        width="100%"
        viewBox="0 0 132 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0 z-[2]"
      >
        <g style={{ mixBlendMode: "color-dodge" }}>
          <motion.path
            d={svgPath}
            stroke="white"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              delay: delay + 0.2,
            }}
          />
        </g>
      </svg>
    </motion.div>
  );
};
const DiscSegment = ({ imageSrc, reversed }) => (
  <motion.div className={` ${reversed ? "rotate-y-180" : ""}`}>
    <img
      className="h-full w-full object-contain"
      src={imageSrc}
      alt="Disc Segment"
    />
  </motion.div>
);

const DiscVisual = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center overflow-hidden px-4">
      <div className="relative flex items-center gap-10 max-md:gap-5 justify-center">
        {/* Left semi-circle */}
        <DiscSide imageSrc="https://qclay.design/projects/kurate/images/Disc/last-side.png" />

        {/* Left middle side */}
        <DiscSegment imageSrc="https://qclay.design/projects/kurate/images/Disc/side.png" />

        {/* Rotating disc */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          className="rounded-full  border-2 z-2 relative"
        >
          <img
            className="w-full h-full object-cover"
            src="https://qclay.design/projects/kurate/images/Disc/middle.png"
            alt="Rotating Disc"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[5vw] h-[5vw] bg-black rounded-full">
            <div className="w-[4vw] h-[4vw] border-2 border-gray-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </motion.div>

        {/* Right middle side */}
        <DiscSegment
          imageSrc="https://qclay.design/projects/kurate/images/Disc/side.png"
          reversed
        />

        {/* Right semi-circle */}
        <DiscSide
          imageSrc="https://qclay.design/projects/kurate/images/Disc/last-side.png"
          reversed
          delay={0.2}
        />
      </div>
    </div>
  );
};
