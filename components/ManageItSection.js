"use client";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";

const ManageItSection = () => {
  return (
    <section className="manage-it-section fix section-padding pt-0">
      <div className="container">
        <div className="manage-it-wrapper">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="manage-it-content">
                <div className="section-title">
                  <span className="wow fadeInUp">Our Process</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Our Managed Fiber Services Let You Concentrate on What Matters
                  </h2>
                </div>
                <div className="single-tab-items mt-4 mt-md-0">
                  <Tab.Container defaultActiveKey={"project"}>
                    <Nav as={"ul"} className="nav mb-4">
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <Nav.Link
                          as={"a"}
                          eventKey={"approach"}
                          href="#approach"
                        >
                          Our Approach
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <Nav.Link as={"a"} eventKey={"project"} href="#project">
                          Project Goals
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <Nav.Link
                          as={"a"}
                          eventKey={"advisory"}
                          href="#advisory"
                        >
                          Advisory
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className="tab-content">
                      <Tab.Pane eventKey="approach" className="tab-pane fade">
                        <div className="tab-content-items">
                          <p className="wow fadeInUp" data-wow-delay=".3s">
                           Our approach is built on precision and reliability. We analyze
                           your needs to design, build, and maintain robust fiber optic
                           networks that deliver unparalleled speed and uptime, ensuring
                           your business is future-proof.
                          </p>
                          <div className="list-area">
                            <ul className="wow fadeInUp" data-wow-delay=".5s">
                              <li>
                                <i className="fas fa-check" />
                                Detailed Network Planning
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Use of High-Quality
                              </li>
                            </ul>
                            <ul className="wow fadeInUp" data-wow-delay=".7s">
                              <li>
                                <i className="fas fa-check" />
                                Certified Professional Installation
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                 Testing & 24/7 Support
                              </li>
                            </ul>
                          </div>
                          
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="project" className="tab-pane fade">
                        <div className="tab-content-items">
                          <p>
                            Our primary goal for every project is to deliver scalable,
                            high-performance fiber optic infrastructure that meets and
                            exceeds client expectations. We focus on creating networks that
                            are not only fast but also exceptionally reliable and secure.
                          </p>
                          <div className="list-area">
                            <ul>
                              <li>
                                <i className="fas fa-check" />
                                 Symmetrical Gigabit Speeds
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Ensure 99.99% Network Uptime
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <i className="fas fa-check" />
                                 On-Time Project Completion
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Build Future-Proof
                              </li>
                            </ul>
                          </div>
                          
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="advisory" className="tab-pane fade">
                        <div className="tab-content-items">
                          <p>
                            Our expert advisory services guide you through complex network
                            decisions. We analyze your specific requirements to provide
                            strategic advice on infrastructure planning, technology adoption,
                            and scalability to ensure long-term value.
                          </p>
                          <div className="list-area">
                            <ul>
                              <li>
                                <i className="fas fa-check" />
                                Infrastructure Audits 
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Technology Roadmap Planning
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <i className="fas fa-check" />
                                Cost-Benefit & ROI Analysis
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Regulatory Compliance Consulting
                              </li>
                            </ul>
                          </div>
                          
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 mt-5 mt-lg-0 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div
                className="manage-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/about/about7.jpg")',
                }}
              >
                <div className="counting-shape">
                  <img src="assets/img/about/counting1.jpg" alt="shape-img" width={300} height={300} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ManageItSection;
