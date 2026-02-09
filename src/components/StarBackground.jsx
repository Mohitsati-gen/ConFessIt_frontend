import { useEffect, useRef } from "react";

const StarBackground = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Create stars
    stars.current = Array.from({ length: 350 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2 + 0.3,
      speed: Math.random() * 0,  // speed = 0
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.current.forEach((star) => {
        const offsetX = (mouse.current.x - canvas.width / 2) * star.speed * 0.05;
        const offsetY = (mouse.current.y - canvas.height / 2) * star.speed * 0.05;

        ctx.beginPath();
        ctx.arc(star.x + offsetX, star.y + offsetY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
    />
  );
};

export default StarBackground;
