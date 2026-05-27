"use client";

import { useEffect, useRef } from "react";

const NUMS = [1, 2, 3, 4, 5];

// 滑入畫面才自動播放（靜音循環），滑走即暫停 —— 避免 5 支同時下載/解碼
export default function WorkVideoGrid() {
  const refs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && !reduceMotion) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((v) => v && observer.observe(v));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4 max-w-5xl mx-auto">
      {NUMS.map((num, i) => (
        <video
          key={num}
          ref={(el) => {
            refs.current[i] = el;
          }}
          muted
          loop
          playsInline
          controls
          preload="none"
          poster={`/videos/video-${num}.jpg`}
          className="w-full aspect-[9/16] rounded-xl border border-[var(--border)] bg-black object-cover"
        >
          <source src={`/videos/video-${num}.mp4`} type="video/mp4" />
        </video>
      ))}
    </div>
  );
}
