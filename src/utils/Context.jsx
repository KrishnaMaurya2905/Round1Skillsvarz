
import React, { createContext, useState } from "react";

export const SongContext = createContext();

const Context = (props) => {
  const [Song, setSong] = useState({
    songName: "The Weeknd & Daft Punk - Starboy",
    duration: "4.33",
    songImg: "/the-weeknd-abel-tesfaye.gif",
    song: "https://res.cloudinary.com/dqzci9flc/video/upload/v1744723377/The_Weeknd_-_Starboy_ft._Daft_Punk_Official_Video_le6pin.mp3",
  });

  const [rotated, setRotated] = useState(false);
  const [progress, setProgress] = useState(0); // ✅ Add this for live duration

  return (
    <SongContext.Provider
      value={{
        Song,
        setSong,
        rotated,
        setRotated,
        progress,      // ✅ Make available globally
        setProgress,   // ✅ Make setter available
      }}
    >
      {props.children}
    </SongContext.Provider>
  );
};

export default Context;
