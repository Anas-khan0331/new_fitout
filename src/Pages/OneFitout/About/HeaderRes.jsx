import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./css/HeaderRes.css";

export default function HeaderRes({ id }) {
  return (
    <div className="about-banner">
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
                            ABOUT US
                          </h1>
                          <div className="banner-description-container">
                            <p
                              style={{ fontFamily: "p22-mackinac-pro, serif" }}
                              className="banner-description"
                            >
                              At One Fitout, we turn houses into homes by
                              crafting spaces that blend functionality,
                              elegance, and your personal style.
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
}
