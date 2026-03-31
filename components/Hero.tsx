"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden mesh-bg grid-bg"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-70">
        <HeroScene />
      </div>

      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04050f] via-[#04050f]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04050f] via-transparent to-[#04050f]/30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Tag line */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-[#00f5d4]" />
            <span className="font-mono text-[#00f5d4] text-sm tracking-widest uppercase">
              Available for opportunities
            </span>
            <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-pulse" />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-[clamp(3rem,10vw,8rem)] leading-none tracking-wider mb-4"
          >
            <span className="text-white">ADARSH</span>
            <br />
            <span
              className="glow-text"
              style={{ color: "#00f5d4" }}
            >
              KRISHNA M
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-mono text-lg md:text-2xl text-[#8892b0] mb-8 flex items-center gap-2"
          >
            <span className="text-[#7b2fff]">$</span>
            <TypeAnimation
              sequence={[
                "Aspiring Software Engineer",
                2000,
                "Python Developer",
                2000,
                "MCA Student @ APJKTU",
                2000,
                "AI & Cloud Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
            <span className="animate-pulse">_</span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4"
          >
            <a href="cv.pdf" download>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,245,212,0.5)" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 bg-[#00f5d4] text-[#04050f] font-mono font-bold text-sm tracking-wider rounded-lg transition-all"
              >
                ↓ Download CV
              </motion.button>
            </a>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(123,47,255,0.4)" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 border border-[#7b2fff] text-[#7b2fff] font-mono font-bold text-sm tracking-wider rounded-lg hover:bg-[#7b2fff]/10 transition-all"
              >
                Get in Touch →
              </motion.button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex gap-10 mt-16"
          >
            {[
              { value: "5+", label: "Languages" },
              { value: "4+", label: "Certifications" },
              { value: "2026", label: "Intern @ ICT" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-[#00f5d4]">{stat.value}</div>
                <div className="font-mono text-xs text-[#8892b0] tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-[#8892b0] tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-[#00f5d4] to-transparent"
        />
      </motion.div>
    </section>
  );
}
