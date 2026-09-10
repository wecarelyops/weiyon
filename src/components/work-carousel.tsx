"use client";

import { useState, useEffect, useCallback } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { workAlt } from "@/data/works-alt";

// 精選真實加工件（取自 /gallery 實績中較強的特寫 + 一張量產照）
const IMG_IDS = [1, 4, 5, 13, 17, 22, 8];

const AUTO_MS = 4500;

export default function WorkCarousel({
  label,
  title,
  subtitle,
  cta,
}: {
  label: string;
  title: string;
  subtitle: string;
  cta: string;
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = IMG_IDS.length;
  const locale = useLocale();

  const go = useCallback((i: number) => setIdx(((i % n) + n) % n), [n]);

  useEffect(() => {
    if (paused) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return; // 尊重「減少動態」偏好：不自動輪播
    }
    const t = setInterval(() => setIdx((p) => (p + 1) % n), AUTO_MS);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <section className="py-20 lg:py-28 bg-[var(--bg)]">
      <div className="max-w-[100rem] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[var(--accent-text)] mb-6">
          <span className="block w-10 h-px bg-[var(--accent)]" />
          {label}
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--primary)] tracking-tight leading-[1.1] max-w-3xl break-words">
            {title}
          </h2>
          <p className="text-base lg:text-lg text-[var(--text-secondary)] max-w-md">
            {subtitle}
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[2/1] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] group"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {IMG_IDS.map((id, i) => (
            <div
              key={id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === idx ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-hidden={i !== idx}
            >
              <Image
                src={`/images/works/${String(id).padStart(2, "0")}.jpg`}
                alt={workAlt(id, locale)}
                fill
                sizes="(max-width: 1024px) 100vw, 1600px"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}

          {/* 漸層讓控制鈕更清楚 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

          {/* Prev / Next */}
          <button
            type="button"
            onClick={() => go(idx - 1)}
            aria-label="Previous"
            className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/85 hover:bg-white text-[var(--primary)] flex items-center justify-center shadow-md transition-colors"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button
            type="button"
            onClick={() => go(idx + 1)}
            aria-label="Next"
            className="absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-white/85 hover:bg-white text-[var(--primary)] flex items-center justify-center shadow-md transition-colors"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-0.5 sm:gap-2">
            {IMG_IDS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === idx}
                className="group flex h-11 min-w-11 items-center justify-center"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    i === idx
                      ? "w-6 bg-white"
                      : "w-2 bg-white/50 group-hover:bg-white/80"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* CTA → gallery */}
        <div className="mt-8 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--primary)] text-[var(--bg)] font-medium rounded-full hover:bg-[var(--secondary)] transition-colors group"
          >
            {cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
