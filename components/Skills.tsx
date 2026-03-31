"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "Python", level: 90, color: "#00f5d4", icon: "🐍", tag: "Primary" },
  { name: "C / C++", level: 80, color: "#7b2fff", icon: "⚙️", tag: "Systems" },
  { name: "HTML & CSS", level: 75, color: "#f59e0b", icon: "🎨", tag: "Frontend" },
  { name: "Java", level: 70, color: "#00f5d4", icon: "☕", tag: "OOP" },
  { name: "SQL", level: 75, color: "#7b2fff", icon: "🗄️", tag: "Database" },
];

const techStack = [
  "Python", "Django", "C++", "Java", "HTML", "CSS", "MySQL",
  "Git", "Linux", "Google Cloud", "Oracle Cloud", "VS Code"
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="skills" className="relative py-32 bg-[#04050f] grid-bg">
      {/* Orbs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#00f5d4]/4 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#7b2fff]/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <span className="font-mono text-[#7b2fff] text-sm tracking-widest">02.</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-[#7b2fff]/40 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-7xl text-white mb-16 tracking-wide"
        >
          MY <span style={{ color: "#7b2fff" }} className="glow-purple">SKILLS</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skill bars */}
          <div className="space-y-8">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-mono font-bold text-white">{skill.name}</span>
                    <span
                      className="font-mono text-xs px-2 py-0.5 rounded-full border"
                      style={{ color: skill.color, borderColor: `${skill.color}40`, backgroundColor: `${skill.color}10` }}
                    >
                      {skill.tag}
                    </span>
                  </div>
                  <span className="font-mono text-sm" style={{ color: skill.color }}>{skill.level}%</span>
                </div>

                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 1.2, ease: "easeOut" }}
                    className="h-full rounded-full relative skill-bar"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                      boxShadow: `0 0 12px ${skill.color}60`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech stack cloud */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-mono text-sm text-[#8892b0] tracking-widest uppercase mb-8">
              Tech Stack & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(0,245,212,0.3)",
                  }}
                  className="group px-4 py-2 rounded-lg border border-white/10 bg-white/3 font-mono text-sm cursor-default transition-all hover:border-[#00f5d4]/40 hover:text-[#00f5d4] text-[#8892b0]"
                >
                  {tech}
                </motion.div>
              ))}
            </div>

            {/* Soft skills */}
            <div className="mt-10">
              <h3 className="font-mono text-sm text-[#8892b0] tracking-widest uppercase mb-5">
                Soft Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {["Problem Solving", "Team Collaboration", "Communication", "Fast Learner"].map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-2 text-sm text-[#8892b0]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00f5d4] shrink-0" />
                    {s}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
