import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);

    const timer = setTimeout(() => setVisible(true), 500);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timer);
    };
  }, []);

  const links = ["Home", "About", "Services", "Portfolio", "Pricing", "Contact"];

  return (
    <>
      <style>{`
        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          font-weight: 500;
          color: #fff;
          text-decoration: none;
          padding: 10px 18px;
          border-radius: 6px;
          display: block;
          transition: color 0.2s ease, transform 0.25s ease, opacity 0.25s ease;
          opacity: 0;
          transform: translateY(-6px);
        }

        .nav-link.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .nav-link:hover {
          color: #c8f135;
        }

        .nav-link.active {
          color: #c8f135;
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: "10px",      // ✅ 10px top margin
          left: "30px",     // ✅ left margin
          right: "30px",    // ✅ right margin
          zIndex: 100,

          padding: "0 48px",
          height: 62,

          background: scrolled
            ? "linear-gradient(90deg, rgba(20,20,20,0.85), rgba(40,40,40,0.75))"
            : "linear-gradient(90deg, rgba(20,20,20,0.65), rgba(40,40,40,0.55))",

          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",

          border: "1px solid rgba(255,255,255,0.08)",

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          borderRadius: 16,
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: '"DM Serif Display", Georgia, serif',
            fontSize: 26,
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Virello
          <span style={{ color: "#c8f135", fontStyle: "italic" }}>.</span>
          <span
            style={{
              fontSize: 14,
              marginLeft: 4,
              color: "#fff",
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: 1,
            }}
          >
            Studio
          </span>
        </div>

        {/* Nav Links */}
        <ul
          style={{
            display: "flex",
            gap: 12,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActive(link)}
                className={`nav-link ${
                  visible ? "visible" : ""
                } ${active === link ? "active" : ""}`}
                style={{
                  transitionDelay: `${i * 0.06 + 0.5}s`,
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}