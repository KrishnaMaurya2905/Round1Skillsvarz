import React, { useRef, useState } from "react";
import {
  useTransform,
  useScroll,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import Paragraph from "../Components/Paragraph";
import PreFooter from "../Components/PreFooter";
import Footer from "../Components/Footer";

const Artist = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentIndex = useTransform(
    scrollYProgress,
    [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
    [0, 1, 2, 3, 4, 5, 6, 7, 8]
  );

  useMotionValueEvent(currentIndex, "change", (latest) => {
    setActiveIndex(Math.round(latest));
  });

  const top1 = useTransform(scrollYProgress, [0, 0.125], ["100%", "0%"]);
  const top2 = useTransform(scrollYProgress, [0.126, 0.25], ["100%", "0%"]);
  const top3 = useTransform(scrollYProgress, [0.251, 0.375], ["100%", "0%"]);
  const top4 = useTransform(scrollYProgress, [0.376, 0.5], ["100%", "0%"]);
  const top5 = useTransform(scrollYProgress, [0.501, 0.625], ["100%", "0%"]);
  const top6 = useTransform(scrollYProgress, [0.626, 0.75], ["100%", "0%"]);
  const top7 = useTransform(scrollYProgress, [0.751, 1], ["100%", "0%"]);

  const artistImages = [
    {
      img: "https://res.cloudinary.com/dqzci9flc/image/upload/v1744470493/AP_Dhillon_performs_at_DEC_Arena_m61952_h6a7ji.webp",
      top: "0%",
    },
    {
      img: "https://res.cloudinary.com/dqzci9flc/image/upload/v1744731170/Arijit-Singh-live_uxqcri.webp",
      top: top1,
    },
    {
      img: "https://res.cloudinary.com/dqzci9flc/image/upload/v1744731199/indulgexpress_2F2024-06_2Fc6dc0d88-d3bb-4ea0-8d3b-9d1f7138cbf1_2Fkaleo_jpg_9872d021_54bd_4d72_b455_55dc2b1b1a80_drgmuc.webp",
      top: top2,
    },
    {
      img: "https://res.cloudinary.com/dqzci9flc/image/upload/v1744730917/dua-lipa-all-in-red_qu4jkb.webp",
      top: top3,
    },
    {
      img: "https://res.cloudinary.com/dqzci9flc/image/upload/v1744730916/taylor-swift_mgh55e.webp",
      top: top4,
    },
    {
      img: "https://res.cloudinary.com/dqzci9flc/image/upload/v1744731082/Apple-Music-Live-Ed-Sheeran-with-guitar_big.jpg.large_c6eep9.webp",
      top: top5,
    },
    {
      img: "https://res.cloudinary.com/dqzci9flc/image/upload/v1744731093/3066ffdf-7fc4-4389-bc59-c2355ced5832_dqwqu1.webp",
      top: top6,
    },
    {
      img: "https://res.cloudinary.com/dqzci9flc/image/upload/v1744728194/456465255_3531606910471039_3964009349865442666_n_iikpc2.webp",
      top: top7,
    },
  ];

  const data = [
    ["Timestamps", "Tracks"],
    ["release", "April 2025"],
    ["Collabs", "Self-produced ", "Genre", "hip-hops"],
  ];

  return (
    <>
      <div className="h-[80vh] w-full relative   ">
        <img
          className="h-full w-full object-cover"
          src="https://res.cloudinary.com/dqzci9flc/image/upload/v1744730818/wp8930689_hpodfc.webp"
          alt=""
        />
        <div className="absolute bottom-0 left-0 blur-div w-full h-[30vh] bg-gradient-to-t from-[#000000] to-transparent  " />
      </div>

      <div className="px-[5%] max-xl:px-[2%] bg-black w-full">
        <div className="h-[80vh] text-white w-full bg-black">
          <div className="h-[40%] max-xl:h-[30%] flex items-center w-full">
            <h1 className="text-[5vw] font-bold max-sm:text-5xl ">
              {" "}
              OUR ARTIST{" "}
            </h1>
          </div>
          <div className="h-full w-full flex max-xl:flex-col items-center justify-between">
            <div className="w-[45%] py-3 sm:py-5  max-xl:h-[30%] uppercase max-xl:w-full h-full border-t-[1px]  border-[#ffffff29]">
              <div className="flex justify-between w-[80%] max-sm:w-full max-2xl:w-[95%]">
                {data.map((it, idx) => (
                  <div key={idx} className="flex    flex-col gap-1">
                    {it.map((i, ix) => (
                      <h2
                        className={`${
                          ix !== 0
                            ? "opacity-60 max-sm:text-sm text-lg"
                            : "text-2xl max-2xl:text-lg"
                        }`}
                      >
                        {i}
                      </h2>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[45%] h-full  max-xl:w-full border-t-[1px] py-5 border-[#ffffff29] font-['Primary'] ">
              <h3 className="text-2xl max-2xl:text-lg uppercase pb-1    ">
                A propas
              </h3>
              <Paragraph
                phrases={[
                  "Every track is a timestamp. A sound fragment from a",
                  "memory I never  meant to keep. 'Echoes' is a collection",
                  "of moments—half-truths, full emotion. This project ",
                  "reflects late-night loops, the pressure to evolve, and ",
                  "the fear of disappearing. Each song is built from ",
                  "scratches, voice notes, and real pain turned into ",
                  "motion. It’s raw, imperfect, intentional. I’m not ",
                  " chasing a sound. I’m documenting a feeling.",
                ]}
                className={" text-lg     max-xl:text-[17px]  opacity-70"}
              />
            </div>
          </div>
        </div>
        <div ref={containerRef} className="relative w-full h-[600vh]  bg-black">
          <div className="sticky top-0 z-[1]  h-screen w-full flex max-sm:flex-col items-center sm:justify-between max-sm:justify-center gap-5 ">
            {/* Sidebar Thumbnails */}
            <div className="w-[8%] max-lg:w-[20%] max-2xl:w-[13%]  max- max-sm:w-[100%] bg-black h-[80%] max-sm:h-[10%] flex sm:flex-col items-center">
              {artistImages.map((it, idx) => (
                <motion.div
                  key={idx}
                  animate={{
                    scale: activeIndex > idx ? 0 : 1,
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-full"
                  style={{ transformOrigin: "bottom center" }} // 👈 correct origin for scaling
                >
                  <img
                    src={it.img}
                    alt=""
                    className={`w-full h-full object-cover transition-all duration-300  ${
                      activeIndex === idx
                        ? "border border-[#ffffff] scale-[1.1] origin-left"
                        : ""
                    }`}
                  />
                </motion.div>
              ))}
            </div>

            {/* Main Display Images */}
            <div className="relative w-[90%] max-2xl:w-[85%] max-lg:w-[75%] max-sm:w-[100%] h-[80%]  overflow-hidden">
              {artistImages.map((src, index) => (
                <motion.img
                  key={index}
                  src={src.img}
                  alt={`Artist ${index + 1}`}
                  style={{
                    top: index === 0 ? "0%" : src.top,
                  }}
                  className="absolute w-full h-full object-cover  overflow-hidden object-top"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <PreFooter />
      <Footer />
    </>
  );
};

export default Artist;
