import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function EnergyCore() {
  const mesh = useRef(null);
  const wire = useRef(null);

  useFrame(({ clock, mouse }) => {
    const t = clock.getElapsedTime();
    const scale = 1 + Math.sin(t * 2) * 0.04;

    if (mesh.current && wire.current) {
      mesh.current.rotation.x = t * 0.25 + mouse.y * 0.35;
      mesh.current.rotation.y = t * 0.45 + mouse.x * 0.45;
      mesh.current.scale.setScalar(scale);
      wire.current.rotation.x = -t * 0.3;
      wire.current.rotation.y = t * 0.55;
      wire.current.scale.setScalar(scale * 1.12);
    }
  });

  return (
    <group>
      <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.7}>
        <mesh ref={mesh}>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshStandardMaterial
            color="#ff7b30"
            emissive="#ff3b30"
            emissiveIntensity={1.1}
            metalness={0.45}
            roughness={0.15}
          />
        </mesh>
        <mesh ref={wire}>
          <icosahedronGeometry args={[1.45, 1]} />
          <meshBasicMaterial color="#ffb800" wireframe transparent opacity={0.75} />
        </mesh>
      </Float>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.8, 0.04, 16, 120]} />
        <meshBasicMaterial color="#2979ff" transparent opacity={0.55} />
      </mesh>
      <mesh rotation={[0.6, 0.8, 0]}>
        <torusGeometry args={[2.1, 0.03, 16, 90]} />
        <meshBasicMaterial color="#ffb800" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="h-[320px] w-[320px] sm:h-[440px] sm:w-[440px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#0a0a0f", 5, 10]} />
        <ambientLight intensity={1.4} />
        <pointLight position={[4, 4, 4]} intensity={18} color={new THREE.Color("#ffb800")} />
        <pointLight position={[-4, -2, 4]} intensity={12} color={new THREE.Color("#2979ff")} />
        <EnergyCore />
        <Stars radius={50} depth={40} count={800} factor={2} saturation={0} fade speed={0.8} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  );
}
