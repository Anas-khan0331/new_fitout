import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Contact from "./Contact";
import "./css/MobileFooter.css";
import instaLogo from "/assets/svg/footer-insta-logo.svg";
import linkedinLogo from "/assets/svg/footer-linkedin-logo.svg";
import tiktokLogo from "/assets/svg/tiktok.svg";
import whatsappLogo from "/assets/whatsapp-logo.png";

export default function MobileFooter() {
  const [active, setactive] = useState("mf-git-head");
  const [contactToggle, setContactToggle] = useState(false);

  const handleClick = (event) => {
    const eId = event.currentTarget.id;
    setactive(() => {
      if (active === eId) {
        return "";
      }
      return eId;
    });
  };
  function openWhatsapp() {
    window.open("https://wa.me/971503486838", "_blank");
  }
  useEffect(() => {
    console.log(active);
  }, [active]);

  return (
    <>
      {contactToggle && (
        <Contact id="projectint-contact" closeContact={setContactToggle} />
      )}
      <div id="mobilefooter-outer">
        <div id="mobilefooter-inner">
          <div id="mf-git">
            <div id="mf-git-head" onClick={handleClick}>
              <span>Get in touch</span>
              {active === "mf-git-head" ? (
                <img src="/assets/pullup-icon.png" />
              ) : (
                <img src="/assets/dropdown-icon.png" />
              )}
            </div>
            <div
              id="to-collapse"
              className={active !== "mf-git-head" ? "pullup" : "pulldown"}
            >
              <div id="mf-git-content1">
                <span>Tel: +971 (4) 335 4947</span>
                <span>Mob: +971 (50) 348 6838</span>
                <span>Email: enquiries@1fitout.com</span>
              </div>
              <div id="mf-git-content2">
                <span>Warehouse 11, Street 31,</span>
                <span>Community 369,</span>
                <span>Al Quoz Industrial 4,</span>
                <span>Dubai</span>
              </div>
            </div>
          </div>
          <div id="mf-service">
            <div id="mf-service-head" onClick={handleClick}>
              <span>At your service</span>
              {active === "mf-service-head" ? (
                <img src="/assets/pullup-icon.png" />
              ) : (
                <img src="/assets/dropdown-icon.png" />
              )}
            </div>
            <div
              id="to-collapse"
              className={active !== "mf-service-head" ? "pullup" : "pulldown"}
            >
              <div id="mf-service-content">
                <span
                  onClick={() => {
                    setContactToggle(true);
                  }}
                >
                  Contact us
                </span>
                <span>
                  <NavLink
                    to="/about-us"
                    className="links"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    About Us
                  </NavLink>
                </span>
                <Link
                  className="links"
                  to="/residential"
                  style={{ textDecoration: "none", color: "#fbfaf6",display:"block",marginTop:"13px" }}
                >
                  Our Services
                </Link>
                {/* <span>Careers</span>
                <span>Frequently Asked Questions (FAQ)</span> */}
              </div>
            </div>
          </div>
          <div id="mf-connect">
            <div id="mf-connect-head" onClick={handleClick}>
              <span>Connect with us</span>
              {active === "mf-connect-head" ? (
                <img src="/assets/pullup-icon.png" />
              ) : (
                <img src="/assets/dropdown-icon.png" />
              )}
            </div>
            <div
              id="to-collapse"
              className={active !== "mf-connect-head" ? "pullup" : "pulldown"}
            >
              <div id="mf-connect-content">
                <div id="fb-div">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/one-fitout-ae"
                  >
                    <img src={linkedinLogo} width="22" height="22" />
                  </a>{" "}
                </div>
                <div id="insta-div">
                  <a onClick={openWhatsapp}>
                    <img src={whatsappLogo} width="22" height="22" />
                  </a>
                </div>

                <div id="insta-div">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/onefitout/"
                  >
                    <img src={instaLogo} width="22" height="22" />
                  </a>
                </div>
                <div id="linkedin-div">
                  <a target="_blank" href="https://www.tiktok.com/@onefitout">
                    <img src={tiktokLogo} width="22" height="22" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="license-div">
            <span>License No.26364456</span>
          </div>
        </div>
      </div>
    </>
  );
}
