import React, { useEffect, useState } from "react";
import Contact from "../../../Components/Contact";

import FooterBootstrap from "../../../Components/FooterBootstrap";
import Layout from "../../../Components/Layout/Layout";
import NavbarBootstrap from "../../../Components/NavbarBootstrap";
import ScrollableSlider from "../../../Components/ScrollableSlider";
import GetInTouchSection from "../Blog/BlogDetailsSections/GetInTouchSection";
import AboutSection from "../Home/HomePages/AboutSection/AboutSection";
import "./css/Home.css";
import ResidancHomeBanner from "./KitchenBannerSection";
import KitchenResindance from "./KitchenResindance";
import KitchenStyles from "./KitchenStyles";
import ChooseUsSection from "./WhyUsSection";
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
let residentialDataSet = "/kitchenHomePageSlider.json";
let kitchenSliderTitle = "WHAT WE OFFER";
const icon = "/assets/logo-red-white.png";
const KitchenHomePage = () => {
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
      <Layout text={"Brands"} sidebarBg={"#E7D6C6"} sidebarTextColor="#0B1215">
        <ResidancHomeBanner />
        <KitchenResindance />
        <div className="residental_slider_container">
          <ScrollableSlider
            titleFontSize="40px"
            fontWeight="700"
            showProgress={false}
            showBtn={false}
            title={kitchenSliderTitle}
            journalDataSetFlag={false}
            showBtnMobile={false}
            resource={residentialDataSet}
            objectFit={"cover"}
          />
        </div>
        <ChooseUsSection />
        <KitchenStyles />
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

export default KitchenHomePage;
