import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import db1 from "../../../../public/assets/db1-banner.png";
import db1logo from "../../../../public/assets/db1-logo.png";
import kitchenlogo from "../../../../public/assets/kitchenlogo.png";
import projectkitchen from "../../../../public/assets/projectkitchen.png";
import "../styles/Layout.css";

export default function SlidingPage({ isOpen, onClose }) {
  const backdropRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Fade in the backdrop
      gsap.to(backdropRef.current, {
        opacity: 0.5,
        duration: 1.3,
        ease: "power2.inOut",
      });

      // Slide in the modal from the right
      gsap.fromTo(
        modalRef.current,
        {
          x: window.innerWidth,
        },
        {
          x: -66,
          duration: 1.3,
          ease: "power3.inOut",
        }
      );

      document.body.classList.add("sliding-page-open");
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.classList.remove("sliding-page-open");
    };
  }, []);

  const handleClose = () => {
    // Fade out the backdrop
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 1.3,
      ease: "power2.inOut",
    });

    // Slide out the modal to the right
    gsap.to(modalRef.current, {
      x: window.innerWidth, // Slide out to the right
      duration: 1.3,
      ease: "power3.inOut",
      onComplete: () => onClose(),
    });
  };

  return createPortal(
    <>
      <div
        ref={backdropRef}
        className="sliding-backdrop"
        onClick={handleClose}
      />
      <div
        ref={modalRef}
        className="sliding-modal-wrapper"
        style={{
          width: "calc(100% - 58px)", // Full width minus the right margin
          right: 0, // Align to the right edge
          left: "auto", // Remove left alignment
        }}
      >
        <div className="sliding-content">
          <Container fluid>
            <Row>
              <Col sm={6} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                <Link to="/design-by-1">
                  <div
                    style={{
                      backgroundImage: `url(${db1})`,
                      backgroundSize: "cover",
                      backgroundPosition: "70% 10%",
                      height: "100vh",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                      position: "relative",
                    }}
                    className="left-side-content"
                  >
                    <div className="project-overlay">
                      <div className="">
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                          src={db1logo}
                          alt=""
                        />
                      </div>
                      <div className="projectDescription">
                        <p>
                          We create stylish, functional kitchens with custom
                          cabinetry and innovative layouts, blending aesthetics
                          and practicality seamlessly.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
              <Col sm={6} style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                <Link to="/1kitchen">
                  <div
                    style={{
                      backgroundImage: `url(${projectkitchen})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      height: "100vh",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                      position: "relative",
                    }}
                    className="right-side-content"
                  >
                    <div className="project-overlay">
                      <div className="projectLogo">
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          src={kitchenlogo}
                          alt=""
                        />
                      </div>
                      <div className="projectDescription">
                        <p>
                          We create stylish, functional kitchens with custom
                          cabinetry and innovative layouts, blending aesthetics
                          and practicality seamlessly.
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>,
    document.body
  );
}
