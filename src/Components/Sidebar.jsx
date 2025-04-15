import { GoPlus } from "react-icons/go";

const Sidebar = ({ selectedTexture, closeSidebar }) => {
  return (
    <div
      className="sidebar text-white font-['Poppins'] fixed top-0 right-0 h-screen bg-[#00000031] backdrop-blur-lg overflow-hidden flex items-center justify-center z-50"
      style={{ width: 0 }}
      onClick={(e) => e.stopPropagation()} // 🔒 Prevent raycast
    >
      <button
        aria-label="Close sidebar"
        className="absolute top-5 p-3 right-[5%] z-50"
        onClick={closeSidebar}
      >
        close
      </button>
      <div className="h-[80%] w-[90%] flex flex-col items-center justify-between">
        <div className="w-full h-[60%] rounded-md overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={selectedTexture?.image}
            alt="Preview"
          />
        </div>
        <div className="w-full h-[30%] border-t-[1px] py-5 border-[#9b9b9b5b] flex max-sm:flex-col items-start justify-between max-sm:gap-5">
          <div className="w-[40%] max-sm:w-full  h-full flex sm:flex-col justify-between ">
            <div className="w-full flex leading-tight flex-col gap-1">
              <h3 className="max-sm:text-sm text-lg  leading-none uppercase font-semibold">
                {selectedTexture?.song}
              </h3>
              <h3 className="max-sm:text-xs text-base leading-none">
                {selectedTexture?.artist}
              </h3>
            </div>
            <div className="w-full text-md pb-4 flex items-center max-sm:justify-end gap-2">
              <GoPlus /> Add to playlist
            </div>
          </div>
          <p className={`w-[60%] max-sm:w-full leading-[16px] text-xs `}>
            {selectedTexture?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
