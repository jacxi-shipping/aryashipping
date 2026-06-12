"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, ContactShadows, SpotLight } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={[2, 0, 0]}>
        <torusKnotGeometry args={[1.5, 0.4, 256, 32]} />
        <meshPhysicalMaterial
          color="#00a3ff"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

function FloatingContainer() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[-2, 0.5, -2]}>
        <boxGeometry args={[3, 1.2, 1.2]} />
        <meshPhysicalMaterial
          color="#0a192f"
          metalness={0.6}
          roughness={0.2}
          envMapIntensity={0.5}
        />
        {/* Simple details */}
        <mesh position={[0, 0, 0.61]}>
            <planeGeometry args={[2.8, 1]} />
            <meshBasicMaterial color="#00a3ff" opacity={0.1} transparent />
        </mesh>
      </mesh>
    </Float>
  );
}

function CameraRig() {
  const { camera, pointer } = useThree();
  const vec = new THREE.Vector3();

  useFrame(() => {
    camera.position.lerp(vec.set(pointer.x * 2, pointer.y * 2, 8), 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Scene() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-screen w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <SpotLight
            position={[5, 5, 5]}
            angle={0.15}
            penumbra={1}
            intensity={2}
            color="#00a3ff"
            castShadow
          />

          <AbstractShape />
          <FloatingContainer />

          <ContactShadows
            position={[0, -2.5, 0]}
            opacity={0.4}
            scale={20}
            blur={2}
            far={4.5}
          />

          <CameraRig />
        </Suspense>
      </Canvas>
    </div>
  );
}
