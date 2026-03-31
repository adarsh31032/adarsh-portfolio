"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const certifications = [
  {
    title: "Python Internship",
    org: "ICT Academy of Kerala",
    year: "2026",
    icon: "🐍",
    color: "#00f5d4",
    desc: "Hands-on internship covering Python development, scripting, data handling, and real-world project delivery.",
    tags: ["Python", "Internship", "ICT"],
  },
  {
    title: "Google Cloud AI",
    org: "Google Cloud",
    year: "2025",
    icon: "☁️",
    color: "#7b2fff",
    desc: "Certified in Google Cloud's AI and machine learning fundamentals, including Vertex AI and AutoML.",
    tags: ["Cloud", "AI/ML", "GCP"],
  },
  {
    title: "Oracle Cloud",
    org: "Oracle University",
    year: "2025",
    icon: "🔴",
    color: "#f59e0b",
    desc: "Oracle Cloud Infrastructure foundations certification covering compute, networking, and storage services.",
    tags: ["Cloud", "OCI", "Oracle"],
  },
  {
    title: "Intel AI Program",
    org: "Intel",
    year: "2024",
    icon: "🤖",
    color: "#00f5d4",
    desc: "Completed Intel's AI for Youth program covering fundamentals of artificial intelligence and practical AI applications.",
    tags: ["AI", "Intel", "Machine Learning"],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="relative py-32 bg-[#080d1f]">
      {/* Orbs */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#f59e0b]/4 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <span className="font-mono text-[#f59e0b] text-sm tracking-widest">03.</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-[#f59e0b]/40 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-7xl text-white mb-4 tracking-wide"
        >
          EXPERIENCE &
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="font-display text-5xl md:text-7xl mb-16 tracking-wide"
          style={{ color: "#f59e0b" }}
        >
          CERTIFICATIONS
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12 }}
              whileHover={{ y: -8 }}
              className="animated-border group relative bg-[#0d1530] border border-white/5 rounded-2xl p-7 overflow-hidden cursor-default"
            >
              {/* Glow bg on hover */}
              <div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"
                style={{ background: cert.color }}
              />

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border border-white/10"
                    style={{ background: `${cert.color}15` }}
                  >
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-white group-hover:text-[#00f5d4] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-[#8892b0] text-sm">{cert.org}</p>
                  </div>
                </div>
                <span
                  className="font-mono text-xs font-bold px-3 py-1 rounded-full border"
                  style={{ color: cert.color, borderColor: `${cert.color}40`, background: `${cert.color}10` }}
                >
                  {cert.year}
                </span>
              </div>

              <p className="text-[#8892b0] text-sm leading-relaxed mb-4">{cert.desc}</p>

              <div className="flex flex-wrap gap-2">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-2 py-0.5 rounded bg-white/5 text-[#8892b0] border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="font-mono text-sm text-[#8892b0]">
            More certifications and projects in progress —{" "}
            <span className="text-[#00f5d4]">always learning</span> ✨
          </p>
        </motion.div>
      </div>
    </section>
  );
}
