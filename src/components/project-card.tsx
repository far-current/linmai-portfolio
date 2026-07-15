/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="w-full h-full bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags?: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  materials?: readonly string[];
  note?: string;
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  materials,
  note,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden cursor-pointer transition-shadow duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]",
        className
      )}
    >
      <div className="relative shrink-0 h-[160px] min-[480px]:h-[150px] md:h-[180px]">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full h-full"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : image ? (
            <ProjectImage src={image} alt={title} />
          ) : (
            <div className="w-full h-full bg-muted" />
          )}
        </Link>
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90 whitespace-nowrap"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-0 flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex flex-col gap-1 min-w-0">
            <h3 className="text-base font-bold text-foreground truncate whitespace-nowrap">
              {title}
            </h3>
            <time className="text-xs text-gray-400 whitespace-nowrap">{dates}</time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm shrink-0"
            aria-label={`Open ${title}`}
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="text-sm text-gray-500 leading-snug mb-3 min-w-0 truncate whitespace-nowrap">
          <Markdown>{description}</Markdown>
        </div>
        {materials && materials.length > 0 && (
          <div className="mt-auto pt-3 border-t border-border">
            <p className="text-xs font-bold text-foreground mb-2 flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
              项目素材
            </p>
            <div className="flex flex-wrap gap-2">
              {materials.map((material) => (
                <span
                  key={material}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-full"
                  title={material}
                >
                  {material}
                </span>
              ))}
            </div>
          </div>
        )}
        {note && (
          <p className="text-[11px] text-gray-500 italic mt-2 leading-relaxed">
            {note}
          </p>
        )}
      </div>
    </div>
  );
}
