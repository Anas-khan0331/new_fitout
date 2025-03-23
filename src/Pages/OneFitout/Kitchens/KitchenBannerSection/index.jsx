import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/KitchenHomePage.css";

const ResidancHomeBanner = () => {
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
                          <h1
                            style={{ textTransform: "upperCase" }}
                            className="kitchen-banner-heading"
                          >
                            K<span style={{ color: "#fff" }}>1</span>tchen.{" "}
                            <br />
                          </h1>
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

export default ResidancHomeBanner;
