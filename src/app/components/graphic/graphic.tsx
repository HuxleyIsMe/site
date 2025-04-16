"use client";
import { useRef, useEffect, useLayoutEffect, useState } from "react";
import { Canvas } from "./components/canvas";

/**
 *
 * This component has been made to improve performance of the animation for users
 * by swapping to a video play back of the animation instead of continuing to redraw
 * I was able to see a 30-40% reduction in my intel CPU.
 *
 * Essentially what we are doing is:
 *
 * 1) settting up by having both a video and a canvas element
 * 2) Then creating a recorder that will record the canvas and play the video
 * 3) getting the canvas to begin animation  that we record
 * 4) Once the canvas has animated a rough loop we tell the recorder we are done
 * 5) we hide the canvas and tell it not to play anymore
 * 6) we make the video play back the saved recording
 */
export const Graphic: React.FC = () => {
  const [isReadyToAnimate, setIsReadyToAnimate] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const recorderRef = useRef<MediaRecorder>(null);
  const [animationHasCycled, setAnimationHasCycled] = useState(false);

  useLayoutEffect(() => {
    if (canvasRef.current && videoRef.current && !isReadyToAnimate) {
      setIsReadyToAnimate(true);
    }
  }, []);

  useEffect(() => {
    if (canvasRef.current && videoRef.current !== null) {
      const stream = canvasRef.current.captureStream(20);

      const options = { mimeType: "video/webm; codecs=vp9" };
      const mediaRecorder = new MediaRecorder(stream, options);

      const chunks: BlobPart[] = [];
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data);
      };

      let video = videoRef.current;

      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        video.src = url;
        video.play();
      };

      mediaRecorder.start();

      recorderRef.current = mediaRecorder;
    }
  }, [isReadyToAnimate]);

  /**
   * The animations takes roughly 10s to fully play through
   * so this warning is correct, in our case we can guarentee this is
   * going to be here by then
   */
  useEffect(() => {
    if (animationHasCycled && recorderRef.current !== null) {
      recorderRef.current.stop();
      console.log("should be on video");
    }
  }, [animationHasCycled]);

  console.log({
    heihgt: canvasRef.current?.height,
    width: canvasRef.current?.width,
  });

  return (
    <>
      {!animationHasCycled && (
        <Canvas
          canvasRef={canvasRef}
          handleAnimationCompleted={() => {
            setAnimationHasCycled(true);
          }}
        />
      )}

      <video
        ref={videoRef}
        role="none"
        aria-description="A video of squiqqly colored circles meandering across the screen"
        style={{
          position: "absolute",
          height: canvasRef.current?.height,
          width: canvasRef.current?.width,
          aspectRatio: `auto ${canvasRef.current?.height} / ${canvasRef.current?.width}`,
        }}
        autoPlay
        loop
        muted
      />
    </>
  );
};
