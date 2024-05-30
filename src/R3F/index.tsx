import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
