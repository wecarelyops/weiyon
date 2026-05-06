"use client";

import { ReactNode } from "react";

declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

type Props = {
  href: string;
  eventName: string;
  eventParams?: Record<string, unknown>;
  className?: string;
  children: ReactNode;
};

export default function TrackedLink({
  href,
  eventName,
  eventParams,
  className,
  children,
}: Props) {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, eventParams);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
