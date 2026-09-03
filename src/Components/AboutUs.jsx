import React from "react";
import {
  FaBuilding as Building,
  FaGlobeAmericas as GlobeAmericas,
  FaHandshake as Handshake,
  FaAward as Award,
  FaCheckCircle as CheckCircle2,
  FaArrowRight as ArrowRight,
  FaShieldAlt as ShieldCheck,
  FaTrophy as Trophy,
  FaSearch as Search,
  FaClipboardList as ClipboardList,
  FaRocket as Rocket,
} from "react-icons/fa";

const companyValues = [
  {
    icon: <Rocket size={26} />,
    title: "Innovation & Excellence",
    description:
      "We pioneer advanced digital transformations, cutting-edge AI pipelines, and enterprise automation to keep our clients ahead of the curve.",
    featured: true,
  },
  {
    icon: <GlobeAmericas size={26} />,
    title: "Global Reach & Local Expertise",
    description:
      "With active offices across Malaysia, USA, Qatar, and India, we deliver world-class solutions backed by localized support and insights.",
  },
  {
    icon: <Handshake size={26} />,
    title: "Client-Centric Partnerships",
    description:
      "We build long-term collaborations, aligning our technology and professional training services directly with your strategic business goals.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Uncompromising Quality",
    description:
      "From rigorous software development standards to PMI-authorized professional certifications, we guarantee absolute excellence.",
  },
  {
    icon: <Award size={26} />,
    title: "Certified Professional Training",
    description:
      "Empowering project leaders and teams worldwide through accredited PMP, CAPM, PRINCE2, and data analytics bootcamps.",
  },
  {
    icon: <Building size={26} />,
    title: "Enterprise Scalability",
    description:
      "Architecting robust IT infrastructure, cloud data optimization, and scalable systems designed to grow seamlessly with your enterprise.",
  },
];

const whyChooseUs = [
  "Proven track record of delivering end-to-end digital transformation solutions",
  "Multidisciplinary expertise spanning software engineering, AI, and project management",
  "Global operational footprint across Malaysia, USA, Qatar, and India",
  "Accredited professional training programs with high exam pass rates",
  "Rigorous quality assurance, security protocols, and data governance standards",
  "Customized enterprise solutions tailored to unique industry requirements",
  "Dedicated ongoing support, maintenance, and technical consultation",
];

const workflowSteps = [
  {
    icon: <Search size={18} />,
    label: "Discovery & Vision",
    bg: "#E7F6EE",
    color: "#22A566",
    description:
      "We understand your corporate mission, technological challenges, and strategic long-term objectives.",
  },
  {
    icon: <ClipboardList size={18} />,
    label: "Strategic Roadmap",
    bg: "#EAF0FF",
    color: "#3B5BFF",
    description:
      "Our strategists outline comprehensive project architectures, timelines, and resource frameworks.",
  },
  {
    icon: <Rocket size={18} />,
    label: "Execution & Build",
    bg: "#FFF1E6",
    color: "#FF8A3D",
    description:
      "Developing robust applications, deploying data pipelines, or conducting intensive professional training bootcamps.",
  },
  {
    icon: <Handshake size={18} />,
    label: "Integration & Testing",
    bg: "#EEF4FF",
    color: "#3B5BFF",
    description:
      "Validating system integration, performance security, and quality compliance standards.",
  },
  {
    icon: <ShieldCheck size={18} />,
    label: "Deployment & Launch",
    bg: "#E7F6EE",
    color: "#22A566",
    description:
      "Launching your digital platform or professional certification program live into production.",
  },
  {
    icon: <Trophy size={18} />,
    label: "Continuous Growth",
    bg: "#FFF1E6",
    color: "#FF8A3D",
    description:
      "Providing ongoing monitoring, updates, and strategic scaling support to ensure continuous success.",
  },
];

const IconBadge = ({ children, bg, color = "#fff" }) => (
  <div
    className="d-flex align-items-center justify-content-center rounded-3"
    style={{ width: 52, height: 52, background: bg, color }}
  >
    {children}
  </div>
);

const AboutUs = () => {
  return (
    <div style={{ fontFamily: "'Poppins', system-ui, sans-serif", color: "#1D2333" }}>
      {/* ================= HERO ================= */}
      <section
        className="position-relative overflow-hidden"
        style={{
          backgroundImage: "url('/img/4qube.jpg')",
          backgroundSize: "cover",
          padding: "90px 0 70px",
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "150px 24px" }}>
          <div className="row align-items-center" style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 480px", paddingRight: 24 }}>
              <span
                className="fw-bold text-uppercase"
                style={{ color: "#ffffff", fontSize: 13, letterSpacing: 1 }}
              >
                About Us
              </span>
              <h1
                className="fw-bold text-white"
                style={{ fontSize: "clamp(30px, 4.2vw, 46px)", margin: "14px 0 18px", lineHeight: 1.2 }}
              >
                Engineering the Future of Enterprise Digital Transformation
              </h1>
              <p style={{ color: "#ffffff", maxWidth: 520, marginBottom: 16 }}>
                At <strong>4 Qube Technologies Sdn Bhd</strong>, we are a global technology leader dedicated to delivering 
                robust enterprise solutions, cutting-edge AI integration, digital transformation, and professional certifications. 
                We empower businesses worldwide to scale, optimize, and innovate.
              </p>
              <p style={{ color: "#ffffff", maxWidth: 520, marginBottom: 24 }}>
                With a multinational presence spanning Malaysia, USA, Qatar, and India, our multidisciplinary team of engineers, 
                data scientists, and certified trainers combine technical excellence with localized strategic insights.
              </p>
              <ul className="list-unstyled text-white" style={{ marginBottom: 28 }}>
                <li className="d-flex align-items-center mb-2">
                  <CheckCircle2 size={16} color="#ffffff" style={{ marginRight: 10 }} />
                  Global offices across Malaysia, USA, Qatar, and India
                </li>
                <li className="d-flex align-items-center text-white">
                  <CheckCircle2 size={16} color="#ffffff" style={{ marginRight: 10 }} />
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
                }}
              >
                GET A FREE QUOTE
              </button>
            </div>

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

              {/* Floating card: circular progress */}
              <div
                className="bg-white shadow rounded-4 p-3 position-absolute"
                style={{ top: "10%", left: 0, zIndex: 2, width: 168 }}
              >
                <div className="d-flex align-items-center">
                  <svg width="54" height="54" viewBox="0 0 54 54">
                    <circle cx="27" cy="27" r="22" fill="none" stroke="#EEF0F6" strokeWidth="6" />
                    <circle
                      cx="27"
                      cy="27"
                      r="22"
                      fill="none"
                      stroke="#3B5BFF"
                      strokeWidth="6"
                      strokeDasharray="138"
                      strokeDashoffset="15"
                      strokeLinecap="round"
                      transform="rotate(-90 27 27)"
                    />
                  </svg>
                  <div style={{ marginLeft: 10 }}>
                    <div className="fw-bold" style={{ fontSize: 20, lineHeight: 1 }}>
                      100%
                    </div>
                    <small style={{ color: "#9AA1B2", fontSize: 11 }}>Commitment</small>
                  </div>
                </div>
                <div style={{ marginTop: 10, fontSize: 10, color: "#9AA1B2" }}>
                  <div>
                    <span style={{ color: "#3B5BFF" }}>●</span> Global
                  </div>
                  <div>
                    <span style={{ color: "#FF9F43" }}>●</span> Innovative
                  </div>
                  <div>
                    <span style={{ color: "#DCE1F5" }}>●</span> Trusted
                  </div>
                </div>
              </div>

              {/* Floating card: progress bar */}
              <div
                className="bg-white shadow rounded-4 p-3 position-absolute text-start"
                style={{ top: "12%", right: 0, zIndex: 2, width: 150 }}
              >
                <div className="fw-bold small mb-1">Global Presence</div>
                <div className="fw-bold" style={{ fontSize: 20 }}>
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

              {/* Floating card: mini line chart */}
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

      {/* ================= VALUES / SERVICES ================= */}
      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="fw-bold text-uppercase" style={{ color: "#ffffff", fontSize: 13, letterSpacing: 1 }}>
              Our Core Values
            </span>
            <h2 className="fw-bold text-white" style={{ fontSize: 34, marginTop: 6 }}>
              What Drives 4Qube Technologies
            </h2>
          </div>

          <div className="row g-4" style={{ display: "flex", flexWrap: "wrap" }}>
            {companyValues.map((val, index) => (
              <div key={index} style={{ flex: "1 1 300px", maxWidth: 380, display: "flex" }}>
                <div
                  className="w-100 rounded-4 shadow-sm p-4 d-flex flex-column justify-content-between"
                  style={{
                    background: val.featured ? "#3B5BFF" : "#fff",
                    color: val.featured ? "#fff" : "#1D2333",
                    transform: val.featured ? "translateY(-14px) rotate(-1.5deg)" : "none",
                    border: val.featured ? "none" : "1px solid #EEF0F6",
                    minHeight: 230,
                  }}
                >
                  <div>
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{
                        width: 56,
                        height: 56,
                        background: val.featured ? "rgba(255,255,255,0.15)" : "#EEF0FF",
                        color: val.featured ? "#fff" : "#3B5BFF",
                      }}
                    >
                      {val.icon}
                    </div>
                    <h3 className="fw-bold" style={{ fontSize: 18, marginBottom: 8 }}>
                      {val.title}
                    </h3>
                    <p
                      className="small mb-0"
                      style={{ color: val.featured ? "rgba(255,255,255,0.75)" : "#8A90A2" }}
                    >
                      {val.description}
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle mt-4"
                    style={{
                      width: 40,
                      height: 40,
                      background: val.featured ? "#fff" : "transparent",
                      color: "#3B5BFF",
                      border: val.featured ? "none" : "1px solid #3B5BFF",
                    }}
                  >
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section style={{ background: "rgb(191 135 13)", color: "#fff", padding: "70px 0" }}>
        <div className="container" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div className="text-center" style={{ marginBottom: 44 }}>
            <span className="fw-bold text-uppercase" style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, letterSpacing: 1 }}>
              Why Us
            </span>
            <h2 className="fw-bold" style={{ fontSize: 32, marginTop: 6 }}>
              Why Partner With 4 Qube Technologies Sdn Bhd?
            </h2>
          </div>

          <div className="row g-3" style={{ display: "flex", flexWrap: "wrap" }}>
            {whyChooseUs.map((item, index) => (
              <div key={index} style={{ flex: "1 1 300px", maxWidth: 340 }}>
                <div
                  className="bg-white rounded-4 shadow-sm p-3 h-100 d-flex align-items-center"
                  style={{ color: "#1D2333" }}
                >
                  <IconBadge bg={["#FF9F43", "#5B7FFF", "#FF6B8B", "#FFC93C", "#22A566", "#3B5BFF", "#FF8A3D"][index % 7]}>
                    <CheckCircle2 size={20} />
                  </IconBadge>
                  <div className="small fw-medium" style={{ marginLeft: 14 }}>
                    {item}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WORKFLOW / PROCESS ================= */}
      <section style={{ background: "#F8F9FD", padding: "90px 0" }}>
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="row align-items-center" style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 380px", marginBottom: 40 }}>
              <span className="fw-bold text-uppercase" style={{ color: "#3B5BFF", fontSize: 13, letterSpacing: 1 }}>
                Our Approach
              </span>
              <h2 className="fw-bold" style={{ fontSize: 32, margin: "6px 0 16px" }}>
                How We Deliver Enterprise Success
              </h2>
              <p style={{ color: "#6B7280", marginBottom: 24, maxWidth: 380 }}>
                Our structured 6-stage operational framework guarantees thorough discovery, robust execution, 
                and continuous partnership growth.
              </p>
              <div style={{ marginBottom: 20 }}>
                <div className="fw-bold" style={{ fontSize: 16 }}>
                  {workflowSteps[0].label}
                </div>
                <small style={{ color: "#9AA1B2" }}>{workflowSteps[0].description}</small>
              </div>
              <button
                style={{
                  background: "#3B5BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: 999,
                  padding: "13px 30px",
                  fontWeight: 600,
                  fontSize: 13,
                }}
              >
                START YOUR PROJECT
              </button>
            </div>

            <div style={{ flex: "1 1 460px" }}>
              <div
                className="position-relative d-flex align-items-center justify-content-center mx-auto"
                style={{ width: 380, height: 380 }}
              >
                <div
                  className="position-absolute rounded-circle"
                  style={{
                    inset: 0,
                    border: "2px dashed #D7DCEF",
                  }}
                />
                {workflowSteps.map((step, index) => {
                  const angle = (index * 60 - 90) * (Math.PI / 180);
                  const radius = 190;
                  const x = 190 + radius * Math.cos(angle);
                  const y = 190 + radius * Math.sin(angle);
                  return (
                    <div
                      key={index}
                      className="position-absolute bg-white rounded-circle shadow-sm text-center d-flex flex-column align-items-center justify-content-center"
                      style={{
                        left: x,
                        top: y,
                        transform: "translate(-50%, -50%)",
                        width: 86,
                        height: 86,
                        padding: 6,
                      }}
                      title={step.description}
                    >
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: 30, height: 30, background: step.bg, color: step.color }}
                      >
                        {step.icon}
                      </div>
                      <small className="fw-bold mt-1" style={{ fontSize: 9, color: "#6B7280", lineHeight: 1.1 }}>
                        {step.label}
                      </small>
                    </div>
                  );
                })}
                <div
                  className="bg-white rounded-circle shadow d-flex flex-column align-items-center justify-content-center text-center"
                  style={{ width: 170, height: 170, zIndex: 2, padding: 16 }}
                >
                  <Building size={26} color="#3B5BFF" style={{ marginBottom: 6 }} />
                  <div className="fw-bold" style={{ fontSize: 13 }}>
                    Our Lifecycle
                  </div>
                  <small style={{ fontSize: 10, color: "#9AA1B2" }}>
                    Discovery to growth
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO / DIGITAL PRESENCE ================= */}
      <section style={{ padding: "90px 0" }}>
        <div className="container text-center" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="row align-items-center g-4" style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 320px" }}>
              <span className="fw-bold text-uppercase" style={{ color: "#ffffff", fontSize: 13, letterSpacing: 1 }}>
                Our Legacy
              </span>
              <h2 className="fw-bold text-white" style={{ fontSize: 32, margin: "6px 0 16px" }}>
                Transforming Enterprises Across the Globe
              </h2>
              <p style={{ color: "#ffffff", marginBottom: 16 }}>
                Building a successful enterprise requires reliable technological foundations, strategic clarity, and continuous skill development. 
                At 4 Qube Technologies Sdn Bhd, we deliver comprehensive digital transformation and professional training solutions.
              </p>
              <p style={{ color: "#ffffff", marginBottom: 24 }}>
                From advanced software development and AI integration to accredited project management bootcamps, 
                our global team is committed to driving your long-term success.
              </p>
              <button
                style={{
                  background: "#3B5BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: 999,
                  padding: "13px 28px",
                  fontWeight: 600,
                  fontSize: 13,
                }}
              >
                VIEW OUR WORK
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;