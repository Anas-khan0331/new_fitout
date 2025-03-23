import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import designbyonelogo from "../../../../../public/assets/db1-logo.png";
const DesignHomeBanner = () => {
  return (
    <div className="kitchen-banner">
      <Container>
        <Row>
          <Col>
            <div className="kitchen-banner-container">
              <div className="overlay">
                <Container>
                  <Row>
                    <Col>
                      <div className="kitchen-banner-text-container">
                        <div className="">
                          <div className="designbyonelogo-class">
                            <img src={designbyonelogo} alt="" />
                          </div>
                          <div className="kitchen-banner-description-container">
                            <p
                              style={{ fontFamily: "p22-mackinac-pro, serif" }}
                              className="banner-description"
                            >
                              Bring Your Dream Kitchen To Life With Us
                            </p>
                          </div>
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

export default DesignHomeBanner;
