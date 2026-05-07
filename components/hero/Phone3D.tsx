"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Float,
  Lightformer,
  RoundedBox,
  ContactShadows,
} from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

/**
 * Real WebGL iPhone hero scene.
 * Built with primitives only — body is a rounded box, screen is a dark
 * glass plane, camera plateau is a smaller rounded box with three lens
 * eyes. Lit with a studio environment + soft contact shadow.
 */
export default function Phone3D() {
  return (
    <div className="absolute inset-0">
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 4.6], fov: 28, near: 0.1, far: 50 }}
      >
        <color attach="background" args={["#050507"]} />

        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[3, 5, 4]}
        intensity={0.6}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-3, -2, 3]} intensity={0.3} color="#a8b6ff" />
      <pointLight position={[3, -1, 2]} intensity={0.25} color="#ffd3b6" />

      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer
            intensity={6}
            rotation-x={Math.PI / 2}
            position={[0, 4, -8]}
            scale={[12, 1.6, 1]}
            color="#ffffff"
          />
          <Lightformer
            intensity={3}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[10, 4, 1]}
            color="#cfd6ff"
          />
          <Lightformer
            intensity={3}
            rotation-y={-Math.PI / 2}
            position={[5, 1, -1]}
            scale={[10, 4, 1]}
            color="#ffe7d8"
          />
          <Lightformer
            form="ring"
            color="white"
            intensity={2.4}
            scale={2}
            position={[0, 0, 4]}
          />
        </group>
      </Environment>

      <Float
        speed={1.4}
        rotationIntensity={0.18}
        floatIntensity={0.45}
        floatingRange={[-0.04, 0.04]}
      >
        <PointerTilt>
          <IPhone />
          <Particles />
        </PointerTilt>
      </Float>

      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={0.55}
        scale={6}
        blur={2.6}
        far={3}
      />
    </>
  );
}

/** Wraps children in a group that gently follows the cursor. */
function PointerTilt({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onLeave = () => {
      target.current.x = 0;
      target.current.y = 0;
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [size]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const lerp = 1 - Math.pow(0.001, delta);
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      target.current.x * 0.32,
      lerp,
    );
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      -target.current.y * 0.16,
      lerp,
    );
  });

  return <group ref={ref}>{children}</group>;
}

function IPhone() {
  // dimensions roughly modelled on a 6.1" iPhone, scaled to scene units
  const W = 0.78;
  const H = 1.62;
  const D = 0.11;
  const corner = 0.14;
  const screenInset = 0.04;

  return (
    <group rotation={[0, 0, 0]} position={[0, 0, 0]}>
      {/* titanium frame */}
      <RoundedBox
        args={[W, H, D]}
        radius={corner}
        smoothness={6}
        creaseAngle={0.6}
        castShadow
        receiveShadow
      >
        <meshPhysicalMaterial
          color="#1a1a1f"
          metalness={1}
          roughness={0.32}
          clearcoat={0.6}
          clearcoatRoughness={0.25}
        />
      </RoundedBox>

      {/* glass back inset */}
      <RoundedBox
        args={[W - 0.012, H - 0.012, D - 0.002]}
        radius={corner - 0.006}
        smoothness={5}
        position={[0, 0, -0.0005]}
      >
        <meshPhysicalMaterial
          color="#0a0a0c"
          metalness={0.3}
          roughness={0.55}
          clearcoat={0.4}
        />
      </RoundedBox>

      {/* screen plane */}
      <mesh position={[0, 0, D / 2 + 0.0008]}>
        <planeGeometry
          args={[W - screenInset * 2, H - screenInset * 2, 1, 1]}
        />
        <meshPhysicalMaterial
          color="#050507"
          metalness={0.1}
          roughness={0.18}
          clearcoat={1}
          clearcoatRoughness={0.04}
          envMapIntensity={1.4}
          emissive={"#0a0a14"}
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Dynamic Island */}
      <RoundedBox
        args={[0.22, 0.045, 0.004]}
        radius={0.022}
        smoothness={4}
        position={[0, H / 2 - 0.11, D / 2 + 0.003]}
      >
        <meshStandardMaterial color="#000000" roughness={0.2} metalness={0.1} />
      </RoundedBox>

      {/* "Tap to Pay" content layer (emissive accents) */}
      <ScreenContent w={W - screenInset * 2 - 0.04} h={H - screenInset * 2 - 0.18} />

      {/* camera plateau on the back */}
      <group position={[-W / 2 + 0.18, H / 2 - 0.22, -D / 2 - 0.018]}>
        <RoundedBox
          args={[0.34, 0.34, 0.04]}
          radius={0.06}
          smoothness={4}
          rotation={[0, 0, 0]}
        >
          <meshPhysicalMaterial
            color="#16161a"
            metalness={0.9}
            roughness={0.38}
            clearcoat={0.4}
          />
        </RoundedBox>
        {[
          [-0.08, 0.07],
          [0.07, 0.07],
          [0, -0.06],
        ].map((p, i) => (
          <group key={i} position={[p[0], p[1], -0.025]}>
            <mesh>
              <cylinderGeometry args={[0.058, 0.058, 0.05, 32]} />
              <meshPhysicalMaterial
                color="#0a0a0c"
                metalness={0.95}
                roughness={0.22}
              />
            </mesh>
            <mesh position={[0, 0.026, 0]}>
              <cylinderGeometry args={[0.038, 0.038, 0.005, 32]} />
              <meshPhysicalMaterial
                color="#1a1a25"
                metalness={1}
                roughness={0.06}
                emissive="#0a0a18"
                emissiveIntensity={0.6}
              />
            </mesh>
          </group>
        ))}
      </group>

      {/* side rails (small bumps for buttons) */}
      <mesh position={[-W / 2 - 0.005, 0.55, 0]}>
        <boxGeometry args={[0.012, 0.06, D - 0.04]} />
        <meshStandardMaterial color="#2a2a30" metalness={1} roughness={0.4} />
      </mesh>
      <mesh position={[-W / 2 - 0.005, 0.36, 0]}>
        <boxGeometry args={[0.012, 0.12, D - 0.04]} />
        <meshStandardMaterial color="#2a2a30" metalness={1} roughness={0.4} />
      </mesh>
      <mesh position={[W / 2 + 0.005, 0.45, 0]}>
        <boxGeometry args={[0.012, 0.18, D - 0.04]} />
        <meshStandardMaterial color="#2a2a30" metalness={1} roughness={0.4} />
      </mesh>
    </group>
  );
}

function ScreenContent({ w, h }: { w: number; h: number }) {
  // Faked "screen UI" using emissive planes so it glows in the scene.
  // No external textures — keeps bundle tight and avoids any third-party assets.
  const D_FRONT = 0.83 / 2 + 0.002;

  return (
    <group position={[0, 0, D_FRONT]}>
      {/* amount card */}
      <mesh position={[0, h / 2 - 0.18, 0]}>
        <planeGeometry args={[w, 0.32]} />
        <meshBasicMaterial color="#0e0e15" transparent opacity={0.9} />
      </mesh>
      {/* tap to pay ring */}
      <RingPulse position={[0, -0.08, 0]} />
      {/* hint bar */}
      <mesh position={[0, -h / 2 + 0.14, 0]}>
        <planeGeometry args={[w, 0.13]} />
        <meshBasicMaterial color="#10101a" transparent opacity={0.85} />
      </mesh>
    </group>
  );
}

function RingPulse({ position }: { position: [number, number, number] }) {
  const inner = useRef<THREE.Mesh>(null);
  const outer = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (inner.current) {
      const s = 1 + Math.sin(t * 1.4) * 0.04;
      inner.current.scale.set(s, s, s);
      (inner.current.material as THREE.MeshBasicMaterial).opacity =
        0.55 + Math.sin(t * 1.4) * 0.15;
    }
    if (outer.current) {
      const s = 1 + Math.sin(t * 1.4 + 1.2) * 0.08;
      outer.current.scale.set(s, s, s);
      (outer.current.material as THREE.MeshBasicMaterial).opacity =
        0.18 + Math.sin(t * 1.4 + 1.2) * 0.08;
    }
  });

  return (
    <group position={position}>
      <mesh ref={outer}>
        <ringGeometry args={[0.22, 0.26, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.18} />
      </mesh>
      <mesh ref={inner}>
        <ringGeometry args={[0.14, 0.17, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.55} />
      </mesh>
      {/* center disk */}
      <mesh>
        <circleGeometry args={[0.1, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.92} />
      </mesh>
    </group>
  );
}

/** Particles drifting around the phone — small instanced points. */
function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 220;
  const geom = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.6 + Math.random() * 1.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2.4;
      positions[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta) - 0.4;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <points ref={ref} geometry={geom}>
      <pointsMaterial
        color="#ffffff"
        size={0.012}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
      />
    </points>
  );
}

/** Convenience wrapper so Hero can render with motion fade-in. */
export function Phone3DStage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="absolute inset-0"
    >
      <Phone3D />
    </motion.div>
  );
}
