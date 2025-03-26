import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ScrollableSlider from "../../../../Components/ScrollableSlider";

let residentialDataSet = "/kitchenStyles.json";

const KitchenStyles = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch both JSON files to combine the necessary data
    const fetchData = async () => {
      try {
        const [kitchenStyles, projectData] = await Promise.all([
          fetch("/kitchenStyles.json").then((res) => res.json()),
          fetch("/project.json").then((res) => res.json()),
        ]);

        // Map kitchen styles with additional data from project.json
        const enrichedKitchenStyles = kitchenStyles.map((kitchen) => {
          const matchingProject = projectData.allProjects.find(
            (project) => project.id.toString() === kitchen.path.split("/").pop()
          );
          return {
            ...kitchen,
            type: matchingProject?.type || "Kitchens",
            area: matchingProject?.area || "Al Quoz Industrial Area 4",
            community: matchingProject?.community || kitchen.title,
            kitchenProject: true, // Add this flag for conditional rendering
          };
        });

        setProjects(enrichedKitchenStyles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSlideClick = (item) => {
    if (item) {
      const formattedCommunity = item.community
        .toLowerCase()
        .replace(/, /g, "-")
        .replace(/ /g, "-");

      const formattedArea = item.area.replace(/ /g, "-");

      const url = `/projects/${item.type}/${formattedArea}/${formattedCommunity}/${item.id}`;
      console.log("Navigating to:", url);
      navigate(url);
    }
  };

  return (
    <div
      className="KitchenStyles-container"
      style={{ padding: "50px 0px", borderBottom: "1px solid #eaeaea" }}
    >
      <Container>
        <Row>
          <Col sm={12}>
            <p className="kitchen-unique-styles-p">
              We offer{" "}
              <span className="kitchen-unique-styles-span">
                five unique kitchen styles
              </span>{" "}
              there isn't a person who has come into the apartment, be they
              friends or delivery drivers, who haven't been bowled over!
            </p>
          </Col>
          <Col sm={12}>
            <ScrollableSlider
              borderTop={false}
              showProgress={false}
              showBtn={false}
              title={""}
              showCustomTitles={true}
              showBtnMobile={false}
              resource={residentialDataSet}
              enableNavigation={true}
              sliderClick={handleSlideClick}
              projects={projects}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default KitchenStyles;
