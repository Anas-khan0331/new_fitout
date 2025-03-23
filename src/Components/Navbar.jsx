import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";

const imgSrc = "/assets/onefitout-logo.png";

export default function NavBar({
  id,
  bgColor,
  textColor,
  bOutline,
  logo = imgSrc,
  openContact,
  mobileNavOpen,
}) {
  const [mobiletoggle, setmobiletoggle] = useState(false);

  useEffect(() => {
    if (document.documentElement.clientWidth <= 440) {
      setmobiletoggle(true);
      const navInner = document.getElementById("nav-inner");
      Array.from(navInner.children).forEach((child) => {
        child.style.display = "none";
      });
    }
  }, []);

  return (
    <>
      <div className={id}>
        <nav
          id="nav-outer"
          style={{
            "--bg-color": bgColor,
            "--text-color": textColor,
            "--button-ol": bOutline,
          }}
        >
          <div id="nav-inner">
            {mobiletoggle && (
              <div id="mobile-view">
                <img id="mobile-logo" src="/assets/logo-white-red.png" />
                <img
                  id="mobile-menu"
                  onClick={mobileNavOpen}
                  src="/assets/menu-logo-mobile.png"
                />
              </div>
            )}
            <NavLink to="/">
              <img src={logo} width="214px" height="24.79px" />
            </NavLink>
            <span id="navbar-links">
              <span id="residential">
                <NavLink to="/residential" className="links">
                  Residential
                </NavLink>
              </span>
              <span id="commercial">Commercial</span>
              <span id="projects">
                <NavLink to="/projects" className="links">
                  Projects
                </NavLink>
              </span>
              <span id="vert-bar"></span>
              <span id="designby1">Design by 1</span>
              <span id="onekitchen">
                <NavLink to="/1kitchen" className="links">
                  1Kitchen
                </NavLink>
              </span>
            </span>
            <button
              id="navbar-button"
              onClick={() => {
                openContact(true);
              }}
            >
              Get in Touch
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
