import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import imgOne from "../../public/assets/logo-white-red.png";
import closeIconImage from "../../public/assets/svg/close.svg";
import "../Pages/OneFitout/Home/css/SliderDetailComponent.css";

const SliderDetailComponent = ({
  sliderContent,
  closeHandler,
  showSliderDetails,
}) => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setViewWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      closeHandler();
    }, 400);
  };

  return (
    <AnimatePresence onExitComplete={closeHandler} mode="wait">
      {showSliderDetails && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={handleClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
              zIndex: 999, // Just below the popup
            }}
          />

          <motion.div
            key="slider"
            initial={{
              opacity: 0,
              y: "100vh",
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: "100vh",
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 130,
              duration: 0.5,
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: viewWidth <= 992 ? "100vh" : "80vh",
              marginTop: viewWidth <= 992 ? "0" : "20vh",
              // backgroundColor: 'white',
              zIndex: 1000,
              overflowY: "auto",
            }}
          >
            <Container>
              <div className="main-wrapper">
                <div className="main-wrapper-inner">
                  <Row>
                    <Col xs={12}>
                      {viewWidth < 992 ? (
                        ""
                      ) : (
                        <div
                          className="header-section"
                          onClick={handleClose}
                          style={{ cursor: "pointer" }}
                        >
                          <img src={closeIconImage} alt="close" />
                        </div>
                      )}
                    </Col>
                  </Row>
                  <div className="mobile_view_container">
                    <Row>
                      <Col xs={12} lg={3}>
                        {viewWidth > 992 ? (
                          <div>
                            <div style={{ marginBottom: "15px" }}>
                              <p className="readmore-title-slider">TYPE</p>
                              <p className="readmore-subtitle-slider">
                                Residential
                              </p>
                            </div>
                            <div style={{ marginBottom: "15px" }}>
                              <p className="readmore-title-slider">LOCATION</p>
                              <p className="readmore-subtitle-slider">
                                Jumeirah Golf Estate
                              </p>
                            </div>
                            <div style={{ marginBottom: "15px" }}>
                              <p className="readmore-title-slider">YEAR</p>
                              <p className="readmore-subtitle-slider">2023</p>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </Col>
                      <Col xs={12} lg={6}>
                        <div className="img_oneSection">
                          <Row
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "50px",
                              paddingRight: "25px",
                            }}
                          >
                            <Col xs={11}>
                              <div>
                                <img
                                  src={imgOne}
                                  width="60px"
                                  height="60px"
                                  alt="logo"
                                />
                              </div>
                            </Col>
                            <Col xs={1}>
                              <div>
                                <img
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                    cursor: "pointer",
                                  }}
                                  src={closeIconImage}
                                  onClick={handleClose}
                                  alt="close"
                                />
                              </div>
                            </Col>
                          </Row>
                        </div>
                        <div className="readmore-main-slider">
                          {sliderContent?.map(({ title, label }, ind) => (
                            <div key={ind}>
                              <p className="readmore-main-slider-p">{label}</p>
                              <p
                                className="readmore-title-slider-desc"
                                style={{ marginTop: "10px" }}
                              >
                                {title}
                              </p>
                            </div>
                          ))}
                        </div>
                      </Col>
                    </Row>
                    {viewWidth <= 992 ? (
                      <div className="mobile_view_type_details">
                        <div style={{ marginBottom: "15px" }}>
                          <p className="readmore-title-slider">TYPE</p>
                          <p className="readmore-subtitle-slider">
                            Residential
                          </p>
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                          <p className="readmore-title-slider">LOCATION</p>
                          <p className="readmore-subtitle-slider">
                            Jumeirah Golf Estate
                          </p>
                        </div>
                        <div style={{ marginBottom: "15px" }}>
                          <p className="readmore-title-slider">YEAR</p>
                          <p className="readmore-subtitle-slider">2023</p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </Container>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SliderDetailComponent;
