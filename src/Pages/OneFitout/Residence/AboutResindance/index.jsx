import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutResindance = () => {
  return (
    <div className="about_residance_container">
      <Container>
        <Row className="">
          <Col>
            <div className="about_residance_description">
              <p style={{ fontFamily: "p22-mackinac-pro, serif" }}>
                Unlock the full potential of your home, whether it’s a complete
                transformation or enhancing a specific area. Our comprehensive
                residential and interior fit-out services provide
                <span style={{ color: "#B51F29", marginLeft: "10px" }}>
                  everything you need
                </span>
                —from concept to completion.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutResindance;
