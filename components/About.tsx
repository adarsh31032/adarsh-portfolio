"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  const interests = [
    { icon: "🐍", title: "Backend Dev", desc: "Building robust APIs and scalable backend systems with Python & Django" },
    { icon: "🤖", title: "AI & ML", desc: "Exploring machine learning, neural networks, and intelligent applications" },
    { icon: "☁️", title: "Cloud Computing", desc: "Deploying and scaling apps on Google Cloud and Oracle Cloud platforms" },
    { icon: "⚡", title: "Optimization", desc: "Writing clean, efficient code that solves real-world problems elegantly" },
  ];

  const education = [
    { degree: "MCA", inst: "APJ Abdul Kalam Technological University", year: "2025 – 2027", color: "#00f5d4" },
    { degree: "BCA", inst: "Manonmaniam Sundaranar University", year: "2022 – 2025", color: "#7b2fff" },
    { degree: "Computer Science", inst: "Govt HSS Kamaleswaram", year: "2020 – 2022", color: "#f59e0b" },
  ];

  return (
    <section id="about" className="relative py-32 bg-[#080d1f]">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#7b2fff]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#00f5d4]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <span className="font-mono text-[#00f5d4] text-sm tracking-widest">01.</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-[#00f5d4]/40 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-7xl text-white mb-16 tracking-wide"
        >
          ABOUT <span style={{ color: "#00f5d4" }}>ME</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16 mb-20">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <p className="text-[#8892b0] leading-relaxed text-lg mb-6">
              I'm an aspiring Software Engineer currently pursuing my{" "}
              <span className="text-[#00f5d4] font-medium">MCA</span>, with a deep passion for building
              efficient, scalable applications. Based in{" "}
              <span className="text-[#00f5d4] font-medium">Trivandrum, Kerala</span>, I thrive on
              turning complex problems into elegant solutions.
            </p>
            <p className="text-[#8892b0] leading-relaxed text-lg mb-8">
              My journey spans backend development, artificial intelligence, and cloud computing.
              I'm continuously sharpening my skills through hands-on projects and industry certifications,
              always hungry to learn and build.
            </p>

            <div className="flex gap-4">
              <a
                href="mailto:aakhi6808@email.com"
                className="flex items-center gap-2 font-mono text-sm text-[#00f5d4] border border-[#00f5d4]/30 px-4 py-2 rounded-lg hover:bg-[#00f5d4]/10 transition-all"
              >
                <span>✉</span> Email Me
              </a>
              <a
                href="tel:+918590696731"
                className="flex items-center gap-2 font-mono text-sm text-[#7b2fff] border border-[#7b2fff]/30 px-4 py-2 rounded-lg hover:bg-[#7b2fff]/10 transition-all"
              >
                <span>📞</span> Call Me
              </a>
            </div>
          </motion.div>

          {/* Education timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-mono text-sm text-[#8892b0] tracking-widest uppercase mb-6">Education</h3>
            <div className="space-y-0">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="relative pl-8 pb-8 last:pb-0"
                >
                  {/* Timeline line */}
                  {i < education.length - 1 && (
                    <div className="absolute left-[7px] top-4 w-px h-full bg-white/5" />
                  )}
                  {/* Dot */}
                  <div
                    className="absolute left-0 top-1 w-3.5 h-3.5 rounded-full border-2 shadow-lg"
                    style={{ borderColor: edu.color, boxShadow: `0 0 10px ${edu.color}60` }}
                  />
                  <div className="font-mono text-xs tracking-widest mb-1" style={{ color: edu.color }}>
                    {edu.year}
                  </div>
                  <div className="font-semibold text-white mb-0.5">{edu.degree}</div>
                  <div className="text-[#8892b0] text-sm">{edu.inst}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Interests grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {interests.map((item_data, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="animated-border relative bg-[#0d1530] border border-white/5 rounded-xl p-6 cursor-default group"
            >
              <div className="text-3xl mb-3">{item_data.icon}</div>
              <h4 className="font-mono text-sm font-bold text-white mb-2 group-hover:text-[#00f5d4] transition-colors">
                {item_data.title}
              </h4>
              <p className="text-[#8892b0] text-sm leading-relaxed">{item_data.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
