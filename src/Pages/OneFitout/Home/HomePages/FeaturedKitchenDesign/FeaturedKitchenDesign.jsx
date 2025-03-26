import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import savannahImg from "../../../../../../public/assets/about-header.png";
import CustomButton from "../../../../../Components/CustomButton";

const FeaturedKitchenDesign = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    const type = "Residential";
    const area = "Arabian Ranches";
    const community = "Savannah, Arabian Ranches"
      .toLowerCase()
      .replace(/,/g, "") // Remove commas
      .replace(/\s+/g, "-"); // Replace spaces with hyphens
    const id = "5";
    navigate(`/projects/${type}/${area}/${community}/${id}`);
  };

  return (
    <div
      className="featured_kitchen_section_main_div"
      style={{
        padding: "80px 80px",
        background: "#070B0C",
        borderTop: "1px solid #1c1c1c",
      }}
    >
      <Container style={{ padding: "0px" }}>
        <Row className="reverse-row">
          <Col lg={4} xs={12}>
            <div className="savanahImage_container">
              <div className="savanahImage_div renovation_text_small_hidden_class">
                <p>FEATURED PROJECT</p>
              </div>
              <div className="renovation_text">
                <div
                  className="renovation_text_small "
                  style={{ marginBottom: "20px" }}
                >
                  <p className="renovation_kitchen_text_spacing_class">
                  VILLA RENOVATION
                  </p>
                </div>
                <div className="renovation_text_large">
                  <p
                    style={{
                      marginBottom: "0px !important",
                      fontFamily: "p22-mackinac-pro, serif",
                    }}
                  >
                    Savannah, 
                  </p>
                  <p
                    style={{
                      marginBottom: "0px",
                      fontFamily: "p22-mackinac-pro, serif",
                    }}
                  >
                    Arabian Ranches
                  </p>
                </div>
                <div className="renovation_Btn hover_btn_class">
                  <CustomButton
                    btnTxt={"Explore"}
                    onClick={handleExploreClick}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="reverse_text_class">
              <p
                style={{
                  fontSize: "12px",
                  color: "#eaeaea",
                }}
              >
                FEATURED KITCHEN DESIGN
              </p>
            </div>
            <div
              className="savannahImg_container"
              style={{ width: "100%", height: "100%" }}
            >
              <img
                src={savannahImg}
                style={{ width: "100%", height: "100%" }}
                alt="savannahImg"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedKitchenDesign;
