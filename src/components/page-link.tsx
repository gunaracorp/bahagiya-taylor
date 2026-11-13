"use client";

import { parseHash, type PageId } from "@/lib/router";
import type { ReactNode } from "react";

/** Tautan antar halaman dengan dukungan scroll-to-top bila halaman sama */
export function PageLink({
  page,
  className,
  children,
  onClick,
  ariaLabel,
}: {
  page: PageId;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  return (
    <a
      href={`#/${page}`}
      aria-label={ariaLabel}
      onClick={(e) => {
        onClick?.();
        if (parseHash() === page) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className={className}
    >
      {children}
    </a>
  );
}
