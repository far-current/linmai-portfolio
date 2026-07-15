/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { X, FileText, ImageIcon, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { createPortal } from "react-dom";

type PortfolioMaterial = {
  icon: string;
  label: string;
  href?: string;
  images?: string[];
  pdfs?: string[];
};

function ResourceModal({
  material,
  isOpen,
  onClose,
}: {
  material: PortfolioMaterial | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen || !material) return null;

  const hasPdfs = material.pdfs && material.pdfs.length > 0;
  const hasImages = material.images && material.images.length > 0;

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black flex flex-col"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[60] p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
        aria-label="关闭"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        className="flex flex-col w-full h-full pt-14 pb-4 px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-white text-lg font-bold mb-3 text-center shrink-0">
          {material.label}
        </h3>
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 w-full flex-1 overflow-auto min-h-0">
          {hasPdfs && (
            <div className="flex flex-col items-center justify-center gap-3 lg:flex-1 min-h-0">
              {material.pdfs!.map((pdf, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white"
                >
                  <FileText className="h-12 w-12 text-gray-400" />
                  <p className="text-base font-medium text-gray-700">
                    PDF 文档 {material.pdfs!.length > 1 ? idx + 1 : ""}
                  </p>
                  <a
                    href={pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    查看 / 下载 PDF
                  </a>
                </div>
              ))}
            </div>
          )}
          {hasImages && (
            <div
              className={cn(
                "flex gap-4 items-center justify-center lg:flex-1 h-full min-h-0 overflow-auto",
                material.images!.length > 1
                  ? "flex-col lg:flex-row"
                  : "flex-row"
              )}
            >
              {material.images!.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`${material.label} - ${idx + 1}`}
                  className={cn(
                    "rounded-lg bg-white object-contain max-w-full max-h-full w-auto h-auto",
                    material.images!.length > 1 ? "lg:max-w-[48%]" : ""
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

export function PortfolioMaterialsSection({
  materials,
}: {
  materials: PortfolioMaterial[];
}) {
  const [activeMaterial, setActiveMaterial] = useState<PortfolioMaterial | null>(null);

  if (!materials || materials.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
        {materials.map((material) => {
          const hasResources =
            material.href ||
            (material.images && material.images.length > 0) ||
            (material.pdfs && material.pdfs.length > 0);

          const content = (
            <div
              className={cn(
                "flex items-start gap-3 p-4 rounded-xl border border-border bg-card shadow-sm transition-all h-full w-full",
                hasResources && "hover:shadow-md hover:border-primary/30 cursor-pointer"
              )}
            >
              <span className="text-2xl shrink-0">{material.icon}</span>
              <span className="text-sm font-semibold text-foreground leading-snug flex-1">
                {material.label}
              </span>
              {hasResources && (
                <span className="ml-auto shrink-0 text-muted-foreground">
                  {material.href ? (
                    <ExternalLink className="h-4 w-4" />
                  ) : material.pdfs && material.pdfs.length > 0 ? (
                    <FileText className="h-4 w-4" />
                  ) : (
                    <ImageIcon className="h-4 w-4" />
                  )}
                </span>
              )}
            </div>
          );

          if (material.href) {
            return (
              <div key={material.label} className="h-full">
                <Link
                  href={material.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full flex"
                >
                  {content}
                </Link>
              </div>
            );
          }

          if (hasResources) {
            return (
              <div key={material.label} className="h-full">
                <button
                  onClick={() => setActiveMaterial(material)}
                  className="text-left h-full w-full flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl"
                >
                  {content}
                </button>
              </div>
            );
          }

          return (
            <div key={material.label} className="h-full flex">
              {content}
            </div>
          );
        })}
      </div>

      <ResourceModal
        material={activeMaterial}
        isOpen={!!activeMaterial}
        onClose={() => setActiveMaterial(null)}
      />
    </>
  );
}
