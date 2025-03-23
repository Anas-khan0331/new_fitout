import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/DesignByOne.css";

export default function DesignByOneSlider() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("/designbyonesliderdata.json")
      .then((response) => response?.json())
      .then((data) => {
        setSlides(data?.designSlider?.slides);
      })
      .catch((error) => console.error("Error loading slider data:", error));
  }, []);

  return (
    <div
      className="sliderSection_main_wrapper"
      style={{
        padding: "50px 0px 0px 0px",
        borderTop: "1px solid #eaeaea",
        borderBottom: "1px solid #eaeaea",
      }}
    >
      <Container className="designbyone-slider-component">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          autoplay={{
            delay: 500000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          slidesPerView={1}
          className="designbyone-swiper"
        >
          {slides?.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="design-slide">
                <div className="design-slide__image-wrapper">
                  <img
                    src={slide.image}
                    alt={`Design ${slide.id}`}
                    className="design-slide__image"
                  />
                </div>
                <div className="design-slide__content">
                  <p className="design-slide__description">
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
}
