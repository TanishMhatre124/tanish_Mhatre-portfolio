import { useEffect, useMemo, useState } from "react";

const IMAGE_EXTENSIONS = ["", ".png", ".jpg", ".jpeg", ".jfif", ".webp"];

interface CertificationImageProps {
  image: string;
  title: string;
}

export function CertificationImage({ image, title }: CertificationImageProps) {
  const sources = useMemo(() => {
    const uniqueSources = new Set(IMAGE_EXTENSIONS.map((extension) => `${image}${extension}`));
    return Array.from(uniqueSources);
  }, [image]);

  const [sourceIndex, setSourceIndex] = useState(0);
  const [hasFailed, setHasFailed] = useState(false);

  useEffect(() => {
    setSourceIndex(0);
    setHasFailed(false);
  }, [image]);

  if (hasFailed) {
    return (
      <div className="flex h-48 items-center justify-center rounded-sm border border-dashed border-line bg-paper/5 px-4 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog">{title}</span>
      </div>
    );
  }

  return (
    <img
      src={sources[sourceIndex]}
      alt={title}
      loading="lazy"
      className="h-48 w-full rounded-sm border border-line object-cover object-center"
      onError={() => {
        if (sourceIndex < sources.length - 1) {
          setSourceIndex((current) => current + 1);
          return;
        }

        setHasFailed(true);
      }}
    />
  );
}