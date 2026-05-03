import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: "relative",
        height: 440,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", inset: 0, background: "#f7e8d0" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 60% at -5% 95%, #3d1fa3 0%, transparent 55%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 50% 80% at 5% 45%, #e040a0 0%, transparent 52%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 70% at 18% 55%, rgba(255,160,200,0.7) 0%, transparent 55%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 65% 75% at 50% 35%, #ffc832 0%, transparent 55%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 55% 70% at 88% 5%, #ff3800 0%, transparent 52%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 45% 55% at 80% 40%, rgba(255,130,50,0.75) 0%, transparent 50%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 45% 50% at 100% 100%, rgba(255,245,230,0.95) 0%, transparent 50%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 38% 50% at 32% 38%, rgba(255,255,255,0.72) 0%, transparent 58%)" }} />

      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 32, textAlign: "center" }}>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: '"DM Serif Display", serif', fontSize: "clamp(40px, 5vw, 68px)", color: "#1a1a1a", fontWeight: 400, lineHeight: 1.1, margin: 0 }}
        >
          Ready to <em style={{ fontStyle: "italic" }}>launch?</em>
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "none", borderRadius: 12, padding: "16px 40px", fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 600, color: "#1a1a1a", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, letterSpacing: 0.1, boxShadow: "0 2px 20px rgba(0,0,0,0.08)" }}
        >
          Contact us <span style={{ fontSize: 18 }}>↗</span>
        </motion.button>
      </div>
    </section>
  );
}