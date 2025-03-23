import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const BlogBannerImageSection = () => {
  return (
    <Container style={{ padding: "0" }}>
      <Row>
        <Col lg={12}>
          <div
            className="blog_banner_image_container"
            style={{
              width: "100%",
              height: "auto",
            }}
          >
            <img
              src="/assets/about-header.png"
              alt="Blog Banner"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogBannerImageSection;
