'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import DeveloperRoom from './DeveloperRoom';

const Workspace3D = ({ scroll }: { scroll?: any }) => {
  const groupRef = useRef<any>(null);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Get scroll offset from framer-motion (0 to 1)
    const offset = scroll ? scroll.get() : 0;

    let targetPosition: [number, number, number] = [0, -0.5, 0];
    let targetRotation: [number, number, number] = [0, 0, 0];

    // Page 1: Hero (Center View)
    if (offset < 0.125) {
      targetPosition = [0, -0.5, 0];
      targetRotation = [0, 0, 0];
    }
    // Page 2: About (Zoom into Laptop)
    else if (offset < 0.25) {
      const t = (offset - 0.125) / 0.125;
      targetPosition = [1.5, 0.2, 2.5]; 
      targetRotation = [0.2, 0.5, 0];
    }
    // Page 3: Skills (Side profile)
    else if (offset < 0.375) {
      targetPosition = [-2, 0, 1.5];
      targetRotation = [0.1, -0.8, 0];
    }
    // Page 4: Experience (Top down view)
    else if (offset < 0.5) {
      targetPosition = [0, 1.5, 3];
      targetRotation = [-0.5, 0, 0];
    }
    // Page 5+: Projects (Rotation)
    else {
      targetPosition = [0, -0.2, -1];
      targetRotation = [0, Math.PI * 2 * (offset - 0.5), 0];
    }

    // Smooth transition
    groupRef.current.position.x += (targetPosition[0] - groupRef.current.position.x) * delta * 2;
    groupRef.current.position.y += (targetPosition[1] - groupRef.current.position.y) * delta * 2;
    groupRef.current.position.z += (targetPosition[2] - groupRef.current.position.z) * delta * 2;
    
    groupRef.current.rotation.x += (targetRotation[0] - groupRef.current.rotation.x) * delta * 2;
    groupRef.current.rotation.y += (targetRotation[1] - groupRef.current.rotation.y) * delta * 2;
    groupRef.current.rotation.z += (targetRotation[2] - groupRef.current.rotation.z) * delta * 2;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Environment preset="city" />

      <group ref={groupRef}>
        <DeveloperRoom />
      </group>
    </>
  );
};

export default Workspace3D;
