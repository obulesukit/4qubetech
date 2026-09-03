import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="main-header header-style-one">
                {/* Header Top */}
                <div className="header-top">
                    <div className="inner-container">
                        <div className="top-left">
                            <ul className="list-style-one">
                                <li className="text-white">
                                    <i className="fa fa-map-marker-alt text-white" /> Malaysia, USA,
                                    Qatar, India{" "}
                                </li>
                                <li>
                                    <i className="fa fa-envelope text-white" />{" "}
                                    <a href="#" className="mailto:info@4qubetechnologies.com">
                                        <span className="__cf_email__ text-white" data-cfemail=" ">
                                            info@4qubetech.com
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <i className="fa fa-phone text-white" />{" "}
                                    <a href="#" className="tel:+60 322988310 text-white">
                                        +60 322988310
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="top-right">
                            <div className="inner">
                                <ul className="nav-list">
                                    <li className="text-white">Follow Us</li>
                                </ul>

                                <ul className="social-icon-one light">
                                    <li>
                                        <a href="#" aria-label="Facebook">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" aria-label="X">
                                            <i className="bi bi-twitter-x"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" aria-label="Pinterest">
                                            <i className="bi bi-pinterest"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" aria-label="YouTube">
                                            <i className="bi bi-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header Top */}
                <div className="header-lower">
                    {/* Main box */}
                    <div className="main-box">
                        <div className="logo-box">
                            <div className="logo">
                                <a href="/">
                                    <img src="img/logo.png" alt="Logo" width={300} />
                                </a>
                            </div>
                        </div>
                        {/*Nav Box*/}
                        <div className="nav-outer">
                            <nav className="nav main-menu">
                                <ul className="navigation">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/about-us">About Us</a>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">Services</a>
                                        <ul>
                                            <li>
                                                <a href="/web-designing">Web Designing</a>
                                            </li>
                                            <li>
                                                <a href="/web-development">Web Development</a>
                                            </li>
                                            <li>
                                                <a href="/mobile-app-development">
                                                    {" "}
                                                    Mobile App Development
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/digital-marketing">Digital Marketing</a>
                                            </li>
                                            <li>
                                                <a href="/security-systems">Security Systems</a>
                                            </li>
                                            <li>
                                                <a href="/industrial-automation-services">
                                                    Industrial Automation Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/it-services">IT Services</a>
                                            </li>
                                            <li>
                                                <a href="/av-and-it-systems">AV and IT Systems</a>
                                            </li>
                                            <li>
                                                <a href="/cyber-security">Cyber Security</a>
                                            </li>
                                             
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#">Digital Transformation</a>
                                        <ul>
                                            <li>
                                                <a href="/customer-experience-cpq">
                                                    Customer Experience &amp; CPQ
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/supply-chain-optimization">
                                                    Supply Chain Optimization
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/big-data-and-analytics">
                                                    Big Data and Analytics
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/mobility-and-ux">Mobility and UX</a>
                                            </li>
                                            <li>
                                                <a href="/ai-and-ml">AI &amp; ML</a>
                                            </li>
                                            <li>
                                                <a href="/robotic-process-automation">
                                                    Robotic Process Automation
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/internet-of-things">Internet of Things</a>
                                            </li>
                                            <li>
                                                <a href="/human-capital-management">
                                                    Human Capital Management
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown mega-dropdown">
                                        <a href="#">Trainings</a>
                                        <div className="mega-menu-wrapper">
                                            <div className="row">
                                                <div className="col-md-6 mega-menu-col">
                                                    <h5 className="mega-menu-title">Project Management</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="/pmp-training">
                                                                Project Management Professional(PMP){" "}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/pmi-capm-training">PMI CAPM</a>
                                                        </li>
                                                        <li>
                                                            <a href="/pmi-acp-training">PMI ACP</a>
                                                        </li>
                                                        <li>
                                                            <a href="/pmi-rmp-training">PMI-RMP</a>
                                                        </li>
                                                        <li>
                                                            <a href="/prince2-foundation-training">
                                                                PRINCE2 Foundation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/prince2-practitioner-training">
                                                                PRINCE2 Practitioner
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/agile-project-management-training">
                                                                Agile Project Management
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/microsoft-project-training">
                                                                Microsoft Project
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6 mega-menu-col">
                                                    <h5 className="mega-menu-title">Data &amp; Analytics</h5>
                                                    <ul>
                                                        <li>
                                                            <a href="/business-analytics-training">
                                                                Business Analytics
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/tableau-training">
                                                                Tableau
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/r-tools-training">
                                                                R Tools
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/data-mining-training">
                                                                Data Mining
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/data-optimization-training">
                                                                Data Optimization
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                {/* <div class="col-md-4 mega-menu-col">
                                                    <h5 class="mega-menu-title">ITIL Framework</h5>
                                                    <ul>
                                                        <li><a href="itil-foundation-training.html">ITIL Foundation</a></li>
                                                        <li><a href="itil-intermediate-training.html">ITIL Intermediate</a></li>
                                                        <li><a href="itil-service-strategy-training.html">ITIL Service Strategy</a></li>
                                                        <li><a href="itil-service-design-training.html">ITIL Service Design</a></li>
                                                        <li><a href="itil-service-transition-training.html">ITIL Service Transition</a></li>
                                                        <li><a href="itil-operational-support-training.html">ITIL Operational Support</a></li>
                                                        <li><a href="itil-operational-monitoring-training.html">ITIL Operational Monitoring</a></li>
                                                        <li><a href="itil-release-and-validation-training.html">ITIL Release & Validation</a></li>
                                                        <li><a href="itil-soa-training.html">ITIL SOA</a></li>
                                                        <li><a href="itil-ppo-training.html">ITIL PPO</a></li>
                                                        <li><a href="itil-csi-training.html">ITIL CSI</a></li>
                                                    </ul>
                                                    </div> */}
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="/careers">Careers</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* Main Menu End*/}
                        {/* Outer Box */}
                        <div className="outer-box">
                            {/* Btn Box */}
                            <div className="btn-box">
                                <a href="/contact-us" className="theme-btn btn-style-one">
                                    <span className="btn-title"> Contact Us </span>
                                </a>
                            </div>
                            
                            {/* Mobile Nav toggler */}
                            <div className="mobile-nav-toggler">
                                <span className="icon lnr-icon-bars" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu  */}
                <div className="mobile-menu">
                    <div className="menu-backdrop" />
                    {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                    <nav className="menu-box">
                        <div className="upper-box">
                            <div className="nav-logo">
                                <a href="/">
                                    <img src="images/logo.png" alt="" title="" />
                                </a>
                            </div>
                            <div className="close-btn">
                                <i className="icon fa fa-times" />
                            </div>
                        </div>
                        <ul className="navigation clearfix">
                            {/*Keep This Empty / Menu will come through Javascript*/}
                        </ul>
                        <ul className="contact-list-one">
                            <li>
                                <i className="icon lnr-icon-phone-handset" />
                                <span className="title">Call Now</span>
                                <div className="text">
                                    <a href="tel:+92880098670">+92 (8800) - 98670</a>
                                </div>
                            </li>
                            <li>
                                <i className="icon lnr-icon-envelope1" />
                                <span className="title">Send Email</span>
                                <div className="text">
                                    <a href="https://html.kodesolution.com/cdn-cgi/l/email-protection#78101d1408381b171508191601561b1715">
                                        <span
                                            className="__cf_email__"
                                            data-cfemail="fd9598918dbd9e92908d9c9384d39e9290"
                                        >
                                            [email&nbsp;protected]
                                        </span>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <i className="icon lnr-icon-map-marker" />
                                <span className="title">Address</span>
                                <div className="text">66 Broklyant, New York India 3269</div>
                            </li>
                        </ul>
                        <ul className="social-links">
                            <li>
                                <a href="#">
                                    <i className="fab fa-x-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-pinterest" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* End Mobile Menu */}
                {/* Header Search */}
                <div className="search-popup">
                    <span className="search-back-drop" />
                    <button className="close-search">
                        <span className="fa fa-times" />
                    </button>
                    <div className="search-inner">
                        <form method="post" action="#">
                            <div className="form-group">
                                <input
                                    type="search"
                                    name="search-field"
                                    defaultValue=""
                                    placeholder="Search..."
                                    required=""
                                />
                                <button type="submit">
                                    <i className="fa fa-search" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* End Header Search */}
                {/* Sticky Header  */}
                <div className="sticky-header">
                    <div className="auto-container">
                        <div className="inner-container">
                            {/*Logo*/}
                            <div className="logo">
                                <a href="index.html" title="">
                                    <img src="images/logo.png" alt="" title="" />
                                </a>
                            </div>
                            {/*Right Col*/}
                            <div className="nav-outer">
                                {/* Main Menu */}
                                <nav className="main-menu">
                                    <div className="navbar-collapse show collapse clearfix">
                                        <ul className="navigation clearfix">
                                            {/*Keep This Empty / Menu will come through Javascript*/}
                                        </ul>
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                                {/*Mobile Navigation Toggler*/}
                                <div className="mobile-nav-toggler">
                                    <span className="icon lnr-icon-bars" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Sticky Menu */}
            </header>

        </div>
    )
}

export default Header
