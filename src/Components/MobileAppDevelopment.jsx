import React from "react";
import {
  FaMobileAlt as Smartphone,
  FaApple as Apple,
  FaAndroid as Android,
  FaCode as Code2,
  FaCheckCircle as CheckCircle2,
  FaArrowRight as ArrowRight,
  FaLayerGroup as Layers,
  FaShieldAlt as ShieldCheck,
  FaTrophy as Trophy,
  FaSearch as Search,
  FaClipboardList as ClipboardList,
  FaRocket as Rocket,
} from "react-icons/fa";

const services = [
  {
    icon: <Smartphone size={26} />,
    title: "Custom Mobile App Development",
    description:
      "Tailor-made native and hybrid applications designed to fit your unique business requirements and provide exceptional user engagement.",
    featured: true,
  },
  {
    icon: <Apple size={26} />,
    title: "iOS App Development",
    description:
      "Feature-rich, high-performance applications built using Swift, optimized specifically for the Apple ecosystem and devices.",
  },
  {
    icon: <Android size={26} />,
    title: "Android App Development",
    description:
      "Robust and scalable apps built using Kotlin and Java, ensuring seamless performance across a wide range of Android devices.",
  },
  {
    icon: <Layers size={26} />,
    title: "Cross-Platform Development",
    description:
      "Cost-effective applications built using React Native or Flutter that deliver a native-like experience across both iOS and Android from a single codebase.",
  },
  {
    icon: <Code2 size={26} />,
    title: "Mobile UI/UX Design",
    description:
      "Intuitive, touch-friendly interfaces and interactive prototypes that elevate user experience and maximize app retention rates.",
  },
  {
    icon: <Rocket size={26} />,
    title: "App Store Deployment & ASO",
    description:
      "End-to-end management of App Store and Google Play submissions, compliance checks, listing optimization, and post-launch updates.",
  },
];

const whyChooseUs = [
  "Native and cross-platform technical expertise",
  "Engaging, touch-optimized UI/UX design layouts",
  "High-performance architecture with offline capabilities",
  "Rigorous multi-device testing and QA standards",
  "Secure user authentication and data encryption",
  "Seamless API and backend database integrations",
  "Ongoing support, maintenance, and feature scalability",
];

const workflowSteps = [
  {
    icon: <Search size={18} />,
    label: "Discovery & Strategy",
    bg: "#E7F6EE",
    color: "#22A566",
    description:
      "We define user personas, core feature sets, and select the optimal tech stack for your mobile vision.",
  },
  {
    icon: <ClipboardList size={18} />,
    label: "UI/UX Prototyping",
    bg: "#EAF0FF",
    color: "#3B5BFF",
    description:
      "Designing interactive mobile wireframes and user journeys tested across standard device dimensions.",
  },
  {
    icon: <Code2 size={18} />,
    label: "App Engineering",
    bg: "#FFF1E6",
    color: "#FF8A3D",
    description:
      "Writing clean, modular code for client interfaces and connecting secure REST APIs and cloud backends.",
  },
  {
    icon: <Layers size={18} />,
    label: "Integration & Sync",
    bg: "#EEF4FF",
    color: "#3B5BFF",
    description:
      "Implementing push notifications, local data caching, payment gateways, and third-party services.",
  },
  {
    icon: <ShieldCheck size={18} />,
    label: "Device Testing",
    bg: "#E7F6EE",
    color: "#22A566",
    description:
      "Running rigorous performance, memory leak, and cross-device OS compatibility assessments.",
  },
  {
    icon: <Trophy size={18} />,
    label: "Store Launch & Support",
    bg: "#FFF1E6",
    color: "#FF8A3D",
    description:
      "Publishing your app live to the Apple App Store and Google Play Store with continued optimization.",
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

const MobileAppDevelopment = () => {
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
                Mobile App Development
              </span>
              <h1
                className="fw-bold text-white"
                style={{ fontSize: "clamp(30px, 4.2vw, 46px)", margin: "14px 0 18px", lineHeight: 1.2 }}
              >
                Next-Gen Mobile Apps Built for iOS & Android
              </h1>
              <p style={{ color: "#ffffff", maxWidth: 520, marginBottom: 16 }}>
                At <strong>4 Qube Technologies Sdn Bhd</strong>, we craft high-performance,
                feature-rich mobile applications that connect brands directly with their users.
                From intuitive consumer apps to robust enterprise mobility tools, our solutions
                deliver seamless device experiences and drive sustainable business growth.
              </p>
              <p style={{ color: "#ffffff", maxWidth: 520, marginBottom: 24 }}>
                Whether you prefer native iOS/Android development or a cross-platform framework like
                React Native or Flutter, our expert developers turn your vision into an optimized,
                app-store-ready product designed to captivate audiences.
              </p>
              <ul className="list-unstyled text-white" style={{ marginBottom: 28 }}>
                <li className="d-flex align-items-center mb-2">
                  <CheckCircle2 size={16} color="#ffffff" style={{ marginRight: 10 }} />
                  Native and cross-platform excellence
                </li>
                <li className="d-flex align-items-center text-white">
                  <CheckCircle2 size={16} color="#ffffff" style={{ marginRight: 10 }} />
                  Optimized user experience & fluid performance
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
                src="https://placehold.co/420x520/CBD5FF/1D2333?text=Mobile+Apps"
                alt="Mobile app development"
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
                      strokeDashoffset="30"
                      strokeLinecap="round"
                      transform="rotate(-90 27 27)"
                    />
                  </svg>
                  <div style={{ marginLeft: 10 }}>
                    <div className="fw-bold" style={{ fontSize: 20, lineHeight: 1 }}>
                      50+
                    </div>
                    <small style={{ color: "#9AA1B2", fontSize: 11 }}>Apps Launched</small>
                  </div>
                </div>
                <div style={{ marginTop: 10, fontSize: 10, color: "#9AA1B2" }}>
                  <div>
                    <span style={{ color: "#3B5BFF" }}>●</span> App Store
                  </div>
                  <div>
                    <span style={{ color: "#FF9F43" }}>●</span> Play Store
                  </div>
                  <div>
                    <span style={{ color: "#DCE1F5" }}>●</span> In Testing
                  </div>
                </div>
              </div>

              {/* Floating card: progress bar */}
              <div
                className="bg-white shadow rounded-4 p-3 position-absolute text-start"
                style={{ top: "12%", right: 0, zIndex: 2, width: 150 }}
              >
                <div className="fw-bold small mb-1">Downloads</div>
                <div className="fw-bold" style={{ fontSize: 20 }}>
                  100K+ <small style={{ color: "#9AA1B2", fontSize: 12, fontWeight: 400 }}>Users</small>
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
                    points="0,35 20,28 40,30 60,15 80,20 100,5 120,12"
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

      {/* ================= SERVICES ================= */}
      <section style={{ padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="text-center" style={{ marginBottom: 48 }}>
            <span className="fw-bold text-uppercase" style={{ color: "#ffffff", fontSize: 13, letterSpacing: 1 }}>
              Services
            </span>
            <h2 className="fw-bold text-white" style={{ fontSize: 34, marginTop: 6 }}>
              Our Mobile App Development Services
            </h2>
          </div>

          <div className="row g-4" style={{ display: "flex", flexWrap: "wrap" }}>
            {services.map((service, index) => (
              <div key={index} style={{ flex: "1 1 300px", maxWidth: 380, display: "flex" }}>
                <div
                  className="w-100 rounded-4 shadow-sm p-4 d-flex flex-column justify-content-between"
                  style={{
                    background: service.featured ? "#3B5BFF" : "#fff",
                    color: service.featured ? "#fff" : "#1D2333",
                    transform: service.featured ? "translateY(-14px) rotate(-1.5deg)" : "none",
                    border: service.featured ? "none" : "1px solid #EEF0F6",
                    minHeight: 230,
                  }}
                >
                  <div>
                    <div
                      className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{
                        width: 56,
                        height: 56,
                        background: service.featured ? "rgba(255,255,255,0.15)" : "#EEF0FF",
                        color: service.featured ? "#fff" : "#3B5BFF",
                      }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="fw-bold" style={{ fontSize: 18, marginBottom: 8 }}>
                      {service.title}
                    </h3>
                    <p
                      className="small mb-0"
                      style={{ color: service.featured ? "rgba(255,255,255,0.75)" : "#8A90A2" }}
                    >
                      {service.description}
                    </p>
                  </div>
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle mt-4"
                    style={{
                      width: 40,
                      height: 40,
                      background: service.featured ? "#fff" : "transparent",
                      color: "#3B5BFF",
                      border: service.featured ? "none" : "1px solid #3B5BFF",
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
              Why Choose 4 Qube Technologies Sdn Bhd?
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
                Process
              </span>
              <h2 className="fw-bold" style={{ fontSize: 32, margin: "6px 0 16px" }}>
                Our Mobile App Development Process
              </h2>
              <p style={{ color: "#6B7280", marginBottom: 24, maxWidth: 380 }}>
                Our systematic 6-stage development lifecycle ensures rigorous quality checks from initial wireframes 
                to final app store deployment.
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
                  <Smartphone size={26} color="#3B5BFF" style={{ marginBottom: 6 }} />
                  <div className="fw-bold" style={{ fontSize: 13 }}>
                    App Process
                  </div>
                  <small style={{ fontSize: 10, color: "#9AA1B2" }}>
                    Discovery to app store launch
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
                Our Work
              </span>
              <h2 className="fw-bold text-white" style={{ fontSize: 32, margin: "6px 0 16px" }}>
                Bring Your Mobile App Idea to Life
              </h2>
              <p style={{ color: "#ffffff", marginBottom: 16 }}>
                Your mobile application is often the most direct channel to your target audience. 
                At 4 Qube Technologies Sdn Bhd, we design and engineer feature-packed mobile solutions 
                that stand out in competitive app marketplaces.
              </p>
              <p style={{ color: "#ffffff", marginBottom: 24 }}>
                From intuitive cross-platform builds to high-performance native experiences, our development team 
                delivers scalable mobility solutions tailored to your business roadmap.
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

export default MobileAppDevelopment;