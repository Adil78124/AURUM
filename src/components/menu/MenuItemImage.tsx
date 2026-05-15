"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { isMenuImageSrc } from "@/lib/menuImage";
import { cn } from "@/lib/cn";

type Props = {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function MenuItemImage({ src, alt, className, sizes, priority }: Props) {
  if (!isMenuImageSrc(src)) {
    return (
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-2 bg-surface-container-low text-on-surface-variant/50",
          className,
        )}
      >
        <ImageIcon className="h-10 w-10 stroke-[1.25]" aria-hidden />
        <span className="text-[10px] uppercase tracking-widest">Нет фото</span>
      </div>
    );
  }

  const trimmed = src.trim();
  const isDataOrBlob = trimmed.startsWith("data:") || trimmed.startsWith("blob:");

  return (
    <Image
      src={trimmed}
      alt={alt}
      fill
      unoptimized={isDataOrBlob}
      priority={priority}
      className={cn("object-cover", className)}
      sizes={sizes ?? "(max-width:768px) 100vw, 33vw"}
    />
  );
}
