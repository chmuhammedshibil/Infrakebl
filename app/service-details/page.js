import Breadcrumb from "@/components/Breadcrumb";
import NetBandAccordion from "@/components/NetBandAccordion";
import BrandSlider from "@/components/slider/BrandSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  const faqItem = [
    {
      id: 1,
      title: "What is fiber optic internet?",
      content:
        "Fiber optic internet uses thin strands of glass (fiber) to transmit data as pulses of light, offering significantly faster speeds and greater reliability than traditional copper cable or DSL.",
      animationDelay: ".3s",
    },
    {
      id: 2,
      title: "How is fiber different from regular cable?",
      content:
        "Fiber is much faster, offers symmetrical upload/download speeds (unlike cable), and is less prone to weather interference or slowdowns during peak usage times. It's a more reliable, future-proof technology.",
      animationDelay: ".5s",
    },
    {
      id: 3,
      title: "Do I need new equipment for fiber internet?",
      content:
        "Yes, a new Optical Network Terminal (ONT) is typically required to connect the fiber optic line to your home or business. We provide all necessary equipment as part of our installation service.",
      animationDelay: ".7s",
    },
    {
      id: 4,
      title: "What are 'symmetrical speeds'?",
      content:
        "Symmetrical speeds mean your upload speed is the same as your download speed. This is crucial for video conferencing, online gaming, and uploading large files to the cloud, all of which are seamless on fiber.",
      animationDelay: ".9s",
    },
  ];
  return (
    <NetBandLayout>
      <Breadcrumb pageTitle={"service Details"} />
      <section className="service-details fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5">
              <div className="col-12 col-lg-8">
                <div className="service-details-items">
                  <div className="details-image">
                    <img src="assets/img/service/details.jpg" alt="img" />
                  </div>
                  <div className="details-content">
                    <h3>Fiber Optic Installation</h3>
                    <p>
                      We provide end-to-end fiber optic network installation for
                      residential (FTTH) and commercial properties. Our process
                      ensures a reliable, high-speed connection built to last.
                      From initial site surveys to final splicing and testing,
                      our certified technicians handle every detail with
                      precision. We are committed to delivering scalable
                      infrastructure that meets your demands today and tomorrow.
                    </p>
                    <h4>Our Comprehensive Installation Process</h4>
                    <p>
                      Need a new network or upgrading an old one? Is your
                      current infrastructure slow, unreliable, and in need of
                      refreshing? Infrakabel GmbH is the industry leader in
                      deploying robust fiber optic solutions. We have been the
                      standard for quality and precision since our inception.
                      Our team handles everything from trenching and conduit
                      laying to delicate fusion splicing and final network
                      certification, ensuring you get a turnkey solution that
                      works perfectly from day one.
                    </p>
                    <div className="service-details-video">
                      <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                          <div className="details-video-content">
                            <h3>Why Choose Fiber?</h3>
                            <p>
                              Fiber optics offer superior speed, lower latency,
                              and greater reliability compared to any other
                              connection type.
                            </p>
                            <ul>
                              <li>
                                <i className="far fa-check" />
                                Symmetrical Gigabit Speeds (Upload/Download)
                              </li>
                              <li>
                                <i className="far fa-check" />
                                Immune to Electromagnetic Interference
                              </li>
                              <li>
                                <i className="far fa-check" />
                                Future-Proof Infrastructure for Decades
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="video-image">
                            <img
                              src="assets/img/service/details1.jpg"
                              alt="img"
                            />
                            <div className="video-box">
                              <a
                                href="https://youtu.be/ATcEJQvxNM0?si=pAl2T7rfY80AK89J"
                                className="video-btn ripple video-popup"
                              >
                                <i className="fas fa-play" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>
                      Our installation services cover everything from
                      large-scale municipal networks to private enterprise
                      backbones. We adhere to the strictest industry standards,
                      ensuring every connection is perfectly terminated and
                      tested for optimal performance, low loss, and maximum
                      bandwidth. Trust Infrakabel GmbH to lay the foundation for
                      your digital future.
                    </p>
                    <div className="details-image-2">
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <img
                            src="assets/img/service/details3.jpg"
                            alt="img"
                          />
                        </div>
                        <div className="col-lg-6">
                          <img
                            src="assets/img/service/details2.jpg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="faq-content">
                    <div className="faq-accordion">
                      <NetBandAccordion items={faqItem} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="main-sidebar">
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Categories</h3>
                    </div>
                    <div className="service-category">
                      <Link href="" className="active">
                        Fiber Installation
                      </Link>
                      <Link href="">
                        Network Management
                      </Link>
                      <Link href="">
                        Splicing &amp; Repair
                      </Link>
                      <Link href="">
                        IT Consulting
                      </Link>
                      <Link href="">
                        Data Center Solutions
                      </Link>
                      <Link href="">
                        Network Security
                      </Link>
                    </div>
                  </div>
                  <div className="single-sidebar-widget">
                    <div className="wid-title">
                      <h3>Any Question For Us</h3>
                    </div>
                    <form action="#" id="contact-form" className="message-form">
                      <div className="row g-3">
                        <div className="col-lg-12">
                          <div className="single-form-input">
                            <input type="text" placeholder="your name" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="single-form-input">
                            <input type="email" placeholder="email address" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="single-form-input">
                            <textarea
                              placeholder="Enter Message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button className="theme-btn" type="submit">
                            <span>
                              Get a Free Quate
                              <i className="fas fa-chevron-right" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Brand Section Start >>*/}
      {/* <div className="brand-section-2 fix section-bg-2 mt-0">
        <div className="container">
          <div className="brand-wrapper style-2">
            <BrandSlider />
          </div>
        </div>
      </div> */}
    </NetBandLayout>
  );
};
export default page;
