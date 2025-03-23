import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HomeVideoBanner.css";

const HomeBannerSection = () => {
  const source = "/assets/homeBannerImage.jfif";
  const heading = (
    <>
      BEST FITOUT
      <br />
      SPECIALISTS IN DUBAI
    </>
  );

  return (
    <section className="home-banner-section">
      <Container fluid className="px-0">
        <Row className="gx-0">
          <Col lg={12}>
            <div className="video-container">
              <img
                className="responsive-video"
                src={source}
                  // type="video/mp4"
                  // autoPlay
                  // loop
                  // muted
                  // aria-label={heading}
              ></img>
              <div className="video-overlay">
                <div className="heading-container">
                  <h1 className="video-heading">{heading}</h1>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col
            lg={12}
            md={12}
            sm={12}
            xs={12}
            className="text-center fitout_text_container"
          >
            <div className="fitout_text_div">
              <p>
                WE DELIVER{" "}
                <span style={{ color: "#B51F29" }}>HIGH QUALITY FINISHES </span>
                ON ALL OUR FIT OUT PROJECTS
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomeBannerSection;
