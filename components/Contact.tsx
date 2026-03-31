"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit handler
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: "✉️", label: "Email", value: "aakhi6808@email.com", href: "mailto:aakhi6808@email.com" },
    { icon: "📞", label: "Phone", value: "+91 8590696731", href: "tel:+918590696731" },
    { icon: "📍", label: "Location", value: "Trivandrum, Kerala", href: null },
  ];

  return (
    <section id="contact" className="relative py-32 bg-[#04050f] grid-bg">
      {/* Orbs */}
      <div className="absolute top-0 left-1/2 w-96 h-96 -translate-x-1/2 rounded-full bg-[#7b2fff]/6 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-4"
        >
          <span className="font-mono text-[#00f5d4] text-sm tracking-widest">04.</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-[#00f5d4]/40 to-transparent" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl md:text-7xl text-white mb-4 tracking-wide"
        >
          GET IN <span style={{ color: "#00f5d4" }}>TOUCH</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="text-[#8892b0] text-lg mb-16 max-w-xl"
        >
          Have a project in mind or just want to say hello? My inbox is always open.
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="group">
                <label className="font-mono text-xs text-[#8892b0] tracking-widest mb-2 block">NAME</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-[#0d1530] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#8892b0]/50 font-mono text-sm focus:outline-none focus:border-[#00f5d4] focus:shadow-[0_0_15px_rgba(0,245,212,0.1)] transition-all"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-[#8892b0] tracking-widest mb-2 block">EMAIL</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full bg-[#0d1530] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#8892b0]/50 font-mono text-sm focus:outline-none focus:border-[#00f5d4] focus:shadow-[0_0_15px_rgba(0,245,212,0.1)] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="font-mono text-xs text-[#8892b0] tracking-widest mb-2 block">MESSAGE</label>
              <textarea
                placeholder="Tell me about your project or just say hi..."
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
                className="w-full bg-[#0d1530] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#8892b0]/50 font-mono text-sm focus:outline-none focus:border-[#00f5d4] focus:shadow-[0_0_15px_rgba(0,245,212,0.1)] transition-all resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(0,245,212,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 bg-gradient-to-r from-[#00f5d4] to-[#0ea5e9] text-[#04050f] font-mono font-bold tracking-wider rounded-lg transition-all"
            >
              {sent ? "✓ Message Sent!" : "Send Message →"}
            </motion.button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 flex flex-col justify-center space-y-6"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-4 p-5 bg-[#0d1530] border border-white/5 rounded-xl hover:border-[#00f5d4]/30 transition-all group"
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <div className="font-mono text-xs text-[#8892b0] tracking-widest mb-1">{item.label}</div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-mono text-sm text-white group-hover:text-[#00f5d4] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-mono text-sm text-white">{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social placeholders */}
            <div className="pt-4 border-t border-white/5">
              <p className="font-mono text-xs text-[#8892b0] tracking-widest mb-4">FIND ME ON</p>
              <div className="flex gap-3">
                {["GitHub", "LinkedIn"].map((s) => (
                  <motion.a
                    key={s}
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 font-mono text-sm text-[#8892b0] border border-white/10 rounded-lg hover:border-[#00f5d4]/40 hover:text-[#00f5d4] transition-all"
                  >
                    {s}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
