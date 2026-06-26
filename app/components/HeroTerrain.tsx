'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const TERRAIN_SIZE = 40;

function VoxelWave() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Initialize the grid of cubes
  const particles = useMemo(() => {
    const temp = [];
    for (let x = 0; x < TERRAIN_SIZE; x++) {
      for (let z = 0; z < TERRAIN_SIZE; z++) {
        temp.push({ x: x - TERRAIN_SIZE / 2, z: z - TERRAIN_SIZE / 2 });
      }
    }
    return temp;
  }, []);

  // Animate the cubes natively
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    particles.forEach((particle, i) => {
      const { x, z } = particle;
      // The wave math
      const y = Math.sin((x / 4) + time) + Math.cos((z / 4) + time);
      
      dummy.position.set(x, y, z - 10); // Offset Z to push it back
      dummy.updateMatrix();
      meshRef.current?.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current!.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, TERRAIN_SIZE * TERRAIN_SIZE]}>
      <boxGeometry args={[0.9, 0.9, 0.9]} />
      {/* Strict Color Palette Integration */}
      <meshStandardMaterial color="#114C5A" wireframe={false} roughness={0.8} />
    </instancedMesh>
  );
}

export default function HeroTerrain() {
  return (
    <div className="absolute inset-0 z-0 opacity-50">
      <Canvas camera={{ position: [0, 5, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#D9E8E2" />
        <pointLight position={[-10, -10, -10]} intensity={2} color="#FFC801" />
        <VoxelWave />
      </Canvas>
      {/* Gradient overlay to blend the 3D into the dark background */}
      <div className="absolute inset-0 bg-gradient-to-t from-oceanic-noir via-transparent to-oceanic-noir"></div>
    </div>
  );
}