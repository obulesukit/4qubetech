import React from "react";
import {
  FaMapMarkerAlt as MapMarker,
  FaPhoneAlt as Phone,
  FaArrowRight as ArrowRight,
  FaPaperPlane as PaperPlane,
} from "react-icons/fa";

const locations = [
  {
    country: "Malaysia",
    code: "MY",
    address:
      "4Qube Technologies Sdn Bhd Unit 1-1 Innovation House, Technology Park Malaysia, Bukit Jalil, Kuala Lumpur, Malaysia - 57000, Malaysia",
    phone: "(+06)017 400 6117",
    hours: "Monday - Friday 9:00 am to 06:00 pm",
  },
  {
    country: "USA",
    code: "US",
    address: "105 Dasher Dr Cedar Park, TX 78613",
    phone: "(512) 428-5544",
    hours: "Monday - Friday 9:00 am to 06:00 pm",
  },
  {
    country: "Qatar",
    code: "QA",
    address: "Al Wakrah, Doha, Qatar. po.box:24646",
    phone: "0974-66546564",
    hours: "Monday - Friday 9:00 am to 06:00 pm",
  },
];

const ContactUs = () => {
  return (
    <div style={{ fontFamily: "'Poppins', system-ui, sans-serif", color: "#FFFFFF" }}>
      {/* ================= HERO / HEADER WITH BACKGROUND ================= */}
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
              Contact Us
            </span>
          </div>
          <h1 className="fw-bold text-white" style={{ fontSize: "clamp(30px, 4.2vw, 46px)", margin: "14px 0 18px", lineHeight: 1.2 }}>
            4Qube Technologies Locations
          </h1>
          <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 600, margin: "0 auto" }}>
            Get in touch with our global offices across Malaysia, USA, and Qatar. We are here to support your enterprise growth.
          </p>
        </div>
      </section>

      {/* ================= LOCATIONS CARDS ================= */}
      <section style={{ padding: "60px 0 90px", background: "#080C14" }}>
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="row g-4" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {locations.map((loc, index) => (
              <div key={index} style={{ flex: "1 1 320px", maxWidth: 380, display: "flex" }}>
                <div
                  className="w-100 rounded-4 shadow-lg p-4 d-flex flex-column justify-content-between position-relative overflow-hidden"
                  style={{
                    background: "rgba(25, 33, 56, 0.75)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    minHeight: 460, // Uniform card height
                    transition: "transform 0.3s ease",
                  }}
                >
                  <div>
                    {/* Country Code Badge */}
                    <div className="text-center mb-4">
                      <div
                        className="d-inline-flex align-items-center justify-content-center rounded-circle shadow-sm fw-bold text-white"
                        style={{
                          width: 72,
                          height: 72,
                          background: "#1D2333",
                          fontSize: 20,
                          letterSpacing: 1,
                        }}
                      >
                        {loc.code}
                      </div>
                      <h3 className="fw-bold text-white mt-3" style={{ fontSize: 22 }}>
                        {loc.country}
                      </h3>
                    </div>

                    {/* Address & Details */}
                    <div className="mb-4" style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
                      <div className="d-flex align-items-start mb-3">
                        <MapMarker size={16} color="#3B5BFF" style={{ marginTop: 4, marginRight: 10, flexShrink: 0 }} />
                        <span>{loc.address}</span>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <Phone size={16} color="#3B5BFF" style={{ marginRight: 10, flexShrink: 0 }} />
                        <span className="fw-medium text-white">Telephone: {loc.phone}</span>
                      </div>
                    </div>

                    <hr style={{ borderColor: "rgba(255,255,255,0.1)", margin: "20px 0" }} />

                    {/* Hours of Operation */}
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                      <div className="fw-bold mb-1 text-white">
                        Hours of Operation:
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <ArrowRight size={14} color="#FF9F43" style={{ marginRight: 8, flexShrink: 0 }} />
                        <span>{loc.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT FORM SECTION ================= */}
      <section style={{ background: "#05080E", padding: "90px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
          <div className="text-center mb-5">
            <span className="fw-bold text-uppercase" style={{ fontSize: 13, letterSpacing: 1, color: "#3B5BFF" }}>
              Send a Message
            </span>
            <h2 className="fw-bold text-white" style={{ fontSize: 32, marginTop: 6 }}>
              Have Questions? Get In Touch
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", maxWidth: 500, margin: "8px auto 0" }}>
              Fill out the form below and our team will get back to you promptly.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your message has been sent successfully.");
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
                <label className="form-label fw-medium small text-white">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="form-control rounded-3 p-3 text-white"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", fontSize: 14 }}
                />
              </div>
              <div style={{ flex: "1 1 260px" }}>
                <label className="form-label fw-medium small text-white">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="form-control rounded-3 p-3 text-white"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", fontSize: 14 }}
                />
              </div>
            </div>

            <div className="mt-3">
              <label className="form-label fw-medium small text-white">
                Subject
              </label>
              <input
                type="text"
                required
                placeholder="How can we help you?"
                className="form-control rounded-3 p-3 text-white"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", fontSize: 14 }}
              />
            </div>

            <div className="mt-3">
              <label className="form-label fw-medium small text-white">
                Message
              </label>
              <textarea
                required
                rows="5"
                placeholder="Write your message here..."
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
                SEND MESSAGE <PaperPlane size={14} style={{ marginLeft: 8 }} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;