import { useLayoutEffect } from "react";

interface CanvasI {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  handleAnimationCompleted: () => void;
}

// constants we use to draw our animation
const TOTAL_CIRCLES = 100;
const AMPLITUDE = 130;
const SPEED = 0.03;

export const Canvas: React.FC<CanvasI> = ({
  canvasRef,
  handleAnimationCompleted,
}) => {
  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;

    // We need to have a higher scop reference to animation
    // this value will take the animation ID and use it in the clean up to
    // remove the animation from the stack. We cant reference it in the useffect
    // because it would get reset
    let animation: number = 0;

    // Values To modify our animation

    let time = 0;
    const spacing = canvas.width / TOTAL_CIRCLES;

    /**
     *
     * @returns an array of canvas arc objects that can be drawn
     * effectively, we will always have the circles in the same position
     * whats changes in the color so we can generate these one time
     */
    const ourCircles = () => {
      const SPICE = 0.3; // to give some fun variation
      const CIRCLE_WIDTH = 200;
      let circles = [];
      for (let i = 0; i < TOTAL_CIRCLES; i++) {
        const x = i * spacing;
        const y =
          i * (canvas.height / TOTAL_CIRCLES) + Math.sin(i * SPICE) * AMPLITUDE; // 0.3 is a little sal

        circles.push(() => ctx.arc(x, y, CIRCLE_WIDTH, 0, Math.PI * 2));
      }

      return circles;
    };

    const circles = ourCircles();

    /**
     * We have to detect when the animation has ended, this is pretty hard to do
     * due to the spice we let the program trial, therefore we will capture until something
     * repeats this will indicate to us the animation has looped.
     */
    const animationFrameLib: { [key: string]: boolean } = {};

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circles.forEach((c, i) => {
        const hue = i * (360 / TOTAL_CIRCLES);
        ctx.fillStyle = `hsl(${(hue + time * 50) % 360}, 100%, 50%, 0.7)`;

        // We make the unique key created and effectively simplify the pattern to match
        let key = `${((hue + time * 50) % 360).toFixed(2)}${i}`;

        if (animationFrameLib[key]) {
          console.log("i have found a repeat");
          // if something looks 'similiar' to before we end the animation
          handleAnimationCompleted();
        } else {
          animationFrameLib[key] = true;
        }

        ctx.beginPath();
        c();
        ctx.fill();
      });

      time += SPEED;

      animation = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animation);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute" }} />;
};
