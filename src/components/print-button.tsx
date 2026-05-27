"use client";

import { Printer } from "lucide-react";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export default function PrintButton({ label }: { label: string }) {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.gtag?.("event", "capability_print", { source: "capability_page" });
      window.print();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="print:hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent)] text-[var(--primary)] text-sm font-semibold hover:opacity-90 transition-opacity"
    >
      <Printer className="w-4 h-4" />
      {label}
    </button>
  );
}
