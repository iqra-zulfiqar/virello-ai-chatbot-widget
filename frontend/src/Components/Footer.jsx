import { useEffect, useRef, useState } from "react";

const ArrowUpRight = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "inline-block", verticalAlign: "middle", marginLeft: "6px" }}
  >
    <path
      d="M2 12L12 2M12 2H4M12 2V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Moth = () => (
  <svg width="72" height="56" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="26" cy="20" rx="2.5" ry="8" fill="#c8f56a" opacity="0.9" />
    <ellipse cx="14" cy="17" rx="10" ry="6" fill="url(#wingL)" opacity="0.85" transform="rotate(-10 14 17)" />
    <ellipse cx="38" cy="17" rx="10" ry="6" fill="url(#wingR)" opacity="0.85" transform="rotate(10 38 17)" />
    <ellipse cx="14" cy="26" rx="7" ry="4" fill="url(#wingLB)" opacity="0.7" transform="rotate(10 14 26)" />
    <ellipse cx="38" cy="26" rx="7" ry="4" fill="url(#wingRB)" opacity="0.7" transform="rotate(-10 38 26)" />
    <line x1="26" y1="12" x2="20" y2="5" stroke="#c8f56a" strokeWidth="1" strokeLinecap="round" />
    <line x1="26" y1="12" x2="32" y2="5" stroke="#c8f56a" strokeWidth="1" strokeLinecap="round" />
    <defs>
      <linearGradient id="wingL" x1="4" y1="12" x2="24" y2="23" gradientUnits="userSpaceOnUse">
        <stop stopColor="#c8f56a" />
        <stop offset="1" stopColor="#4dd9c0" />
      </linearGradient>
      <linearGradient id="wingR" x1="28" y1="12" x2="48" y2="23" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4dd9c0" />
        <stop offset="1" stopColor="#c8f56a" />
      </linearGradient>
      <linearGradient id="wingLB" x1="6" y1="22" x2="21" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9be8d8" />
        <stop offset="1" stopColor="#c8f56a" />
      </linearGradient>
      <linearGradient id="wingRB" x1="31" y1="22" x2="46" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#c8f56a" />
        <stop offset="1" stopColor="#9be8d8" />
      </linearGradient>
    </defs>
  </svg>
);

const navLinks = {
  COMPANY: ["Work", "Services", "Pricing", "About"],
  LEGAL: ["Privacy Policy", "Terms & Conditions"],
  FOLLOW: ["Linkedin", "Instagram", "Youtube"],
};

export default function Footer() {
  const [hovered, setHovered] = useState(null);
  const headlineRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (headlineRef.current) observer.observe(headlineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');

        .vs-footer *, .vs-footer *::before, .vs-footer *::after {
          box-sizing: border-box;
        }

        .vs-footer {
          background: #0c0c0c;
          color: #ffffff;
          font-family: 'Syne', sans-serif;
          padding: 60px 80px 0;
          position: relative;
          overflow: hidden;
        }

        .vs-footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #2a2a2a, transparent);
        }

        .vs-footer-top {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 32px;
          padding-bottom: 52px;
          border-bottom: 1px solid #1c1c1c;
          align-items: start;
        }

        .vs-contact-email {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
          display: block;
          text-decoration: none;
          transition: color 0.2s;
          line-height: 1.2;
        }

        .vs-contact-email:hover { color: #c8f56a; }

        .vs-city {
          font-size: 13px;
          color: #ffffff;
          margin: 0 0 22px;
        }

        .vs-copy {
          font-size: 11.5px;
          color: #ffffff;
          opacity: 0.8;
          line-height: 1.75;
          margin: 0;
        }

        .vs-nav-label {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ffffff;
          opacity: 0.7;
          margin: 0 0 20px;
          font-weight: 700;
        }

        .vs-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .vs-nav-link {
          color: #ffffff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          transition: color 0.2s;
          cursor: pointer;
          line-height: 1.3;
        }

        .vs-nav-link:hover { color: #c8f56a; }

        .vs-footer-headline-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 44px 0 52px;
          overflow: visible;
        }

        .vs-headline {
          font-size: clamp(26px, 3vw, 46px);
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.03em;
          color: #c8f56a;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.85s cubic-bezier(0.16, 1, 0.3, 1);
          display: block;
        }

        .vs-headline.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .vs-headline em {
          font-style: italic;
          font-weight: 700;
          color: #4dd9c0;
        }

        .vs-headline-second {
          transition-delay: 0.1s;
        }

        .vs-moth-wrap {
          flex-shrink: 0;
          padding-bottom: 8px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.8s 0.35s, transform 0.8s 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .vs-moth-wrap.visible {
          opacity: 1;
          transform: translateY(0);
          animation: mothFloat 4s ease-in-out infinite 1.1s;
        }

        @keyframes mothFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-9px); }
        }

        @media (max-width: 900px) {
          .vs-footer { padding: 48px 36px 0; }
          .vs-footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .vs-contact-block { grid-column: 1 / -1; }
        }

        @media (max-width: 560px) {
          .vs-footer { padding: 36px 20px 0; }
          .vs-footer-top { grid-template-columns: 1fr; }
          .vs-headline { font-size: 26px; }
        }
      `}</style>

      <footer className="vs-footer">
        <div className="vs-footer-top">

          <div className="vs-contact-block">
            <a href="mailto:info@aloa.agency" className="vs-contact-email">
              info@Virello.Studio
            </a>
            <p className="vs-city">United Kingdom • Remote Studio</p>
            <p className="vs-copy">
              © Virello.Studio<br />
              Virello.Studio is a creative studio<br />
              All rights reserved.
            </p>
          </div>

          {Object.entries(navLinks).map(([group, links]) => (
            <div key={group}>
              <p className="vs-nav-label">{group}</p>
              <ul className="vs-nav-list">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="vs-nav-link"
                      onMouseEnter={() => setHovered(link)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {link}
                      {group === "FOLLOW" && <ArrowUpRight />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="vs-footer-headline-row" ref={headlineRef}>
          <div>
            <span className={`vs-headline ${visible ? "visible" : ""}`}>
              Let's build <em>brilliant</em>
            </span>
            <span className={`vs-headline vs-headline-second ${visible ? "visible" : ""}`}>
              together.
            </span>
          </div>

          <div className={`vs-moth-wrap ${visible ? "visible" : ""}`}>
            <Moth />
          </div>
        </div>
      </footer>
    </>
  );
}