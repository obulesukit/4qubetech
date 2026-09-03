import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
 

const services = [
  {
    title: "Strategy & Research",
    icon: "bi-bullseye",
    description:
      "We create practical digital strategies based on research, customer needs and business objectives.",
    active: true,
  },
  {
    title: "Growth Tracking",
    icon: "bi-bar-chart-line",
    description:
      "Track performance, measure results and identify opportunities for sustainable business growth.",
  },
  {
    title: "Web Solution",
    icon: "bi-window",
    description:
      "Modern web solutions designed to provide a smooth experience across desktop, tablet and mobile.",
  },
  {
    title: "Web Development",
    icon: "bi-code-slash",
    description:
      "Scalable and reliable websites built with modern technologies and clean development practices.",
  },
];

const stats = [
  {
    number: "20+",
    label: "Satisfied Clients",
    icon: "bi-people",
  },
  {
    number: "30+",
    label: "Happy Clients",
    icon: "bi-person-check",
  },
  {
    number: "20M+",
    label: "Projects Completed",
    icon: "bi-rocket-takeoff",
  },
  {
    number: "50+",
    label: "Years Experience",
    icon: "bi-award",
  },
];

const workflowNodes = [
  {
    icon: "bi-bar-chart-line",
    className: "node-top",
  },
  {
    icon: "bi-globe2",
    className: "node-top-right",
  },
  {
    icon: "bi-lightbulb",
    className: "node-bottom-right",
  },
  {
    icon: "bi-lock",
    className: "node-bottom",
  },
  {
    icon: "bi-pie-chart",
    className: "node-bottom-left",
  },
  {
    icon: "bi-pin-angle",
    className: "node-top-left",
  },
];

const portfolioImages = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
    alt: "Team working on digital project",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    alt: "Business analytics dashboard",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
    alt: "Business professional",
  },
];

const testimonials = [
  {
    name: "Ciera Holbrook",
    role: "SEO Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    text: "The team delivered a professional digital solution with a clear strategy, excellent communication and strong attention to detail.",
  },
  {
    name: "Vireng Chauhan",
    role: "CEO Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    text: "We were impressed with the quality of work and the overall process. The final solution helped us move our digital presence forward.",
  },
];

const blogItemsLeft = [1, 2, 3, 4];
const blogItemsRight = [5, 6, 7, 8];

const BlogMiniCard = ({ item }) => (
  <div className="blog-mini-card">
    <img
      src={`https://picsum.photos/100/100?random=${item}`}
      alt="Blog thumbnail"
      className="blog-mini-image"
    />

    <div className="blog-mini-content">
      <span className="blog-category">TIPS &amp; TRICKS</span>

      <h6>
        Fusce mollis felis quis tristique...
      </h6>
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="landing-page">

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <div className="hero-content">

                <span className="section-badge">
                  WE ARE DIGITAL AGENCY
                </span>

                <h1>
                  We Design Interfaces
                  <span> That Users Love</span>
                </h1>

                <p className="hero-description">
                  We create modern digital experiences that combine
                  creative design, technology and business strategy to
                  help brands grow online.
                </p>

                <div className="hero-features">

                  <div className="hero-feature">
                    <span className="check-icon">
                      <i className="bi bi-check2"></i>
                    </span>
                    <span>Make Your Business Grow</span>
                  </div>

                  <div className="hero-feature">
                    <span className="check-icon">
                      <i className="bi bi-check2"></i>
                    </span>
                    <span>Organic Search SEO</span>
                  </div>

                </div>

                <button className="btn-primary-custom">
                  LEARN MORE
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>

              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-visual">

                <div className="hero-image-wrapper">

                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=85"
                    alt="Digital agency professional"
                    className="hero-image"
                  />

                  <div className="hero-project-card">
                    <div className="project-number">
                      75%
                    </div>

                    <div className="project-label">
                      Complete Project
                    </div>

                    <div className="project-link">
                      Upcoming Tasks
                    </div>
                  </div>

                  <div className="hero-analytics-card">

                    <div className="analytics-header">
                      <div className="analytics-icon">
                        <i className="bi bi-star-fill"></i>
                      </div>

                      <span>Daily Analytics</span>
                    </div>

                    <div className="analytics-growth">
                      <i className="bi bi-graph-up-arrow"></i>
                      +24% Sales Growth
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================
          SERVICES SECTION
      ========================== */}
      <section className="services-section section-padding">

        <div className="container">

          <div className="section-heading text-center">

            <span className="section-label">
              SERVICES
            </span>

            <h2>
              Our Digital Services
            </h2>

            <p>
              Digital solutions designed around your business goals.
            </p>

          </div>

          <div className="row g-4">

            {services.map((service, index) => (
              <div
                className="col-md-6 col-lg-3"
                key={index}
              >

                <div
                  className={`service-card ${
                    service.active ? "active" : ""
                  }`}
                >

                  <div className="service-icon">
                    <i className={`bi ${service.icon}`}></i>
                  </div>

                  <h5>
                    {service.title}
                  </h5>

                  <p>
                    {service.description}
                  </p>

                  <a
                    href="#more"
                    className="service-arrow"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =========================
          BUSINESS GOAL SECTION
      ========================== */}
      <section className="business-section">

        <div className="container">

          <div className="business-content text-center">

            <span className="section-label light">
              OUR EXPERIENCE
            </span>

            <h2>
              How We Can Help Your Business Goal
            </h2>

            <button className="video-button">
              <span>
                <i className="bi bi-play-fill"></i>
              </span>

              Play Video To Watch Behind The Scene
            </button>

          </div>

          <div className="row g-4 stats-row">

            {stats.map((stat, index) => (
              <div
                className="col-6 col-md-3"
                key={index}
              >

                <div className="stat-card">

                  <div className="stat-icon">
                    <i className={`bi ${stat.icon}`}></i>
                  </div>

                  <div>
                    <h3>
                      {stat.number}
                    </h3>

                    <span>
                      {stat.label}
                    </span>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =========================
          WORKFLOW SECTION
      ========================== */}
      <section className="workflow-section section-padding">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-5">

              <div className="workflow-content">

                <span className="section-label">
                  PROCESS
                </span>

                <h2>
                  Our Work Flow
                </h2>

                <p>
                  We follow a structured and transparent process
                  from research and planning to design, development
                  and final delivery.
                </p>

                <div className="ceo-info">

                  <div className="ceo-signature">
                    Jhone Doe
                  </div>

                  <div>
                    <strong>
                      CEO Jhone Doe
                    </strong>
                  </div>

                </div>

                <button className="btn-primary-custom">
                  LEARN MORE
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>

              </div>

            </div>

            <div className="col-lg-7">

              <div className="workflow-visual">

                <div className="workflow-circle">

                  <div className="workflow-center">

                    <div className="workflow-center-icon">
                      <i className="bi bi-shield-check"></i>
                    </div>

                    <h6>
                      Strategy &amp; Research
                    </h6>

                    <p>
                      Research, strategy and planning.
                    </p>

                  </div>

                  {workflowNodes.map((node, index) => (
                    <div
                      key={index}
                      className={`workflow-node ${node.className}`}
                    >
                      <i className={`bi ${node.icon}`}></i>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          PORTFOLIO SECTION
      ========================== */}
      <section className="portfolio-section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-4">

              <div className="portfolio-content">

                <span className="section-label">
                  PORTFOLIO
                </span>

                <h2>
                  Our Latest Work
                </h2>

                <p>
                  Explore some of our recent digital projects,
                  creative solutions and successful client work.
                </p>

                <button className="btn-primary-custom">
                  VIEW ALL
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>

              </div>

            </div>

            <div className="col-lg-8">

              <div className="row g-3">

                {portfolioImages.map((image, index) => (
                  <div
                    className="col-md-4"
                    key={index}
                  >

                    <div className="portfolio-item">

                      <img
                        src={image.src}
                        alt={image.alt}
                      />

                      <div className="portfolio-overlay">
                        <i className="bi bi-arrow-up-right"></i>
                      </div>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          TESTIMONIAL SECTION
      ========================== */}
      <section className="testimonial-section">

        <div className="container">

          <div className="section-heading text-center">

            <span className="section-label light">
              TESTIMONIAL
            </span>

            <h2>
              What Our Clients Say
            </h2>

          </div>

          <div className="row g-4 justify-content-center">

            {testimonials.map((testimonial, index) => (
              <div
                className="col-md-6"
                key={index}
              >

                <div className="testimonial-card">

                  <div className="testimonial-header">

                    <div className="testimonial-user">

                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                      />

                      <div>
                        <h6>
                          {testimonial.name}
                        </h6>

                        <span>
                          {testimonial.role}
                        </span>
                      </div>

                    </div>

                    <div className="quote-icon">
                      <i className="bi bi-quote"></i>
                    </div>

                  </div>

                  <div className="stars">
                    ★★★★★
                  </div>

                  <p>
                    {testimonial.text}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =========================
          BLOG SECTION
      ========================== */}
      <section className="blog-section section-padding">

        <div className="container">

          <div className="section-heading text-center">

            <span className="section-label">
              OUR BLOG
            </span>

            <h2>
              Latest News &amp; Blog
            </h2>

          </div>

          <div className="row g-4 align-items-center">

            {/* Left Blog List */}
            <div className="col-lg-3">

              <div className="blog-list">

                {blogItemsLeft.map((item) => (
                  <BlogMiniCard
                    item={item}
                    key={item}
                  />
                ))}

              </div>

            </div>


            {/* Featured Blog */}
            <div className="col-lg-6">

              <article className="featured-blog">

                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85"
                  alt="Featured blog"
                />

                <div className="featured-blog-content">

                  <div className="blog-meta">

                    <span>
                      TIPS &amp; TRICKS
                    </span>

                    <span>
                      20 AUGUST 2026
                    </span>

                  </div>

                  <h3>
                    Fusce mollis felis quis tristique.
                  </h3>

                  <p>
                    Discover useful digital strategies, creative
                    ideas and practical insights to improve your
                    online business presence.
                  </p>

                  <button className="btn-primary-custom small">
                    READ MORE
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>

                </div>

              </article>

            </div>


            {/* Right Blog List */}
            <div className="col-lg-3">

              <div className="blog-list">

                {blogItemsRight.map((item) => (
                  <BlogMiniCard
                    item={item}
                    key={item}
                  />
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          FLOATING BUTTON
      ========================== */}
      <button
        className="floating-plus"
        aria-label="Open menu"
      >
        <i className="bi bi-plus-lg"></i>
      </button>

    </div>
  );
};

export default LandingPage;