import { useEffect, useRef } from 'react';

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  swayOffset: number;
  swaySpeed: number;
  opacity: number;
  isWarmGold: boolean;
}

/**
 * Renders lightweight falling snow on a single fixed canvas.
 * Automatically pauses when the browser tab is hidden or reduced motion is enabled.
 */
export function SnowfallCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId = 0;
    let lastTimestamp = performance.now();

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    const flakeCount = width < 640 ? 22 : 34;
    const flakes: Snowflake[] = Array.from({ length: flakeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 1.8 + Math.random() * 2.8,
      speedY: 18 + Math.random() * 28,
      swayOffset: Math.random() * Math.PI * 2,
      swaySpeed: 0.7 + Math.random() * 0.9,
      opacity: 0.35 + Math.random() * 0.45,
      isWarmGold: Math.random() < 0.22,
    }));

    const renderFrame = (timestamp: number) => {
      const deltaSeconds = Math.min((timestamp - lastTimestamp) / 1000, 0.05);
      lastTimestamp = timestamp;

      ctx.clearRect(0, 0, width, height);

      for (const flake of flakes) {
        flake.y += flake.speedY * deltaSeconds;
        flake.swayOffset += flake.swaySpeed * deltaSeconds;
        const xPos = flake.x + Math.sin(flake.swayOffset) * 14;

        if (flake.y - flake.radius > height) {
          flake.y = -flake.radius * 2;
          flake.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(xPos, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = flake.isWarmGold
          ? `rgba(234, 179, 8, ${flake.opacity * 0.65})`
          : `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.fill();
      }

      animationId = window.requestAnimationFrame(renderFrame);
    };

    const startLoop = () => {
      if (animationId) return;
      lastTimestamp = performance.now();
      animationId = window.requestAnimationFrame(renderFrame);
    };

    const stopLoop = () => {
      if (!animationId) return;
      window.cancelAnimationFrame(animationId);
      animationId = 0;
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
      } else {
        startLoop();
      }
    };

    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    startLoop();

    return () => {
      stopLoop();
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20"
    />
  );
}
