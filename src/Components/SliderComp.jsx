import { Button, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "./css/SliderComp.css";

import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";

async function getResource(resource) {
  let returned = [];
  try {
    const res = await fetch(`${resource}`);
    if (!res.ok) {
      throw new Error(`response error: ${res.status}`);
    }
    returned = await res.json();
    return returned;
  } catch (error) {
    console.error(`Error in fetching: ${error}`);
    return [];
  }
}

const SliderComp = ({
  title,
  btnText,
  titleFontSize = "40px",
  fontWeight = "700",
  resource,
  showProgress = true,
  journalDataSetFlag = false,
  showBtn = true,
  dataType = false,
  sliderDescriptionFontSize = "26px",
}) => {
  const [content, setContent] = useState([]);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function refreshContent() {
      const content = await getResource(resource);
      setContent(content);
    }
    refreshContent();
  }, [resource]);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 500,
    // autoplaySpeed: 2000,
    autoplay: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (currentSlide) => {
      const totalSlides = sliderRef.current.innerSlider.props.children.length;
      const visibleSlides = 3;
      const progressWidth =
        ((currentSlide + visibleSlides) / totalSlides) * 100;
      setProgress(progressWidth);
    },
  };

  const onclickBtn = () => {
    navigate("/blog");
  };
  return (
    <>
      <div
        style={{
          paddingLeft: "00px",
          paddingRight: "0px",
          borderTop: "1px solid #EAEAEA",
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
                <div
                  className="slider-title"
                  style={{ fontSize: titleFontSize, fontWeight: fontWeight }}
                >
                  {title}
                </div>
                {showBtn && (
                  <div>
                    {/* <Button className="slider-btn btn_block_btn">
                      <Link className="links " to="/blog">
                        {btnText}
                      </Link>
                    </Button> */}
                    <CustomButton onClick={onclickBtn} btnTxt={btnText} />
                  </div>
                )}
              </div>
              <div className="slider-container">
                <Slider {...settings} ref={sliderRef}>
                  {content?.map((item, index) => {
                    return (
                      <div key={index} className="custom_slider_class">
                        <div
                          id="slider-content-card"
                          className="slider_card_custom_class"
                        >
                          <div className="" style={{ position: "relative" }}>
                            {/* {journalDataSetFlag && (
                              <div
                                style={{
                                  background: "#B51F29",
                                  color: "#fff",
                                  position: "absolute",
                                  padding: "8px 20px",
                                  height: "36px",
                                  left: "10px",
                                  top: "5px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                {item.label}
                              </div>
                            )} */}
                            <img
                              id="slider-image"
                              src={item.image}
                              alt="Slide"
                              width="100%"
                              height="320px"
                            />
                          </div>
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
                        </div>
                      </div>
                    );
                  })}
                </Slider>
                {showProgress && (
                  <div className="progress-bar">
                    <div
                      className="progress-indicator"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                )}
                <div className="slider_btn_mobile_div">
                  <Button
                    className="slider-btn slider_btn_mobile"
                    onClick={() => {}}
                  >
                    <Link className="links" to="/blog">
                      {btnText}
                    </Link>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SliderComp;
