import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ScrollableSlider from "../../../../Components/ScrollableSlider";

let residentialDataSet = "/kitchenStyles.json";
const KitchenStyles = () => {
  return (
    <div
      className="KitchenStyles-container"
      style={{ padding: "50px 0px", borderBottom: "1px solid #eaeaea" }}
    >
      <Container>
        <Row>
          <Col sm={12}>
            <p className="kitchen-unique-styles-p">
              We offer{" "}
              <span className="kitchen-unique-styles-span">
                five unique kitchen styles
              </span>{" "}
              there isn't a person who has come into the apartment, be they
              friends or delivery drivers, who haven't been bowled over!
            </p>
          </Col>
          <Col sm={12}>
            <ScrollableSlider
              borderTop={false}
              showProgress={false}
              showBtn={false}
              title={""}
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

export default KitchenStyles;
