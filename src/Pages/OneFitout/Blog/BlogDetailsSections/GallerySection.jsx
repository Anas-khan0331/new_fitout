import { Button, Col, Container, Row } from "react-bootstrap";
import galleriImg2 from "../../../../../public/assets/featured-services-2.png";
import galleriImg1 from "../../../../../public/assets/residential-middle.png";
import galleryIcon from "/assets/svg/gallery-icon.svg";
import "../css/BlogDetail.css";
import { useState } from "react";

const GallerySection = () => {
  const [viewWidth] = useState(window.innerWidth);
  return (
    <div style={{ margin: "40px 0px" }}>
      <Container className="mx-auto">
        <Row>
          <Col lg={8} md={8} sm={8}>
            <div
              className="galleryImg1"
              style={{ width: "100%", height: "500px", position: "relative" }}
            >
              <img
                src={galleriImg1}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                alt=""
              />
              <div
                className="gallery-btn"
                style={{ position: "absolute", right: "20px", bottom: "20px" }}
              >
                <Button style={{}}>
                  <img
                    src={galleryIcon}
                    alt="Icon"
                    style={{
                      width: "12px",
                      height: "12px",
                      marginRight: "5px",
                      marginLeft: "10px",
                    }}
                  />
                  <div>Gallery</div>
                </Button>
              </div>
            </div>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <div style={{ width: "100%", height: "500px" }}>
              <img
                src={galleriImg2}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "10% 10%",
                  marginTop: viewWidth <= 800 ? "15px" : "0",
                }}
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GallerySection;
