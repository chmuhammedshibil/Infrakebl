import NetBandAccordion from "@/components/NetBandAccordion";
import ProgressBar from "@/components/ProgressBar";
import Service1 from "@/components/Service";
import BrandSlider from "@/components/slider/BrandSlider";
import Home1 from "@/components/slider/Home1";
import MovieSlider from "@/components/slider/MovieSlider";
import TestimonialSlider from "@/components/slider/TestimonialSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
import { FaShieldAlt } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";
import { GiFlexibleStar } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { GiWindSlap } from "react-icons/gi";
import { GiWireCoil } from "react-icons/gi";

const page = () => {
  return (
    <NetBandLayout header={1}>
      {/*<< Hero Section Start >>*/}
      <Home1 />
      {/*<< Feature Section Start >>*/}
      <section className="feature-section fix section-padding">
        <div className="shape-image">
          <img src="assets/img/shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-feature-items">
                <div className="content">
                  <span>Features</span>
                  <h3>reliability</h3>
                </div>
                <div className="icon">
                  <FaShieldAlt />
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-feature-items active">
                <div className="content">
                  <span>Features</span>
                  <h3>speed                  </h3>
                </div>
                <div className="icon">
                  <IoIosFlash />                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-feature-items">
                <div className="content">
                  <span>Features</span>
                  <h3>flexibility                  </h3>
                </div>
                <div className="icon">
                  <GiFlexibleStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<< About Section Start >>*/}
      <section className="about-section fix section-padding pt-0">
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div className="circle-shape">
                    <img
                      src="assets/img/about/circle.png"
                      alt="img"
                      className="text-circle"
                    />
                    <div className="award-img">
                      <img src="assets/img/about/award.png" alt="img" />
                    </div>
                  </div>
                  <div className="border-shape">
                    <img
                      src="assets/img/about/border-shape.png"
                      alt="shape-img"
                    />
                  </div>
                  <div
                    className="about-image bg-cover wow fadeInLeft"
                    data-wow-delay=".3s"
                    style={{
                      backgroundImage: 'url("assets/img/hero/blue-optic.jpg")',
                    }}
                  >
                    <div
                      className="about-image-2 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <img src="https://glasfasertechnik.nrw/wp-content/uploads/2019/05/glasxx.jpg" width={350} height={350} alt="about-img" />

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">About InfraKabel</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      G&K Glasfasertechnik introduces itself
                    </h2>
                  </div>
                  <p
                    className=" mt-4 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    We develop, build, and operate future-proof FTTX fiber optic networks and prepare for the dynamic broadband development of the coming decades. Our goal is to provide pure fiber optic connections to private households, schools, and businesses throughout Germany.
                  </p>
                  <div className="circle-progress-bar-wrapper">
                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <ProgressBar value={100} />
                      <div className="content">
                        <h6>
                          All-round service
                        </h6>
                      </div>
                    </div>
                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <ProgressBar value={100} />
                      <div className="content">
                        <h6>
                          thoroughness
                        </h6>
                      </div>
                    </div>
                  </div>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".7s">
                    <li>
                      <i className="far fa-check me-2" />
                      Splicing work
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      Troubleshooting and fault rectification
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      Blow in cables
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      Installation of couplings of all types
                    </li>
                  </ul>
                  <div className="about-author">
                    <div
                      className="author-image wow fadeInUp"
                      data-wow-delay=".9s"
                    >
                      <img src="assets/img/about/author.png" alt="author-img" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Network Solutions Section Start >>*/}
      <section className="network-solution-section section-padding fix pt-0">
        <div className="container custom-container-2">
          <div className="network-solution-wrapper">
            <div className="section-title text-center">
              <span className="wow fadeInUp">Best Network</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Find Perfect fiber  <br />
                optic networks
              </h2>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="network-solution-items">
                  <div className="icon">
                    <FaTools />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="about">Splicing work</Link>
                    </h4>
                    <p>
                      Professional fiber splicing services for repairing, extending, and joining optical fibers with zero signal loss.
                    </p>
                    <Link href="about" className="link-btn">
                      <span>Discover More</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="network-solution-items">
                  <div className="icon">
                    <GiWindSlap />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="about">Blow in cables
                      </Link>
                    </h4>
                    <p>
                      Efficient cable blowing services to install fiber cables through ducts over long distances with high accuracy.
                    </p>
                    <Link href="about" className="link-btn">
                      <span>Discover More</span>

                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="network-solution-items">
                  <div className="icon">
                    <GiWireCoil />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="about">Cable laying work</Link>
                    </h4>
                    <p>
                      End-to-end cable laying solutions, including underground, overhead, and duct-based fiber installations.
                    </p>
                    <Link href="about" className="link-btn">
                      <span>Discover More</span>

                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="network-solution-items">
                  <div className="icon">
                    <i className="flaticon-satellite-dish" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="about">Measurement &amp; testing</Link>
                    </h4>
                    <p>
                      Advanced fiber testing using OTDR &amp; power meters to ensure signal strength, network stability, &amp; optimal performance.
                    </p>
                    <Link href="about" className="link-btn">
                      <span>Discover More</span>

                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Movie Section Start >>*/}
      <section className="movie-section movie-bg">
        <div className="container custom-container-2">
          <div className="section-title text-center">
            <span className="text-white wow fadeInUp">What’s new</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Fiber Expansion ,
              Community <br /> Connections &amp;
              Broadband Innovation
            </h2>
          </div>
          <MovieSlider />
        </div>
      </section>
      {/*<< Marque Studies Start >>*/}
      <div className="marque-section section-padding pt-0 mt-5">
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider">Fiber Optic</span>
                <span className="text-slider">FTTX</span>
                <span className="text-slider style-border" />

                <span className="text-slider">High-Speed Internet</span>
                <span className="text-slider">Pure Fiber</span>
                <span className="text-slider style-border" />

                <span className="text-slider">Gigabit Network</span>
                <span className="text-slider">FTTH</span>
                <span className="text-slider style-border" />

                <span className="text-slider">Fiber Splicing</span>
                <span className="text-slider">Cable Laying</span>
                <span className="text-slider style-border" />

                <span className="text-slider">Network Expansion</span>
                <span className="text-slider">Broadband Solutions</span>
                <span className="text-slider style-border" />
              </li>
            </ul>

          </div>
        </div>
      </div>
      {/*<< Service Section Start >>*/}

      <Service1 />


      {/*<< Brand Section Start >>*/}
      <section className="brand-section fix section-padding pt-0">
        <div className="container">
          <div className="brand-wrapper">
            <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">
              1K+ BRANDS TRUST US
            </h6>
            <BrandSlider />
          </div>
        </div>
      </section>
      {/*<< Cta Banner Section Start >>*/}
      <section
        className="cta-banner-section bg-cover section-padding"
        style={{ backgroundImage: 'url("assets/img/banner/02.jpg")' }}
      >
        <div className="container">
          <div className="cta-banner-wrapper section-padding pt-0">
            <div className="section-title mb-0">
              <span className="text-white wow fadeInUp">
                Upgrade to Pure Fiber
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Experience seamless browsing, <br /> streaming & network stability.
                <br />
                Please Call :{" "}
                <a href="tel:123884400" className="text-white">
                  (123) 884400
                </a>
              </h2>
            </div>
            <Link
              href="service"
              className="theme-btn bg-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span>
                View All Services
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/*<< Feature Icon Box Section Start >>*/}
      <section className="feature-icon-box-area">
        <div className="container">
          <div className="feature-icon-box-wrapper">
            <div className="row g-4">

              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="flaticon-tv-box-1" />
                  </div>
                  <div className="content">
                    <h3>Fiber Network Installation</h3>
                    <p>Professional FTTX & FTTH setup with reliable, future-proof fiber connectivity.</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon-box-items active">
                  <div className="icon">
                    <i className="flaticon-smartphone" />
                  </div>
                  <div className="content">
                    <h3>Fiber Splicing Services</h3>
                    <p>Precision splicing to ensure seamless fiber connections with minimal signal loss.</p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="flaticon-wifi-router-2" />
                  </div>
                  <div className="content">
                    <h3>High-Speed Broadband</h3>
                    <p>Ultra-fast, stable fiber internet for homes, schools, and businesses.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/*<< Team Section Start >>*/}
      <section className="team-section section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">our members</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Meet With Our Fantastic <br />
              Support Team
            </h2>
          </div>
          <div className="team-wrapper">
            <div className="row align-items-center">
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/people1.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Leslie Alexander</Link>
                    </h4>
                    <p>Support Enginner</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/people2.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Alexander Sandro</Link>
                    </h4>
                    <p>Team Leader</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/people3.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Devid Jackson</Link>
                    </h4>
                    <p>Developer</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/people4.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Jack Miller</Link>
                    </h4>
                    <p>Development</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-7 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="single-team-items">
                  <div className="team-join-content text-center">
                    <div className="circle-shape">
                      <img
                        src="assets/img/team/circle-shape.png"
                        alt="shape-img"
                      />
                    </div>
                    <div className="dot-shape">
                      <img
                        src="assets/img/team/dot-shape.png"
                        alt="shape-img"
                      />
                    </div>
                    <h2>
                      JOIN OUR <span>TEAM</span>
                    </h2>
                    <h3>98+ Member</h3>
                  </div>
                </div>
              </div>
              <div className="col-xl-1" />
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/people5.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Sutton Tanner</Link>
                    </h4>
                    <p>Support Enginner</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="single-team-items">
                  <div className="team-image">
                    <img src="assets/img/team/people5.jpg" alt="team-img" />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h4>
                      <Link href="team-detaills">Leslie Braxton</Link>
                    </h4>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      {/*<< Cta Subscribe Section Start >>*/}
      <section className="cta-subscribe-section fix section-padding">
        <div className="container custom-container-2">
          <div className="cta-subscribe-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                <div className="cta-subscribe-image">
                  <img src="assets/img/banner/operation-computer.jpg" style={{ width: '100%', height: '100%' }} alt="img" />
                </div>
              </div>
              <div className="col-lg-5 mt-5 mt-md-0">
                <div className="cta-subscribe-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">Fiber Connection</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Experience Ultra-Fast Internet <br />
                      With Pure Fiber Technology
                    </h2>
                  </div>

                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    InfraKabel provides reliable, future-proof FTTX fiber networks for
                    households, schools, and businesses. Enjoy stable connectivity,
                    low latency, and high-speed internet for streaming, work, and more.
                  </p>

                  <h4 className="cta-sub-title wow fadeInUp" data-wow-delay=".3s">
                    <span>Get Your Fiber Connection Today &amp; Receive</span> <br />
                    FREE Installation Support
                  </h4>

                  <div className="subscribe-plan">
                    <h3 className="price wow fadeInUp" data-wow-delay=".5s">
                      <span>Only</span> €29<sub>/Mon</sub>
                    </h3>
                    <Link
                      href="pricing"
                      className="link-btn style-2 wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <span>View All Plans</span>{" "}
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/*<< Product Section Start >>*/}
      <section className="product-section fix section-padding pt-0">
        <div className="container">
          <div className="title-section-area">
            <div className="section-title">
              <span className="wow fadeInUp">Top Sales</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Our Top Products
              </h2>
            </div>
            <Link href="shop" className="theme-btn">
              <span>
                More Products <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="product-card-items">
                <div className="product-image">
                  <img src="assets/img/shop/product1.jpeg" alt="img" />
                  <div className="product-badge">
                    <span className="product-badge-item">sale</span>
                  </div>
                  <ul className="product-icon d-grid justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-shopping-cart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-details">
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h6>
                    <Link href="shop-details">
                      Fiber Optic Cable <br /> Single Mode

                    </Link>
                  </h6>
                  <div className="ratting">
                    <span>$210</span>
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="product-card-items">
                <div className="product-image">
                  <img src="assets/img/shop/product2.jpeg" alt="img" />
                  <div className="product-badge">
                    <span className="product-badge-item">sale</span>
                  </div>
                  <ul className="product-icon d-grid justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-shopping-cart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-details">
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h6>
                    <Link href="shop-details">
                      Industrial Network <br /> Switch
                    </Link>
                  </h6>
                  <div className="ratting">
                    <span>$210</span>
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="product-card-items">
                <div className="product-image">
                  <img src="assets/img/shop/product3.jpeg" alt="img" />
                  <div className="product-badge">
                    <span className="product-badge-item">sale</span>
                  </div>
                  <ul className="product-icon d-grid justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-shopping-cart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-details">
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h6>
                    <Link href="shop-details">
                      Industrial Network <br /> Switch
                    </Link>
                  </h6>
                  <div className="ratting">
                    <span>$210</span>
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="product-card-items">
                <div className="product-image">
                  <img src="assets/img/shop/product4.jpeg" alt="img" />
                  <div className="product-badge">
                    <span className="product-badge-item">sale</span>
                  </div>
                  <ul className="product-icon d-grid justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-shopping-cart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-details">
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h6>
                    <Link href="shop-details">
                      Fiber Optic Cable <br /> Single Mode
                    </Link>
                  </h6>
                  <div className="ratting">
                    <span>$210</span>
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Cta Parallax Section Start >>*/}
      <div
        className="cta-parallax-section bg-cover"
        style={{ backgroundImage: 'url("assets/img/banner/banner.jpg")' }}
      >
        <div className="container">
          <div className="cta-parallax-wrapper text-center">
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Need Fast & Secure Broadband?
              Choose InfraKabel for a Truly Reliable Fiber Network.
            </h2>
            <div className="button-items">
              <Link
                href="pricing"
                className="theme-btn wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span>
                  View our Plans <i className="fas fa-chevron-right" />
                </span>
              </Link>
              <span className="or">or</span>
              <a
                href="tel:+1718-904-4450"
                className="theme-btn bg-white wow fadeInUp"
                data-wow-delay=".7s"
              >
                <span>
                  +1718-904-4450 <i className="fas fa-chevron-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*<< Counter Section Start >>*/}
      <section className="counter-section">
        <div className="container">
          <div className="counter-wrapper">
            <div className="counter-items wow fadeInUp" data-wow-delay=".2s">
              <h2>
                <span className="count">20</span>+
              </h2>
              <p>
                YEARS OF <br />
                EXPERIENCE
              </p>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
              <h2>
                <span className="count">220</span>k
              </h2>
              <p>
                CLIENTS IN <br />
                THE WORLD
              </p>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
              <h2>
                <span className="count">2,5</span>k
              </h2>
              <p>
                KILOMETERS <br />
                OF FIBERS
              </p>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".8s">
              <h2>
                <span className="count">991</span>
              </h2>
              <p>
                SATELLITE <br />
                CHANNELS
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*<< Testimonial Section Start >>*/}
      <section className="testimonial-section section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">trusted clients feedback</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Why People Say About Our <br />
              Business Services
            </h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>
      {/*<< Faq Section Start >>*/}
      <section className="faq-section fix section-padding mb-5 ">
        <div className="faq-image">
          <img src="assets/img/banner/heart-im.jpg" width={800} height={700} alt="img" />
        </div>
        <div className="faq-shape">
          <img src="assets/img/faq-shape-1.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      Our question &amp; answer
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Have Any Questions About <br />
                      Our NetBand Company
                    </h2>
                  </div>
                  <div className="faq-accordion mt-4 mt-md-0">
                    <NetBandAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </NetBandLayout>
  );
};
export default page;
