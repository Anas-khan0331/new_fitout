import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/DesignByOne.css";

const DesignResindance = () => {
  return (
    <div className="designResidance_container">
      <Container fluid>
        <Row className="">
          <Col>
            <div className="kitchen_residance_heading">
              <p>WHAT WE DO</p>
            </div>
            <div className="design_residance_description">
              <p style={{ fontFamily: "p22-mackinac-pro, serif" }}>
                Unlock the full potential of your home, whether it’s
                transforming an entire property or perfecting a single space.
                Our comprehensive residential and interior fit-out services
                offer
                <span style={{ color: "#B51F29", marginLeft: "10px" }}>
                  everything you need
                </span>
                —from concept to completion.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DesignResindance;
