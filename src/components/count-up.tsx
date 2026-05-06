"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  end: number;
  suffix?: string;
  /** 動畫時間 (ms) */
  duration?: number;
};

/**
 * Count-up 數字累加動畫。
 * - SSR + hydration 都 render 最終值（避免 SEO 顯示 0、避免 hydration mismatch）
 * - 客戶端 mount 後用 IntersectionObserver 偵測進入視窗
 * - 進入視窗才從 0 動畫到 end，只觸發一次
 * - 若使用者偏好 reduced motion，直接顯示最終值不動畫
 */
export default function CountUp({ end, suffix = "", duration = 1800 }: Props) {
  const [count, setCount] = useState(end);
  const ref = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // 尊重使用者「減少動畫」偏好設定
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            setCount(0);

            const startTime = performance.now();
            const animate = (currentTime: number) => {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              // ease-out-cubic：起始快、結尾慢，更有「定下來」的感覺
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(eased * end));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(end);
              }
            };

            requestAnimationFrame(animate);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
