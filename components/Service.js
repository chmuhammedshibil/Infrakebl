"use client";

import { Nav, Tab } from "react-bootstrap";

const Service1 = () => {
  return (
    <section className="trusted-client-section fix section-padding pt-0 mg-top-20">
      <div className="container">
        <div className="trusted-client-wrapper">
          <div className="row align-items-center">
            <div className="col-xl-5">
              <div
                className="trusted-client-image bg-cover"
                style={{
                  backgroundImage: 'url("https://glasfasertechnik.nrw/wp-content/uploads/2019/05/glas34.jpg")',
                }}
              >
                <div className="icon-box">
                  <img
                    src="assets/img/circle.png"
                    alt="img"
                    className="text-circle"
                  />
                  <div className="icon">
                    <img src="assets/img/icon.png" alt="icon-img" />
                  </div>
                </div>
                <div className="counter-main-area">
                  <div className="counter-area">
                    <div className="counter-items">
                      <h2>
                        <span className="count">500</span>+
                      </h2>
                      <h3>Awesome clients</h3>
                    </div>
                    <div className="counter-items">
                      <h2>
                        <span className="count">5</span>k+
                      </h2>
                      <h3>Awesome clients</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-7 mt-5 mt-xl-0">
              <div className="trusted-content">
                <div className="section-title">

                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Our expertise                  </h2>
                </div>
                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  Assembly, installation and planning work.
                </p>
                <div className="single-tab-items">
                  <Tab.Container defaultActiveKey={"mission"}>
                    <Nav as={"ul"} className="nav mb-4" role="tablist">
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <Nav.Link as={"a"} href="#mission" eventKey="mission">
                          PROFFESSIONAL WORK
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <Nav.Link as={"a"} href="#strategy" eventKey="strategy">
                          SHORT REACTION TIME
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <Nav.Link as={"a"} href="#vision" eventKey="vision">
                          YEARS OF EXPERIENCE
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <Nav.Link as={"a"} href="#partner" eventKey="partner">
                          A STRONG PARTNER AT YOUR SIDE
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className="tab-content">
                      <Tab.Pane eventKey="mission" className="tab-pane fade">
                        <div className="tab-content-items wow fadeInUp" data-wow-delay=".3s">
                          <p className="mission-text">
                            With our many years of expertise in the field of fiber optics, we are your
                            competent partner at your side — one you can rely on at every stage of your
                            digital infrastructure development. Our commitment extends beyond installation;
                            we focus on delivering sustainable, high-performance FTTX networks that support
                            the increasing broadband demands of the coming decades.
                            <br /><br />
                            Whether it is planning, splicing, cable laying, measurement, or maintenance,
                            we combine technical precision with modern technology to ensure reliable,
                            future-proof connectivity for private households, educational institutions,
                            and businesses. At InfraKabel, quality, integrity, and long-term network
                            performance are at the heart of everything we do.
                          </p>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="strategy" className="tab-pane fade">
                        <div className="tab-content-items wow fadeInUp" data-wow-delay=".3s">
                          <p className="mission-text">
                            We will help you as quickly as possible, ensuring fast, reliable support
                            whenever you need it. In addition to our regular services, our team is
                            always ready to assist you during emergency situations — providing rapid
                            response, technical expertise, and dependable solutions to restore
                            connectivity without delay.
                            <br /><br />
                            Whether it is a fiber outage, splicing issue, line fault, or sudden network
                            disruption, our specialists act immediately to minimize downtime and secure
                            stable performance. At InfraKabel, your network stability and customer
                            satisfaction are at the center of our strategy. We stay available, responsive,
                            and committed to delivering support you can trust at all times.
                          </p>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="vision" className="tab-pane fade">
                        <div className="tab-content-items wow fadeInUp" data-wow-delay=".3s">
                          <p className="mission-text">
                            Thanks to our many years of experience, we are able to support you even
                            with complex, technically demanding, or unexpected challenges. Our vision
                            is to provide solutions that go beyond standard service — ensuring precise
                            fiber installation, reliable troubleshooting, and long-lasting network
                            performance even in the most difficult environments.
                            <br /><br />
                            We continuously invest in advanced technology, professional tools, and
                            expert training to tackle intricate issues with confidence and accuracy.
                            Whether it involves complicated splicing work, infrastructure expansion,
                            or diagnosing hidden fiber faults, our team is committed to delivering
                            solutions that secure your connectivity for the future. At InfraKabel,
                            our vision is to remain your trusted and capable partner for every
                            challenge in the world of fiber optics.
                          </p>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="partner" className="tab-pane fade">
                        <div className="tab-content-items wow fadeInUp" data-wow-delay=".3s">
                          <p className="mission-text">
                            We will reliably stand by your side and gladly continue to support you
                            even after the project is completed. Our partnership does not end with
                            the installation — we remain committed to ensuring that your fiber
                            infrastructure performs at the highest level, long into the future.
                            <br /><br />
                            Whether you require ongoing maintenance, system optimization, fault
                            resolution, or future upgrades, our team is always ready to assist.
                            We value long-term cooperation and believe in building relationships
                            based on trust, reliability, and consistent technical excellence.
                            At InfraKabel, we stay by your side — today, tomorrow, and beyond.
                          </p>
                        </div>
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service1;
