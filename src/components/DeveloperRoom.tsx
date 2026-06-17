'use client';

import React from 'react';
import { Float, ContactShadows, Box, Cylinder, Sphere } from '@react-three/drei';

const PrimitiveDeveloperRoom = () => {
  return (
    <group rotation={[0, -Math.PI * 0.1, 0]}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group position={[0, -0.5, 0]}>
          {/* Desk Surface */}
          <Box args={[4, 0.1, 2]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#1a1a1a" roughness={0.1} metalness={0.8} />
          </Box>

          {/* Laptop Base */}
          <Box args={[1, 0.05, 0.7]} position={[0, 0.08, 0.3]}>
            <meshStandardMaterial color="#333" />
          </Box>
          {/* Laptop Screen */}
          <Box args={[1, 0.7, 0.02]} position={[0, 0.4, 0]} rotation={[-0.2, 0, 0]}>
            <meshStandardMaterial color="#222" />
            {/* Screen Glow */}
            <meshBasicMaterial color="#0066ff" attach="material" />
          </Box>

          {/* Monitor Stand */}
          <Cylinder args={[0.05, 0.05, 0.5]} position={[0.8, 0.3, -0.5]}>
            <meshStandardMaterial color="#222" />
          </Cylinder>
          {/* Monitor Screen */}
          <Box args={[2, 1.2, 0.05]} position={[0.8, 0.9, -0.5]} rotation={[0, -0.3, 0]}>
            <meshStandardMaterial color="#111" />
            <meshBasicMaterial color="#111" attach="material" />
          </Box>

          {/* Decorative Sphere (Abstract Art) */}
          <Sphere args={[0.2, 32, 32]} position={[-1.2, 0.3, -0.2]}>
            <meshStandardMaterial color="#ff0066" emissive="#ff0066" emissiveIntensity={2} />
          </Sphere>

          {/* Coffee Cup */}
          <Cylinder args={[0.1, 0.08, 0.25]} position={[-0.8, 0.18, 0.5]}>
            <meshStandardMaterial color="#f0f0f0" />
          </Cylinder>
        </group>
      </Float>
      
      <ContactShadows position={[0, -1.4, 0]} opacity={0.4} scale={10} blur={2} far={4.5} />
    </group>
  );
};

export default PrimitiveDeveloperRoom;
