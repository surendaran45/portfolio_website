import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Cylinder, Float, RoundedBox, Torus, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Stylized 3D Character
const Character = ({ mouse }: { mouse: React.MutableRefObject<THREE.Vector2> }) => {
  const groupRef = useRef<THREE.Group>(null!);
  const headRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current && headRef.current) {
      // Mouse position targets
      const targetX = (mouse.current.x * Math.PI) / 6;
      const targetY = (mouse.current.y * Math.PI) / 6;
      
      // 1. ROTATION (Looking)
      // Rotate body slightly
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX * 0.5, 0.1);
      
      // Rotate head more to look at cursor
      headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetX, 0.1);
      headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -targetY, 0.1);

      // 2. POSITION (Moving/Leaning)
      // Move the entire character slightly towards the mouse for a "following" effect
      const moveX = mouse.current.x * 0.5; // Max movement range 0.5 units
      const moveY = (mouse.current.y * 0.3) - 1; // Base Y is -1
      
      groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, moveX, 0.05);
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, moveY, 0.05);
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        
        {/* --- HEAD GROUP --- */}
        <group ref={headRef} position={[0, 1.8, 0]}>
           {/* Face Skin */}
           <Sphere args={[0.65, 64, 64]}>
             <meshStandardMaterial color="#ffdec7" roughness={0.3} />
           </Sphere>

           {/* Ears */}
           <Sphere args={[0.15, 32, 32]} position={[-0.6, 0, 0]} scale={[1, 1.2, 0.5]}>
             <meshStandardMaterial color="#ffdec7" roughness={0.3} />
           </Sphere>
           <Sphere args={[0.15, 32, 32]} position={[0.6, 0, 0]} scale={[1, 1.2, 0.5]}>
             <meshStandardMaterial color="#ffdec7" roughness={0.3} />
           </Sphere>
           
           {/* Hair - Stylized sculpted look */}
           <group position={[0, 0.2, 0]}>
              <Sphere args={[0.68, 64, 64]} position={[0, 0.1, -0.1]} scale={[1, 0.9, 1]}>
                 <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
              </Sphere>
              {/* Front Hair Tuft */}
              <Sphere args={[0.25, 32, 32]} position={[0, 0.65, 0.4]} scale={[1, 0.8, 1]}>
                  <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
              </Sphere>
              <Sphere args={[0.2, 32, 32]} position={[-0.3, 0.55, 0.45]} scale={[1, 0.8, 1]}>
                  <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
              </Sphere>
              <Sphere args={[0.2, 32, 32]} position={[0.3, 0.55, 0.45]} scale={[1, 0.8, 1]}>
                  <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
              </Sphere>
              {/* Top Spikes */}
              <Sphere args={[0.25, 32, 32]} position={[0, 0.75, 0]}>
                  <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
              </Sphere>
           </group>

           {/* Eyes */}
           <group position={[0, 0.1, 0.55]}>
             <Sphere args={[0.08, 32, 32]} position={[-0.2, 0, 0]}>
               <meshStandardMaterial color="black" roughness={0.1} metalness={0.2} />
             </Sphere>
             <Sphere args={[0.08, 32, 32]} position={[0.2, 0, 0]}>
               <meshStandardMaterial color="black" roughness={0.1} metalness={0.2} />
             </Sphere>
           </group>
           
           {/* Eyebrows */}
           <group position={[0, 0.3, 0.58]}>
             <RoundedBox args={[0.18, 0.04, 0.02]} radius={0.02} position={[-0.2, 0, 0]} rotation={[0, 0, 0.1]}>
                <meshStandardMaterial color="#1a1a1a" />
             </RoundedBox>
             <RoundedBox args={[0.18, 0.04, 0.02]} radius={0.02} position={[0.2, 0, 0]} rotation={[0, 0, -0.1]}>
                <meshStandardMaterial color="#1a1a1a" />
             </RoundedBox>
           </group>

           {/* Nose */}
           <Sphere args={[0.08, 32, 32]} position={[0, -0.05, 0.6]} scale={[1, 0.8, 0.8]}>
              <meshStandardMaterial color="#fabba0" roughness={0.4} /> 
           </Sphere>

           {/* Smile */}
           <Torus args={[0.12, 0.015, 16, 32, 2.5]} position={[0, -0.2, 0.55]} rotation={[0, 0, 3.9]}>
              <meshStandardMaterial color="#5a3a2a" />
           </Torus>
        </group>

        {/* --- BODY GROUP --- */}
        <group position={[0, 0.4, 0]}>
           {/* Neck */}
           <Cylinder args={[0.2, 0.2, 0.5]} position={[0, 0.8, 0]}>
              <meshStandardMaterial color="#ffdec7" />
           </Cylinder>

           {/* Hoodie Torso Upper (Green) */}
           <RoundedBox args={[1.2, 1, 0.7]} radius={0.1} position={[0, 0.2, 0]}>
              <meshStandardMaterial color="#4ade80" /> 
           </RoundedBox>

           {/* Hoodie Stripe (Purple) */}
           <RoundedBox args={[1.21, 0.4, 0.71]} radius={0.1} position={[0, -0.5, 0]}>
              <meshStandardMaterial color="#d8b4fe" /> 
           </RoundedBox>
           
           {/* Hoodie Hood (Back) */}
           <RoundedBox args={[1.1, 0.6, 0.4]} radius={0.3} position={[0, 0.7, -0.3]} rotation={[0.2, 0, 0]}>
               <meshStandardMaterial color="#22c55e" /> {/* Darker green for hood inside/shadow */}
           </RoundedBox>

           {/* Drawstrings */}
           <group position={[0, 0.6, 0.4]}>
              <Cylinder args={[0.02, 0.02, 0.6]} position={[-0.15, -0.2, 0]} rotation={[0.1, 0, 0.05]}>
                  <meshStandardMaterial color="#1f2937" />
              </Cylinder>
              <Sphere args={[0.03]} position={[-0.16, -0.5, 0.05]}>
                   <meshStandardMaterial color="#1f2937" />
              </Sphere>

              <Cylinder args={[0.02, 0.02, 0.6]} position={[0.15, -0.2, 0]} rotation={[0.1, 0, -0.05]}>
                  <meshStandardMaterial color="#1f2937" />
              </Cylinder>
               <Sphere args={[0.03]} position={[0.16, -0.5, 0.05]}>
                   <meshStandardMaterial color="#1f2937" />
              </Sphere>
           </group>

           {/* Arms */}
           <group position={[-0.75, 0.1, 0]} rotation={[0, 0, 0.1]}>
               <RoundedBox args={[0.35, 1.1, 0.35]} radius={0.15}>
                  <meshStandardMaterial color="#4ade80" />
               </RoundedBox>
               {/* Hands */}
               <Sphere args={[0.18]} position={[0, -0.6, 0]}>
                   <meshStandardMaterial color="#ffdec7" />
               </Sphere>
           </group>
           
           <group position={[0.75, 0.1, 0]} rotation={[0, 0, -0.1]}>
               <RoundedBox args={[0.35, 1.1, 0.35]} radius={0.15}>
                  <meshStandardMaterial color="#4ade80" />
               </RoundedBox>
               {/* Hands */}
               <Sphere args={[0.18]} position={[0, -0.6, 0]}>
                   <meshStandardMaterial color="#ffdec7" />
               </Sphere>
           </group>
        </group>

      </Float>
    </group>
  );
};

export const Avatar3D = ({ className = "h-[400px] w-full md:h-[600px]" }: { className?: string }) => {
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {
    // Global mouse tracking for better responsiveness
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
        {/* Cinematic Lighting Setup */}
        <ambientLight intensity={0.6} />
        
        {/* Key Light (Warm) */}
        <spotLight 
            position={[5, 10, 5]} 
            angle={0.5} 
            penumbra={1} 
            intensity={1.2} 
            color="#fff0e0" 
            castShadow 
        />
        
        {/* Fill Light (Cool) */}
        <pointLight position={[-5, 0, 5]} intensity={0.5} color="#e0f7fa" />
        
        {/* Rim Light (Pop effect) */}
        <spotLight position={[0, 5, -5]} intensity={1.5} color="#d8b4fe" />

        {/* Environment Decorations */}
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={30} scale={6} size={3} speed={0.4} opacity={0.4} color="#4ade80" />
        
        <Character mouse={mouse} />
      </Canvas>
    </div>
  );
};