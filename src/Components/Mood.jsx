import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import MusicCard from "./MusicCard";
import { MoodAndSongs } from "../utils/data";
const Mood = () => {
  const [selectedMood, setSelectedMood] = useState(null);
  const [showMoods, setShowMoods] = useState(false);

  return (
    <>
      <Typo />
      <div className="h-[80vh] text-white px-10 max-md:px-2 flex items-start justify-center max-md:flex-col ">
        {/* Left: Mood Selection */}
        <div className="w-1/3 p-5 h-full max-md:w-full max-md:h-[20%] z-3 ">
          <div className="p-3 w-[60%] max-md:w-full bg-[#252525] h-fit duration-[0.85s] ease-[cubic-bezier(0.33,1,0.68,1)]   rounded-lg mt-10 flex flex-col ">
            <div
              className="flex w-full items-center justify-between text-white text-xl font-[500] cursor-pointer"
              onClick={() => setShowMoods((prev) => !prev)}
            >
              <h3 className=" ">
                Choose Your Mood
              </h3>
              <motion.div
                animate={{ rotate: showMoods ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <MdOutlineKeyboardArrowUp className=" rotate-x-180" />
              </motion.div>
            </div>

            <AnimatePresence>
              {showMoods && (
                <motion.div
                  className="flex flex-col mt-3 gap-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {MoodAndSongs.map((item, idx) => (
                    <motion.h3
                      onClick={() => setSelectedMood(item.mood)}
                      key={item.mood}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`text-white text-lg cursor-pointer px-2 py-1 rounded-md transition-all duration-200 `}
                    >
                      {item.mood}
                    </motion.h3>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Songs */}
        <div className="w-2/3 p-5 max-md:p-2 h-full max-md:w-full max-md:h-[80%] ">
          <div className="h-full p-4 max-md:p-0 overflow-y-auto">
            <div key={selectedMood || "default"}>
              {(
                MoodAndSongs.find((m) => m.mood === selectedMood) ||
                MoodAndSongs[0]
              ).songs.map((song, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                      ease: "easeOut",
                    }}
                  >
                    <MusicCard songdata={song} />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mood;

const Typo = () => {
  return (
    <div className="h-[45vh] max-md:h-[15vh]  w-full overflow-hidden  md:px-20 md:py-20 py-5  flex text-white  px-2   ">
      <div className="h-full w-full text-[7vw] max-md:text-[10vw] flex flex-col font-bold leading-none z-[2]  ">
        <h1>Your Mood</h1>
        <div className="flex items-end">
          <h2 className="text-lg max-md:text-sm opacity-70 font-medium ">
            (Pick a vibe <br /> We’ll play the music.)
          </h2>
          <h1 className="ml-30 max-md:ml-10">Your Music</h1>
        </div>
      </div>
    </div>
  );
};
