import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/ResidanceStyles.css";

const ResidanceBannerSection = () => {
  return (
    <div className="residence-banner">
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
                            Residential <br />
                            Fitouts
                          </h1>
                          <div className="banner-description-container">
                            <p
                              style={{ fontFamily: "p22-mackinac-pro, serif" }}
                              className="banner-description"
                            >
                              Transforming houses into dream homes, we
                              specialise in creating exceptional residential
                              spaces —whether it’s a complete property makeover
                              or enhancing a part of your home.
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

export default ResidanceBannerSection;
