'use client';

import React from 'react';
import { Box, Cylinder } from '@react-three/drei';

const DeskSetup = (props: any) => {
  return (
    <group {...props}>
      {/* Desk Top */}
      <Box args={[6, 0.2, 3]} position={[0, 0, 0]} receiveShadow castShadow>
        <meshStandardMaterial color="#4a3b32" /> {/* Wood color */}
      </Box>

      {/* Desk Legs */}
      <Cylinder args={[0.1, 0.1, 3]} position={[-2.8, -1.5, -1.3]} receiveShadow castShadow>
        <meshStandardMaterial color="#222" />
      </Cylinder>
      <Cylinder args={[0.1, 0.1, 3]} position={[2.8, -1.5, -1.3]} receiveShadow castShadow>
        <meshStandardMaterial color="#222" />
      </Cylinder>
      <Cylinder args={[0.1, 0.1, 3]} position={[-2.8, -1.5, 1.3]} receiveShadow castShadow>
        <meshStandardMaterial color="#222" />
      </Cylinder>
      <Cylinder args={[0.1, 0.1, 3]} position={[2.8, -1.5, 1.3]} receiveShadow castShadow>
        <meshStandardMaterial color="#222" />
      </Cylinder>

      {/* Main Monitor */}
      <group position={[0, 0.1, -0.5]}>
        {/* Base */}
        <Box args={[1, 0.05, 0.8]} position={[0, 0, 0]} receiveShadow castShadow>
           <meshStandardMaterial color="#333" />
        </Box>
        {/* Stand */}
        <Box args={[0.1, 0.8, 0.1]} position={[0, 0.4, -0.2]} receiveShadow castShadow>
           <meshStandardMaterial color="#333" />
        </Box>
        {/* Screen */}
        <Box args={[3.5, 2, 0.1]} position={[0, 0.9, -0.1]} receiveShadow castShadow>
           <meshStandardMaterial color="#111" />
        </Box>
        {/* Screen Glow (The display) */}
        <Box args={[3.4, 1.9, 0.01]} position={[0, 0.9, -0.04]} castShadow={false}>
           <meshBasicMaterial color="#0a2a4a" />
        </Box>
      </group>

      {/* Keyboard */}
      <Box args={[1.5, 0.05, 0.5]} position={[0, 0.125, 0.6]} receiveShadow castShadow>
        <meshStandardMaterial color="#ccc" />
      </Box>

      {/* Mouse */}
      <Box args={[0.2, 0.05, 0.3]} position={[1.2, 0.125, 0.6]} receiveShadow castShadow>
        <meshStandardMaterial color="#fff" />
      </Box>

      {/* Coffee Mug */}
      <Cylinder args={[0.15, 0.15, 0.4]} position={[-1.5, 0.3, 0.5]} receiveShadow castShadow>
        <meshStandardMaterial color="#ff5555" />
      </Cylinder>

      {/* Notebook/Papers */}
      <Box args={[0.8, 0.02, 1.1]} position={[-2, 0.11, 0.2]} rotation={[0, 0.2, 0]} receiveShadow castShadow>
        <meshStandardMaterial color="#f0f0f0" />
      </Box>
    </group>
  );
};

export default DeskSetup;