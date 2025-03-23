import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ScrollableSlider from "../../../../Components/ScrollableSlider";

let residentialDataSet = "/designbyone.json";
const DesignByOneStyles = () => {
  return (
    <div
      className="KitchenStyles-container"
      style={{ paddingBottom: "70px", borderBottom: "1px solid #eaeaea" }}
    >
      <Container>
        <Row>
          <Col sm={12}>
            <ScrollableSlider
              borderTop={false}
              showProgress={false}
              showBtn={false}
              title={"Featured Projects"}
              showCustomTitles={true}
              showBtnMobile={false}
              resource={residentialDataSet}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DesignByOneStyles;
