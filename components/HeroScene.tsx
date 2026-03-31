"use client";
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars, Torus } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={sphereRef} args={[1.4, 64, 64]}>
        <MeshDistortMaterial
          color="#00f5d4"
          attach="material"
          distort={0.45}
          speed={2.5}
          roughness={0.1}
          metalness={0.8}
          wireframe={false}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </Float>
  );
}

function OrbitRing({ radius, color, speed }: { radius: number; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * speed;
      ref.current.rotation.z = state.clock.elapsedTime * speed * 0.6;
    }
  });
  return (
    <Torus ref={ref} args={[radius, 0.015, 16, 100]}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.6} />
    </Torus>
  );
}

function FloatingParticles() {
  const count = 80;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
  }

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#00f5d4" size={0.04} transparent opacity={0.5} />
    </points>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full absolute inset-0" style={{ zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#00f5d4" />
          <pointLight position={[-5, -5, -5]} intensity={1} color="#7b2fff" />
          <pointLight position={[0, 5, -5]} intensity={0.5} color="#f59e0b" />

          <Stars radius={50} depth={50} count={2000} factor={3} saturation={0} fade speed={1} />
          <FloatingParticles />
          <AnimatedSphere />
          <OrbitRing radius={2.2} color="#7b2fff" speed={0.3} />
          <OrbitRing radius={2.8} color="#00f5d4" speed={0.2} />
          <OrbitRing radius={3.4} color="#f59e0b" speed={0.15} />
        </Suspense>
      </Canvas>
    </div>
  );
}
