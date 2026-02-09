import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";

function InteractiveStars() {
  const starsRef = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const isTouch = typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

  useEffect(() => {
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isTouch]);

  useFrame(() => {
    if (!starsRef.current) return;

    starsRef.current.rotation.x +=
      (mouse.y * 0.1 - starsRef.current.rotation.x) * 0.05;
    starsRef.current.rotation.y +=
      (mouse.x * 0.1 - starsRef.current.rotation.y) * 0.05;
  });

  return (
    <group ref={starsRef}>
      <Stars
        radius={100}
        depth={50}
        count={3000}
        factor={5}
        saturation={0}
        fade
      />
    </group>
  );
}

const Star1Background = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <InteractiveStars />
      </Canvas>
    </div>
  );
};

export default Star1Background;
