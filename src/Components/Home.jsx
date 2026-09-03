import React from "react";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";

const Home = () => {
  return (
    <div>
      <section className="banner-section video-banner">

        {/* Background Video */}
        <video
          className="banner-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/home-mian.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="video-overlay"></div>

        <div className="swiper banner-swiper">
          <div className="swiper-wrapper">

            {/* Banner Slide */}
            <div className="banner-slide swiper-slide">
              <div className="outer-box">
                <div className="inner-box">

                  

                  <div className="row">

                    {/* Content Column */}
                    <div className="content-column col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
                      <div className="inner-column">

                        <h5 className="text-white">
                          Welcome to  4Qube
                        </h5>

                        <h1 className="title animate-2">
                          <span className="color">
                            Software Development
                            <br />
                            and
                            <br />
                            Cloud Infrastructure Implementation
                          </span>
                        </h1>

                        <div
                          className="animate-3 text-white"
                          style={{ marginTop: 40 }}
                        >
                          A trusted provider of Software Development and Cloud
                          Infrastructure implementation for businesses across
                          various industries.
                        </div>

                        <div className="btn-box animate-4 d-flex justify-content-center mt-4">
                          <a
                            className="theme-btn-main"
                            href="/contact"
                          >
                            <span className="theme-btn-arrow-left">
                              <i className="fa fa-arrow-right"></i>
                            </span>

                            <span className="theme-btn">
                              Discover More
                            </span>

                            <span className="theme-btn-arrow-right">
                              <i className="fa fa-arrow-right"></i>
                            </span>
                          </a>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </section>

      <AboutSection />
      <ServicesSection />
      
    </div>
  );
};

export default Home;