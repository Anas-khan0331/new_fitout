import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import "./css/FooterBootstrap.css";
import "./css/MobileFooter.css";
import MobileFooter from "./MobileFooter";
import imgSrc from "/assets/logo-white-red.png";
import instaLogo from "/assets/svg/footer-insta-logo.svg";
import linkedinLogo from "/assets/svg/footer-linkedin-logo.svg";
import tiktokLogo from "/assets/svg/tiktok.svg";
import whatsappLogo from "/assets/whatsapp-logo.png";

const FooterBootstrap = () => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const [contactToggle, setContactToggle] = useState(false);
  const [active, setactive] = useState("mf-git-head");
  useEffect(() => {
    const handleResize = () => {
      setViewWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function openWhatsapp() {
    window.open("https://wa.me/971503486838", "_blank");
  }

  const handleClick = (event) => {
    const eId = event.currentTarget.id;
    setactive(() => {
      if (active === eId) {
        return "";
      }
      return eId;
    });
  };

  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <>
      <div className="footer-bootstrap" id="footer-section">
        {contactToggle && (
          <Contact id="projectint-contact" closeContact={setContactToggle} />
        )}
        {viewWidth > 767 ? (
          <Container>
            <Row style={{ gap: "30px" }}>
              <Col md={5} lg={2} xl={1}>
                <img src={imgSrc} width={78} height={78} />
              </Col>
              <Col md={5} lg={3} xl={4}>
                <div className="footer-heading">Get in touch</div>
                <div className="footer-digital-info">
                  <div className="footer-tel">Tel: +971 (4) 335 4947</div>
                  <div className="footer-mob">Mob: +971 (50) 348 6838</div>
                  <div className="footer-email">
                    Email: enquiries@1fitout.com
                  </div>
                </div>
                <div className="footer-address">
                  <div id="git-add-line1">Warehouse 11, Street 31,</div>
                  <div id="git-add-line2">Community 369,</div>
                  <div id="git-add-line3">Al Quoz Industrial 4,</div>
                  <div id="git-add-line4">Dubai</div>
                </div>
              </Col>
              <Col md={5} lg={3} xl={3}>
                <div className="footer-heading">At Your Service</div>
                <div className="footer-digital-info">
                  <div
                    className="footer-tel"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setContactToggle(true);
                    }}
                  >
                    Contact Us
                  </div>
                  <div className="footer-mob">
                    <Link
                      className="links"
                      to="/about-us"
                      style={{ textDecoration: "none", color: "#fbfaf6" }}
                    >
                      About Us
                    </Link>
                  </div>
                  <div className="footer-email">
                    <Link
                      className="links"
                      to="/residential"
                      style={{ textDecoration: "none", color: "#fbfaf6" }}
                    >
                      Our Services
                    </Link>
                  </div>
                  {/* <div className="footer-email">Careers</div> */}
                  {/* <div className="footer-email">
                    Frequently Asked Questions (FAQ)
                  </div> */}
                </div>
              </Col>
              <Col md={5} lg={2} xl={3}>
                <div className="footer-heading">Connect with us</div>
                <div className="footer-social-icons">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/one-fitout-ae"
                  >
                    <img src={linkedinLogo} width="22" height="22" />
                  </a>
                  <a onClick={openWhatsapp}>
                    <img src={whatsappLogo} width="22" height="22" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/onefitout/"
                  >
                    <img src={instaLogo} width="22" height="22" />
                  </a>
                  <a target="_blank" href="https://www.tiktok.com/@onefitout">
                    <img src={tiktokLogo} width="22" height="22" />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        ) : (
          <>
            <Container>
              <MobileFooter />
            </Container>
            <div id="mf-bottom">
              <span>Copyright © 2024 One Fitout. All Rights Reserved.</span>
            </div>
          </>
        )}
      </div>

      <Container
        fluid
        id="mf-bottom"
        style={{
          display: viewWidth > 767 ? "flex" : "none",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#FBFAF6",
          fontSize: "14px",
          fontWeight: "500",
          height: "40px",
          paddingLeft: "30px",
          paddingRight: "40px",
        }}
      >
        <div>Made by Maison Celadora</div>
        <div>Copyright ©2006-2024 One Fitout. All Rights Reserved.</div>
        <div>License No.26364456</div>
      </Container>
    </>
  );
};

export default FooterBootstrap;
