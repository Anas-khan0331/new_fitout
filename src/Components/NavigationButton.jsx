import React, { useEffect, useMemo, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const NavigationButton = ({
  pageNext,
  pageBack,
  DisplayedItems,
  TotalItems,
  currentPage,
  isDisabled,
}) => {
  return (
    <div className="kitchengrid-buttons">
      <Container fluid>
        <Row>
          <Col xs={6} sm={6} md={5} className="kitchengrid-button-prev">
            <div style={{ paddingLeft: "30px" }}>
              <button
                onClick={pageBack}
                disabled={currentPage === 1}
                className={currentPage === 1 ? "disabled" : ""}
              >
                Previous
              </button>
            </div>
          </Col>
          <Col xs={6} sm={6} md={7} id="kitchengrid-button-next">
            <div
              style={{
                paddingRight: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "97px",
              }}
            >
              <span>
                Viewing {DisplayedItems} of {TotalItems}
              </span>
              <button
                onClick={pageNext}
                disabled={isDisabled}
                className={isDisabled ? "disabled" : ""}
              >
                Next
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavigationButton;
