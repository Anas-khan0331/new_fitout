import { useEffect, useState } from "react";

import Contact from "../../../Components/Contact";
import FooterBootstrap from "../../../Components/FooterBootstrap";
import Layout from "../../../Components/Layout/Layout";
import NavbarBootstrap from "../../../Components/NavbarBootstrap";
import ScrollableSlider from "../../../Components/ScrollableSlider";
import GetInTouchSection from "../Blog/BlogDetailsSections/GetInTouchSection";
import "./css/Home.css";
import AboutSection from "./HomePages/AboutSection/AboutSection";
import FeaturedKitchenDesign from "./HomePages/FeaturedKitchenDesign/FeaturedKitchenDesign";
import GetKnowUsSection from "./HomePages/GetKnowUsSection/GetKnowUsSection";
import HomeBannerSection from "./HomePages/HomeVideoBanner/HomeBannerSection";
import PhilosophySection from "./HomePages/PhilosophySection/PhilosophySection";
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

const icon = "/assets/logo-red-white.png";

export default function Home() {
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
    <>
      <NavbarBootstrap
        oneImageBackground={"#fff"}
        oneImageProp={true}
        id="kitchens-navbar"
        bOutline="#e2e"
        btnColor={"#fff"}
        btnBorder="1px solid #fff"
        textColor={textColorNav}
        logo={logo}
        position={true}
        NavItemcolor="#fff"
        openContact={setContactToggle}
      />
      <Layout
        text={"ONE FITOUT"} //revert change
        sidebarBg={"#b51f29"}
        sidebarTextColor="#FBFAF6"
      >
        <HomeBannerSection />
        <FeaturedKitchenDesign />
        <GetKnowUsSection />
        <ScrollableSlider
          showBtn={viewWidth <= 768 ? false : true}
          title={title}
          btnText={"Explore All"}
          resource={service}
        />
        <PhilosophySection />
        {/* <div className="slider-mobile-class">
          <ScrollableSlider
            dataType={true}
            title={journal}
            journalDataSetFlag={true}
            btnText={"Explore All"}
            resource={journalDataSet}
            showBtn={viewWidth <= 768 ? false : true}
          />
        </div> */}
        <div className="home_get_intouch_section_div">
          <GetInTouchSection />
        </div>
      </Layout>
      <AboutSection />
      {contactToggle && (
        <Contact id="projectint-contact" closeContact={setContactToggle} />
      )}
      <FooterBootstrap />
    </>
  );
}
