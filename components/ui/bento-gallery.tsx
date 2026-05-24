import Image from "next/image";
import { StaggerGroup, StaggerItem } from "./reveal";
import { cn } from "@/lib/cn";

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  className?: string; // grid-area override (col-span/row-span)
};

const defaultLayout = [
  "md:col-span-2 md:row-span-2 aspect-[4/3]",
  "aspect-square",
  "aspect-[3/4]",
  "md:col-span-2 aspect-[16/9]",
  "aspect-square",
  "md:row-span-2 aspect-[3/4]",
  "md:col-span-2 aspect-[16/9]",
  "aspect-square",
  "aspect-square",
];

export function BentoGallery({ items }: { items: GalleryItem[] }) {
  return (
    <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[240px]">
      {items.map((it, i) => (
        <StaggerItem key={it.src + i} className={cn("group relative overflow-hidden bg-bg-2", it.className ?? defaultLayout[i % defaultLayout.length])}>
          <Image
            src={it.src}
            alt={it.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.05]"
          />
          {it.caption && (
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-bg/85 to-transparent">
              <span className="label text-[0.6rem] text-text/90">{it.caption}</span>
            </div>
          )}
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
