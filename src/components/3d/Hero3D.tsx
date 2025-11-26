"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Stars, useTexture } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function Rig() {
    useFrame((state) => {
        state.camera.position.lerp(
            new THREE.Vector3(-state.pointer.x * 2, -state.pointer.y * 2, 10),
            0.05
        );
        state.camera.lookAt(0, 0, 0);
    });
    return null;
}

function TechShape({ position, color }: { position: [number, number, number]; color: string }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} position={position}>
                <icosahedronGeometry args={[1, 0]} />
                <meshStandardMaterial color={color} wireframe />
            </mesh>
        </Float>
    );
}



export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <Rig />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <TechShape position={[-4, 2, -2]} color="#00f0ff" />
                <TechShape position={[4, -2, -3]} color="#f43f5e" />
                <TechShape position={[-3, -3, 0]} color="#7000ff" />
                <TechShape position={[3, 3, -1]} color="#00f0ff" />


            </Canvas>
        </div>
    );
}
