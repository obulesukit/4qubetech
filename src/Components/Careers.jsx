import React from "react";
import {
  FaBriefcase as Briefcase,
  FaMapMarkerAlt as MapMarker,
  FaClock as Clock,
  FaUsers as Users,
  FaRocket as Rocket,
  FaHeart as Heart,
  FaCheckCircle as CheckCircle2,
  FaArrowRight as ArrowRight,
  FaPaperPlane as PaperPlane,
} from "react-icons/fa";

const openPositions = [
  {
    title: "Senior React Developer",
    department: "Engineering",
    location: "Kuala Lumpur, Malaysia (Hybrid)",
    type: "Full-Time",
    description:
      "We are looking for an experienced React developer to build responsive web applications, manage component architecture, and optimize user interfaces.",
  },
  {
    title: "AI / Machine Learning Engineer",
    department: "Artificial Intelligence",
    location: "Remote / Global",
    type: "Full-Time",
    description:
      "Design, fine-tune, and deploy generative AI models, LLM pipelines, and predictive automation systems for enterprise clients.",
  },
  {
    title: "Project Management Trainer (PMP/PMI)",
    department: "Professional Training",
    location: "Doha, Qatar / Hybrid",
    type: "Full-Time / Contract",
    description:
      "Deliver PMI-authorized PMP, CAPM, and Agile training bootcamps, guiding professionals through certification exam success.",
  },
  {
    title: "Data Analyst & Tableau Specialist",
    department: "Data & Analytics",
    location: "Austin, TX, USA",
    type: "Full-Time",
    description:
      "Build interactive Tableau dashboards, clean enterprise data sources using Tableau Prep, and deliver actionable business intelligence insights.",
  },
];

const cultureBenefits = [
  {
    icon: <Rocket size={26} />,
    title: "Innovation & Growth",
    description: "Work on cutting-edge technologies including AI, IoT, cloud solutions, and digital transformation.",
  },
  {
    icon: <Users size={26} />,
    title: "Global Collaboration",
    description: "Collaborate with talented professionals across our offices in Malaysia, USA, Qatar, and India.",
  },
  {
    icon: <Heart size={26} />,
    title: "Work-Life Balance",
    description: "Enjoy flexible working hours, hybrid/remote options, and a supportive team environment.",
  },
];

const Careers = () => {
  return (
    <div style={{ fontFamily: "'Poppins', system-ui, sans-serif", color: "#FFFFFF" }}>
      {/* ================= HERO ================= */}
      <section
        className="position-relative overflow-hidden text-center"
        style={{
          backgroundImage: "url('/img/4qube.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "90px 0 70px",
        }}
      >
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "150px 24px" }}>
          <div className="d-inline-flex align-items-center mb-2">
            <span style={{ width: 8, height: 8, background: "#3B5BFF", borderRadius: "50%", marginRight: 8 }} />
            <span className="fw-bold text-uppercase" style={{ fontSize: 13, letterSpacing: 1, color: "#ffffff" }}>
              Join Our Team
            </span>
          </div>
          <h1 className="fw-bold text-white" style={{ fontSize: "clamp(30px, 4.2vw, 46px)", margin: "14px 0 18px", lineHeight: 1.2 }}>
            Build Your Career With 4Qube Technologies
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 620, margin: "0 auto" }}>
            We are always looking for passionate innovators, engineers, data scientists, and trainers to help shape the future of enterprise technology.
          </p>
        </div>
      </section>

      {/* ================= CULTURE & BENEFITS ================= */}
      <section style={{ padding: "80px 0", background: "#080C14" }}>
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="fw-bold text-uppercase" style={{ color: "#3B5BFF", fontSize: 13, letterSpacing: 1 }}>
              Why Work With Us
            </span>
            <h2 className="fw-bold text-white" style={{ fontSize: 34, marginTop: 6 }}>
              Life at 4Qube Technologies
            </h2>
          </div>

          <div className="row g-4" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {cultureBenefits.map((item, index) => (
              <div key={index} style={{ flex: "1 1 300px", maxWidth: 360, display: "flex" }}>
                <div
                  className="w-100 rounded-4 shadow-sm p-4 d-flex flex-column"
                  style={{
                    background: "rgba(25, 33, 56, 0.75)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: 56,
                      height: 56,
                      background: "rgba(59, 91, 255, 0.15)",
                      color: "#3B5BFF",
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="fw-bold text-white" style={{ fontSize: 18, marginBottom: 8 }}>
                    {item.title}
                  </h3>
                  <p className="small mb-0" style={{ color: "rgba(255,255,255,0.7)" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section style={{ padding: "90px 0", background: "#05080E" }}>
        <div className="container" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="fw-bold text-uppercase" style={{ color: "#3B5BFF", fontSize: 13, letterSpacing: 1 }}>
              Opportunities
            </span>
            <h2 className="fw-bold text-white" style={{ fontSize: 34, marginTop: 6 }}>
              Current Open Positions
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 500, margin: "8px auto 0" }}>
              Explore our open roles and find where your expertise fits best.
            </p>
          </div>

          <div className="row g-4" style={{ display: "flex", flexWrap: "wrap" }}>
            {openPositions.map((job, index) => (
              <div key={index} style={{ flex: "1 1 100%" }}>
                <div
                  className="rounded-4 p-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between shadow-sm"
                  style={{
                    background: "rgba(25, 33, 56, 0.6)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <div style={{ maxWidth: 700, marginBottom: 20 }}>
                    <div className="d-flex align-items-center gap-3 mb-2 flex-wrap">
                      <span
                        className="badge rounded-pill px-3 py-2 fw-medium"
                        style={{ background: "rgba(59,91,255,0.2)", color: "#829BFF", fontSize: 12 }}
                      >
                        {job.department}
                      </span>
                      <span className="small text-muted d-flex align-items-center">
                        <MapMarker size={14} style={{ marginRight: 6, color: "#3B5BFF" }} /> {job.location}
                      </span>
                      <span className="small text-muted d-flex align-items-center">
                        <Clock size={14} style={{ marginRight: 6, color: "#FF9F43" }} /> {job.type}
                      </span>
                    </div>
                    <h3 className="fw-bold text-white" style={{ fontSize: 20, marginBottom: 8 }}>
                      {job.title}
                    </h3>
                    <p className="small mb-0" style={{ color: "rgba(255,255,255,0.75)" }}>
                      {job.description}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#apply-form"
                      style={{
                        background: "#3B5BFF",
                        color: "#fff",
                        border: "none",
                        borderRadius: 999,
                        padding: "12px 28px",
                        fontWeight: 600,
                        fontSize: 13,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                      }}
                    >
                      APPLY NOW <ArrowRight size={14} style={{ marginLeft: 8 }} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPLICATION FORM ================= */}
      <section id="apply-form" style={{ background: "#030509", padding: "90px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
          <div className="text-center mb-5">
            <span className="fw-bold text-uppercase" style={{ fontSize: 13, letterSpacing: 1, color: "#3B5BFF" }}>
              Submit Your Resume
            </span>
            <h2 className="fw-bold text-white" style={{ fontSize: 32, marginTop: 6 }}>
              Don't See Your Role? Send Us Your CV
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 520, margin: "8px auto 0" }}>
              We're always interested in meeting talented individuals. Drop your details below and we'll reach out when a match opens up.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your application has been submitted successfully.");
            }}
            className="p-5 rounded-4 shadow-lg"
            style={{
              background: "rgba(25, 33, 56, 0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="row g-3" style={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 260px" }}>
                <label className="form-label fw-medium small text-white">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="form-control rounded-3 p-3 text-white"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", fontSize: 14 }}
                />
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <label className="form-label fw-medium small text-white">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="form-control rounded-3 p-3 text-white"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", fontSize: 14 }}
                />
              </div>
            </div>

            <div className="row g-3 mt-1" style={{ display: "flex", flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 260px" }}>
                <label className="form-label fw-medium small text-white">Position Applying For</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior React Developer"
                  className="form-control rounded-3 p-3 text-white"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", fontSize: 14 }}
                />
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <label className="form-label fw-medium small text-white">LinkedIn / Portfolio URL</label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/johndoe"
                  className="form-control rounded-3 p-3 text-white"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", fontSize: 14 }}
                />
              </div>
            </div>

            <div className="mt-3">
              <label className="form-label fw-medium small text-white">Cover Letter / Message</label>
              <textarea
                required
                rows="5"
                placeholder="Tell us about your experience and why you want to join 4Qube..."
                className="form-control rounded-3 p-3 text-white"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", fontSize: 14 }}
              />
            </div>

            <div className="text-center mt-4">
              <button
                type="submit"
                style={{
                  background: "#3B5BFF",
                  color: "#fff",
                  border: "none",
                  borderRadius: 999,
                  padding: "14px 36px",
                  fontWeight: 600,
                  fontSize: 14,
                  letterSpacing: 0.5,
                  boxShadow: "0 12px 24px rgba(59,91,255,0.35)",
                  cursor: "pointer",
                }}
              >
                SUBMIT APPLICATION <PaperPlane size={14} style={{ marginLeft: 8 }} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Careers;