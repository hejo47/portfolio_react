import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import classes from "./Three01.module.css";
function MyRotatingBox() {
  const myMesh = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.x = a;
  });

  return (
    <mesh ref={myMesh}>
      <boxBufferGeometry />
      <meshPhongMaterial color='royalblue' />
    </mesh>
  );
}
export function Three01() {
  return (
    <div id={classes.canvasContainer}>
      <Canvas>
        <MyRotatingBox />
        <ambientLight intensity={0.1} />
        <directionalLight />
      </Canvas>
    </div>
  );
}
