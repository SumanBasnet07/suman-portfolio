"use client";

import React, { useEffect, useRef } from "react";

interface Point3D {
  x: number;
  y: number;
  z: number;
  size: number;
  isAccent: boolean;
}

export function SpatialCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let animationFrameId = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let scrollFactor = 0;

    // Generate 3D points on a Fibonacci sphere for an Apple-like spatial mesh
    const numPoints = 96;
    const points: Point3D[] = [];
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < numPoints; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / numPoints);
      const radius = 1;

      points.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        size: i % 5 === 0 ? 2.4 : 1.4,
        isAccent: i % 4 === 0,
      });
    }

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = ((e.clientX - rect.left) / Math.max(rect.width, 1) - 0.5) * 2;
      targetMouseY = ((e.clientY - rect.top) / Math.max(rect.height, 1) - 0.5) * 2;
    };

    const onScroll = () => {
      scrollFactor = window.scrollY * 0.0018;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        time += 0.0035;
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;
      }

      const angleY = time + mouseX * 0.45 + scrollFactor;
      const angleX = mouseY * 0.35 + scrollFactor * 0.4;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const scale = Math.min(width, height) * 0.42;
      const centerX = width * 0.68;
      const centerY = height * 0.52;
      const fov = 3.2;

      const projected: {
        px: number;
        py: number;
        pz: number;
        alpha: number;
        size: number;
        isAccent: boolean;
      }[] = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        // Rotate Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;
        // Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        const perspective = fov / (fov + z2 + 1.4);
        const px = centerX + x1 * scale * perspective;
        const py = centerY + y2 * scale * perspective;
        const alpha = Math.max(0.12, Math.min(0.95, (z2 + 1.2) / 2));

        projected.push({
          px,
          py,
          pz: z2,
          alpha,
          size: p.size * perspective,
          isAccent: p.isAccent,
        });
      }

      // Draw spatial connections between nearby 3D nodes
      ctx.lineWidth = 0.75;
      for (let i = 0; i < projected.length; i++) {
        const a = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const b = projected[j];
          const dx = a.px - b.px;
          const dy = a.py - b.py;
          const distSq = dx * dx + dy * dy;
          const maxDist = scale * 0.36;
          if (distSq < maxDist * maxDist) {
            const lineAlpha =
              (1 - Math.sqrt(distSq) / maxDist) *
              Math.min(a.alpha, b.alpha) *
              0.28;
            ctx.strokeStyle =
              a.isAccent || b.isAccent
                ? `rgba(0, 113, 227, ${lineAlpha * 1.4})`
                : `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(a.px, a.py);
            ctx.lineTo(b.px, b.py);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.fillStyle = p.isAccent
          ? `rgba(102, 178, 255, ${p.alpha})`
          : `rgba(245, 245, 247, ${p.alpha * 0.85})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = window.requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 w-full h-full opacity-80"
    />
  );
}
