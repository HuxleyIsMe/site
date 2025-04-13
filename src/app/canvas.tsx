"use client";

import { useRef, useEffect, useState } from "react";

export const Canvas: React.FC<{ isPlaying: boolean }> = ({ isPlaying }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const videoRef = useRef(null);

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
    const spacing = canvas.width / totalCircles;

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

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

      time += speed;

      if (!mediaRecorder) {
        animation = requestAnimationFrame(animate);
      }
    }

    console.log(performance.now());

    animate();

    return () => {
      cancelAnimationFrame(animation);
    };
  }, [mediaRecorder]);

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const chunks = [];
    const options = { mimeType: "video/webm; codecs=vp9" };

    const stream = canvas.captureStream(25); // 25 FPS

    const mediaRecorder = new MediaRecorder(stream, options);

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunks.push(e.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const video = videoRef.current;
      video.src = url;
      video.play();
    };

    mediaRecorder.start();

    setTimeout(() => {
      mediaRecorder.stop();
      setMediaRecorder(mediaRecorder);
    }, 14800);
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ display: mediaRecorder ? "none" : "block" }}
      />
      <video ref={videoRef} autoPlay loop muted />
    </>
  );
};
