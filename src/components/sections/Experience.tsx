import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/utils/cn";

export function Experience() {
  const highlightedSkills = ["Python", "SQL", "Power BI", "Dashboard Development", "Automation", "Data Visualization"];

  return (
    <section id="experience" className="border-t border-line py-24 sm:py-32">
      <div className="container max-w-content">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Where the work has run in production"
        />

        <ol className="relative space-y-10 border-l border-line pl-8 sm:pl-10">
          {experience.map((role, i) => (
            <motion.li
              key={role.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative"
            >
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-signal sm:-left-[calc(2.5rem+5px)]" />

              <div className="relative">
                <div
                  className="relative rounded-2xl p-6 pl-8 sm:pl-10 transform transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(249,115,22,0.06)]"
                  style={{ background: "linear-gradient(180deg, rgba(6,10,22,0.55), rgba(10,14,24,0.6))", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 12px 36px rgba(2,6,23,0.6)" }}
                >
                  <span className="absolute -left-4 top-4 bottom-4 w-1 rounded-md bg-gradient-to-b from-orange-400/80 to-orange-300/50" />

                  <div className="mb-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3">
                    <div>
                      <h3 className="font-display text-3xl font-bold text-paper leading-tight">{role.role}</h3>

                      <div className="mt-2 flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          {role.logo || role.companyLogo ? (
                            <img
                              src={role.logo ?? role.companyLogo}
                              alt={`${role.company} logo`}
                              className="h-8 w-8 rounded-md object-cover border border-line bg-background"
                            />
                          ) : (
                            <Briefcase size={18} className="text-signal" />
                          )}

                          <span className="text-signal text-xl font-semibold">{role.company}</span>
                        </div>

                        <div className="flex items-center gap-2 text-fog/60 text-sm">
                          <MapPin size={12} className="text-fog/60" />
                          <span>{role.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-1">
                      <span className="font-mono text-sm uppercase tracking-wider text-signal font-medium">{role.date}</span>
                    </div>
                  </div>

                  <ul className="mb-4 space-y-3">
                    {role.achievements.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-fog">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {role.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className={cn(
                          highlightedSkills.includes(tech) ? "bg-signal/10 text-signal border-signal/30" : ""
                        )}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
