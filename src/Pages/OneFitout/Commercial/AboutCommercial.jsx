import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutCommercial = () => {
  return (
    <div className="about_residance_container">
      <Container>
        <Row className="">
          <Col>
            <div className="about_residance_description">
              <p style={{ fontFamily: "p22-mackinac-pro, serif" }}>
                Commercial fitouts focus on transforming commercial spaces into
                functional, stylish environments. Specialising in restaurants,
                cafes, offices, retail stores, and salons,
                <span style={{ color: "#B51F29", marginLeft: "10px" }}>
                  we deliver bespoke designs
                </span>
                &nbsp;that reflect your brand’s identity, enhance customer
                experiences, and ensure operational efficiency.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutCommercial;
