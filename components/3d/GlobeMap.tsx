"use client";

import { useRef, useEffect, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

// We create a wrapper component for the ThreeGlobe instance
function GlobeInstance({ arcsData, pointsData, gData, theme }: any) {
  const groupRef = useRef<THREE.Group>(null);
  const globeRef = useRef<any>(null);

  useEffect(() => {
    // Only import three-globe on the client
    import('three-globe').then((ThreeGlobe) => {
      if (!groupRef.current) return;

      // Clean up previous instance if it exists
      if (globeRef.current) {
        groupRef.current.remove(globeRef.current);
      }

      const Globe = ThreeGlobe.default || ThreeGlobe;
      const globe = new Globe();
      globeRef.current = globe;

      const globeMaterial = new THREE.MeshPhongMaterial({
        color: theme === "light" ? "#f0f0f0" : "#0f172a",
        transparent: true,
        opacity: 0.9,
      });

      globe.globeMaterial(globeMaterial);

      globe
        .arcsData(arcsData)
        .arcColor("color")
        .arcDashLength(0.4)
        .arcDashGap(0.2)
        .arcDashAnimateTime(2000)
        .arcAltitudeAutoScale(0.3)
        .arcStroke(0.5);

      globe
        .pointsData(pointsData)
        .pointColor("color")
        .pointAltitude(0.01)
        .pointRadius("size");

      // Use a custom property for color if hexBinPointColor is not supported
      globe
        .hexBinPointsData(gData)
        .hexBinPointWeight("size")
        .hexBinResolution(4)
        .hexMargin(0.2);

      groupRef.current.add(globe);
    });

    return () => {
      if (groupRef.current && globeRef.current) {
        groupRef.current.remove(globeRef.current);
      }
    };
  }, [theme, arcsData, pointsData, gData]);

  // Slowly rotate the globe
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
  });

  return <group ref={groupRef} scale={[0.01, 0.01, 0.01]} position={[0, -0.5, 0]} />;
}

// Coordinates
const LOCATIONS = [
  { lat: 39.8283, lng: -98.5795, name: "USA", size: 0.1, color: "#00a3ff" },
  { lat: 36.8, lng: 34.6167, name: "Mersin", size: 0.1, color: "#00a3ff" },
  { lat: 33.9391, lng: 67.7099, name: "Afghanistan", size: 0.1, color: "#00a3ff" },
];

const ARCS = [
  {
    startLat: 39.8283,
    startLng: -98.5795,
    endLat: 36.8,
    endLng: 34.6167,
    color: "#00a3ff",
  },
  {
    startLat: 36.8,
    startLng: 34.6167,
    endLat: 33.9391,
    endLng: 67.7099,
    color: "#00a3ff",
  },
];

export default function GlobeMap() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const arcsData = useMemo(() => ARCS.map(arc => ({
    startLat: arc.startLat,
    startLng: arc.startLng,
    endLat: arc.endLat,
    endLng: arc.endLng,
    color: arc.color,
  })), []);

  const pointsData = useMemo(() => LOCATIONS.map(loc => ({
    lat: loc.lat,
    lng: loc.lng,
    size: loc.size,
    color: loc.color,
  })), []);

  const gData = useMemo(() => {
    const N = 300;
    return [...Array(N).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      size: Math.random() * 0.5,
    }));
  }, []);

  if (!mounted) return <div className="h-full w-full" />;

  return (
    <div className="h-full w-full bg-transparent">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} />
        <Environment preset="city" />

        <GlobeInstance
          arcsData={arcsData}
          pointsData={pointsData}
          gData={gData}
          theme={theme}
        />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={1.5}
          maxDistance={5}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
