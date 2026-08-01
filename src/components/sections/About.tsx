import { motion } from "framer-motion";
import { Calendar, GraduationCap, Landmark, School2 } from "lucide-react";
import { personalInfo } from "@/data/personalInfo";
import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export function About() {
  return (
    <section id="about" className="border-t border-line py-12 sm:py-16">
      <div className="container max-w-content">
        <SectionHeading index="01" eyebrow="About" title="" />

        <div className="grid gap-12">
          <div className="space-y-6 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-base sm:text-lg leading-8 text-paper"
            >
              {
                (() => {
                  const full = personalInfo.bio;
                  const tech = "Python, SQL, scikit-learn, TensorFlow, and Power BI";
                  if (full.includes(tech)) {
                    const [before, after] = full.split(tech);
                    return (
                      <>
                        {before}
                        <span className="text-signal font-semibold">{tech}</span>
                        {after}
                      </>
                    );
                  }
                  return full;
                })()
              }
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 rounded-2xl border px-4 py-4 bg-gradient-to-r from-background/80 via-panel/75 to-background/80 shadow-[0_6px_20px_rgba(2,6,23,0.45)]"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 items-center">
                {[
                  { label: "Featured projects", value: "4+" },
                  { label: "CGPA", value: "8.79" },
                  { label: "Publications", value: "1" },
                ].map((stat, i) => {
                  const isHighlight = ["Featured projects", "Publications", "CGPA"].includes(stat.label);
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.06 }}
                      className="flex flex-col items-start sm:items-center gap-1"
                    >
                      <div className="rounded-md p-2 w-full text-left sm:text-center">
                        <p
                          className={`font-mono text-2xl font-bold ${isHighlight ? "text-signal" : "text-paper"}`}
                          style={{ textShadow: isHighlight ? "0 2px 8px rgba(249,115,22,0.06)" : "0 1px 6px rgba(0,0,0,0.04)" }}
                        >
                          {stat.value}
                        </p>
                        <p className={`mt-0 text-xs ${isHighlight ? "text-signal/90 font-semibold" : "text-fog"}`}>{stat.label}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            
          </div>

          <div className="relative">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-l-2 border-signal/60 pl-4 sm:pl-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-signal">Education</p>
                <h3 className="mt-2 font-display text-2xl font-semibold text-paper sm:text-3xl">
                  Academic foundation
                </h3>
              </div>
            </div>

            <ol className="space-y-6">
              {education.map((entry) => (
                <li key={entry.id}>
                  <Card className="overflow-hidden border-signal/15 bg-panel/90 p-0 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                    <div className="border-b border-line/70 bg-gradient-to-br from-background via-panel to-background px-6 py-6 sm:px-7 sm:py-7">
                      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                        <div className="flex items-start gap-4">
                          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-signal/20 bg-signal/10 text-signal">
                            <GraduationCap size={22} />
                          </span>
                          <div className="space-y-2">
                            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-fog">University Name</p>
                            <h3 className="font-display text-2xl font-semibold text-paper sm:text-3xl">{entry.institution}</h3>
                            <p className="max-w-2xl text-sm leading-relaxed text-fog sm:text-base">{entry.degree}</p>
                          </div>
                        </div>

                        <div className="grid gap-3 sm:min-w-[18rem] sm:grid-cols-2 xl:min-w-[20rem] xl:grid-cols-1">
                          <div className="rounded-2xl border border-line bg-background px-4 py-3">
                            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fog">Specialization</p>
                            <p className="mt-1 text-sm font-medium text-paper">{entry.specialization}</p>
                          </div>
                          <div className="rounded-2xl border border-line bg-background px-4 py-3">
                            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fog">CGPA</p>
                            <p className="mt-1 text-sm font-medium text-paper">{entry.cgpa}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-6 px-6 py-6 sm:px-7 sm:py-7 xl:grid-cols-[0.9fr_1.1fr]">
                      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                        <div className="rounded-2xl border border-line bg-background px-4 py-3.5">
                          <div className="flex items-center gap-2 text-fog">
                            <Calendar size={13} />
                            <span className="font-mono text-[11px] uppercase tracking-[0.16em]">Study Duration</span>
                          </div>
                          <p className="mt-2 text-sm font-medium text-paper">{entry.studyDuration}</p>
                        </div>
                        <div className="rounded-2xl border border-line bg-background px-4 py-3.5">
                          <div className="flex items-center gap-2 text-fog">
                            <Landmark size={13} />
                            <span className="font-mono text-[11px] uppercase tracking-[0.16em]">Expected Graduation</span>
                          </div>
                          <p className="mt-2 text-sm font-medium text-paper">{entry.expectedGraduation}</p>
                        </div>
                      </div>

                      <div>
                        <div className="mb-4 flex items-center gap-2 text-fog">
                          <School2 size={14} />
                          <p className="font-mono text-[11px] uppercase tracking-[0.16em]">Selected Coursework</p>
                        </div>
                        <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                          {entry.coursework.map((course) => (
                            <li key={course} className="flex items-start gap-3 text-sm leading-relaxed text-fog">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                              <span>{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
