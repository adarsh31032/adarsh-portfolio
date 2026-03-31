"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#080d1f] border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-display text-xl tracking-widest">
          <span className="text-[#00f5d4]">AK</span>
          <span className="text-white/20 mx-1">·</span>
          <span className="text-white/30 text-sm font-mono">Adarsh Krishna M</span>
        </div>

        <p className="font-mono text-xs text-[#8892b0] tracking-wide">
          Designed & built with{" "}
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block text-red-400"
          >
            ♥
          </motion.span>{" "}
          using Next.js & Three.js
        </p>

        <p className="font-mono text-xs text-[#8892b0]">
          © {new Date().getFullYear()} Adarsh Krishna M
        </p>
      </div>
    </footer>
  );
}
