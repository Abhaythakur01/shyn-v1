import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import ImageCarousel from './ImageCarousel';
import { useDeviceDetection } from '../utils/deviceDetection'; // Import the device detection hook

// --- Component to Load Your GLB Model ---
function RobotModel(props: any) {
  // Assumes your model is in the /public/images/ folder
  const { scene } = useGLTF('/images/greeting_robot.gltf');
  const modelRef = useRef<THREE.Group>(null);

  // Subtle animation for the model
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
      modelRef.current.position.y = -1.5 + Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2.5}
      position={[0, -1.5, 0]}
      {...props}
    />
  );
}

const WhoAreYouSection: React.FC = () => {
  const { isMobile } = useDeviceDetection(); // Check if the device is mobile

  return (
    <section className="who-are-you-section">
      <div className="who-are-you-container">
        {/* --- Left Column: 3D Robot or Static Image --- */}
        <div className="robot-canvas-container">
          {/* FIX: Conditionally render the 3D canvas or a fallback image */}
          {isMobile ? (
            <img 
              // You should create a placeholder image for the robot
              src="/images/greeting_robot.gltf" 
              alt="Greeting Robot"
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain', 
                padding: '2rem' 
              }} 
            />
          ) : (
            <Canvas camera={{ position: [0, 1, 8], fov: 50 }}>
              <ambientLight intensity={1.5} />
              <pointLight position={[10, 10, 10]} intensity={200} />
              <directionalLight position={[-5, 5, 5]} intensity={3} />
              <Suspense fallback={null}>
                <RobotModel />
              </Suspense>
            </Canvas>
          )}
        </div>

        {/* --- Right Column: Swipe-Friendly Carousel --- */}
        <div className="carousel-column">
          <h2 className="who-are-you-title">
            What kind of artist are <span className="highlight-text">you?</span>
          </h2>
          <p className="who-are-you-subtitle">
            Select an art form to see how we can help you grow.
          </p>
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
};

// Preload the model to improve initial load time on desktop
useGLTF.preload('/images/greeting_robot.gltf');

export default WhoAreYouSection;
