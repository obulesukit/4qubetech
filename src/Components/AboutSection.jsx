import React from "react";
import {
  FaGlobeAmericas as GlobeAmericas,
  FaRocket as Rocket,
  FaCheckCircle as CheckCircle2,
  FaArrowRight as ArrowRight,
} from "react-icons/fa";

const AboutSection = () => {
  return (
    <div style={{ fontFamily: "'Poppins', system-ui, sans-serif", color: "#1D2333" }}>
      {/* ================= ABOUT US HERO / SECTION ================= */}
      <section
        className="position-relative overflow-hidden"
        style={{
          backgroundImage: "url('/img/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "90px 0 70px",
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "150px 24px" }}>
          <div className="row align-items-center" style={{ display: "flex", flexWrap: "wrap" }}>
            
            {/* Left Content Column */}
            <div style={{ flex: "1 1 480px", paddingRight: 24 }}>
              <span
                className="fw-bold text-uppercase"
                style={{ color: "#000000", fontSize: 13, letterSpacing: 1 }}
              >
                About Us
              </span>
              <h1
                className="fw-bold text-black"
                style={{   fontSize: "clamp(30px, 4.2vw, 46px)", margin: "14px 0 18px", lineHeight: 1.2 }}
              >
                Engineering the Future of Enterprise Digital Transformation
              </h1>
              <p style={{ color: "#000000", maxWidth: 520, marginBottom: 16, lineHeight: 1.6 }}>
                At <strong>4 Qube Technologies Sdn Bhd</strong>, we are a global technology leader dedicated to delivering 
                robust enterprise solutions, cutting-edge AI integration, digital transformation, and professional certifications. 
                We empower businesses worldwide to scale, optimize, and innovate.
              </p>
              <p style={{ color: "#000000", maxWidth: 520, marginBottom: 24, lineHeight: 1.6 }}>
                With a multinational presence spanning Malaysia, USA, Qatar, and India, our multidisciplinary team of engineers, 
                data scientists, and certified trainers combine technical excellence with localized strategic insights.
              </p>
              
              <ul className="list-unstyled text-black" style={{ marginBottom: 28, padding: 0 }}>
                <li className="d-flex align-items-center mb-2">
                  <CheckCircle2 size={16} color="#000000" style={{ marginRight: 10, flexShrink: 0 }} />
                  Global offices across Malaysia, USA, Qatar, and India
                </li>
                <li className="d-flex align-items-center text-black">
                  <CheckCircle2 size={16} color="#000000" style={{ marginRight: 10, flexShrink: 0 }} />
                  End-to-end digital solutions & accredited professional training
                </li>
              </ul>

              <button
                style={{
                  background: "#3B5BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: 999,
                  padding: "14px 32px",
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: 0.5,
                  boxShadow: "0 12px 24px rgba(59,91,255,0.35)",
                  cursor: "pointer",
                }}
              >
                GET A FREE QUOTE
              </button>
            </div>

            {/* Right Graphics / Floating Cards Column */}
            <div style={{ flex: "1 1 400px", position: "relative", textAlign: "center", marginTop: 40 }}>
              <div
                style={{
                  position: "absolute",
                  inset: "5% 12%",
                  background: "#3B5BFF",
                  borderRadius: "48% 52% 50% 50% / 55% 50% 50% 45%",
                  zIndex: 0,
                }}
              />
              <img
                src="https://placehold.co/420x520/CBD5FF/1D2333?text=About+4Qube"
                alt="About 4Qube Technologies"
                className="img-fluid"
                style={{ position: "relative", zIndex: 1, borderRadius: 24, maxWidth: "80%" }}
              />

              {/* Floating card: Global Presence */}
              <div
                className="bg-white shadow rounded-4 p-3 position-absolute text-start"
                style={{ top: "12%", right: 0, zIndex: 2, width: 160 }}
              >
                <div className="d-flex align-items-center mb-1">
                  <GlobeAmericas size={18} color="#3B5BFF" style={{ marginRight: 6 }} />
                  <div className="fw-bold small">Global Footprint</div>
                </div>
                <div className="fw-bold" style={{ fontSize: 18, color: "#1D2333" }}>
                  4 <small style={{ color: "#9AA1B2", fontSize: 12, fontWeight: 400 }}>Countries</small>
                </div>
                <div
                  style={{
                    height: 6,
                    borderRadius: 999,
                    background: "linear-gradient(90deg,#3B5BFF,#FF9F43,#FF6B8B)",
                    marginTop: 8,
                  }}
                />
              </div>

              {/* Floating card: Innovation Badge */}
              <div
                className="bg-white shadow rounded-4 p-3 position-absolute"
                style={{ top: "10%", left: 0, zIndex: 2, width: 160 }}
              >
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: 40, height: 40, background: "#EAF0FF", color: "#3B5BFF", flexShrink: 0 }}
                  >
                    <Rocket size={20} />
                  </div>
                  <div style={{ marginLeft: 10, textAlign: "left" }}>
                    <div className="fw-bold" style={{ fontSize: 16, lineHeight: 1, color: "#1D2333" }}>
                      100%
                    </div>
                    <small style={{ color: "#9AA1B2", fontSize: 10 }}>Innovation</small>
                  </div>
                </div>
              </div>

              {/* Floating card: mini chart */}
              <div
                className="bg-white shadow rounded-4 p-2 position-absolute"
                style={{ bottom: "6%", right: "6%", zIndex: 2, width: 130 }}
              >
                <svg width="100%" height="46" viewBox="0 0 120 46">
                  <polyline
                    points="0,38 20,30 40,24 60,18 80,12 100,5 120,2"
                    fill="none"
                    stroke="#3B5BFF"
                    strokeWidth="2.5"
                  />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;