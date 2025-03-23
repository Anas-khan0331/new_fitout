import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./css/NavbarBootstrap.css";
import CustomButton from "./CustomButton";
import MobileBurgerMenu from "./MobileBurgerMenu";
import imgOne from "/assets/1logo.png";
import oneImgWhite from "/assets/one-white-image.png";
import logo from "/assets/onefitout-black-logo.png";
import NavburgerIcon from "/assets/svg/burger-icon.svg";

const NavbarBootstrap = ({
  id,
  bgColor,
  textColor,
  bOutline,
  openContact,
  position = false,
  btnColor,
  btnBorder,
  oneImageBackground = "#fff",
  oneImageProp,
}) => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const [mobilenavtoggle, setmobilenavtoggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleNavLinkClick = () => {
    setmobilenavtoggle(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("#footer-section"); // Replace with your footer section's ID or class
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        const navbarHeight =
          document.querySelector(".navbar-bootstrap").offsetHeight;

        if (footerTop <= navbarHeight) {
          setIsSticky(false);
        } else {
          setIsSticky(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobilenavtoggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [mobilenavtoggle]);

  useEffect(() => {
    const handleResize = () => {
      setViewWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const openContactMenu = () => {
    openContact(true);
  };
  return (
    <Navbar
      expand="lg"
      className={`navbar-bootstrap ${
        isSticky || id === "white-navbar" ? "sticky-navbar" : "absolute-navbar"
      }`}
    >
      <Container fluid className="navbarr-containerr">
        <Navbar.Brand>
          <NavLink to="/">
            {viewWidth > 992 ? (
              <img src={logo} width="214px" height="24.79px" alt="Logo" />
            ) : (
              // <div
              //   style={{
              //     display: "flex",
              //     background: "#B51F29",
              //     height: "60px",
              //     width: "60px",
              //     alignItems: "center",
              //     justifyContent: "center",
              //   }}
              // >
              //   <img
              //     src={oneImgWhite}
              //     style={{ objectFit: "cover" }}
              //     height="30px"
              //     alt="Secondary Logo"
              //   />
              // </div>
              <img id="contact-logo" src="/assets/logo-white-red.png" />
            )}
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setmobilenavtoggle(!mobilenavtoggle)}
        >
          <img src={NavburgerIcon} alt="Menu" width="30" height="30" />
        </Navbar.Toggle>
        {viewWidth > 992 ? (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar-links">
              <Nav.Link>
                <NavLink
                  style={{ color: textColor }}
                  to="/residential"
                  className="links"
                  onClick={handleNavLinkClick}
                >
                  Residential
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/commercial" // add new page for commercial
                  className="links"
                  style={{ color: textColor }}
                  onClick={handleNavLinkClick}
                >
                  Commercial
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/projects"
                  className="links"
                  style={{ color: textColor }}
                  onClick={handleNavLinkClick}
                >
                  Projects
                </NavLink>
              </Nav.Link>
              {/* <div
                className="vertical-bar-wrapper"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span
                  className="vertical-bar"
                  style={{
                    display: "inline-block",
                    width: "1px",
                    height: "17px",
                    backgroundColor: textColor,
                    margin: "0 10px",
                  }}
                ></span>
              </div> */}
              <Nav.Link>
                <NavLink
                  to="/about-us"
                  className="links"
                  style={{ color: textColor }}
                  onClick={handleNavLinkClick}
                >
                  ABOUT US
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/1kitchen"
                  className="links"
                  style={{ color: textColor }}
                  onClick={handleNavLinkClick}
                >
                  1Kitchen
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/design-by-1"
                  className="links"
                  style={{ color: textColor }}
                  onClick={handleNavLinkClick}
                >
                  Design By 1
                </NavLink>
              </Nav.Link>
            </Nav>
            <CustomButton
              color={isSticky ? "#b51f29" : btnColor}
              border={isSticky ? "1px solid #b51f29" : btnBorder}
              margin={"0px 40px 0px 0px"}
              onClick={openContactMenu}
              btnTxt={"GET IN TOUCH"}
            />
          </Navbar.Collapse>
        ) : (
          mobilenavtoggle && (
            <MobileBurgerMenu
              onClose={() => setmobilenavtoggle(false)}
              position={position}
              setContactToggle={openContact}
            />
          )
        )}
        <div
          style={{
            display: viewWidth > 993 ? "flex" : "none",
            background: oneImageBackground,
            height: "68px",
            width: "68px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={oneImageProp ? imgOne : oneImgWhite}
            style={{ objectFit: "cover" }}
            height="38px"
            alt="Secondary Logo"
          />
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarBootstrap;
