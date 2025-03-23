import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Contact from "./Contact";
import "./css/MobileBurgerMenu.css";

export default function MobileBurgerMenu({ onClose }) {
  const [contactToggle, setContactToggle] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (contactToggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [contactToggle]);

  const handleContactToggle = () => {
    setContactToggle(true);
  };

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <>
      {contactToggle && (
        <Contact
          id="about-us-contact"
          closeContact={setContactToggle}
          style={{ zIndex: 1100 }}
        />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isExiting ? 0 : 0.5 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={handleClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#000",
          zIndex: 999,
        }}
      />
      <motion.div
        initial={{
          y: "100vh",
          position: "fixed",
        }}
        animate={{
          y: isExiting ? "100vh" : 0,
          position: "fixed",
        }}
        exit={{
          y: "100vh",
          position: "fixed",
        }}
        transition={{
          type: "spring",
          // damping: 30,
          // stiffness: 100,
          // duration: 0.6,
          damping: 30,
          stiffness: 130,
          duration: 0.5,
        }}
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          width: "100%",
          height: "100%",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      >
        <div id="mbm-outer">
          <div id="mbm-inner">
            <div id="mbm-header">
              <NavLink to="/">
                {/* <div
                  style={{
                    display: "flex",
                    background: "#B51F29",
                    height: "60px",
                    width: "60px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={oneImgWhite}
                    style={{ objectFit: "contain" }}
                    height="30px"
                    alt="Secondary Logo"
                  />
                </div> */}
                <img id="contact-logo" src="/assets/logo-white-red.png" />
              </NavLink>
              <img
                id="mbm-close"
                onClick={handleClose}
                style={{ cursor: "pointer" }}
                src={"/assets/filter-close.png"}
              />
            </div>
            <div id="mbm-content">
              <div id="mbm-nav">
                <h2>
                  <NavLink
                    style={{ textDecoration: "none", color: "#0b1215" }}
                    to="/residential"
                    className="links"
                  >
                    Residential
                  </NavLink>
                </h2>
                <h2>
                  <NavLink
                    style={{ textDecoration: "none", color: "#0b1215" }}
                    to="/commercial"
                    className="links"
                  >
                    Commercial
                  </NavLink>
                </h2>
                <h2>
                  <NavLink
                    style={{ textDecoration: "none", color: "#0b1215" }}
                    to="/projects"
                    className="links"
                  >
                    Projects
                  </NavLink>
                </h2>
                <h2 style={{ cursor: "pointer" }} onClick={handleContactToggle}>
                  <div className="links">Contact</div>
                </h2>
                <h2>
                  <NavLink
                    style={{ textDecoration: "none", color: "#0b1215" }}
                    to="/about-us"
                    className="links"
                  >
                    About Us
                  </NavLink>
                </h2>
              </div>
              <div id="mbm-middle">
                <h2>
                  <NavLink
                    to="/1kitchen"
                    style={{ textDecoration: "none", color: "#B92025" }}
                    className="links"
                  >
                    1Kitchen
                  </NavLink>
                </h2>
                <h2>
                  <NavLink
                    to="/design-by-1"
                    style={{ textDecoration: "none", color: "#B92025" }}
                    className="links"
                  >
                    Design By 1
                  </NavLink>
                </h2>
              </div>
              <div id="mbm-footer">
                <div id="mbm-footer-left">
                  <span id="mbm-fl-first">
                    Want to TRANSFORM YOUR SPACE?
                    <br />
                    Get in touch
                  </span>
                  <span id="mbm-tel">T. +971 (4) 335 4947</span>
                  <span id="mbm-mob">M. +971 (50) 348 6838</span>
                  <span id="mbm-mail">enquiries@1fitout.com</span>
                </div>
                <div id="mbm-footer-right">
                  <span>Site by Maison Celadora</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
