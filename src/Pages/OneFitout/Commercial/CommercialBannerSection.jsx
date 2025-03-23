import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Residence/css/ResidanceStyles.css";

const CommercialBannerSection = () => {
  return (
    <div className="residence-banner-commercial">
      <Container>
        <Row>
          <Col>
            <div className="banner-container">
              <div className="overlay">
                <Container>
                  <Row>
                    <Col>
                      <div className="banner-text-container">
                        <div className="">
                          <h1
                            style={{ textTransform: "upperCase" }}
                            className="banner-heading"
                          >
                            COMMERCIAL <br />
                            Fitouts
                          </h1>
                          <div className="banner-description-container">
                            <p
                              style={{ fontFamily: "p22-mackinac-pro, serif" }}
                              className="banner-description"
                            >
                              At One Fitout, we create exceptional commercial
                              spaces that combine innovative design, seamless
                              functionality, and premium craftsmanship to
                              elevate your business environment.
                            </p>
                          </div>
                        </div>
                        <div className="banner_dot_images">
                          <img
                            src="/assets/res-frame.png"
                            alt="Decorative Frame"
                            className="decorative-frame"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CommercialBannerSection;
