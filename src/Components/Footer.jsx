import React from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";

export default function Footer({ id, openContact = () => {} }) {
  const imgSrc = "/assets/logo-white-red.png";
  const fbLogo = "/assets/facebook_logo.png";
  const instaLogo = "/assets/instagram_logo.png";
  const linkedinLogo = "/assets/linkedin_logo.png";

  return (
    <>
      <div className={id}>
        <div id="footer-overlay-flex">
          <div id="footer-overlay">
            <div id="footer-inner">
              <div id="footer-contact">
                <img id="footer-logo" src={imgSrc} width="70px" height="70px" />
                <p id="footer-git">
                  <span id="footer-git-title" className="footer-title">
                    Get in touch
                  </span>
                  <span id="footer-git-cinfo">
                    <span id="footer-git-tel">Tel: +971 (4) 335 4947</span>
                    <span id="footer-git-mob">Mob: +971 (50) 348 6838</span>
                    <span id="footer-git-email">
                      Email: enquiries@1fitout.com
                    </span>
                  </span>
                  <span id="footer-git-address">
                    <span id="git-add-line1">Warehouse 11, Street 31,</span>
                    <span id="git-add-line2">Community 369,</span>
                    <span id="git-add-line3">Al Quoz Industrial 4,</span>
                    <span id="git-add-line4">Dubai</span>
                  </span>
                </p>
                <p id="footer-service">
                  <span id="footer-service-title" className="footer-title">
                    At Your Service
                  </span>
                  <span id="footer-service-links">
                    <span id="contact-us" onClick={openContact}>
                      Contact Us
                    </span>
                    <span id="about-us">
                      <Link className="links" to="/about-us">
                        About Us
                      </Link>
                    </span>
                    <span id="our-services">Our Services</span>
                    <span id="careers">Careers</span>
                    <span id="faq">Frequently Asked Questions (FAQ)</span>
                  </span>
                </p>
                <div id="footer-connect">
                  <span id="footer-service-title" className="footer-title">
                    Connect With Us
                  </span>
                  <span id="fc-logo-parent">
                    <div id="logo-rounded">
                      <img src={fbLogo} width="22" height="22" />
                    </div>
                    <div id="logo-rounded">
                      <img src={instaLogo} width="22" height="22" />
                    </div>
                    <div id="logo-rounded">
                      <img src={linkedinLogo} width="22" height="22" />
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
