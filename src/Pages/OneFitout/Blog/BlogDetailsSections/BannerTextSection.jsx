import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BannerTextSection = () => {
  return (
    <div style={{ padding: "60px 0px" }}>
      <Container>
        <Row className="mx-auto">
          <Col lg={5}>
            <div className="">
              <p
                style={{
                  fontSize: "14px",
                  marginBottom: "0px",
                  color: "gray",
                }}
              >
                Words
                <span
                  style={{
                    marginLeft: "3px",
                    color: "#0B1215",
                    fontWeight: "600",
                  }}
                >
                  Asher Ross
                </span>
              </p>
              <p
                style={{
                  fontSize: "14px",
                  marginBottom: "0px",
                  color: "gray",
                }}
              >
                Photos
                <span
                  style={{
                    marginLeft: "3px",
                    color: "#0B1215",
                    fontWeight: "600",
                  }}
                >
                  Maison Celadora
                </span>
              </p>
            </div>
          </Col>
          <Col lg={5}>
            <div className="author_name" style={{ marginBottom: "50px" }}>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  marginTop: "10px",
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
                renderings.{" "}
              </p>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  marginTop: "10px",
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
          </Col>
          <Col lg={2}></Col>
          <Col lg={3}></Col>
          <Col lg={2}></Col>
          <Col lg={5}>
            <div className="">
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "500",
                  lineHeight: "30px",
                  fontFamily: "p22-mackinac-pro",
                }}
              >
                Adam Rolston, Drew Stuart, and Gabriel Benroth, the cofounding
                partners of INC Architecture & Design, joke that together they
                make one great principal. Rolston, the creative and managing
                director, is a conceptual thinker who steers the overall
                aesthetic of a project.
              </p>
            </div>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerTextSection;
