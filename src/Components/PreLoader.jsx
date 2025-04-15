import React, { useEffect, useRef, memo } from "react";
import gsap from "gsap";

const LetterColumn = memo(({ className, letters }) => (
  <div className={`h-full w-[10%] relative overflow-hidden ${className}`}>
    <div
      className={`h-fit w-full tracking-tighter leading-none flex flex-col items-center justify-center absolute ${
        className.includes("c1") ? "bottom-0" : ""
      }`}
    >
      {letters.map((letter, index) => (
        <h4 key={index} className="text-[4vw] max-md:text-[8vw]">
          {letter}
        </h4>
      ))}
    </div>
  </div>
));

const Preloader = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const b1Elements = container.querySelectorAll(".b1 h4");
    const c1Elements = container.querySelectorAll(".c1 h4");

    const timeline = gsap.timeline();

    timeline
      .to(b1Elements, { y: "-300%", duration: 3, delay: 0.5 })
      .to(c1Elements, { y: "300%", duration: 3 }, "<")
      .to([b1Elements, c1Elements], { opacity: 0, duration: 0.6 })
      .to(".loader", { height: "0vh", duration: 1, delay: 0.5 })
      .set(".loader", { display: "none" });
  }, []);

  const lettersData = [
    { className: "b1", letters: ["R", "R", "R", "R", "R", "R"] },
    { className: "c1", letters: ["E", "E", "E", "E", "E", "E"] },
    { className: "b1", letters: ["S", "S", "S", "S", "S", "S"] },
    { className: "c1", letters: ["O", "O", "O", "O", "O", "O"] },
    { className: "b1", letters: ["N", "N", "N", "N", "N", "N"] },
    { className: "c1", letters: ["A", "A", "A", "A", "A", "A"] },
    { className: "b1", letters: ["N", "N", "N", "N", "N", "N"] },
    { className: "c1", letters: ["C", "C", "C", "C", "C", "C"] },
    { className: "b1", letters: ["E", "E", "E", "E", "E", "E"] },
  ]

  return (
    <div className="h-screen loader overflow-hidden fixed top-0 z-[20] bg-black w-full flex justify-center items-center font-['Decorative']">
      <div
        className="h-[4vw] max-md:h-[8vw] w-[40%] max-md:w-[75%] flex text-white justify-center items-center font-['Decorative']"
        ref={containerRef}
      >
        {lettersData.map((item, index) => (
          <LetterColumn
            key={index}
            className={item.className}
            letters={item.letters}
          />
        ))}
      </div>
    </div>
  );
};

export default Preloader;
