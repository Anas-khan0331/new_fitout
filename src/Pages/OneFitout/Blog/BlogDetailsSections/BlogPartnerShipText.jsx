import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BlogPartnerShipText = () => {
  return (
    <div>
      <Container fluid>
        <Row className="mx-auto">
          <Col lg={5}></Col>
          <Col lg={5}>
            <div style={{}}>
              <h4
                style={{
                  fontWeight: "bold",
                  fontSize: "26px",
                  lineHeight: "35px",
                  fontFamily: "p22-mackinac-pro",
                }}
              >
                Van Der Hurd and Gallacher’s Partnership
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginTop: "20px",
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
            </div>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>{" "}
    </div>
  );
};

export default BlogPartnerShipText;
