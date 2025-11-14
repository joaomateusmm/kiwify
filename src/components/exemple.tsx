"use client";

import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import type { SpringOptions } from "motion/react";
import { useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";
import * as THREE from "three";

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 60,
  mass: 2,
};

function KiwifyModel({
  rotateX,
  rotateY,
}: {
  rotateX: ReturnType<typeof useSpring>;
  rotateY: ReturnType<typeof useSpring>;
}) {
  const gltf = useGLTF("/models/scene.gltf");
  const groupRef = useRef<THREE.Group>(null);
  const materializedRef = useRef(false);

  // Percorre todos os meshes e aplica cor verde - APENAS UMA VEZ
  if (!materializedRef.current) {
    gltf.scene.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;

        // Verificar se é um plano grande (provavelmente o background)
        if (mesh.geometry) {
          const geometry = mesh.geometry;
          geometry.computeBoundingBox();
          const boundingBox = geometry.boundingBox;

          if (boundingBox) {
            const size = new THREE.Vector3();
            boundingBox.getSize(size);

            // Se for muito grande e plano, é provavelmente o background
            const isLargeAndFlat =
              (size.x > 2 && size.z < 0.1) || (size.z > 2 && size.x < 0.1);

            if (isLargeAndFlat) {
              mesh.visible = false; // Esconde o background
              return;
            }
          }
        }

        // Verifica se o material existe antes de tentar modificá-lo
        if (!mesh.material) {
          mesh.material = new THREE.MeshStandardMaterial();
        }

        const material = mesh.material as THREE.MeshStandardMaterial;
        if (material.color) material.color.set("#009D47"); // Verde Kiwify
        material.roughness = 0.5; // Mais áspero, menos brilhante
        material.metalness = 1; // Menos metálico
        if (material.emissive) material.emissive.set("#001609"); // Sem emissão
        material.emissiveIntensity = 0;
        material.needsUpdate = true;
      }
    });
    materializedRef.current = true;
  }

  // Rotação automática
  // useFrame(() => {
  //   if (groupRef.current) {
  //     groupRef.current.rotation.y += 0.01; // Gira no eixo Y
  //   }
  // });

  // Aplicar rotação do mouse
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = (rotateX.get() * Math.PI) / 180;
      groupRef.current.rotation.y = 1.7 + (rotateY.get() * Math.PI) / 180;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive
        object={gltf.scene}
        scale={5}
        position={[0, 0, 0]}
        rotation={[1.7, 0, 1.7]}
      />
    </group>
  );
}

export default function KiwifyScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -5; // amplitude de rotação
    const rotationY = (offsetX / (rect.width / 2)) * 5;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", background: "transparent" }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{
          preserveDrawingBuffer: false,
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.2} />
        <directionalLight
          position={[0, 20, 0]}
          intensity={3}
          color="#BAFFC7"
          castShadow
        />
        <directionalLight
          position={[-10, 10, 10]}
          intensity={0.7}
          color="#fff"
        />
        <pointLight
          position={[0, 5, 0]}
          intensity={2}
          color="#00FF66"
          distance={15}
          decay={2}
        />

        <KiwifyModel rotateX={rotateX} rotateY={rotateY} />
      </Canvas>
    </div>
  );
}
