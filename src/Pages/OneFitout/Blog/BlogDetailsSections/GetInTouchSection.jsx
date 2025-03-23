import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Contact from "../../../../Components/Contact";
import CustomButton from "../../../../Components/CustomButton";
import { redColor } from "../../../../utils/static";

const GetInTouchSection = () => {
  const [viewWidth] = useState(window.innerWidth);
  const [contactToggle, setContactToggle] = useState(false);
  return (
    <div className="get-in-touch-wrapper">
      <Container style={{ marginTop: "50px" }}>
        {contactToggle && (
          <Contact id="projectint-contact" closeContact={setContactToggle} />
        )}
        <Row>
          <Col lg={9} className="mx-auto text-center">
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
                className="get_in_touch_class get_touch_blog_details_section"
                style={{
                  fontSize: "38px",
                  lineHeight: "50px",
                  fontWeight: "300",
                  fontFamily: "p22-mackinac-pro",
                }}
              >
                Feel Like We Could Be A Good Match For Your{" "}
                <span style={{ color: redColor }}>Fit Out</span> Project In
                Dubai?
              </h1>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                {/* <Button className="getInTouch_custom_btn">GET IN TOUCH</Button>{" "} */}
                <CustomButton
                  margin={"50px 0px 0px 0px"}
                  onClick={() => {
                    setContactToggle(true);
                  }}
                  btnTxt={"GET IN TOUCH"}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GetInTouchSection;
