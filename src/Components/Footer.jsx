import React from "react";

const Footer = () => {
  return (
    <footer
      className="main-footer footer-style-one"
      style={{
        background: "#05080E",
        color: "#FFFFFF",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Footer Main / Content Section */}
      <div className="footer-lower" style={{ padding: "70px 0 50px" }}>
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="row g-4" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
            
            {/* Logo, Info & Socials Column */}
            <div style={{ flex: "1 1 280px", maxWidth: 320 }}>
              <div className="logo mb-3">
                <a href="/">
                  <img src="img/logo.png" alt="Logo" width={220} />
                </a>
              </div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
                Engineering robust enterprise solutions, digital transformations, and professional certifications globally.
              </p>

              {/* Contact Details Under Logo */}
              <ul className="list-unstyled mb-4" style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", lineHeight: 1.9, padding: 0 }}>
                <li className="d-flex align-items-center">
                  <i className="fa fa-map-marker-alt text-white" style={{ width: 20, marginRight: 8 }} />
                  <span>Malaysia, USA, Qatar, India</span>
                </li>
                <li className="d-flex align-items-center">
                  <i className="fa fa-envelope text-white" style={{ width: 20, marginRight: 8 }} />
                  <a href="mailto:info@4qubetech.com" className="text-white text-decoration-none">
                    info@4qubetech.com
                  </a>
                </li>
                <li className="d-flex align-items-center">
                  <i className="fa fa-phone text-white" style={{ width: 20, marginRight: 8 }} />
                  <a href="tel:+60322988310" className="text-white text-decoration-none">
                    +60 322988310
                  </a>
                </li>
              </ul>

              {/* Social Links Under Logo */}
              <div className="d-flex align-items-center gap-3">
                <span className="text-white fw-medium small">Follow Us</span>
                <ul className="social-icon-one light d-flex gap-2 list-unstyled mb-0 align-items-center" style={{ padding: 0, listStyle: "none" }}>
                  <li>
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="d-flex align-items-center justify-content-center rounded-circle text-white text-decoration-none"
                      style={{ width: 34, height: 34, background: "rgba(255,255,255,0.1)" }}
                    >
                      <i className="bi bi-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-label="X"
                      className="d-flex align-items-center justify-content-center rounded-circle text-white text-decoration-none"
                      style={{ width: 34, height: 34, background: "rgba(255,255,255,0.1)" }}
                    >
                      <i className="bi bi-twitter-x"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-label="Pinterest"
                      className="d-flex align-items-center justify-content-center rounded-circle text-white text-decoration-none"
                      style={{ width: 34, height: 34, background: "rgba(255,255,255,0.1)" }}
                    >
                      <i className="bi bi-pinterest"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-label="YouTube"
                      className="d-flex align-items-center justify-content-center rounded-circle text-white text-decoration-none"
                      style={{ width: 34, height: 34, background: "rgba(255,255,255,0.1)" }}
                    >
                      <i className="bi bi-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Links Column */}
            <div style={{ flex: "1 1 150px" }}>
              <h5 className="text-white fw-bold mb-3" style={{ fontSize: 17 }}>Quick Links</h5>
              <ul className="list-unstyled" style={{ lineHeight: 2, padding: 0, fontSize: 14 }}>
                <li><a href="/" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Home</a></li>
                <li><a href="/about-us" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>About Us</a></li>
                <li><a href="/careers" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Careers</a></li>
                <li><a href="/contact-us" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Contact Us</a></li>
              </ul>
            </div>

            {/* Services Column */}
            <div style={{ flex: "1 1 200px" }}>
              <h5 className="text-white fw-bold mb-3" style={{ fontSize: 17 }}>Services</h5>
              <ul className="list-unstyled" style={{ lineHeight: 2, padding: 0, fontSize: 14 }}>
                <li><a href="/web-designing" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Web Designing</a></li>
                <li><a href="/web-development" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Web Development</a></li>
                <li><a href="/mobile-app-development" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Mobile App Development</a></li>
                <li><a href="/digital-marketing" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Digital Marketing</a></li>
                <li><a href="/security-systems" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Security Systems</a></li>
                <li><a href="/industrial-automation-services" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Industrial Automation</a></li>
                <li><a href="/it-services" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>IT Services</a></li>
                <li><a href="/av-and-it-systems" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>AV and IT Systems</a></li>
                <li><a href="/cyber-security" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Cyber Security</a></li>
              </ul>
            </div>

            {/* Digital Transformation Column */}
            <div style={{ flex: "1 1 210px" }}>
              <h5 className="text-white fw-bold mb-3" style={{ fontSize: 17 }}>Digital Transformation</h5>
              <ul className="list-unstyled" style={{ lineHeight: 2, padding: 0, fontSize: 14 }}>
                <li><a href="/customer-experience-cpq" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Customer Experience & CPQ</a></li>
                <li><a href="/supply-chain-optimization" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Supply Chain Optimization</a></li>
                <li><a href="/big-data-and-analytics" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Big Data and Analytics</a></li>
                <li><a href="/mobility-and-ux" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Mobility and UX</a></li>
                <li><a href="/ai-and-ml" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>AI & ML</a></li>
                <li><a href="/robotic-process-automation" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Robotic Process Automation</a></li>
                <li><a href="/internet-of-things" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Internet of Things</a></li>
                <li><a href="/human-capital-management" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Human Capital Management</a></li>
              </ul>
            </div>

            {/* Trainings Column */}
            <div style={{ flex: "1 1 200px" }}>
              <h5 className="text-white fw-bold mb-3" style={{ fontSize: 17 }}>Trainings</h5>
              <ul className="list-unstyled" style={{ lineHeight: 2, padding: 0, fontSize: 14 }}>
                <li><a href="/pmp-training" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>PMP Training</a></li>
                <li><a href="/pmi-capm-training" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>PMI CAPM</a></li>
                <li><a href="/pmi-acp-training" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>PMI ACP</a></li>
                <li><a href="/pmi-rmp-training" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>PMI-RMP</a></li>
                <li><a href="/prince2-foundation-training" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>PRINCE2 Foundation</a></li>
                <li><a href="/prince2-practitioner-training" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>PRINCE2 Practitioner</a></li>
                <li><a href="/business-analytics-training" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Business Analytics</a></li>
                <li><a href="/tableau-training" className="text-white text-decoration-none" style={{ opacity: 0.8 }}>Tableau</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom / Copyright */}
      <div
        className="footer-bottom"
        style={{
          padding: "20px 0",
          background: "#030509",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="container text-center" style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <p className="mb-0" style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
            &copy; {new Date().getFullYear()} 4Qube Technologies Sdn Bhd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;