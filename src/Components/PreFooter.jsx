// import React from "react";
// import BorderAnimation from "./BorderAnimation";
// import Button from "./Button";
// import { BsArrow90DegRight } from "react-icons/bs";
// import { BsArrowUpRight } from "react-icons/bs";

// const PreFooter = () => {
//   return (
//     <div className="h-[35vh] max-md:h-[30vh] w-full bg-black text-white py-10 px-20 max-md:px-2  text-[1.5rem]  ">
//       <div className="h-[85%] max-md:h-[90%] w-full flex justify-between items-center max-md:text-sm ">
//         <div className="flex flex-col gap-5   ">
//           <h2 className="z-[2]">Terms & conditions</h2>
//           <h2 className="z-[2]">Return & Exchanges</h2>
//           <h2 className="z-[2]">Privacy policy</h2>
//         </div>
//         <div className="flex flex-col gap-5      ">
//           <h2 className="z-[2]">Instagram</h2>
//           <h2 className="z-[2]">Facebook</h2>
//           <h2 className="z-[2]">Twitter</h2>
//         </div>
//         <div className="flex flex-col gap-5  max-md:gap-2   ">
//           <div className="flex gap-3">
//             <Button className="bg-white/10 border-white/15 rounded-sm text-white p-3 text-xl max-md:text-sm ">
//             <a href="https://www.instagram.com/">
//             <BsArrowUpRight />
//             </a>
//             </Button>
//             <div className="flex gap-1 max-sm:hidden">
//               <Button
//                 navigate={"/explore"}
//                 className="bg-white/10 border-white/15 rounded-sm text-white p-3  max-md:text-sm text-xl rotate-x-180"
//               >
//                 <BsArrow90DegRight />
//               </Button>
//               <Button className="bg-white/10 border-white/15 rounded-sm text-white p-3  max-md:text-sm text-xl leading-none ">
//                 <h2> CONTACT US</h2>
//               </Button>
//             </div>
//           </div>
//           <Button className="bg-white/10 border-white/15 rounded-sm text-white p-3 text-xl max-md:text-sm ">
//           <a href="https://www.facebook.com/">
//             <BsArrowUpRight />
//             </a>
//           </Button>
//           <Button className="bg-white/10 border-white/15 rounded-sm text-white p-3 text-xl max-md:text-sm ">
//             <a href="https://x.com/">
//             <BsArrowUpRight />
//             </a>
//           </Button>
//         </div>
//       </div>
//       <div className="h-[15%] max-md:h-[10%] w-full flex justify-between items-end">
//         <BorderAnimation />
//       </div>
//     </div>
//   );
// };

// export default PreFooter;


import React from "react";
import BorderAnimation from "./BorderAnimation";
import Button from "./Button";
import { BsArrow90DegRight, BsArrowUpRight } from "react-icons/bs";

// Reusable link list
const LinkColumn = ({ links = [] }) => (
<div className="flex flex-col gap-5  max-md:gap-6">
    {links.map((text, index) => (
      <h2 key={index} className="z-[2]">
        {text}
      </h2>
    ))}
  </div>
);

// Reusable social button
const SocialButton = ({ href }) => (
  <Button className="bg-white/10 border-white/15 rounded-sm text-white p-3 text-xl max-md:text-sm">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <BsArrowUpRight />
    </a>
  </Button>
);

const PreFooter = () => {
  return (
    <div className="h-[35vh] max-md:h-[30vh] w-full bg-black text-white py-10 px-20 max-md:px-2 text-[1.5rem]">
      <div className="h-[85%] max-md:h-[90%] w-full flex justify-between items-center max-md:text-sm">
        <LinkColumn links={["Terms & conditions", "Return & Exchanges", "Privacy policy"]} />
        <LinkColumn links={["Instagram", "Facebook", "Twitter"]} />
        <div className="flex flex-col gap-5 max-md:gap-2">
          <div className="flex gap-3">
            <SocialButton href="https://www.instagram.com/" />
            <div className="flex gap-1 max-sm:hidden">
              <Button
                className="bg-white/10 border-white/15 rounded-sm text-white p-3 max-md:text-sm text-xl rotate-x-180"
              >
                <BsArrow90DegRight />
              </Button>
              <Button className="bg-white/10 border-white/15 rounded-sm text-white p-3 max-md:text-sm text-xl leading-none">
                <h2>CONTACT US</h2>
              </Button>
            </div>
          </div>
          <SocialButton href="https://www.facebook.com/" />
          <SocialButton href="https://x.com/" />
        </div>
      </div>
      <div className="h-[15%] max-md:h-[10%] w-full flex justify-between items-end">
        <BorderAnimation />
      </div>
    </div>
  );
};

export default PreFooter;
