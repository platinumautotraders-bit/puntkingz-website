"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduced) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const dots: { x: number; y: number; baseAlpha: number; phase: number }[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function initDots() {
      dots.length = 0;
      const spacing = 60;
      const cols = Math.ceil(canvas!.width / spacing);
      const rows = Math.ceil(canvas!.height / spacing);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          dots.push({
            x: i * spacing + spacing / 2,
            y: j * spacing + spacing / 2,
            baseAlpha: 0.03 + Math.random() * 0.04,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
    }

    function draw(time: number) {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const t = time * 0.001;

      for (const dot of dots) {
        const pulse = Math.sin(t * 0.8 + dot.phase) * 0.5 + 0.5;
        const alpha = dot.baseAlpha + pulse * 0.03;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 135, ${alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    initDots();
    animId = requestAnimationFrame(draw);

    window.addEventListener("resize", () => {
      resize();
      initDots();
    });

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [reduced]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Hero background image */}
      <Image
        src="/images/hero-background.jpg"
        alt=""
        fill
        className="object-cover opacity-30"
        priority
      />
      {/* CSS gradient mesh overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 0%, rgba(0, 255, 135, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 20% 50%, rgba(0, 255, 135, 0.03) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, rgba(255, 215, 0, 0.02) 0%, transparent 50%)
          `,
        }}
      />
      {/* Canvas dot grid */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "screen" }}
      />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </div>
  );
}
