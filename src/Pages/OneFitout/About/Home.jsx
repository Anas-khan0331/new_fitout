import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Contact from "../../../Components/Contact";
import CustomButton from "../../../Components/CustomButton";
import FooterBootstrap from "../../../Components/FooterBootstrap";
import Layout from "../../../Components/Layout/Layout";
import NavbarBootstrap from "../../../Components/NavbarBootstrap";
import ScrollableSlider from "../../../Components/ScrollableSlider";
import GetInTouchSection from "../Blog/BlogDetailsSections/GetInTouchSection";
import Disclaimer from "../Home/Disclaimer";
import "./css/Home.css";
import Header from "./HeaderRes";

export default function Home() {
  const [contactToggle, setContactToggle] = useState(false);

  
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const { pathname } = useLocation();

  const imgLinks = [
    "/assets/project-logo1.png",
    "/assets/project-logo2.png",
    "/assets/project-logo3.png",
    "/assets/project-logo4.png",
    "/assets/project-logo5.png",
  ];

  let textColorNav = "#fbfaf6";

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 992);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Cleanup event listener on unmount
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  useEffect(() => {
    if (contactToggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [contactToggle]);
  const aboutDataSet = "../../../../public/about.json";
  return (
    <>
      <NavbarBootstrap
        oneImageBackground={"#fff"}
        oneImageProp={true}
        id="kitchens-navbar"
        bOutline="#fff"
        btnColor={"#fff"}
        btnBorder="1px solid #fff"
        textColor={textColorNav}
        NavItemcolor="#fff"
        openContact={setContactToggle}
      />
      <Layout sidebarBg="#B51F29" sidebarTextColor="#FBFAF6">
        <Header />
        <Container>
          <Row id="about-us-studio">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={5}
              xl={6}
              id="about-us-studio-inner"
            >
              <img
                src="/assets/about-studio.png"
                style={{ objectFit: "cover", objectPosition: "100% 60%" }}
              />
            </Col>
            <Col lg={1} xl={1}></Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={5}
              id="about-us-studio-right"
            >
              <h1>The Studio</h1>
              <h2 id="about-us-bold-text">
                Founded by Kailey & Roddy Macleod in 2020, our studio is a
                boutique fit-out company based in Dubai, specialising in
                bringing visionary spaces to life.
              </h2>
              <div id="about-us-remaining-p">
                <p>
                  With a team of associate designers, architects, and project
                  managers, we blend creativity, precision, and innovation to
                  redefine what’s possible in design.
                </p>
                <br />
                <p>
                  {/* We have an extensive library of finishes and materials which
                  are being <br />
                  constantly updated, the technical knowledge and the necessary
                  technology, together with the assurance of many years of
                  experience. That’s how we are <br />
                  able to interpret a vision into reality. */}
                  We believe in staying personal, hands-on, and fully immersed
                  in every project. This commitment allows us to deliver highly
                  tailored, practical, and inspiring solutions for our clients.
                  Every member of our team is not only highly qualified but also
                  driven by a shared passion for excellence.
                </p>
                <p>
                  With an ever-evolving library of premium finishes,
                  cutting-edge technology, and years of expertise, we transform
                  your vision into a tangible, beautiful reality. Let us craft
                  the extraordinary for you.
                </p>
              </div>
              {/* <button
                id="studio-button"
                className="about-button about-us-btn"
                onClick={() => setContactToggle(true)}
              >
                GET IN TOUCH
              </button> */}
              <CustomButton
                margin={"50px 0px 0px 0px"}
                btnTxt={" GET IN TOUCH"}
                onClick={() => setContactToggle(true)}
              />
            </Col>
          </Row>
        </Container>
        <div id="about-us-visit">
          <Container>
            <Row>
              <Col xs={12} sm={12} md={12} lg={3}>
                <div id="visit-left-col">
                  <h1>Visiting us</h1>
                  <p id="about-us-location">LOCATION</p>
                  <p id="address" className="about-us-address">
                    <span className="about-us-address">
                      No.11, Community 369,
                    </span>
                    <span className="about-us-address">Street 31,</span>
                    <span className="about-us-address">
                      Al Quoz Industrial 4,
                    </span>
                    <span className="about-us-address">Dubai, UAE</span>
                  </p>

                  <p id="about-us-opening-title">OPENING HOURS</p>
                  <p id="about-us-opening-day">Monday — Saturday</p>
                  <p id="about-us-opening-time">9AM - 6PM</p>

                  {/* <button
                    id="about-us-visit-button"
                    className="about-visit-button about-us-btn"
                    onClick={getDirections}
                  >
                    Get Directions
                  </button> */}
                  <CustomButton
                    margin={"50px 0px 0px 0px"}
                    btnTxt={"Get Directions"}
                    onClick={getDirections}
                  />
                </div>
              </Col>
              <Col lg={1}></Col>
              <Col xs={12} sm={12} md={12} lg={8}>
                <div className="about-us-visit-section-img">
                  <img src="/assets/about-us-middle.png" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div id="scroller">
          <div id="scroller-inner">
            <div className="scroll-content">
              {Array(10)
                .fill()
                .map(() => {
                  return imgLinks.map((link, index) => {
                    return (
                      <div key={index} className="ticker">
                        <img src={link} />
                      </div>
                    );
                  });
                })}
            </div>
            <div className="scroll-content">
              {Array(10)
                .fill()
                .map(() => {
                  return imgLinks.map((link, index) => {
                    return (
                      <div key={index} className="ticker">
                        <img src={link} />
                      </div>
                    );
                  });
                })}
            </div>
          </div>
        </div>
        <Container>
          <Row id="about-us-client-div">
            <Col xs={12} sm={12} md={12} lg={5}>
              <div className="about_mobile_div">
                <div className="about-us-client-img">
                  <img src="/assets/savannah.jpg" />
                </div>
                <div id="about-us-client-left">
                  <img src="/assets/about-client2.png" />
                </div>
              </div>
            </Col>
            <Col lg={1}></Col>
            <Col xs={12} sm={12} md={12} lg={5}>
              <div id="about-us-client-right">
                <h1>Our Clients</h1>
                <div id="about-us-client-right-p">
                  <p>
                    Our clientele spans both residential and commercial
                    projects. Over the years, we have worked on a diverse range
                    of spaces, from newly built villas requiring bespoke
                    furnishing to complete renovations of period homes and
                    mansion blocks. Our portfolio also includes restaurants,
                    retail spaces, hotels, and private members’ clubs.
                  </p>
                  <p>
                    Many of our clients have a distinct sense of style and
                    prefer personalised, unique designs over oﬀ-the-shelf
                    solutions. They value being part of the creative journey,
                    even if their time is limited or they reside abroad.
                    Leveraging our expertise and resources, we streamline the
                    entire process to ensure it’s both seamless and enjoyable,
                    delivering results that exceed expectations.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="about_mobile_slider">
                <ScrollableSlider
                  dataType={false}
                  journalDataSetFlag={false}
                  resource={aboutDataSet}
                  showBtnMobile={false}
                  showBtn={false}
                />
              </div>
            </Col>
          </Row>
          <Row id="about-us-middle-img-div">
            <Col lg={2}></Col>
            <Col xs={12} sm={12} md={12} lg={10}>
              <div id="about-us-middle-inner">
                <img src="/assets/about-middle-img-crop.png" />
              </div>
            </Col>
          </Row>
          <div id="about-us-quote">
            <caption id="about-us-quote-caption">
              We couldn’t be <span> happier with the final result</span>
              —everyone who steps into our home, from friends to guests, is
              completely amazed by the work One Fitout has done!
            </caption>
            <p id="about-us-quote-by">— Happy Client</p>
          </div>
          <Row id="about-us-realisation-div">
            <Col xs={12} sm={12} md={12} lg={6} id="about-us-studio-inner">
              <img src="/assets/about-studio.jpeg" />
            </Col>
            <Col md={1}></Col>
            <Col xs={12} sm={12} md={12} lg={5} id="about-us-studio-right">
              <h1>REALISATION</h1>
              <h2 id="about-us-bold-text">
                We are one of the few companies that design unique schemes,
                encompassing everything from structural work to furnishings, and
                we have the right team to bring them to life.
              </h2>
              <div id="about-us-remaining-p">
                <p>
                  When needed, we draw upon a trusted network of talented and
                  dedicated professionals with whom we’ve worked for years. This
                  includes craftsmen, structural engineers, and soft furnishing
                  makers, ensuring every detail is handled with precision.
                </p>
                <br />
                <p>
                  Our projects are meticulously planned before going on-site,
                  with every possibility considered to ensure they are completed
                  on time and within budget. We continuously monitor each
                  project to maintain the highest standard of perfection.
                </p>
              </div>
              {/* <button
                id="about-us-studio-button"
                className="about-studio-button about-us-btn"
                onClick={() => setContactToggle(true)}
              >
                GET IN TOUCH
              </button> */}
              <CustomButton
                margin={"50px 0px 0px 0px"}
                btnTxt={" GET IN TOUCH"}
                onClick={() => setContactToggle(true)}
              />
            </Col>
          </Row>
          <Row>
            <Col id="about-us-realisation-list">
              <div id="about-us-realisation-list-inner">
                <p>Key Attributes</p>
                <div id="about-us-realisation-list-div">
                  <ul id="about-us-first-half-lists">
                    <li>Technical Drafting</li>
                    <li>Project Management</li>
                    <li>Trade Purchasing</li>
                    <li>Joinery Design</li>
                    <li>Project Management</li>
                  </ul>
                  <ul id="about-us-second-half-lists">
                    <li>In House Soft Furnishings</li>
                    <li>Architectural Services</li>
                    <li>3D Visualisations</li>
                    <li>Tendering Packages</li>
                    <li>Budget Administration</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="about-us-getintouch">
          <GetInTouchSection />
        </div>
      </Layout>
      <div className="about-us-discription">
        <Disclaimer id="about-disc" />
      </div>
      {contactToggle && (
        <Contact id="projectint-contact" closeContact={setContactToggle} />
      )}
      <FooterBootstrap />
    </>
  );

  function getDirections() {
    // Replace the address with your desired destination
    var destination = encodeURIComponent(
      "One Fit Out Studio, Community 369 - Warehouse 11 Street 31 - Al Quoz - Al Quoz Industrial Area 4 - Dubai - United Arab Emirates"
    );
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${destination}`,
      "_blank"
    );
  }
}
