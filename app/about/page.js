import Breadcrumb from "@/components/Breadcrumb";
import Counter from "@/components/Counter";
import ManageItSection from "@/components/ManageItSection";
import ProgressBar from "@/components/ProgressBar";
import BrandSlider from "@/components/slider/BrandSlider";
import NewsSlider from "@/components/slider/NewsSlider";
import { TestimonialSlider4 } from "@/components/slider/TestimonialSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
import { AiOutlineCloudServer } from "react-icons/ai";
import { MdLan } from "react-icons/md";
import { TbScissors } from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";




const page = () => {
  return (
    <NetBandLayout>
      <Breadcrumb pageTitle={"about us"} />
      {/*<< About Section Start >>*/}
      <section className="about-section fix section-padding">
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
                      backgroundImage: 'url("assets/img/about/about1.jpg")',
                    }}
                  >
                    <div
                      className="about-image-2 wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <img
                        src="assets/img/about/about2.jpg"
                        alt="about-img"
                        width={400}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      10,000km+ Network Coverage
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Reliable, High-Speed Fiber Optic Solutions for Germany
                    </h2>
                  </div>
                  <p
                    className=" mt-4 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Infrakabel GmbH is a leading German provider of digital
                    infrastructure — we support industry and trade in the
                    nationwide expansion of high-speed connectivity.
                  </p>
                  <div className="circle-progress-bar-wrapper">
                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <ProgressBar value={99} />
                      <div className="content">
                        <h6>
                          Network <br />
                          Uptime
                        </h6>
                      </div>
                    </div>
                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <ProgressBar value={95} />
                      <div className="content">
                        <h6>
                          Client <br />
                          Satisfaction
                        </h6>
                      </div>
                    </div>
                  </div>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".7s">
                    <li>
                      <i className="far fa-check me-2" />
                      Certified Professional Technicians
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      Award-Winning Network Infrastructure
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      Dedicated 24/7 Technical Support
                    </li>
                  </ul>
                  <div className="about-author">
                    <div
                      className="about-button wow fadeInUp"
                      data-wow-delay=".8s"
                    >
                      <Link href="about" className="theme-btn">
                        <span>
                          Explore Our Services
                          <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                    <div
                      className="author-image wow fadeInUp"
                      data-wow-delay=".9s"
                    >
                      <img src="assets/img/about/author.png" alt="author-img" />
                      <div className="content">
                        <img
                          src="assets/img/about/signature.png"
                          alt="signature"
                        />
                        <p>CEO & Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Service Section Start >>*/}
      <section className="service-section-3 fix section-padding pt-0">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Our Core Services</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Enabling High-Speed Connectivity <br />
            for Your Business
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <MdLan />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">Fiber Installation</Link>
                  </h3>
                  <p>Full-service FTTX/FTTH network installation.</p>
                  
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-box-items active">
                <div className="icon">
                  <AiOutlineCloudServer   />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">Network Management</Link>
                  </h3>
                  <p>Managed services for optimal network performance.</p>
                 
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <TbScissors />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">Splicing & Repair</Link>
                  </h3>
                  <p>Precise fiber splicing and emergency repair services</p>
                  
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <  MdSupportAgent  />
                </div>
                <div className="content">
                  <h3>
                    <Link href="service-details">IT Consulting</Link>
                  </h3>
                  <p>Expert planning for scalable digital infrastructure.</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Manage It Section Start >>*/}
      <ManageItSection />
      {/*<< Cta Parallax Section Start >>*/}
      <div
        className="cta-parallax-section bg-cover"
        style={{ backgroundImage: 'url("assets/img/banner/banner.jpg")' }}
      >
        <div className="container">
          <div className="cta-parallax-wrapper text-center">
            <h2 className="text-white">
             Need Fast &amp; Secure Fiber? Choose <br /> Infrakabel GmbH for True
  Connectivity
            </h2>
            <div className="button-items">
              <Link href="pricing" className="theme-btn">
                <span>
                  View our Plans <i className="fas fa-chevron-right" />
                </span>
              </Link>
              <span className="or">or</span>
              <a href="tel:+1718-904-4450" className="theme-btn bg-white">
                <span>
                  +1718-904-4450 <i className="fas fa-chevron-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*<< Counter Section Start >>*/}
      <section className="counter-section mb-5">
        <div className="container">
          <div className="counter-wrapper">
            <div className="counter-items">
              <h2>
                <Counter end={20} />+
              </h2>
              <p>
                YEARS OF <br />
                EXPERIENCE
              </p>
            </div>
            <div className="counter-items">
              <h2>
                <Counter end={220} />k
              </h2>
              <p>
                CLIENTS IN <br />
                THE WORLD
              </p>
            </div>
            <div className="counter-items">
              <h2>
                <Counter end={25} />k
              </h2>
              <p>
                KILOMETERS <br />
                OF FIBERS
              </p>
            </div>
            <div className="counter-items">
              <h2>
                <Counter end={991} />
              </h2>
              <p>
                SATELLITE <br />
                CHANNELS
              </p>
            </div>
          </div>
        </div>
      </section>
     
    </NetBandLayout>
  );
};
export default page;
