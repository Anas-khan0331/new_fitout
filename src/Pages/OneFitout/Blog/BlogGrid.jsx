//copied from Kitchengrid

import React, { useState, useEffect, useMemo, useRef } from "react";
import Popup from "../Kitchens/Popup";
import "./css/BlogGrid.css";
import { Col, Container, Row } from "react-bootstrap";

const arrayPopups = [
  {
    image: "/assets/popup-default.png",
    heading: "Elington",
    text: "White Marble Counter Top",
  },
  {
    image: "/assets/popup-default.png",
    heading: "Elington",
    text: "White Marble Counter Top",
  },
  {
    image: "/assets/popup-default.png",
    heading: "Elington",
    text: "White Marble Counter Top",
  },
  {
    image: "/assets/popup-default.png",
    heading: "Elington",
    text: "White Marble Counter Top",
  },
];

export default function BlogGrid({
  id,
  type = "all types",
  area = "all areas",
  community = "all communities",
  setTotal = () => {},
  providedContent = [],
}) {
  const itemsPerPage = 9;
  const prevPage = useRef(null); // prev values of current page to track page movement
  const prevDisplayedItems = useRef(null); // total sum for prev button stack

  const [Type, setType] = useState("");
  const [Area, setArea] = useState("");
  const [Community, setCommunity] = useState("");
  const [CurrentPage, setCurrentPage] = useState(1);
  const [TotalItems, setTotalItems] = useState(0);

  const [content, setContent] = useState([]);
  const [viewWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (providedContent.length > 0 && Array.isArray(providedContent)) {
      setContent(providedContent);
    }
  }, [providedContent]);

  useEffect(() => {
    setType(type);
    setArea(area);
    setCommunity(community);
  }, [type, area, community]);

  const pageNext = () => {
    setCurrentPage((prev) => {
      prevPage.current = prev;
      return prev + 1;
    });
  };

  const pageBack = () => {
    if (CurrentPage != 1) {
      setCurrentPage((prev) => {
        prevPage.current = prev;
        return prev - 1;
      });
    }
  };

  const filtered = content.filter((item) => {
    return (
      (Type === "all types" || item.type === Type) &&
      (Area === "all areas" || item.area === Area) &&
      (Community === "all communities" ||
        item.community.toLowerCase().includes(Community.toLowerCase()) == true)
    );
  });

  useEffect(() => {
    setTotalItems(filtered.length);
  }, [filtered]);

  const sliced = useMemo(() => {
    const start = (CurrentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filtered.slice(start, end);
  }, [CurrentPage, filtered]); // useMemo so that sliced is recalculated when the things in the array change

  const [DisplayedItems, setDisplayedItems] = useState(0);
  const [Stack, setStack] = useState([]);

  useEffect(() => {
    setDisplayedItems((previous) => {
      if (prevPage.current < CurrentPage) {
        let slice = sliced.length;
        prevDisplayedItems.current = previous + slice;
        setStack((prev) => [...prev, slice]);
        return prevDisplayedItems.current;
      }
      if (prevPage.current > CurrentPage) {
        let popped = 0;

        let newStack = [...Stack];
        popped = newStack.pop();

        prevDisplayedItems.current -= popped;

        setStack((prev) => {
          const newStack = [...prev];
          newStack.pop();
          return newStack;
        });

        return prevDisplayedItems.current;
      }
    });
  }, [CurrentPage]);

  useEffect(() => {
    setDisplayedItems(() => {
      prevDisplayedItems.current = sliced.length;
      prevPage.current = 0;
      return sliced.length;
    });
  }, [filtered.length]);

  // useEffect(()=>{
  //     console.log('stack: ',Stack, 'prevD',prevDisplayedItems.current,'Displayed',DisplayedItems)
  // },[Stack, prevDisplayedItems, DisplayedItems])

  const isDisabled = DisplayedItems == TotalItems;

  function sliceString(str) {
    const comma = str.indexOf(",");
    const slice = str.slice(0, comma + 1);
    return slice;
  }

  function remainingString(str) {
    const comma = str.indexOf(",");
    const slice = str.slice(comma + 1);
    return slice;
  }

  useEffect(() => {
    setTotal(TotalItems);
  }, [filtered]);

  return (
    <>
      <Container className={id}>
        <Row style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          {sliced.map((item, index) => {
            let colProps = {};

            if (index === 0 || index === 1) {
              colProps = {
                xs: 12,
                md: 6,
              };
            } else if (index === 4) {
              colProps = {
                xs: 12,
                md: 12,
                lg: 4,
                className: "justify-content-center",
              };
            } else if (index === 5) {
              colProps = {
                xs: 12,
              };
            } else if (index === 8) {
              colProps = {
                xs: 12,
                md: 12,
                lg: 4,
                className: "justify-content-center",
              };
            } else {
              colProps = {
                xs: 12,
                md: 6,
                lg: 4,
              };
            }

            return (
              <Col key={index} {...colProps} className="mb-4">
                <div
                  id={`item${index}`}
                  className="kitchengrid-card"
                  style={{}}
                >
                  <img
                    id={`kitchengrid-image-${index}`}
                    src={item.image}
                    alt="kitchen"
                  />
                  {item.serial === "006" &&
                    sliced[5] &&
                    arrayPopups.map((popupItem, popupIndex) => (
                      <div
                        key={popupIndex}
                        id={`popup-kitchen-${popupIndex}`}
                        className="kitchen-popups"
                      >
                        <Popup
                          img={popupItem.image}
                          heading={popupItem.heading}
                          text={popupItem.text}
                          id="kitchen-popup"
                        />
                      </div>
                    ))}
                  <p id="kitchengrid-section">
                    <span id="kitchengrid-type">{item.type}</span>
                    <span id="kitchengrid-area">{item.area}</span>
                  </p>
                  <p className="kitchengrid-community1">
                    {sliceString(item.community)}
                  </p>
                  <p className="kitchengrid-community2">
                    {remainingString(item.community)}
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <div className="kitchengrid-buttons">
        <Container>
          <Row>
            <Col xs={6} sm={6} md={5} className="kitchengrid-button-prev">
              <div style={{ paddingLeft: "30px" }}>
                <button
                  onClick={pageBack}
                  disabled={CurrentPage === 1}
                  className={CurrentPage === 1 ? "disabled" : ""}
                >
                  Previous
                </button>
              </div>
            </Col>
            <Col xs={6} sm={6} md={7} id="kitchengrid-button-next">
              <div
                style={{
                  paddingRight: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "97px",
                }}
              >
                <span>
                  Viewing {DisplayedItems} of {TotalItems}
                </span>
                <button
                  onClick={pageNext}
                  disabled={isDisabled}
                  className={isDisabled ? "disabled" : ""}
                >
                  Next
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
