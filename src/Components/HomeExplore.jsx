import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
// import {
//   EffectComposer,
//   ChromaticAberration,
//   Vignette,
// } from "@react-three/postprocessing";
import BendingPlane from "./BendingPlane";
import useResponsiveRadius from "../utils/useResponsiveRadius";
import Paragraph from "./Paragraph";
import Button from "./Button";
import { BsArrow90DegRight } from "react-icons/bs";

// Group of planes controlled by scroll and mouse
function ScrollControlledGroup({ isVisible, containerRef }) {
  const groupRef = useRef();
  const targetRotation = useRef(0);
  const targetYPosition = useRef(0);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const radius = useResponsiveRadius();
  const totalPlanes = radius > 4 ? 7 : 6;
  const heightGap = 1.3;
  const texturesLayer1 = useLoader(THREE.TextureLoader, [
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744717452/maxresdefault_8_vxr05m.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744704022/1280-x-640-1989-TV_t20eiz.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744717448/maxresdefault_14_p8ie2n.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744717448/hq720_1_bsn2cp.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744703683/wavy_w9di5a.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744703683/maxresdefault_1_aypqtk.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744717447/maxresdefault_20_hqkpop.webp",
  ]);

  const texturesLayer2 = useLoader(THREE.TextureLoader, [
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744704019/BARBIE_Character_DUA_InstaVert_1638x2048_DOM_vpw9q4.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744717453/maxresdefault_12_woihou.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744703683/maxresdefault_2_pfkacq.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744717449/maxresdefault_17_hglsba.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744703685/weeknd-starboy-7a72437c-b36a-439c-b68b-2f1a30b158c4_d6sdru.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744717445/maxresdefault_25_p5oqd0.webp",
    "https://res.cloudinary.com/dqzci9flc/image/upload/v1744717446/maxresdefault_24_q7o3fj.webp",
  ]);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      targetRotation.current = (scrollTop / scrollHeight) * (Math.PI * 2);
      targetYPosition.current = (scrollTop / scrollHeight) * 3.5;
    };

    const handleMouseMove = (event) => {
      const bounds = containerRef.current.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;

      mouseX.current = (x / bounds.width - 0.5) * 2;
      mouseY.current = (y / bounds.height - 0.5) * 2;
    };

    window.addEventListener("scroll", handleScroll);
    containerRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      containerRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isVisible, containerRef]);

  useFrame(() => {
    if (groupRef.current && isVisible) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotation.current + mouseX.current * 0.2,
        0.075
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouseY.current * 0.1,
        0.05
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        targetYPosition.current,
        0.08
      );
    }
  });

  const layers = [
    { yOffset: -2.5, textures: texturesLayer1 },
    { yOffset: -4.5, textures: texturesLayer2 },
  ];

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {layers.map(({ yOffset, textures }, layerIdx) =>
        Array.from({ length: totalPlanes }).map((_, index) => {
          const angle = (index / totalPlanes) * Math.PI * 2;
          const textureIndex = index % textures.length;

          return (
            <BendingPlane
              key={`${layerIdx}-${index}`}
              position={[
                Math.sin(angle) * radius,
                yOffset * heightGap,
                Math.cos(angle) * radius,
              ]}
              rotation={[0, angle, 0]}
              texture={textures[textureIndex]}
              radius={radius}
            />
          );
        })
      )}
    </group>
  );
}

export default function HomeExplore() {
  const homeRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const radius = useResponsiveRadius();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    if (homeRef.current) observer.observe(homeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={homeRef}
      id="home-explore"
      className="relative w-full flex items-center justify-center h-screen max-md:h-[70vh]"
    >
      <div className="absolute top-10 max-md:top-5 z-[1] text-white flex flex-col justify-center items-center gap-4">
        <Paragraph
          phrases={[
            "Where beats breathe",
            "and stories begin. Explore tracks.",
            "Know the artists.",
          ]}
          className="text-[3.5vw] max-md:text-[7vw] text-center font-bold font-['Secondary'] leading-[4vw] max-md:leading-[8vw]"
        />
        <Button
          navigate={"/explore"}
          className="bg-white/10 border-white/15 rounded-sm text-white p-3 text-xl rotate-x-180"
        >
          <BsArrow90DegRight />
        </Button>
      </div>
      <Canvas
        style={{
          width: "96%",
          height: "100%",
          overflow: "hidden",
          backgroundColor: "black",
          borderRadius: "12px",
        }}
        camera={{ position: [0, -0.5, 10] }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <ScrollControlledGroup isVisible={isVisible} containerRef={homeRef} />
        {/* {radius > 5.1 && (
          <EffectComposer>
            <ChromaticAberration offset={[0.001, 0.002]} />
            <Vignette offset={0.4} darkness={1.3} eskil={false} />
          </EffectComposer>
        )} */}
      </Canvas>
    </div>
  );
}
