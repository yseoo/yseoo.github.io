"use client";

import { useEffect, useRef } from "react";

/**
 * Animated hero background: drifting points connected by short hairlines, drawn
 * on a <canvas> with requestAnimationFrame. The loop pauses while the tab is
 * hidden and renders a single static frame when reduced motion is preferred.
 */
export default function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;

    type Point = { x: number; y: number; vx: number; vy: number; warm: boolean };
    let points: Point[] = [];

    const LINK_DIST = 130; // px within which two points get a connecting line

    function seed() {
      // Density scales with area, capped so it stays sparse and cheap.
      const count = Math.min(64, Math.floor((width * height) / 22000));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        // ~18% of points glow warm (ember), the rest electric blue.
        warm: Math.random() < 0.18,
      }));
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // Links first, so dots sit on top.
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.26;
            ctx!.strokeStyle = `rgba(122, 162, 255, ${alpha})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      for (const p of points) {
        ctx!.fillStyle = p.warm
          ? "rgba(249, 150, 60, 0.85)"
          : "rgba(122, 162, 255, 0.7)";
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.warm ? 1.9 : 1.4, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function step() {
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        // Wrap around the edges for endless drift.
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }
      draw();
      frame = requestAnimationFrame(step);
    }

    let frame = 0;
    const onVisibility = () => {
      // Pause the loop when the tab is hidden; resume when it returns.
      if (document.hidden) {
        cancelAnimationFrame(frame);
      } else if (!prefersReduced) {
        frame = requestAnimationFrame(step);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    if (prefersReduced) {
      draw(); // single static frame — no motion
    } else {
      frame = requestAnimationFrame(step);
    }

    // Cleanup: stop the loop and detach listeners when the hero unmounts.
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []); // empty deps = run once on mount

  return <canvas ref={canvasRef} aria-hidden="true" />;
}
