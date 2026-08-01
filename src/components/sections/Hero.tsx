import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, FileDown, CircleDot, Github, Linkedin, Instagram } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import { socialLinks } from "@/data/socialLinks";
import { LinkButton } from "@/components/ui/LinkButton";
import { Badge } from "@/components/ui/Badge";

const iconMap = { github: Github, linkedin: Linkedin, instagram: Instagram };

export function Hero() {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    if (!showResume) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setShowResume(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showResume]);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container grid max-w-content gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6"
          >
            <Badge className="inline-flex items-center gap-2 px-3 py-1.5 text-xs uppercase tracking-wider font-mono">
              <CircleDot size={12} className="animate-blink" />
              {personalInfo.availability}
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-fog">Hello, I&apos;m</p>
            <p className="font-display text-3xl font-semibold leading-tight text-paper sm:text-4xl">
              Tanish Mhatre
            </p>
            <p className="text-sm uppercase tracking-wider text-signal">data and ai engineer</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-xl font-semibold leading-[1.2] text-paper sm:text-2xl lg:text-2xl mt-4"
          >
            {personalInfo.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg sm:text-xl leading-7 text-paper"
          >
            {personalInfo.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <LinkButton href="/#contact" variant="primary">
              Contact me <ArrowRight size={16} />
            </LinkButton>
            <LinkButton href="/projects" variant="secondary">
              View projects
            </LinkButton>
            <LinkButton
              href={personalInfo.resumeUrl}
              variant="ghost"
              external
              onClick={async (e) => {
                e.preventDefault();
                const url = personalInfo.resumeUrl;
                setShowResume(true);

                // Try fetching the file and triggering a blob download (more reliable on mobile)
                try {
                  const res = await fetch(url, { cache: "no-store" });
                  if (!res.ok) throw new Error("Network response was not ok");
                  const blob = await res.blob();
                  const fileName = (url.split("/").pop() || "resume.pdf").split("?")[0];
                  const blobUrl = URL.createObjectURL(blob);

                  // For most browsers, this will trigger a download. On some mobile browsers (iOS Safari)
                  // the download attribute is ignored — opening the blob URL will show the PDF in the built-in viewer.
                  const a = document.createElement("a");
                  a.href = blobUrl;
                  a.download = fileName;
                  document.body.appendChild(a);
                  a.click();
                  a.remove();

                  // Revoke the object URL after a short delay
                  setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
                } catch (err) {
                  // Fallback: open the URL directly (may open viewer instead of download)
                  const a = document.createElement("a");
                  a.href = url;
                  a.target = "_blank";
                  a.rel = "noreferrer noopener";
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                }
              }}
            >
              <FileDown size={16} /> Resume
            </LinkButton>
          </motion.div>

          {/* Resume preview modal */}
          {showResume && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center"
              onClick={() => setShowResume(false)}
            >
              <div className="absolute inset-0 bg-black/60" />
              <div
                className="relative z-10 w-[90%] max-w-4xl h-[80vh] rounded-md bg-panel overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  aria-label="Close preview"
                  onClick={() => setShowResume(false)}
                  className="absolute top-3 right-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-md bg-background/60 text-paper hover:bg-background"
                >
                  ✕
                </button>
                <iframe src={personalInfo.resumeUrl} title="Resume Preview" className="h-full w-full" />
              </div>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex items-center gap-5"
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              if (!Icon) return null;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={link.label}
                  className="text-fog transition-colors hover:text-signal"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="flex min-h-[360px] items-center justify-center rounded-md border border-line bg-panel p-4 sm:min-h-[420px] lg:p-6"
        >
          <div className="relative h-full w-full overflow-hidden rounded-sm border border-line/70 bg-background/30">
            <img
              src="/images/profilepicture.jpeg"
              alt="Tanish Mhatre portrait"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
