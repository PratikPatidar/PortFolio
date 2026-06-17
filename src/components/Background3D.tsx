'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, MeshDistortMaterial, TorusKnot } from '@react-three/drei';

const AnimatedShape = () => {
  const meshRef = useRef<any>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <TorusKnot args={[1.5, 0.4, 128, 32]} ref={meshRef} position={[2, 0, -2]}>
        <MeshDistortMaterial
          color="#1e3a8a" // Deep blue
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </TorusKnot>
      <TorusKnot args={[1, 0.2, 64, 16]} position={[-3, 2, -4]}>
        <MeshDistortMaterial
          color="#3b82f6" 
          distort={0.6}
          speed={1.5}
          roughness={0.4}
          metalness={0.6}
          transparent
          opacity={0.3}
        />
      </TorusKnot>
    </Float>
  );
};

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-[0] pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <AnimatedShape />
      </Canvas>
    </div>
  );
}
