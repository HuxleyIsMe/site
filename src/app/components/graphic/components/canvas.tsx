import { useLayoutEffect } from "react";

interface CanvasI {
  canvasRef: React.RefObject<HTMLCanvasElement | null>;
  handleAnimationCompleted: (cb: () => void) => void;
}

// constants we use to draw our animation
const TOTAL_CIRCLES = 70;
const AMPLITUDE = 100;
const SPEED = 0.05;

export const Canvas: React.FC<CanvasI> = ({
  canvasRef,
  handleAnimationCompleted,
}) => {
  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    canvas.width =
      window.innerWidth *
      window.devicePixelRatio *
      (window.innerWidth > 1600 ? 0.6 : 0.4);
    canvas.height =
      window.innerHeight *
      window.devicePixelRatio *
      (window.innerWidth > 1600 ? 0.6 : 0.4);

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
      const CIRCLE_WIDTH = 150;
      const circles = [];
      for (let i = 0; i < TOTAL_CIRCLES; i++) {
        const x = Math.floor(i * spacing);
        const y = Math.floor(
          i * (canvas.height / TOTAL_CIRCLES) + Math.sin(i * SPICE) * AMPLITUDE
        ); // using floor is an attempt to rid us of floating numbers
        // https://web.dev/articles/canvas-performance
        // ensuring that we we use whole numbers we are avoiding the canvas from having to
        // compute complex maths in order to render the circles correctly in position

        circles.push(() => ctx.arc(x, y, CIRCLE_WIDTH, 0, Math.PI * 2));
      }

      return circles;
    };

    const circles = ourCircles();
    const colors = (): { colors: string[]; cutOf: number } => {
      const colors = [] as string[];

      /**
       * We have to detect when the animation has ended, this is pretty hard to do
       * due to the spice we let the program trial, therefore we will capture until something
       * repeats this will indicate to us the animation has looped.
       */
      const animationFrameLib: { [key: string]: boolean } = {};
      let looped = false;

      while (!looped) {
        circles.forEach((_, i) => {
          const hue = i * (360 / TOTAL_CIRCLES);
          colors.push(`hsl(${(hue + time * 50) % 360}, 100%, 50%, 0.7)`);

          // We make the unique key created and effectively simplify the pattern to match
          const key = `${((hue + time * 50) % 360).toFixed(2)}${i}`;

          if (animationFrameLib[key]) {
            looped = true;
            // if something looks 'similiar' to before we end the animation
          } else {
            animationFrameLib[key] = true;
          }
        });

        time += SPEED;
      }

      // we need to add a buffer of frames for the canvas to use while it swaps
      // so we simply double it!

      return { colors: [...colors, ...colors], cutOf: colors.length };
    };

    const hues = colors();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (hues.colors.length === hues.cutOf) {
        console.log("finished loop");
        // ts-expect-error typing for the cb isnt quite rigt
        handleAnimationCompleted(() => {
          canvasRef.current!.style.display = "none";
          cancelAnimationFrame(animation);
        });
      }

      circles.forEach((c) => {
        ctx.fillStyle = hues.colors.pop() as string;
        ctx.beginPath();
        c();
        ctx.fill();
      });

      animation = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animation);
    };
  }, [handleAnimationCompleted, canvasRef]); // we don't actually need the canvas ref but eslint complains

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        pointerEvents: "none",
        zIndex: 4,
        transform: "scale(1.15)",
      }}
    />
  );
};
