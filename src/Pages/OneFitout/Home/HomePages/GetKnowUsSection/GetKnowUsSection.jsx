import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CustomButton from "../../../../../Components/CustomButton";

const GetKnowUsSection = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div
      className="featured_kitchen_section_main_div"
      style={{
        padding: "100px 80px",
        borderBottom: "1px solid #eaeaea",
      }}
    >
      <Container style={{ padding: "0px" }}>
        <Row>
          <Col lg={2} xl={2}>
            <div className="knowUs_container">
              <div className="knowUs_container_div">
                <p>Who We Are</p>
              </div>
              <div className="knowUs_container_text">
                <div className="knowUs_container_text_gray text_grey_hidden ">
                  <p>
                    Led by husband-and-wife duo Roddy and Kailey, offering
                    end-to-end project management, bespoke interior solutions,
                    and expert craftsmanship through an in-house joinery team.
                  </p>
                </div>
              </div>
            </div>
          </Col>

          <Col lg={3} xl={2}></Col>
          <Col lg={7} xl={8}>
            <div
              className="get_to_know_us_text"
              style={{ width: "100%", height: "100%" }}
            >
              <h1>
                A Dubai-based fitout and interior design company, crafting
                <span style={{ color: "#B51F29" }}> timeless spaces</span> that
                blend classic charm with contemporary appeal.
              </h1>
              <div className="knowUs_container_text_gray text_grey_block ">
                <p>
                  Led by husband-and-wife duo Roddy and Kailey, offering
                  end-to-end project management, bespoke interior solutions, and
                  expert craftsmanship through an in-house joinery team.
                </p>
              </div>
              <div className="get_to_know_btn">
                <CustomButton
                  btnTxt="GET TO KNOW US"
                  onClick={() => navigate("/about-us")} // Navigate to about-us
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GetKnowUsSection;
