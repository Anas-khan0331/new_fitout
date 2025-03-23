import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import blogVideo from "../../../../../public/assets/onefitoutmain.mp4";
import { redColor } from "../../../../utils/static";

const BlogVideo = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "50px 0px",
        }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col lg={11}>
              <div style={{ width: "100%" }}>
                <video
                  src={blogVideo}
                  controls
                  style={{ width: "100%", height: "auto" }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={5}></Col>
          <Col lg={5}>
            <div style={{ padding: "0px 0px" }}>
              <h4 style={{ fontWeight: "bold", fontSize: "21px" }}>
                Van Der Hurd and Gallacher’s Partnership
              </h4>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "300",
                  marginTop: "15px",
                }}
              >
                Adam Rolston, Drew Stuart, and Gabriel Benroth, the cofounding
                partners of INC Architecture & Design, joke that together they
                make one great principal. Rolston,{" "}
                <span style={{ color: redColor, textDecoration: "underline" }}>
                  the creative and managing director
                </span>
                , is a conceptual thinker who steers the overall aesthetic of a
                project. Stuart, the development and construction director.
              </p>
            </div>
          </Col>
          <Col lg={2}></Col>
        </Row>
        <Row>
          <Col lg={1}></Col>
          <Col lg={10}>
            <div style={{ marginTop: "60px" }}>
              <h2
                className="quotes_text"
                style={{
                  fontSize: "32px",
                  lineHeight: "43px",
                  fontWeight: "350",
                }}
              >
                Realising the potential of an entire property or just one room,
                our residential and interior fit out services have{" "}
                <span style={{ color: redColor }}>everything you need</span>{" "}
                from start to finish. One point of contact for a stress free fit
                out project in Dubai!
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  marginTop: "20px",
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
            </div>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogVideo;
