import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomButton from "../../../../Components/CustomButton";

const ChooseUsSection = () => {
  return (
    <div
      style={{
        borderTop: "1px solid #EAEAEA",
        borderBottom: "1px solid #EAEAEA",
        paddingBottom: "80px",
      }}
    >
      <Container>
        <Row id="about-us-studio">
          <Col xs={12} sm={12} md={12} lg={5} xl={6} id="about-us-studio-inner">
            <img
              src="/assets/why-us-img.png"
              style={{ objectFit: "cover", objectPosition: "100% 60%" }}
            />
          </Col>
          <Col lg={1} xl={1}></Col>
          <Col xs={12} sm={12} md={12} lg={6} xl={5} id="about-us-studio-right">
            <h1>WHY US</h1>

            <div id="about-us-remaining-p">
              <p>
                Our clientele spans both residential and commercial projects.
                Over the years, we have worked on a diverse range of spaces,
                from newly built villas requiring bespoke furnishing to complete
                renovations of period homes and mansion blocks. Our portfolio
                also includes restaurants, retail spaces, hotels, and private
                members’ clubs.
              </p>
              <p>
                Many of our clients have a distinct sense of style and prefer
                personalised, unique designs over off-the-shelf solutions. They
                value being part of the creative journey, even if their time is
                limited or they reside abroad. Leveraging our expertise and
                resources, we streamline the entire process to ensure it’s both
                seamless and enjoyable, delivering results that exceed
                expectations.
              </p>
            </div>
            {/* <button
                id="studio-button"
                className="about-button about-us-btn"
                onClick={() => setContactToggle(true)}
              >
                GET IN TOUCH
              </button> */}
            <CustomButton
              margin={"50px 0px 0px 0px"}
              btnTxt={"Download Brochure"}
              //   onClick={() => setContactToggle(true)}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChooseUsSection;
