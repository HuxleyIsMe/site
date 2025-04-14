"use client";
import { useRef, useEffect, useState } from "react";

export const Graphic: React.FC = () => {
  const [isFinishedAnimation, setIsFinishedAnimation] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;

    // @ts-ignore
    const chunks = [];
    const options = { mimeType: "video/webm; codecs=vp9" };

    const stream = canvas.captureStream(20); // 25 FPS

    const mediaRecorder = new MediaRecorder(stream, options);

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) chunks.push(e.data);
    };

    mediaRecorder.onstop = () => {
      // @ts-ignore
      const blob = new Blob(chunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);

      const video = videoRef.current;

      if (video) {
        video.src = url;
        video.play();
      }
    };

    mediaRecorder.start();

    setMediaRecorder(mediaRecorder);
  }, []);

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

    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio * 0.7;

    const totalCircles = 100;
    const amplitude = 130;
    const speed = 0.03;
    let time = 0;
    const spacing = canvas.width / totalCircles;

    const ourCircles = () => {
      let circles = [];

      for (let i = 0; i < totalCircles; i++) {
        const x = i * spacing;
        const y =
          i * (canvas.height / totalCircles) + Math.sin(i * 0.3) * amplitude;

        circles.push(() => ctx.arc(x, y, 200, 0, Math.PI * 2));
      }

      return circles;
    };

    let circles = ourCircles();

    let repeated = {};

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circles.forEach((c, i) => {
        const hue = i * (360 / totalCircles);
        ctx.fillStyle = `hsl(${(hue + time * 50) % 360}, 100%, 50%, 0.7)`;

        let key = `${((hue + time * 50) % 360).toFixed(2)}${i}`;

        if (repeated[key]) {
          console.log("i have found a repeat");
          setIsFinishedAnimation(true);
        } else {
          repeated[key] = true;
        }

        ctx.beginPath();
        c();
        ctx.fill();
      });

      time += speed;

      if (!isFinishedAnimation) {
        animation = requestAnimationFrame(animate);
      }
    }

    animate();

    return () => {
      cancelAnimationFrame(animation);
    };
  }, [isFinishedAnimation]);

  useEffect(() => {
    if (isFinishedAnimation) {
      mediaRecorder.stop();
      console.log("should be on video");
    }
  }, [isFinishedAnimation]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ visibility: isFinishedAnimation ? "hidden" : "visible" }}
      />
      <video
        ref={videoRef}
        role="none"
        aria-description="A video of squiqqly colored circles meandering across the screen"
        style={{ position: "absolute", height: 100 + "%", width: 100 + "%" }}
        autoPlay
        loop
        muted
      />
    </>
  );
};
