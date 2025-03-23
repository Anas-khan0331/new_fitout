import { Button, Container } from "react-bootstrap";
import "../css/SliderComp.css";
import Slider from "react-slick";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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

const SliderComp = ({ title, btnText, resource }) => {
  const [content, setContent] = useState([]);
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef(null);
  useEffect(() => {
    async function refreshContent() {
      const content = await getResource(resource);
      setContent(content);
    }

    refreshContent();
  }, [resource]);

  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 500,
    autoplaySpeed: 2000,
    autoplay: true,
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
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (currentSlide) => {
      const totalSlides = sliderRef.current.innerSlider.props.children.length; // Get total slides
      const visibleSlides = 3; // Adjust this based on the responsive design
      const progressWidth =
        ((currentSlide + visibleSlides) / totalSlides) * 100;
      setProgress(progressWidth);
    },
  };
  return (
    <>
      <div
        style={{
          paddingLeft: "30px",
          paddingRight: "30px",
          borderTop: "1px solid #EAEAEA",
          paddingTop: "30px",
        }}
      >
        <Container fluid>
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className="slider-title">{title}</div>
            <div>
              <Button className="slider-btn" onClick={() => {}}>
                <Link className="links" to="/blog">
                  {btnText}
                </Link>
              </Button>
            </div>
          </div>
        </Container>
        <div className="slider-container">
          <Slider {...settings} ref={sliderRef}>
            {content.map((item, index) => {
              return (
                <div key={index} id="slider-content-card">
                  <img
                    id="slider-image"
                    src={item.image}
                    alt="Slide"
                    width="100%"
                    height="320px"
                  />
                  <p id="slider-section">
                    <div id="slider-label">{item.label}</div>
                    <div id="slider-title">{item.title}</div>
                  </p>
                </div>
              );
            })}
          </Slider>
          <div className="progress-bar">
            <div
              className="progress-indicator"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderComp;
