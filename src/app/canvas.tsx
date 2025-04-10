"use client";

import { useRef, useEffect } from "react";

export const Canvas: React.FC<{ isPlaying: boolean }> = ({ isPlaying }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // We need to have a higher scop reference to animation
    // this value will take the animation ID and use it in the clean up to
    // remove the animation from the stack. We cant reference it in the useffect
    // because it would get reset
    let animation = undefined as unknown as number;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight * 0.7;

    const totalCircles = 100;
    const amplitude = 130;
    const speed = 0.02;
    let time = 0;

    function animate() {
      if (!ctx || !canvas) return;

      const spacing = canvas.width / totalCircles;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.save();

      for (let i = 0; i < totalCircles; i++) {
        const hue = i * (360 / totalCircles);
        ctx.fillStyle = `hsl(${(hue + time * 50) % 360}, 100%, 50%, 0.7)`;

        const x = i * spacing;
        const y =
          i * (canvas.height / totalCircles) +
          Math.sin(i * 0.3 + time) * amplitude;

        ctx.beginPath();
        ctx.arc(x, y, 200, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      time += speed;

      if (isPlaying) {
        animation = requestAnimationFrame(animate);
      }
    }

    animate();

    return () => {
      cancelAnimationFrame(animation);
    };
  }, [isPlaying]);

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
};
