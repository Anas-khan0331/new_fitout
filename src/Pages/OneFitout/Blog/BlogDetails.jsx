import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Contact from "../../../Components/Contact";
import FooterBootstrap from "../../../Components/FooterBootstrap";
import Layout from "../../../Components/Layout/Layout";
import NavbarBootstrap from "../../../Components/NavbarBootstrap";
import SliderComp from "../../../Components/SliderComp";
import BannerSection from "./BlogDetailsSections/BannerSection";
import BannerTextSection from "./BlogDetailsSections/BannerTextSection";
import BlogBannerImageSection from "./BlogDetailsSections/BlogBannerImageSection";
import BlogPartnerShipText from "./BlogDetailsSections/BlogPartnerShipText";
import BlogServicesSection from "./BlogDetailsSections/BlogServicesSection";
import BlogVideo from "./BlogDetailsSections/BlogVideo";
import GallerySection from "./BlogDetailsSections/GallerySection";
import GetInTouchSection from "./BlogDetailsSections/GetInTouchSection";
import logo from "/assets/onefitout-black-logo.png";

let blog = "/blog.json";

const BlogDetails = () => {
  const [contactToggle, setContactToggle] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (contactToggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [contactToggle]);

  return (
    <div className="blog-detail-section">
      <NavbarBootstrap
        id="kitchens-navbar"
        bOutline="#b51f29"
        textColor="#0b1215"
        logo={logo}
        openContact={setContactToggle}
        btnColor="#b51f29"
        btnBorder="1px solid #b51f29"
        oneImageBackground="#b51f29"
      />
      <Layout>
        <BannerSection />
        <BlogBannerImageSection />
        <BannerTextSection />
        <GallerySection />
        <BlogPartnerShipText />
        <BlogVideo />
        <BlogServicesSection />
        <SliderComp
          id="home-slide"
          title={"RELATED ARTICLES"}
          btnText={"Explore All"}
          resource={blog}
        />
        <div className="blog-section-touch-section">
          <GetInTouchSection />
        </div>
      </Layout>
      <div className="blog-dtail-last-section">
        <Container>
          One Fitout is a leading Dubai-based fit-out company, renowned for
          delivering exceptional interior, residential, retail, shop, and
          commercial fit-out solutions. We specialize in transforming spaces
          into stunning environments that reflect your unique vision. With a
          commitment to quality, innovation, and client satisfaction, our
          experienced team provides end-to-end services, from concept to
          completion, and they will guide you through every step of the process.
          We pride ourselves on building strong, lasting relationships with our
          clients, founded on trust, transparency, and exceptional
          craftsmanship.
        </Container>
      </div>
      {contactToggle && (
        <Contact id="projectint-contact" closeContact={setContactToggle} />
      )}
      <FooterBootstrap />
    </div>
  );
};

export default BlogDetails;
