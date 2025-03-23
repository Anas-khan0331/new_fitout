import React, { useEffect, useState } from "react";
import Contact from "../../../Components/Contact";
import FooterBootstrap from "../../../Components/FooterBootstrap";
import Layout from "../../../Components/Layout/Layout";
import NavbarBootstrap from "../../../Components/NavbarBootstrap";
import ScrollableSlider from "../../../Components/ScrollableSlider";
import GetInTouchSection from "../Blog/BlogDetailsSections/GetInTouchSection";
import AboutSection from "../Home/HomePages/AboutSection/AboutSection";
import AboutResindance from "./AboutResindance";
import "./css/Home.css";
import ResidanceRenovationSection from "./ResidanceRenovationSection";
import ResidanceServicesSection from "./ResidanceServicesSection";
import ResidanceBannerSection from "./ResindetialBannerSection";
import logo from "/assets/onefitout-logo.png";

let residentialDataSet = "/residental.json";
let residentialTitle = "  FEATURED SERVICES";

export default function Home() {
  const [contactToggle, setContactToggle] = useState(false);
  const [showSliderDetails, setShowSliderDetails] = useState(false);

  useEffect(() => {
    if (contactToggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [contactToggle]);

  return (
    <>
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
        text={"ONE FITOUT"}
        sidebarBg={"#b51f29"}
        sidebarTextColor="#FBFAF6"
      >
        <ResidanceBannerSection />
        <AboutResindance />
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
            // showSliderDetails={showSliderDetails}
            // setShowSliderDetails={setShowSliderDetails}
          />
        </div>
        <ResidanceRenovationSection />
        <ResidanceServicesSection />
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
    </>
  );
}
