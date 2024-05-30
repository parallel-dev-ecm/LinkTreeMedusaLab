import {
  Box,
  OrbitControls,
  PerspectiveCamera,
  Sphere,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TestCube from "./Components/TestCube";
gsap.registerPlugin(useGSAP);

type Props = {};

function MainScene({}: Props) {
  return (
    <Canvas>
      <ambientLight intensity={0.5} color={[1, 0, 0]} />

      <OrbitControls />
    </Canvas>
  );
}

export default MainScene;
