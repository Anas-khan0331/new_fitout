import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./css/SliderComp.css";
import CustomButton from "./CustomButton";
import SliderDetailComponent from "./SliderDetailComponent";

async function getResource(resource) {
  try {
    const res = await fetch(`${resource}`);
    if (!res.ok) {
      throw new Error(`response error: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(`Error in fetching: ${error}`);
    return [];
  }
}

const ScrollableSlider = ({
  title,
  btnText,
  titleFontSize = "40px",
  resource,
  showBtn = true,
  journalDataSetFlag = false,
  dataType = false,
  showBtnMobile = true,
  isSmallTitle = false,
  showSliderDetails,
  setShowSliderDetails,
  showProgress = true,
  objectFit,
  borderTop = true,
  showCustomTitles = false,
}) => {
  const [content, setContent] = useState([]);
  const [selectedSlide, setSelectedSlide] = useState(null); // State to store selected slide
  const navigate = useNavigate();

  useEffect(() => {
    async function refreshContent() {
      const content = await getResource(resource);
      setContent(content);
    }
    refreshContent();
  }, [resource]);

  const handleNavigate = () => {
    navigate("/residential");
  };

  // Function to update selected slide when clicked
  const handleSlideClick = (item) => {
    setSelectedSlide(item); // Set selected slide data
    setShowSliderDetails(true); // Open SliderDetailComponent
  };
  const closeSliderDetail = () => {
    setShowSliderDetails(false); // Close detail view
    setSelectedSlide(null); // Clear selected slide
  };
  return (
    <div
      style={{
        paddingLeft: "00px",
        paddingRight: "0px",
        borderTop: borderTop ? "1px solid #EAEAEA" : "none",
        padding: "70px 0px",
      }}
      className="slider_comp_container"
    >
      <Container>
        <Row>
          <Col>
            <div
              className="slider_title_container"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {isSmallTitle ? (
                <div
                  style={{
                    fontSize: "14px",
                    textTransform: "uppercase",
                    fontWeight: 500,
                    lineHeight: "48px",
                    color: "#0b1215",
                    paddingLeft: "10px",
                    letterSpacing: "1.6px",
                  }}
                >
                  {title}
                </div>
              ) : (
                <div className="slider-title">{title}</div>
              )}
              {showBtn && (
                <div>
                  <CustomButton btnTxt={btnText} onClick={handleNavigate} />
                </div>
              )}
            </div>
            <div className="slider-container">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={4}
                scrollbar={{
                  draggable: true,
                  dragSize: 200,
                  hide: !showProgress,
                }}
                breakpoints={{
                  1920: { slidesPerView: 4.1 },
                  1023: { slidesPerView: 3.1 },
                  992: { slidesPerView: 2 },
                  768: { slidesPerView: 2 },
                  767: { slidesPerView: 1.1 },
                  320: { slidesPerView: 1.1 },
                }}
                className={`scrollable-container ${
                  !showProgress ? "no-progress" : ""
                }`}
              >
                {content?.map((item, index) => (
                  <SwiperSlide key={index} className="custom_slider_class">
                    <div
                      id="slider-content-card"
                      className="slider_card_custom_class"
                      style={{
                        marginRight: "15px",
                        flex: "0 0 auto",
                        cursor: "pointer",
                      }}
                      onClick={() => handleSlideClick(item)}
                    >
                      <div className="" style={{ position: "relative" }}>
                        <img
                          id="slider-image"
                          src={item.image}
                          alt="Slide"
                          width="100%"
                          height="320px"
                          style={{ objectFit: objectFit }}
                        />
                      </div>

                      {/* Custom Titles Section */}
                      {showCustomTitles ? (
                        <div
                          className="custom-titles-container"
                          style={{ padding: "15px 0" }}
                        >
                          <p
                            style={{
                              fontSize: "12px",
                              lineHeight: "16px",
                              letterSpacing: "0.6px",
                              color: "#0B1215",
                              fontWeight: "500",
                            }}
                          >
                            {item.label}
                          </p>
                          <h3
                            style={{
                              fontWeight: "350",
                              fontSize: "28px",
                              lineHeight: "35px",
                              letterSpacing: "0.2",
                              marginBottom: "0px ",
                              marginTop: "5px",
                            }}
                          >
                            {item.title}
                          </h3>
                          <h3
                            style={{
                              fontWeight: "350",
                              fontSize: "28px",
                              lineHeight: "35px",
                              letterSpacing: "0.2",
                            }}
                          >
                            {item.area}
                          </h3>
                        </div>
                      ) : (
                        // Original title/label rendering
                        <p
                          id="slider-section"
                          style={{
                            paddingRight: "10px",
                            paddingTop: "5px",
                          }}
                        >
                          {dataType && (
                            <div className="d-flex align-items-center mb-3 renovation_slider_text">
                              <p
                                style={{
                                  fontSize: "12px",
                                  lineHeight: "16px",
                                  fontFamily: "Mandioca, serif",
                                  textTransform: "uppercase",
                                }}
                              >
                                {item.type}
                              </p>
                              <p
                                style={{
                                  fontSize: "12px",
                                  margin: "0px 15px",
                                }}
                              >
                                |
                              </p>
                              <p
                                style={{
                                  fontWeight: "500",
                                  lineHeight: "16px",
                                  textTransform: "uppercase",
                                }}
                              >
                                {item.date}
                              </p>
                            </div>
                          )}
                          {!journalDataSetFlag ? (
                            <div id="slider-label">{item.label}</div>
                          ) : null}
                          {item?.fitoutJournalProp ? (
                            <div className="slider-title-heading-class">
                              <p>{item?.title}</p>
                            </div>
                          ) : (
                            <div id="slider-title">{item?.title}</div>
                          )}
                        </p>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Show `SliderDetailComponent` only when a slide is selected */}
              {showSliderDetails && selectedSlide && (
                <SliderDetailComponent
                  closeHandler={closeSliderDetail}
                  sliderContent={[selectedSlide]}
                  showSliderDetails={showSliderDetails}
                />
              )}

              <div className="">
                {showBtnMobile && (
                  <Button className="slider-btn slider_btn_mobile">
                    <Link
                      style={{ textDecoration: "none", color: "#b51f29" }}
                      className="links"
                      to="/residential"
                    >
                      {btnText}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ScrollableSlider;
