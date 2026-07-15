/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@/lib/utils";
import { X, FileText, ImageIcon, ZoomIn } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[90vw] max-h-[90vh] overflow-auto bg-white rounded-xl p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          aria-label="关闭"
        >
          <X className="h-5 w-5" />
        </button>
        <h3 className="text-lg font-bold mb-4 pr-10">{material.label}</h3>
        <div className="flex flex-col gap-4">
          {hasPdfs &&
            material.pdfs!.map((pdf, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <p className="text-sm font-medium text-gray-600">
                  PDF 文档 {material.pdfs!.length > 1 ? idx + 1 : ""}
                </p>
                <iframe
                  src={pdf}
                  className="w-full h-[70vh] rounded-lg border border-gray-200"
                  title={`${material.label} - PDF ${idx + 1}`}
                />
              </div>
            ))}
          {hasImages && (
            <div
              className={cn(
                "grid gap-4",
                material.images!.length > 1
                  ? "grid-cols-1 sm:grid-cols-2"
                  : "grid-cols-1"
              )}
            >
              {material.images!.map((src, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-gray-600">
                    图片 {material.images!.length > 1 ? idx + 1 : ""}
                  </p>
                  <img
                    src={src}
                    alt={`${material.label} - ${idx + 1}`}
                    className="w-full rounded-lg border border-gray-200 object-contain max-h-[70vh]"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {materials.map((material) => {
          const hasResources =
            material.href ||
            (material.images && material.images.length > 0) ||
            (material.pdfs && material.pdfs.length > 0);

          const content = (
            <div
              className={cn(
                "flex items-start gap-3 p-4 rounded-xl border border-border bg-card shadow-sm transition-all",
                hasResources && "hover:shadow-md hover:border-primary/30 cursor-pointer"
              )}
            >
              <span className="text-2xl shrink-0">{material.icon}</span>
              <span className="text-sm font-semibold text-foreground leading-snug">
                {material.label}
              </span>
              {hasResources && (
                <span className="ml-auto shrink-0 text-muted-foreground">
                  {material.href ? (
                    <ZoomIn className="h-4 w-4" />
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
              <Link
                key={material.label}
                href={material.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </Link>
            );
          }

          if (hasResources) {
            return (
              <button
                key={material.label}
                onClick={() => setActiveMaterial(material)}
                className="text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl"
              >
                {content}
              </button>
            );
          }

          return <div key={material.label}>{content}</div>;
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
