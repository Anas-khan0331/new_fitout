import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BannerSection = () => {
  return (
    <div className="blog-banner-section-main">
      <Container>
        <Row>
          <Col lg={9} xs={12} className="mx-auto text-center">
            <div
              className="banner_container"
              style={{
                padding: "100px 0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1
                className="banner_text"
                style={{
                  fontSize: "40px",
                  lineHeight: "60px",
                  fontWeight: "400",
                  fontFamily: "p22-mackinac-pro",
                }}
              >
                INC Architecture & Design Partners: 2024 Interior Design Hall of
                Fame Inductees
              </h1>
              <div
                className="interior_design_container"
                style={{
                  marginTop: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                  fontFamily: "p22-mackinac-pro",
                }}
              >
                <h6>INTERIOR DESIGN | 20 JUL, 2024</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BannerSection;
