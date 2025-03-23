import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Contact from "../../../../Components/Contact";
import CustomButton from "../../../../Components/CustomButton";

const ChooseDesignByoneSection = () => {
  const [contactToggle, setContactToggle] = useState(false);

  return (
    <div
      style={{
        borderTop: "1px solid #eaeaea",
        borderBottom: "1px solid #eaeaea",
        paddingBottom: "80px",
      }}
    >
      <Container>
        <Row id="about-us-studio">
          <Col xs={12} sm={12} md={12} lg={5} xl={6} id="about-us-studio-inner">
            <img
              src="/assets/db1-banner.png"
              style={{
                objectFit: "cover",
                height: "100%",
                objectPosition: "100% 60%",
              }}
            />
          </Col>
          <Col lg={1} xl={1}></Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={5} id="about-us-studio-right">
            <h1>WE ARE SPECIALISTS</h1>
            <h2 id="about-us-bold-text">
              Founded by Kailey & Roddy McLeod in 2020, our studio is a boutique
              fit-out company based in Dubai, specialising in bringing visionary
              spaces to life.
            </h2>
            <div id="about-us-remaining-p">
              <p>
                With a team of associate designers, architects, and project
                managers, we blend creativity, precision, and innovation to
                redefine what’s possible in design.
              </p>
              <br />
              <p>
                We believe in staying personal, hands-on, and fully immersed in
                every project. This commitment allows us to deliver highly
                tailored, practical, and inspiring solutions for our clients.
                Every member of our team is not only highly qualified but also
                driven by a shared passion for excellence.
              </p>
              <p>
                With an ever-evolving library of premium finishes, cutting-edge
                technology, and years of expertise, we transform your vision
                into a tangible, beautiful reality. Let us craft the
                extraordinary for you.
              </p>
            </div>

            <CustomButton
              margin={"50px 0px 0px 0px"}
              btnTxt={" GET IN TOUCH"}
              onClick={() => {
                setContactToggle(true);
              }}
            />
          </Col>
        </Row>
      </Container>
      {contactToggle && (
        <Contact id="projectint-contact" closeContact={setContactToggle} />
      )}
    </div>
  );
};

export default ChooseDesignByoneSection;
