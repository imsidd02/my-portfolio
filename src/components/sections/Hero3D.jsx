import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 2000 }) => {
    const mesh = useRef();
    const light = useRef();

    // Generate random positions and colors for particles
    const particles = useMemo(() => {
        const temp = [];
        for (let i = 0; i < count; i++) {
            const time = Math.random() * 100;
            const factor = Math.random() * 100;
            const speed = 0.01 + Math.random() / 200;
            const x = Math.random() * 20 - 10;
            const y = Math.random() * 20 - 10;
            const z = Math.random() * 20 - 10;
            
            temp.push({ time, factor, speed, x, y, z });
        }
        return temp;
    }, [count]);

    const dummy = useMemo(() => new THREE.Object3D(), []);

    useFrame((state) => {
        // Slowly rotate the entire particle system
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
            mesh.current.rotation.x = state.clock.elapsedTime * 0.02;
        }

        // Animate individual particles
        particles.forEach((particle, i) => {
            let { time, factor, speed, x, y, z } = particle;
            
            time = particle.time += speed / 2;
            const s = Math.cos(time);
            
            dummy.position.set(
                x + Math.cos((time / 10) * factor) + (Math.sin(time * 1) * factor) / 10,
                y + Math.sin((time / 10) * factor) + (Math.cos(time * 2) * factor) / 10,
                z + Math.cos((time / 10) * factor) + (Math.sin(time * 3) * factor) / 10
            );
            
            dummy.scale.set(s, s, s);
            dummy.rotation.set(s * 5, s * 5, s * 5);
            dummy.updateMatrix();
            
            if (mesh.current) {
                mesh.current.setMatrixAt(i, dummy.matrix);
            }
        });
        
        if (mesh.current) {
            mesh.current.instanceMatrix.needsUpdate = true;
        }
    });

    return (
        <instancedMesh ref={mesh} args={[null, null, count]}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial color="#6366f1" transparent opacity={0.6} />
        </instancedMesh>
    );
};

export const Hero3D = () => {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40 z-0">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <Particles count={1500} />
            </Canvas>
        </div>
    );
};
