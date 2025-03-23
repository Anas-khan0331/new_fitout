import React, { useEffect, useState } from "react";

import Contact from "../../../../Components/Contact";
import FooterBootstrap from "../../../../Components/FooterBootstrap";
import Layout from "../../../../Components/Layout/Layout";
import NavbarBootstrap from "../../../../Components/NavbarBootstrap";
import ScrollableSlider from "../../../../Components/ScrollableSlider";
// import "./css/Home.css";
import GetInTouchSection from "../../Blog/BlogDetailsSections/GetInTouchSection";
import AboutSection from "../../Home/HomePages/AboutSection/AboutSection";
import ChooseDesignByoneSection from "../ChooseDesignByOne";
import DesignByOneSlider from "../DesignByOneSlider";
import DesignByOneStyles from "../DesignByOneStyles";
import DesignHomeBanner from "../DesignHomeBanner";
import DesignResindance from "../DesignResidance";
import logo from "/assets/onefitout-logo.png";

let journal = "Fitout Journal";
let blog = "/blog.json";
let journalDataSet = "/journal.json";

let title = "Our Services";
let service = "/service.json";

let bgColorNav = "transparent";
let barColor = "#b51f29";
let textColorNav = "#fbfaf6";
let textColorMenu = "#fbfaf6";
let bOutline = "#fbfaf6";
let residentialDataSet = "/residental.json";
let residentialTitle = "  FEATURED SERVICES";
const icon = "/assets/logo-red-white.png";
const DesignByOne = () => {
  const [contactToggle, setContactToggle] = useState(false);
  const [mobiletoggle, setmobiletoggle] = useState(false);
  const [mobilenavtoggle, setmobilenavtoggle] = useState(false);
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (window.innerWidth <= 992) {
      setmobiletoggle(true);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      setViewWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (contactToggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [contactToggle]);

  useEffect(() => {
    if (mobilenavtoggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [mobilenavtoggle]);

  return (
    <div>
      <NavbarBootstrap
        id="kitchens-navbar"
        bOutline="#fff"
        btnColor={"#fff"}
        btnBorder="1px solid #fff"
        textColor="#fff"
        logo={logo}
        position={true}
        oneImageBackground="#fff"
        oneImageProp={true}
        NavItemcolor="#fff"
        openContact={setContactToggle}
      />
      <Layout
        text={"Desgin by 1"}
        sidebarBg={"#0B1215"}
        sidebarTextColor="#b51f29"
      >
        <DesignHomeBanner />
        <DesignResindance />
        <div className="residental_slider_container">
          <ScrollableSlider
            titleFontSize="40px"
            fontWeight="700"
            showProgress={false}
            showBtn={false}
            title={residentialTitle}
            journalDataSetFlag={false}
            btnText={"Explore All"}
            showBtnMobile={false}
            resource={residentialDataSet}
          />
        </div>
        <DesignByOneSlider />
        <ChooseDesignByoneSection />
        <DesignByOneStyles />
        <div className="about_section_div">
          <GetInTouchSection />
        </div>
        {contactToggle && (
          <Contact id="projectint-contact" closeContact={setContactToggle} />
        )}
      </Layout>
      <AboutSection />
      {/* <Footer id="residential-footer" />
      <Copyright id="residential-copyright" /> */}
      <FooterBootstrap />
    </div>
  );
};

export default DesignByOne;
