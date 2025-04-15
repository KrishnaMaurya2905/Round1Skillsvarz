import { playListData } from "../utils/data";
import MusicCard from "../Components/MusicCard";
import Paragraph from "../Components/Paragraph";
import { BsArrow90DegRight } from "react-icons/bs";
import Button from "../Components/Button";
import PreFooter from "../Components/PreFooter";
import Footer from "../Components/Footer";

const PlaylistSection = ({ item, idx }) => {
  return (
    <div
      className={` w-full px-[5%] py-10 max-xl:px-[3%] ${
        idx % 2 === 1 && "flex-row-reverse"
      } flex max-xl:flex-col gap-5 text-white `}
    >
      <div className="h-full  max-xl:h-[1/2] max-xl:w-full w-1/2 border-t-1 border-white/70 overflow-hidden">
        <div className="w-full py-4  flex flex-col gap-5">
          <h1 className="text-6xl uppercase font-['Primary'] font-bold md:py-5 ">
            {item.title}
          </h1>
          <Paragraph
            phrases={item.description}
            className={` max-lg:text-sm  text-lg font-['Primary'] opacity-70 `}
          />
        </div>
        <div className="w-full md:pt-5  ">
          {item.songs.map((song, index) => (
            <MusicCard key={index} songdata={song} index={index} />
          ))}
        </div>
      </div>
      <div className="h-[75vh]  max-sm:h-[40vh] w-1/2 max-xl:w-full max-xl:h-[40%] z-[3]">
        <img
          className="h-full w-full object-cover  "
          src={item.BannerImg}
          alt="playlist visual"
        />
      </div>
    </div>
  );
};

const Playlist = () => {
  return (
    <div className="h-full w-full bg-black">
      <div className="h-[80vh] overflow-hidden w-full relative   ">
        <img
          className="h-full w-full object-cover"
          src="https://res.cloudinary.com/dqzci9flc/image/upload/v1744731240/1161021-3840x2160-desktop-4k-concert-background-photo_e0smm3.webp"
          alt=""
        />
        <div className="absolute bottom-0 left-0 blur-div w-full h-[30vh] bg-gradient-to-t from-[#000000] to-transparent  " />
      </div>
      <Typo />
      {playListData.map((item, idx) => (
        <PlaylistSection key={idx} item={item} idx={idx} />
      ))}
      <PreFooter />
      <Footer />
    </div>
  );
};

export default Playlist;

const Typo = () => {
  return (
    <div className="h-[50vh] max-md:h-[32vh]  w-full overflow-hidden  md:px-20 max-md:flex-col flex text-white  px-2 ">
      <div className="h-full w-1/2 max-md:w-full text-[8vw] max-md:text-[14vw] flex flex-col font-bold leading-none z-[2]  ">
        <h1> Featured</h1>
        <div className="flex items-end">
          <h2 className="text-lg max-md:text-sm opacity-70 font-medium ">
            (Discover <br /> your vibe)
          </h2>
          <h1 className="ml-30 max-md:ml-10">Playlist</h1>
        </div>
      </div>
      <div className="h-full w-1/2  max-md:w-full md:p-20 max-md:p-5 flex flex-col justify-end gap-5 ">
        <p className="text-justify   font-light  text-xl max-md:text-sm leading-tight opacity-80  ">
          Resonance Music curates playlists that blend mood, genre, and emotion
          into sonic journeys. From chill lo-fi evenings to high-energy
          workouts, our playlists are made to elevate every moment. Tune in and
          find your rhythm.
        </p>
        <div className="flex gap-1">
          <Button className="bg-white/10 border-white/15 rounded-sm text-white p-3 max-md:text-sm text-xl rotate-x-180">
            <BsArrow90DegRight />
          </Button>
          <Button className="bg-white/10 border-white/15 rounded-sm text-white p-3 max-md:text-sm text-xl leading-none">
            <h2>Explore Track</h2>
          </Button>
        </div>
      </div>
    </div>
  );
};
