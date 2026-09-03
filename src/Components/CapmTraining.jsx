import React from "react";
import {
  FaGraduationCap as GraduationCap,
  FaAward as Award,
  FaBookOpen as BookOpen,
  FaClipboardCheck as ClipboardCheck,
  FaUserTie as UserTie,
  FaCheckCircle as CheckCircle2,
  FaArrowRight as ArrowRight,
  FaShieldAlt as ShieldCheck,
  FaTrophy as Trophy,
  FaSearch as Search,
  FaClipboardList as ClipboardList,
  FaLaptopCode as Laptop,
} from "react-icons/fa";

const services = [
  {
    icon: <GraduationCap size={26} />,
    title: "Official CAPM Certification Bootcamp",
    description:
      "Comprehensive PMI-authorized training covering foundational project management, agile principles, and predictive frameworks for the CAPM exam.",
    featured: true,
  },
  {
    icon: <BookOpen size={26} />,
    title: "PMBOK & Agile Practice Guides",
    description:
      "Access curated study materials, PMBOK guide references, and essential foundational learning resources tailored for beginners.",
  },
  {
    icon: <ClipboardCheck size={26} />,
    title: "Beginner-Friendly Practice Exams",
    description:
      "Timed practice test modules and chapter-wise knowledge check quizzes designed to build confidence before the real exam.",
  },
  {
    icon: <Award size={26} />,
    title: "23 Contact Hours Certificate",
    description:
      "Earn the official 23 project management education hours required by PMI to qualify for the CAPM certification exam.",
  },
  {
    icon: <UserTie size={26} />,
    title: "Expert PMI-Certified Trainers",
    description:
      "Learn from seasoned project managers who break down complex PM concepts into clear, digestible, and practical lessons.",
  },
  {
    icon: <Laptop size={26} />,
    title: "Application Support & Mentorship",
    description:
      "Get personalized guidance on meeting PMI prerequisites, completing your application, and building an effective study plan.",
  },
];

const whyChooseUs = [
  "High first-time pass rate for entry-level project managers",
  "PMI-authorized curriculum and mandatory 23 contact hours",
  "Engaging instructors with real-world project management experience",
  "Comprehensive chapter quizzes and realistic exam simulators",
  "Flexible batch schedules tailored for students and busy professionals",
  "Complete PMI application filing and eligibility guidance",
  "Lifetime access to recorded session archives and review materials",
];

const workflowSteps = [
  {
    icon: <Search size={18} />,
    label: "Eligibility Review",
    bg: "#E7F6EE",
    color: "#22A566",
    description:
      "We verify your high school diploma/degree and educational hours to ensure you meet PMI CAPM prerequisites.",
  },
  {
    icon: <ClipboardList size={18} />,
    label: "Application Filing",
    bg: "#EAF0FF",
    color: "#3B5BFF",
    description:
      "Our mentors help you set up your PMI account and submit your official application smoothly.",
  },
  {
    icon: <GraduationCap size={18} />,
    label: "Bootcamp Training",
    bg: "#FFF1E6",
    color: "#FF8A3D",
    description:
      "Attend interactive classes covering predictive plans, agile methodologies, and business analysis frameworks.",
  },
  {
    icon: <BookOpen size={18} />,
    label: "Study & Practice",
    bg: "#EEF4FF",
    color: "#3B5BFF",
    description:
      "Review core concepts, solve practice questions, and clear doubts with expert trainers.",
  },
  {
    icon: <ClipboardCheck size={18} />,
    label: "Mock Examinations",
    bg: "#E7F6EE",
    color: "#22A566",
    description:
      "Take full-length simulated practice exams to evaluate your readiness and improve time management.",
  },
  {
    icon: <Trophy size={18} />,
    label: "Exam & Certification",
    bg: "#FFF1E6",
    color: "#FF8A3D",
    description:
      "Sit for the CAPM exam with complete confidence and earn your globally recognized credential.",
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

const CapmTraining = () => {
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
                PMI CAPM Training
              </span>
              <h1
                className="fw-bold text-white"
                style={{ fontSize: "clamp(30px, 4.2vw, 46px)", margin: "14px 0 18px", lineHeight: 1.2 }}
              >
                Launch Your Project Management Career with CAPM Certification
              </h1>
              <p style={{ color: "#ffffff", maxWidth: 520, marginBottom: 16 }}>
                At <strong>4 Qube Technologies Sdn Bhd</strong>, we offer specialized Certified Associate in 
                Project Management (CAPM) training programs designed for emerging professionals. Earn your required 
                23 contact hours and build a rock-solid foundation in predictive and agile practices.
              </p>
              <p style={{ color: "#ffffff", maxWidth: 520, marginBottom: 24 }}>
                Whether you are stepping into project management for the first time or looking to validate your knowledge 
                to employers globally, our expert-led bootcamp ensures you pass the CAPM exam on your first attempt.
              </p>
              <ul className="list-unstyled text-white" style={{ marginBottom: 28 }}>
                <li className="d-flex align-items-center mb-2">
                  <CheckCircle2 size={16} color="#ffffff" style={{ marginRight: 10 }} />
                  Official 23 contact hours & PMI-authorized curriculum
                </li>
                <li className="d-flex align-items-center text-white">
                  <CheckCircle2 size={16} color="#ffffff" style={{ marginRight: 10 }} />
                  Beginner-friendly instruction, quizzes & application guidance
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
                src="https://placehold.co/420x520/CBD5FF/1D2333?text=CAPM+Training"
                alt="PMI CAPM training course"
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
                      strokeDashoffset="12"
                      strokeLinecap="round"
                      transform="rotate(-90 27 27)"
                    />
                  </svg>
                  <div style={{ marginLeft: 10 }}>
                    <div className="fw-bold" style={{ fontSize: 20, lineHeight: 1 }}>
                      96%
                    </div>
                    <small style={{ color: "#9AA1B2", fontSize: 11 }}>Pass Rate</small>
                  </div>
                </div>
                <div style={{ marginTop: 10, fontSize: 10, color: "#9AA1B2" }}>
                  <div>
                    <span style={{ color: "#3B5BFF" }}>●</span> Enrolled
                  </div>
                  <div>
                    <span style={{ color: "#FF9F43" }}>●</span> Prepared
                  </div>
                  <div>
                    <span style={{ color: "#DCE1F5" }}>●</span> Certified
                  </div>
                </div>
              </div>

              {/* Floating card: progress bar */}
              <div
                className="bg-white shadow rounded-4 p-3 position-absolute text-start"
                style={{ top: "12%", right: 0, zIndex: 2, width: 150 }}
              >
                <div className="fw-bold small mb-1">Contact Hours</div>
                <div className="fw-bold" style={{ fontSize: 20 }}>
                  23 <small style={{ color: "#9AA1B2", fontSize: 12, fontWeight: 400 }}>Hours</small>
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
                    points="0,35 20,28 40,30 60,16 80,20 100,6 120,10"
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
              Our CAPM Training & Certification Services
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
                Our CAPM Training & Certification Journey
              </h2>
              <p style={{ color: "#6B7280", marginBottom: 24, maxWidth: 380 }}>
                Our structured 6-stage training pathway guarantees thorough exam preparation, application mentorship, 
                and first-time certification success.
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
                  <GraduationCap size={26} color="#3B5BFF" style={{ marginBottom: 6 }} />
                  <div className="fw-bold" style={{ fontSize: 13 }}>
                    CAPM Pathway
                  </div>
                  <small style={{ fontSize: 10, color: "#9AA1B2" }}>
                    Eligibility to certification
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
                Jumpstart Your Career with PMI CAPM Certification
              </h2>
              <p style={{ color: "#ffffff", marginBottom: 16 }}>
                Earning your Certified Associate in Project Management credential demonstrates a strong foundational understanding of project management principles. 
                At 4 Qube Technologies Sdn Bhd, we provide top-tier training bootcamps and structured guidance to ensure your exam success.
              </p>
              <p style={{ color: "#ffffff", marginBottom: 24 }}>
                From mandatory 23 contact hours and practice exams to expert mentorship, 
                our training team supports you from application to certification.
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

export default CapmTraining;