import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import blog1 from "../../../../public/assets/branding_img.png";
import blog3 from "../../../../public/assets/commercial_acoustic.png";
import newImg from "../../../../public/assets/commercial_renovate.png";
import residance_sectionImg from "../../../../public/assets/customJoinery.png";
import aboutClient from "../../../../public/assets/lighting.png";
import blog4 from "../../../../public/assets/project_m.png";
import blog2 from "../../../../public/assets/spaceimg.png";

const CommercialServicesSection = () => {
  const [isSelected, setIsSelected] = useState("custom");
  useEffect(() => {
    const Selected = document.querySelector(".selectedservice");
    if (Selected) {
      Selected.nextElementSibling.style.height = "100%";
      Selected.nextElementSibling.style.paddingBottom = "30px";
    }
  }, [selectUpdate]);

  useEffect(() => {
    const notSelected = document.querySelectorAll(".notselected");
    notSelected.forEach((el) => {
      el.nextElementSibling.style.height = "0";
      el.nextElementSibling.style.paddingBottom = "0";
    });
  }, [selectUpdate]);

  const serviceImages = {
    custom: residance_sectionImg,
    lighting: aboutClient,
    space: blog2,
    branding: blog1,
    project: blog4,
    acoustic: blog3,
    renovation: newImg,
  };
  function selectUpdate(event) {
    const saved = [
      "custom",
      "lighting",
      "space",
      "branding",
      "project",
      "acoustic",
      "renovation",
    ];
    const text = event.target.innerText;
    saved.forEach((item) => {
      if (String(text).toLowerCase().includes(item) == true) {
        setIsSelected(item);
      }
    });
  }

  return (
    <div className="ResidanceServicesSection_container">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="other_services_commercial_div">
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "16.8px",
                  fontWeight: "500",
                  letterSpacing: "1px",
                }}
              >
                OTHER SERVICES
              </p>
            </div>
          </Col>
        </Row>
        <Row className="reverse-row-mobile">
          <Col lg={5}>
            <div className="">
              <div className="residnential-accordian">
                <h2
                  onClick={selectUpdate}
                  className={
                    isSelected === "custom" ? "selectedservice" : "notselected"
                  }
                  style={{ fontFamily: "p22-mackinac-pro, serif" }}
                >
                  Custom Joinery & <br /> Fixtures
                </h2>
                <p
                  className="listpara"
                  style={{
                    fontFamily: "p22-mackinac-pro, serif",
                    letterSpacing: "0.2px",
                  }}
                >
                  Designing and crafting bespoke furniture and fixtures that
                  perfectly complement your space, enhancing both functionality
                  and style.
                </p>
              </div>
              <div className="residance_section_data_ul">
                <ul>
                  <li
                    onClick={selectUpdate}
                    className={
                      isSelected === "lighting"
                        ? "selectedservice"
                        : "notselected"
                    }
                  >
                    Lighting Design & Installation
                  </li>
                  <p className="listpara">
                    Creating impactful lighting schemes that enhance the
                    ambiance, highlight key design elements, and improve
                    functionality.
                  </p>

                  <li
                    onClick={selectUpdate}
                    className={
                      isSelected === "space" ? "selectedservice" : "notselected"
                    }
                  >
                    Space Planning & Layout Design
                  </li>
                  <p className="listpara">
                    Optimising space for maximum functionality, flow, and
                    efficiency, ensuring a well-organized and effective
                    environment.
                  </p>

                  <li
                    onClick={selectUpdate}
                    className={
                      isSelected === "branding"
                        ? "selectedservice"
                        : "notselected"
                    }
                  >
                    Branding & Signage
                  </li>
                  <p className="listpara">
                    Developing and installing tailored signage and branding
                    elements that reflect your business identity and enhance
                    visibility.
                  </p>

                  <li
                    onClick={selectUpdate}
                    className={
                      isSelected === "project"
                        ? "selectedservice"
                        : "notselected"
                    }
                  >
                    Project Management
                  </li>
                  <p className="listpara">
                    Providing end-to-end project management services to ensure
                    timely delivery, quality control, and seamless execution.
                  </p>

                  <li
                    onClick={selectUpdate}
                    className={
                      isSelected === "acoustic"
                        ? "selectedservice"
                        : "notselected"
                    }
                  >
                    Acoustic Design & <br /> Soundproofing
                  </li>
                  <p className="listpara">
                    Incorporating advanced acoustic solutions for enhanced sound
                    quality, privacy, and comfort within your commercial space.
                  </p>

                  <li
                    onClick={selectUpdate}
                    className={
                      isSelected === "renovation"
                        ? "selectedservice"
                        : "notselected"
                    }
                  >
                    Renovation & Refurbishment
                  </li>
                  <p className="listpara">
                    Revitalising existing commercial spaces with modern updates,
                    enhancing aesthetics, and improving functionality without
                    the need for new construction.
                  </p>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={2}></Col>
          <Col lg={5}>
            <div className="residance_section_data_img_container">
              <img
                src={serviceImages[isSelected]}
                className="residance_section_data_img"
                alt="Service"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CommercialServicesSection;
