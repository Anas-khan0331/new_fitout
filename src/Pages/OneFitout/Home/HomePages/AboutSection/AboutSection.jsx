import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutSection = () => {
  return (
    <div
      className="about_section_container"
      style={{
        background: "#0B1215",
        padding: "20px 40px",
        borderBottom: "1px solid #eaeaea",
      }}
    >
      <Container fluid>
        <Row>
          <Col>
            <div className="about_text">
              <p>
                One Fitout is a leading Dubai-based fit-out company, renowned
                for delivering exceptional interior, residential, retail, shop,
                and commercial fit-out solutions. We specialize in transforming
                spaces into stunning environments that reflect your unique
                vision. With a commitment to quality, innovation, and client
                satisfaction, our experienced team provides end-to-end services,
                from concept to completion, and they will guide you through
                every step of the process. We pride ourselves on building
                strong, lasting relationships with our clients, founded on
                trust, transparency, and exceptional craftsmanship.
              </p>
            </div>
          </Col>
        </Row>
      </Container>{" "}
    </div>
  );
};

export default AboutSection;
