import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, Torus, Environment, PerspectiveCamera, Icosahedron } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';
import * as THREE from 'three';

const GlassShape = ({ position, scale, speed, type, color }: any) => {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * (0.2 * speed);
      meshRef.current.rotation.y = state.clock.getElapsedTime() * (0.1 * speed);
    }
  });

  const materialProps = {
    color: color,
    thickness: 1.5,
    roughness: 0.1,
    transmission: 0.95, // Glass effect
    ior: 1.5, // Index of refraction
    chromaticAberration: 0.04, // Rainbow edges
    backside: true,
  };

  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={1.5}>
      {type === 'sphere' && (
        <Sphere args={[1, 64, 64]} position={position} scale={scale} ref={meshRef}>
           <meshPhysicalMaterial {...materialProps} />
        </Sphere>
      )}
      {type === 'torus' && (
        <Torus args={[1, 0.4, 32, 64]} position={position} scale={scale} ref={meshRef}>
           <meshPhysicalMaterial {...materialProps} />
        </Torus>
      )}
      {type === 'gem' && (
        <Icosahedron args={[1, 0]} position={position} scale={scale} ref={meshRef}>
           <meshPhysicalMaterial {...materialProps} flatShading roughness={0.2} />
        </Icosahedron>
      )}
    </Float>
  );
};

const Scene: React.FC = () => {
  const { theme } = useTheme();
  
  // Lighting colors based on theme
  const accentColor = theme === 'dark' ? '#2A00FF' : '#A0A0A0'; 

  return (
    <div className="absolute inset-0 z-0 h-screen w-full pointer-events-none">
      <Canvas gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <Environment preset={theme === 'dark' ? "city" : "studio"} />
        
        {/* Lights for dramatic reflections */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color={theme === 'dark' ? "#D4FF00" : "#ffffff"} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color={theme === 'dark' ? "#2A00FF" : "#ffffff"} />

        {/* Centerpiece */}
        <GlassShape 
          type="torus" 
          position={[3, 0, -2]} 
          scale={2.5} 
          speed={1} 
          color="#ffffff"
        />
        
        {/* Floating details */}
        <GlassShape 
          type="sphere" 
          position={[-4, 2, -5]} 
          scale={1.5} 
          speed={1.5} 
          color={accentColor} 
        />
        
         <GlassShape 
          type="gem" 
          position={[-2, -3, 0]} 
          scale={1} 
          speed={0.8} 
          color={theme === 'dark' ? "#333" : "#eee"} 
        />
        
         {/* Background depth element */}
        <GlassShape 
          type="sphere" 
          position={[6, 4, -10]} 
          scale={4} 
          speed={0.5} 
          color={theme === 'dark' ? "#000" : "#fff"} 
        />

      </Canvas>
    </div>
  );
};

export default Scene;