const Typo = () => {
  return (
    <div className="h-[40vh] max-md:h-[32vh]  w-full overflow-hidden  md:px-20 max-md:flex-col flex text-white  px-2 ">
      <div className="h-full w-1/2 max-md:w-full text-[8vw] max-md:text-[14vw] flex flex-col font-bold leading-none z-[2]  ">
        <h1>Our</h1>
        <div className="flex items-end">
          <h2 className="text-lg max-md:text-sm opacity-70 font-medium ">
            (Meet <br />
            our Artists)
          </h2>
          <h1 className="ml-30 max-md:ml-10">Artist</h1>
        </div>
      </div>
      <div className="h-full w-1/2  max-md:w-full md:p-20 max-md:p-3 flex flex-col justify-end gap-5 ">
        {/* <p className="text-justify   font-light  text-xl max-md:text-sm leading-tight opacity-80  ">
          Resonance Music has had the privilege of collaborating with a diverse
          array of independent acts — covering genres ranging from ambient to
          pop, and everything in between. We champion originality, giving every
          artist a space to be heard.
        </p> */}
        <Paragraph
          className={`font-['Primary'] text-lg max-md:text-sm opacity-70 leading-tight `}
          phrases={[
            " Resonance Music has had the privilege of collaborating with ",
            "a diverse array of independent acts covering genres ranging",
            "from ambient to pop, and everything in between. We champion",
            "originality, giving every artist a space to be heard.",
          ]}
        />
        <div className="flex gap-1">
          <Button className="bg-white/10 border-white/15 rounded-sm text-white p-3 max-md:text-sm text-xl rotate-x-180">
            <BsArrow90DegRight />
          </Button>
          <Button className="bg-white/10 border-white/15 rounded-sm text-white p-3 max-md:text-sm text-xl leading-none">
            <h2>Explore More</h2>
          </Button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import Button from "./Button";
import { BsArrow90DegRight } from "react-icons/bs";
import Paragraph from "./Paragraph";

const Artist = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const artists = [
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744470492/cce43e45bd0409b42b470f2415b4209f_vr5p5t.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744470492/41ef7c522abf78b50307d5a688c115ae_i0ohr3.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744470063/d1a4a14ef0b0be7242fe1532ee56dcd3_lqehiu.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744470492/e950af18415742ba391c63b750da70c8_gumtml.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744470492/286ce3f0f268309e74b8641710bc56ff_kjoekv.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744470493/AP_Dhillon_performs_at_DEC_Arena_m61952_h6a7ji.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744470063/65d8e3728e171fe5955a048c2c2b95b5_yrtxkq.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744470062/dafa931cdbad0821e9cb2b9ef1e2f0d8_eor0ab.webp",
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const componentMap = (artist, index) => (
    <div
      key={index}
      className={`group relative h-[75vh] max-md:h-[30vh] w-[8vw] max-md:w-[8vw] 
      hover:w-[25vw] transition-all duration-600 ease-[cubic-bezier(0.33,1,0.68,1)] 
      ${activeIndex === index ? "max-md:w-[50vw]" : ""} 
      ${index > 8 ? "max-md:hidden" : ""}`}
      onClick={() => handleClick(index)}
    >
      <img
        className={`w-full h-full object-cover saturate-0 group-hover:saturate-100 transition-all duration-200 ease-in-out 
        ${activeIndex === index ? "max-md:saturate-100" : ""}`}
        src={artist}
        alt={`Artist ${index + 1}`}
      />
    </div>
  );

  return (
    <div className="w-full overflow-x-hidden">
      <Typo />
      <div className="h-screen max-md:h-[40vh] w-full flex justify-center items-center max-md:gap-2 gap-5 overflow-hidden">
        {artists.map((artist, index) => componentMap(artist, index))}
      </div>
    </div>
  );
};

export default Artist;
