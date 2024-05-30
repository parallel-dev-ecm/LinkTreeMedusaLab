import { useGSAP } from "@gsap/react";
import { Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import gsap from "gsap";
import { useGLTF } from "@react-three/drei";

type Props = {};

function TestCube({}: Props) {
  const boxRef = React.useRef<any>();
  const [isReady, setIsReady] = useState(false);

  const eyeKid = useGLTF(
    "medusa-link-tree/src/R3F/Components/TestCube/eyeball_kid/scene.gltf"
  );

  useFrame(() => {
    if (boxRef.current && !isReady) {
      setIsReady(true);
    }
  });

  useGSAP(() => {
    if (!isReady) {
      return;
    }
    gsap.fromTo(
      boxRef.current.scale,
      { x: 0, y: 0, z: 0 },
      { x: 1, y: 1, z: 1, duration: 1 }
    );
  }, [isReady]);

  return <></>;
}

export default TestCube;
