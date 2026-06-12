"use client";

import { useRef, useEffect, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, SpotLight } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";
import * as topojson from "topojson-client";

// We create a wrapper component for the ThreeGlobe instance
function GlobeInstance({ arcsData, pointsData, gData, polygonsData, theme }: any) {
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

      const globeMaterial = new THREE.MeshPhysicalMaterial({
        color: theme === "light" ? "#f0f0f0" : "#0a192f",
        metalness: 0.6,
        roughness: 0.2,
        envMapIntensity: 0.5,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
      });

      globe.globeMaterial(globeMaterial);

      if (polygonsData && polygonsData.length > 0) {
        globe
          .polygonsData(polygonsData)
          .polygonCapColor(() => theme === "light" ? "#d0d0d0" : "#1a2942")
          .polygonSideColor(() => theme === "light" ? "#c0c0c0" : "#0a192f")
          .polygonStrokeColor(() => theme === "light" ? "#a0a0a0" : "#2a3b5a")
          .polygonAltitude(0.01);
      }

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
  }, [theme, arcsData, pointsData, gData, polygonsData]);

  // Slowly rotate the globe
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
  });

  return <group ref={groupRef} scale={[0.01, 0.01, 0.01]} position={[0, -0.5, 0]} />;
}

function CameraRig() {
  const { camera, pointer } = useThree();
  const vec = new THREE.Vector3();

  useFrame(() => {
    camera.position.lerp(vec.set(pointer.x * 0.5, pointer.y * 0.5, 3.5), 0.05);
    camera.lookAt(0, -0.5, 0);
  });

  return null;
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
  const [countries, setCountries] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);

    // Load countries data
    fetch('/countries.json')
      .then(res => res.json())
      .then(topoData => {
        // Convert topojson to geojson
        const geoData = topojson.feature(topoData, topoData.objects.countries) as any;
        setCountries(geoData.features);
      })
      .catch(err => console.error("Failed to load countries map data", err));
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

        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} />
        <Environment preset="city" />
        <SpotLight
          position={[5, 5, 5]}
          angle={0.15}
          penumbra={1}
          intensity={2}
          color="#00a3ff"
          castShadow
        />


        <GlobeInstance
          arcsData={arcsData}
          pointsData={pointsData}
          gData={gData}
          polygonsData={countries}
          theme={theme}
        />

        <CameraRig />
      </Canvas>
    </div>
  );
}
