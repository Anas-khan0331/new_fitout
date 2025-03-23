import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import servicesImg1 from "../../../../../public/assets/about-middle-img.png";
import facebookLogo from "../../../../../public/assets/fb.png";
import featureImage from "../../../../../public/assets/featured-services-2.png";
import instaLogo from "../../../../../public/assets/insta.png";
import linkedinLogo from "../../../../../public/assets/linkedin.png";
import { redColor } from "../../../../utils/static";

const BlogServicesSection = () => {
  const [viewWidth] = useState(window.innerWidth);
  const socialMediaIcons = [
    { logo: facebookLogo, link: "https://www.facebook.com", alt: "Facebook" },
    { logo: instaLogo, link: "https://www.instagram.com", alt: "Instagram" },
    { logo: linkedinLogo, link: "https://www.linkedin.com", alt: "LinkedIn" },
  ];

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={5}></Col>
          <Col lg={5}>
            <div style={{ padding: "0px 0px" }}>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "300",
                  fontFamily: "p22-mackinac-pro",
                }}
              >
                Adam Rolston, Drew Stuart, and Gabriel Benroth, the cofounding
                partners of INC Architecture & Design, joke that together they
                make one great principal. Rolston, the creative and managing
                director, is a conceptual thinker who steers the overall
                aesthetic of a project. Stuart, the development and construction
                director, is a detail-oriented people person who helps realize
                the design on-site. And Benroth, the studio and information
                director, is a systems guy who creates innovative, interactive
                renderings.
              </p>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "300",
                  fontFamily: "p22-mackinac-pro",
                }}
              >
                Since they started INC in 2006, the firm has grown to 50
                employees—and scored such marquee commissions as the master plan
                and renovation of the rink level at Rockefeller Center—but each
                partner still works on every project. “That’s our secret sauce:
                We’re owners who are deeply engaged,” Stuart begins. They also
                love what they do, and their youthful enthusiasm is evident in
                INC’s distinctive work.
              </p>
            </div>
            <div style={{ width: "100%", height: "700px", margin: "40px 0px" }}>
              <img
                src={featureImage}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                alt=""
              />
            </div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "300",
                fontFamily: "p22-mackinac-pro",
              }}
            >
              Adam Rolston, Drew Stuart, and Gabriel Benroth, the cofounding
              partners of INC Architecture & Design, joke that together they
              make one great principal. Rolston
              <span
                style={{
                  color: redColor,
                  textDecoration: "underline",
                  marginLeft: "4px",
                }}
              >
                the creative and managing director
              </span>
              , is a conceptual thinker who steers the overall aesthetic of a
              project. Stuart, the development and construction director.
            </p>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
      <Container fluid>
        <div className="" style={{ margin: "50px 0px" }}>
          <Row className="mx-auto">
            <Col lg={6} md={6} sm={6}>
              <div
                className="services_Img1"
                style={{ width: "100%", height: "100%" }}
              >
                <img
                  src={servicesImg1}
                  style={{
                    width: "100%",
                    marginBottom: viewWidth <= 800 ? "15px" : "0",
                  }}
                  alt=""
                />
              </div>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <div className="" style={{ width: "100%", height: "100%" }}>
                <img src={servicesImg1} style={{ width: "100%" }} alt="" />
              </div>
            </Col>
          </Row>
        </div>
        <div className="" style={{ margin: "50px 0px" }}>
          <Row>
            <Col lg={5}></Col>
            <Col lg={5}>
              <div className="">
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "300",
                    fontFamily: "p22-mackinac-pro",
                  }}
                >
                  Adam Rolston, Drew Stuart, and Gabriel Benroth, the cofounding
                  partners of INC Architecture & Design, joke that together they
                  make one great principal. Rolston, the creative and managing
                  director, is a conceptual thinker who steers the overall
                  aesthetic of a project. Stuart, the development and
                  construction director, is a detail-oriented people person who
                  helps realize the design on-site. And Benroth, the studio and
                  information director, is a systems guy who creates innovative,
                  interactive renderings.
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "300",
                    fontFamily: "p22-mackinac-pro",
                  }}
                >
                  Since they started INC in 2006, the firm has grown to 50
                  employees—and scored such marquee commissions as the master
                  plan and renovation of the rink level at Rockefeller
                  Center—but each partner still works on every project. “That’s
                  our secret sauce: We’re owners who are deeply engaged,” Stuart
                  begins. They also love what they do, and their youthful
                  enthusiasm is evident in INC’s distinctive work.
                </p>
                <div className="d-flex" style={{ marginTop: "40px" }}>
                  {socialMediaIcons?.map((icon, index) => (
                    <a
                      href={icon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                      className="d-flex justify-content-center align-items-center"
                      style={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        marginRight: "10px",
                        border: "1px solid #848889",
                      }}
                    >
                      <img
                        src={icon.logo}
                        style={{
                          width: "20px",
                          height: "20px",
                          objectFit: "contain",
                        }}
                        alt={icon.alt}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={2}></Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default BlogServicesSection;
