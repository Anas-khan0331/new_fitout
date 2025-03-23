import React, { useEffect, useState } from "react";
import Contact from "../../../Components/Contact";
import Filter from "./Filter";

import FooterBootstrap from "../../../Components/FooterBootstrap";
import Layout from "../../../Components/Layout/Layout";
import NavbarBootstrap from "../../../Components/NavbarBootstrap";
import useFetch from "../../../Components/useFetch";
import BlogGrid from "../Blog/BlogGrid";
import "../Blog/css/Home.css";
import "./css/Home.css";
import logo from "/assets/onefitout-black-logo.png";

export default function Home() {
  const [contactToggle, setContactToggle] = useState(false);

  const [Total, setTotal] = useState(0);
  const [Isloading, setIsloading] = useState(true);
  const [communities, setCommunities] = useState([]);
  const [community, setCommunity] = useState("");

  const [content, loading, error] = useFetch("/kitchen.json");

  function setTotaller(num) {
    setTotal(num);
  }

  useEffect(() => {
    if (contactToggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [contactToggle]);

  useEffect(() => {
    let communities = [];
    content.map((item) => {
      communities.push(item.community);
    });
    setCommunities(() => {
      return [...new Set(communities)];
    });
  }, [content]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsloading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (Isloading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [Isloading]);

  return (
    <div className="kitchen-wrapper">
      {Isloading && (
        <div id="splash-outer">
          <div id="splash-inner">
            <h1 id="splash-heading">Kitchens</h1>
            <span id="splash-text">{Total} kitchens</span>
          </div>
        </div>
      )}

      <NavbarBootstrap
        id="kitchens-navbar"
        bOutline="#b51f29"
        oneImageBackground={"#b51f29"}
        textColor="#0b1215"
        logo={logo}
        openContact={setContactToggle}
        btnColor="#B51F29"
        btnBorder="1px solid #B51F29"
      />
      <Layout sidebarBg="#FBFAF6">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Filter
              id="kitchens-filter"
              setterCommunities={setCommunity}
              communities={communities}
            />
            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: "50px",
                marginTop: "30px",
              }}
            >
              <div className="kitchen-heading blog-heading">Kitchens</div>
              <div className="kitchen-subheading blog-subheading">
                {Total} KITCHENS
              </div>
            </div>
            <div></div>
          </div>
          <BlogGrid
            id="kitchens-grid"
            setTotal={setTotaller}
            providedContent={content}
            community={community}
          />
          {contactToggle && <Contact closeContact={setContactToggle} />}
        </div>
      </Layout>
      <FooterBootstrap />
    </div>
  );
}
