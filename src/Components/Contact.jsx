import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { createPortal } from "react-dom";
import closeIconImage from "../../public/assets/svg/close.svg";
import "./css/Contact.css";
import CustomButton from "./CustomButton";

export default function Contact({ id, closeContact, style }) {
  const backdropRef = useRef(null);
  const modalRef = useRef(null);
  useEffect(() => {
    // Entry animations
    gsap.to(backdropRef.current, {
      opacity: 0.5,
      duration: 1.2,
      ease: "power2.inOut",
    });

    gsap.fromTo(
      modalRef.current,
      {
        y: window.innerHeight,
      },
      {
        y: 0,
        duration: 1.2,
        ease: "power3.inOut",
      }
    );

    // Add class to body when component mounts
    document.body.classList.add("contact-open");
  }, []);

  useEffect(() => {
    // Remove class when component unmounts
    return () => {
      document.body.classList.remove("contact-open");
    };
  }, []);

  const words = ["Commercial", "Residential", "Kitchens", "Interior Design"];

  const contactUsData1 = {
    title: "Enquiries",
    contact: "enquiries@1fitout.com",
  };
  const contactUsData2 = {
    title: "RETAILS",
    contact: "retail@1fitout.com",
  };
  const contactUsData3 = {
    title: "PHONE",
    contact: "800-ONE-FIT-OUT",
    phone: "(800 663 348 688)",
  };
  const contactUsData4 = {
    title: "MOBILE",
    contact: "+971 50 348 6838",
  };

  // Function to open email client
  function openEmail() {
    window.location.href = "mailto:enquiries@1fitout.com";
  }

  // Function to open WhatsApp chat
  function openWhatsapp() {
    window.open("https://wa.me/971503486838", "_blank");
  }

  function getDirections() {
    // Replace the address with your desired destination
    var destination = encodeURIComponent(
      "One Fit Out Studio, Community 369 - Warehouse 11 Street 31 - Al Quoz - Al Quoz Industrial Area 4 - Dubai - United Arab Emirates"
    );
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${destination}`,
      "_blank"
    );
  }

  // Handle close animation
  const handleClose = () => {
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.to(modalRef.current, {
      y: window.innerHeight,
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => closeContact(false),
    });
  };

  return createPortal(
    <>
      <div
        ref={backdropRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#000",
          zIndex: 1000,
          opacity: 0,
        }}
        onClick={handleClose}
      />
      <div
        ref={modalRef}
        className={`${id} contact-modal-wrapper`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1001,
          width: "100%",
          height: "100%",
          willChange: "transform",
          backfaceVisibility: "hidden",
          ...style,
        }}
      >
        <div id="contact-outer">
          <div id="contact-inner">
            <div className="desktop-contact-close">
              <div
                style={{ width: "24px", height: "24px", marginRight: "20px" }}
              >
                <img
                  src={closeIconImage}
                  style={{ width: "100%", height: "100%", cursor: "pointer" }}
                  alt=""
                  onClick={handleClose}
                />
              </div>
            </div>
            <div className="mobile-contact-header-section">
              <div className="">
                <img id="contact-logo" src="/assets/logo-white-red.png" />
              </div>
              <div id="contact-close">
                <img src="/assets/filter-close.png" onClick={handleClose} />
              </div>
            </div>
            <Container>
              <Row className="reverse-row">
                <Col lg={3}>
                  <div className="contact_us_data">
                    <div className="contact_us_data_container">
                      <p className="contact_us_data_heading">
                        {contactUsData1.title}
                      </p>
                      <p>{contactUsData1.contact}</p>
                    </div>
                    <div className="contact_us_data_container">
                      <p className="contact_us_data_heading">
                        {contactUsData2.title}
                      </p>
                      <p
                        style={{
                          borderBottom: "1px solid #EAEAEA",
                          paddingBottom: "5px",
                        }}
                      >
                        {contactUsData2.contact}
                      </p>
                    </div>
                    <div className="contact_us_data_container">
                      <p className="contact_us_data_heading">
                        {contactUsData3.title}
                      </p>
                      <p>{contactUsData3.contact}</p>
                      <p>{contactUsData3.phone}</p>
                    </div>
                    <div className="contact_us_data_container">
                      <p className="contact_us_data_heading">
                        {contactUsData4.title}
                      </p>
                      <p>{contactUsData4.contact}</p>
                    </div>
                    <div className="contact_us_data_img_container">
                      <img
                        id="contact-design-logo"
                        src="/assets/contact-designer-logo.png"
                      />
                    </div>
                  </div>
                </Col>
                <Col lg={2}></Col>
                <Col lg={5}>
                  <div className="contact_us_data_right_sectionContainer">
                    <div className="">
                      <img id="contact-logo" src="/assets/logo-white-red.png" />
                    </div>
                    <div className="contact_us_data_right_sectionContainer_text_container">
                      <h3>One FitOut Studio</h3>
                      <p style={{ marginTop: "30px" }}>
                        Whether you're looking to transform a residential space,
                        enhance a commercial property, or undertake a
                        specialized design, we're here to help every step of the
                        way. Reach out to us today to discuss how we can bring
                        your vision to life.
                      </p>
                    </div>
                    <div className="contact_us_data_right_sectionContainer_text_lines">
                      <p>No.11, Community 369,</p>
                      <p>Street 31,</p>
                      <p>Al Quoz Industrial 4,</p>
                      <p>Dubai,UAE</p>
                    </div>
                    <div className="contact_us_data_right_sectionContainer_btn d-flex">
                      <CustomButton
                        btnTxt={"GET DIRECTIONS"}
                        onClick={getDirections}
                        margin={"0px 10px 0px 0px"}
                      />
                      <CustomButton
                        btnTxt={" SEND MESSAGES"}
                        onClick={openEmail}
                      />
                    </div>
                  </div>
                </Col>
                <Col></Col>
              </Row>
            </Container>
            <div
              className="whats_app_img_container"
              onClick={openWhatsapp}
              style={{ cursor: "pointer" }}
            >
              <img
                style={{ width: "22px", height: "22px" }}
                src="/assets/whatsapp-logo.png"
              />
            </div>
            <div id="contact-footer">
              <div className="contact-footer-inner">
                {Array(5)
                  .fill()
                  .map(() => {
                    return words.map((word, index) => {
                      return (
                        <div key={index} className="ticker-words">
                          {word}
                        </div>
                      );
                    });
                  })}
              </div>
              <div className="contact-footer-inner">
                {Array(5)
                  .fill()
                  .map(() => {
                    return words.map((word, index) => {
                      return (
                        <div key={index} className="ticker-words">
                          {word}
                        </div>
                      );
                    });
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
}
