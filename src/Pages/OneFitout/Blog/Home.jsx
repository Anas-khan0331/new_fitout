//copied from kitchen's home

import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router-dom";
import Contact from "../../../Components/Contact";
import FooterBootstrap from "../../../Components/FooterBootstrap";
import Layout from "../../../Components/Layout/Layout";
import NavbarBootstrap from "../../../Components/NavbarBootstrap";
import useFetch from "../../../Components/useFetch";
import BlogGrid from "./BlogGrid";
import "./css/Home.css";
import logo from "/assets/onefitout-black-logo.png";

export default function Home() {
  const [contactToggle, setContactToggle] = useState(false);
  const { pathname } = useLocation();

  const [Total, setTotal] = useState(0);

  //const [communities, setCommunities] = useState([])
  const [community, setCommunity] = useState("all communities");

  const [content, loading, error] = useFetch("/blog.json");

  function setTotaller(num) {
    setTotal(num);
  }

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
    <>
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
      <Layout sidebarBg="#FBFAF6">
        <div>
          <div
            style={{
              marginTop: "120px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "30px",
            }}
          >
            <Col className="blog-heading">Fitout Blog</Col>
            <Col className="blog-subheading">{Total} Articles</Col>
          </div>
          <BlogGrid
            id="kitchens-grid"
            setTotal={setTotaller}
            providedContent={content}
            community={community}
          />
        </div>
      </Layout>
      {contactToggle && (
        <Contact id="projectint-contact" closeContact={setContactToggle} />
      )}
      <FooterBootstrap />
    </>
  );
}
