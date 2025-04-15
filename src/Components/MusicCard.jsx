import React, { useContext } from "react";
import { motion as Motion } from "framer-motion";
import { SongContext } from "../utils/Context";
import { IoPlaySharp } from "react-icons/io5";
import { formatTime } from "../utils/format.js";
const MusicCard = ({ songdata, playIcon, index }) => {
  const { setSong, Song, setRotated, progress } = useContext(SongContext);
  return (
    <Motion.div
      onClick={() => {
        setRotated(true);
        setSong(songdata);
      }}
      className={`h-[12vh] py-2 ${
        Song.songName === songdata.songName && "text-[#0A8296]"
      } px-5 max-sm:px-1 w-full flex justify-between items-center backdrop-blur-md shadow-md border-b-[1px] border-[#ffffff5b] cursor-pointer`}
      id={`${index + 1}`}
      whileHover={{
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        scale: 1.05,
        transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] },
      }}
    >
      <div className="h-full w-[50%] max-sm:w-[85%] flex items-center gap-5">
        <div className="h-full w-[10%] flex justify-center items-center text-xl">
          {/* {playIcon || <IoPlaySharp />} */}

          {Song.songName === songdata.songName ? (
            <div class="equalizer">
             {Array.from({ length: 5 }).map((_, index) => (
               <div key={index} class="bar"></div>
             ))}
            </div>
          ) : (
            <IoPlaySharp />
          )}
        </div>
        <div className="h-[10vh] w-[10vh] overflow-hidden">
          <img
            className="h-full w-full object-cover"
            src={songdata.songImg}
            alt={songdata.songName}
          />
        </div>
        <h2 className="font-semibold">{songdata.songName}</h2>
      </div>
      <h2 className="opacity-80 max-md:hidden">{songdata.aritistName}</h2>
      <h2 className="opacity-80">
        {Song.songName === songdata.songName
          ? formatTime(progress)
          : songdata.duration}
      </h2>
    </Motion.div>
  );
};

export default MusicCard;
