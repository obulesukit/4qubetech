import React from "react";
import {
  FaLaptopCode as LaptopCode,
  FaCode as Code,
  FaMobileAlt as MobileAlt,
  FaBullhorn as Bullhorn,
  FaShieldAlt as ShieldAlt,
  FaCogs as Cogs,
  FaServer as Server,
  FaTv as Tv,
  FaLock as Lock,
  FaSparkles as Sparkles,
} from "react-icons/fa";

const servicesList = [
  {
    title: "Web Designing",
    description: "Creative, responsive, and user-centric UI/UX web designs tailored for your brand identity.",
    icon: <LaptopCode size={18} />,
  },
  {
    title: "Web Development",
    description: "Robust, scalable, and high-performance web applications built using modern frameworks.",
    icon: <Code size={18} />,
  },
  {
    title: "Mobile App Development",
    description: "Feature-rich iOS and Android mobile applications designed for seamless user engagement.",
    icon: <MobileAlt size={18} />,
  },
  {
    title: "Digital Marketing",
    description: "Data-driven marketing campaigns, SEO, and social strategies to maximize digital reach.",
    icon: <Bullhorn size={18} />,
  },
  {
    title: "Security Systems",
    description: "Advanced surveillance, access control, and integrated physical security systems.",
    icon: <ShieldAlt size={18} />,
  },
  {
    title: "Industrial Automation Services",
    description: "Smart automation frameworks and control systems to optimize operational efficiency.",
    icon: <Cogs size={18} />,
  },
  {
    title: "IT Services",
    description: "Comprehensive enterprise IT infrastructure management, cloud solutions, and tech support.",
    icon: <Server size={18} />,
  },
  {
    title: "AV and IT Systems",
    description: "Integrated audio-visual solutions and modern collaborative communication hardware.",
    icon: <Tv size={18} />,
  },
  {
    title: "Cyber Security",
    description: "Proactive threat intelligence, vulnerability assessments, and enterprise data defense.",
    icon: <Lock size={18} />,
  },
];

const ServicesSection = () => {
  return (
    <section
      className="position-relative overflow-hidden text-center"
      style={{
        backgroundImage: "url('/img/4qube.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "100px 0 120px",
        fontFamily: "'Poppins', system-ui, sans-serif",
      }}
    >
      <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Section Header */}
        <div className="mb-5">
          <div className="d-inline-flex align-items-center mb-2">
            <span style={{ width: 8, height: 8, background: "#3B5BFF", borderRadius: "50%", marginRight: 8 }} />
            <span className="fw-bold text-uppercase" style={{ fontSize: 13, letterSpacing: 1, color: "#ffffff" }}>
              Our Capabilities
            </span>
          </div>
          <h2
            className="fw-bold text-white text-uppercase"
            style={{ fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.15, letterSpacing: "-1px" }}
          >
            What Can You <br /> Do With Our Services?
          </h2>
        </div>

        {/* Central Display Container simulating the phone showcase in Image 1 */}
        <div
          className="position-relative mx-auto p-4 p-md-5 rounded-5 shadow-lg mb-5"
          style={{
            maxWidth: 680,
            background: "rgba(25, 33, 56, 0.65)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          }}
        >
          <div className="text-white">
            <span
              className="badge rounded-pill px-3 py-2 mb-3 fw-medium"
              style={{ background: "rgba(59,91,255,0.25)", color: "#829BFF", fontSize: 12 }}
            >
              Enterprise Ecosystem
            </span>
            <h3 className="fw-bold mb-3" style={{ fontSize: 24, color: "#ffffff" }}>
              Comprehensive Digital Solutions
            </h3>
            <p className="small mb-0" style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.6, maxWidth: 500, margin: "0 auto" }}>
              Whether you are building your online presence, securing enterprise infrastructure, or scaling operations, 
              4 Qube Technologies integrates seamlessly into your growth roadmap with intelligent solutions.
            </p>
          </div>
        </div>

        {/* Floating Service Badges Layout (Inspired by Image 1 floating pills) */}
        <div
          className="d-flex align-items-center justify-content-center flex-wrap"
          style={{ gap: "16px", maxWidth: 1000, margin: "0 auto" }}
        >
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="d-flex align-items-center bg-white shadow-sm rounded-pill px-4 py-3"
              style={{
                color: "#1D2333",
                border: "1px solid #EEF0F6",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer",
              }}
            >
              <div
                className="rounded-circle d-flex align-items-center justify-content-center me-2"
                style={{ width: 28, height: 28, background: "#EEF0FF", color: "#3B5BFF" }}
              >
                {service.icon}
              </div>
              <span className="fw-bold" style={{ fontSize: 14, color: "#1D2333" }}>
                {service.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;