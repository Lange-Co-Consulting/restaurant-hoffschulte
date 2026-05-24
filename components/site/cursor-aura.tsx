"use client";

import { useEffect, useState } from "react";

export function CursorAura() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const prm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mq.matches || prm.matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor='hover']")) setHovering(true);
      else setHovering(false);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed z-[90] left-0 top-0 mix-blend-multiply"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: "transform 110ms cubic-bezier(0.22,0.61,0.36,1)",
      }}
    >
      <div
        className="rounded-full"
        style={{
          width: hovering ? 88 : 22,
          height: hovering ? 88 : 22,
          marginLeft: hovering ? -44 : -11,
          marginTop: hovering ? -44 : -11,
          background: hovering
            ? "radial-gradient(circle, oklch(0.5 0.092 128 / 0.35) 0%, transparent 65%)"
            : "radial-gradient(circle, oklch(0.21 0.018 95 / 0.18) 0%, transparent 70%)",
          transition:
            "width 320ms cubic-bezier(0.22,0.61,0.36,1), height 320ms cubic-bezier(0.22,0.61,0.36,1), margin 320ms cubic-bezier(0.22,0.61,0.36,1), background 240ms",
        }}
      />
    </div>
  );
}
