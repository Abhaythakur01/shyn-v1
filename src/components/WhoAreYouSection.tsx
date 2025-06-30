import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import ImageCarousel from './ImageCarousel';

// --- New Component to Load Your GLB Model ---
function RobotModel(props: any) {
  // --- IMPORTANT ---
  // Replace 'your-robot-model.glb' with the actual name of your file.
  // Make sure the file is in the /public folder.
  const { scene } = useGLTF('/images/greeting_robot.gltf');
  const modelRef = useRef<THREE.Group>(null);

  // Optional: Add subtle animation to the model
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  // The <primitive> object allows us to render the entire loaded scene.
  // You can adjust the scale and position as needed.
  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2.5} // Adjust scale to fit your scene
      position={[0, -1.5, 0]} // Adjust position to center the model
      {...props}
    />
  );
}

const WhoAreYouSection: React.FC = () => {
  return (
    <section className="who-are-you-section">
      <div className="who-are-you-container">
        {/* --- Left Column: 3D Robot --- */}
        <div className="robot-canvas-container">
          <Canvas camera={{ position: [0, 1, 8], fov: 50 }}>
            {/* Add some lighting to make the model visible */}
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={200} />
            <directionalLight position={[-5, 5, 5]} intensity={3} />

            <Suspense fallback={null}>
              <RobotModel />
            </Suspense>
          </Canvas>
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

// Preload the model to improve initial load time
useGLTF.preload('/images/greeting_robot.gltf');

export default WhoAreYouSection;
