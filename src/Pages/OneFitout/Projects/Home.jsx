import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Contact from "../../../Components/Contact";
import FooterBootstrap from "../../../Components/FooterBootstrap";
import Header from "../../../Components/Header";
import Layout from "../../../Components/Layout/Layout";
import NavbarBootstrap from "../../../Components/NavbarBootstrap";
import useFetch from "../../../Components/useFetch";
import "./css/Home.css";
import Filter from "./Filter";
import ProjectGrid from "./ProjectGrid";
import logo from "/assets/onefitout-logo.png";

let bgColorNav = "transparent";
let barColor = "#0b1215";
let textColorNav = "#fbfaf6";
let textColorMenu = "#b51f29";
let bOutline = "#fbfaf6";

const icon = "/assets/logo-white-red.png";

const source = "/assets/projects-main-cropped.png";
const width = "103.125rem";
const height = "34.875rem";
const type = "image";
const heading = "ALL PROJECTS";
const description =
  "We transform visions into reality, delivering meticulously designed spaces that blend functionality, elegance, and innovation.";

export default function Home() {
  const [contactToggle, setContactToggle] = useState(false);

  const [content, loading, error] = useFetch("/project.json");
  const [Areas, setAreas] = useState([]);
  const [Communities, setCommunities] = useState([]);

  const [providedArea, setProvidedArea] = useState("all areas");
  const [providedType, setProvidedType] = useState("all types");
  const [providedCommunity, setProvidedCommunity] = useState("all communities");

  useEffect(() => {
    if (contactToggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [contactToggle]);

  useEffect(() => {
    if (content.length > 0) {
      const extractedAreas = content.map((item) => item.area);
      const extractedCommunities = content.map((item) => item.community);

      setAreas([...new Set(extractedAreas)]);
      setCommunities([...new Set(extractedCommunities)]);
    }
  }, [content]);

  return (
    <>
      <NavbarBootstrap
        bgColor={bgColorNav}
        oneImageBackground={"#b51f29"}
        textColor={textColorNav}
        bOutline={bOutline}
        logo={logo}
        openContact={setContactToggle}
        position={true}
        btnColor="#FBFAF6"
        btnBorder={"1px solid #FBFAF6"}
      />
      <Layout sidebarTextColor="#b51f29">
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header
            id="projects-header"
            source={source}
            width={width}
            height={height}
            type={type}
            heading={heading}
            description={description}
          />
          <Filter
            Areas={Areas}
            Communities={Communities}
            setterArea={setProvidedArea}
            setterCommunity={setProvidedCommunity}
          />
          {/* const options = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
    { label: "Option 4", value: 4 },
  ];
 */}
          <ProjectGrid
            contentArray={content}
            area={providedArea}
            type={providedType}
            community={providedCommunity}
          />
        </div>
      </Layout>
      {contactToggle && (
        <Contact id="projectint-contact" closeContact={setContactToggle} />
      )}
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
      <FooterBootstrap />
    </>
  );
}
