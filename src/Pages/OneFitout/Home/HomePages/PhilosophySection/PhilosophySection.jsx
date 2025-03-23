import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import philosophyImg from "../../../../../../public/assets/philosophy-2.jpg";
import Contact from "../../../../../Components/Contact";
import CustomButton from "../../../../../Components/CustomButton";
const PhilosophySection = () => {
  const [contactToggle, setContactToggle] = useState(false);
  return (
    <div
      className="philosphy_section_main"
      style={{
        padding: "100px 80px",
      }}
    >
      <Container style={{ padding: "0px" }}>
        {contactToggle && (
          <Contact id="projectint-contact" closeContact={setContactToggle} />
        )}
        <Row className="reverse-row">
          <Col lg={5} md={12}>
            <div className="philosophy_text_container">
              <div className="philosophy_text_heading">
                <h2>PHILOSOPHY </h2>
                <p
                  className="philosophy_text1"
                  style={{ fontFamily: "p22-mackinac-pro, serif" }}
                >
                  At One Fitout, every space tells a story. Design is more than
                  aesthetics; it’s about creating environments that inspire,
                  comfort, and elevate living. Craftsmanship and innovation lie
                  at the heart of every detail, ensuring impeccable quality and
                  timeless elegance.
                </p>
                <p
                  className="philosophy_text2"
                  style={{ fontFamily: "p22-mackinac-pro, serif" }}
                >
                  Our philosophy centers on understanding each client’s unique
                  needs and aspirations. Through creativity and precision, we
                  transform visions into beautifully balanced realities. From
                  concept to completion, every project is a journey of
                  collaboration. At One Fitout, design is not just what we
                  do—it’s who we are.{" "}
                </p>
                <div
                  className="philosophy_text_btn"
                  onClick={() => {
                    setContactToggle(true);
                  }}
                >
                  {/* <Button>GET IN TOUCH</Button> */}
                  <CustomButton btnTxt={"GET IN TOUCH"} />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={2}></Col>
          <Col lg={5} md={12} sm={12}>
            <div
              className="philosophyImg_container"
              style={{ width: "100%", height: "550px" }}
            >
              <img
                src={philosophyImg}
                style={{ width: "100%", height: "100%" }}
                alt="philosophyImg"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PhilosophySection;
