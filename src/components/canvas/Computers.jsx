import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer=useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
    <hemisphereLight  intensity={1.65}
    groundColor="black"/>

    <pointLight intensity={4}/>

    <spotLight
    position={[-20,50,10]}
    angle={0.12}
    penumbra={1}
    intensity={1.9}
    castShadows
    shadow-mapSize={1024} />

    <primitive object={computer.scene}
    scale={isMobile ? 0.6 : 0.75}
    position={isMobile ? [-5, -3, -2.2] : [-1, -3.25, -1.5]}
    rotation={[-0.01,-0.9,-0.1]}/>
    </mesh>
  )
}

const ComputersCanvas=()=>{

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
   
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return(
    <Canvas frameloop="demand"
    shadows
    camera={{position:[16,
      22,5], fov:20}}
    gl={{preserveDrawingBuffer:true}}
    >

    <Suspense fallback={<CanvasLoader />}>
    <OrbitControls enableZoom={false}
    maxPolarAngle={Math.PI/2}
    minPolarAngle={Math.PI/2} />

    <Computers isMobile={isMobile} />
    </Suspense>

    <Preload all />

    
    </Canvas>
  )
}

export default ComputersCanvas