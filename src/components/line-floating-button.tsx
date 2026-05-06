"use client";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

const LINE_ID = "agesmyth";
const LINE_URL = `https://line.me/ti/p/~${LINE_ID}`;

export default function LineFloatingButton() {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "line_click", {
        source: "floating_button",
      });
    }
  };

  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      aria-label="Add Weiyon on LINE"
      className="fixed right-4 lg:right-6 bottom-20 lg:bottom-6 z-30 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#06C755] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all"
      title="LINE"
    >
      {/* LINE 簡化字標 */}
      <span className="font-bold text-sm lg:text-base tracking-tight">LINE</span>
    </a>
  );
}
