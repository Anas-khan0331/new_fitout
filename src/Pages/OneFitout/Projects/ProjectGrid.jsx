import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactDropdownSelect from "react-dropdown-select";
import { Link } from "react-router-dom";
import { Tab, TabList, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import NavigationButton from "../../../Components/NavigationButton";
import "./css/ProjectGrid.css";
import Filter from "./Filter";

export default function ProjectGrid({
  type = "all types",
  area = "all areas",
  community = "all communities",
  contentArray = [],
  activeTab = 0,
}) {
  const itemsPerPage = 11;
  const prevPage = useRef(null);
  const prevDisplayedItems = useRef(null);
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  const [Type, setType] = useState("");
  const [Area, setArea] = useState("");
  const [Community, setCommunity] = useState("");
  const [CurrentPage, setCurrentPage] = useState(1);
  const [selectedValues, setSelectedValues] = useState([]);
  const [projectsData, setProjectsData] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [selectedCount, setSelectedCount] = useState(0);
  const [currentTab, setCurrentTab] = useState(activeTab);

  // Get current tab's projects and renovator name
  const getCurrentTabInfo = useCallback(() => {
    if (!projectsData) return { projects: [], renovator: "" };

    const allProjects = projectsData.allProjects || [];

    switch (currentTab) {
      case 0:
        return {
          projects: allProjects,
          renovator: "all",
        };
      case 1:
        return {
          projects: allProjects.filter((p) => p.renovate_by === "One Fitout"),
          renovator: "One Fitout",
        };
      case 2:
        return {
          projects: allProjects.filter((p) => p.renovate_by === "Design by 1"),
          renovator: "Design by 1",
        };
      case 3:
        return {
          projects: allProjects.filter((p) => p.renovate_by === "1Kitchen"),
          renovator: "1Kitchen",
        };
      default:
        return { projects: [], renovator: "" };
    }
  }, [projectsData, currentTab]);

  const filtered = useMemo(() => {
    if (!projectsData?.allProjects) return [];

    // Desktop view (tabs)
    if (viewWidth > 992) {
      const { projects, renovator } = getCurrentTabInfo();
      return projects.filter((item) => {
        const areaMatch =
          selectedValues?.length === 0 || // No areas selected (show all)
          selectedValues?.some((selected) => selected.value === item.area); // Match any selected area

        const renovatorMatch =
          renovator === "all" || item.renovate_by === renovator;

        return areaMatch && renovatorMatch;
      });
    }

    // Mobile view logic
    return projectsData.allProjects.filter((item) => {
      // Handle renovator matching
      const renovatorMatch =
        Community === "all communities" ||
        Community === "" ||
        (Array.isArray(Community) && Community.length === 0) ||
        (Array.isArray(Community) && Community.includes(item.renovate_by)) ||
        Community === item.renovate_by;

      // Handle area matching
      const areaMatch =
        Type === "all types" ||
        Type === "" ||
        (Array.isArray(Type) && Type.length === 0) ||
        (Array.isArray(Type) && Type.includes(item.area)) ||
        Type === item.area;

      return renovatorMatch && areaMatch;
    });
  }, [
    getCurrentTabInfo,
    Community,
    Type,
    selectedValues,
    viewWidth,
    projectsData,
  ]);

  useEffect(() => {
    console.log("Filtered Projects (Desktop):", filtered);
  }, [filtered]);

  // Log filtered results
  useEffect(() => {
    if (viewWidth <= 992) {
      console.log("Filtered Projects:", filtered);
    }
  }, [filtered, viewWidth]);

  const filterOptions = useMemo(() => {
    const { projects } = getCurrentTabInfo();

    const uniqueAreas = [
      ...new Set(projects.map((item) => item?.area).filter(Boolean)),
    ];

    return [
      { label: "All Areas", value: "all" }, // "All Areas" has value "all"
      ...uniqueAreas.map((area) => ({
        label: area,
        value: area,
      })),
    ];
  }, [getCurrentTabInfo]);

  // Update counts whenever filtered or total items change
  useEffect(() => {
    const currentProjects = getCurrentTabInfo().projects;
    setTotalItems(currentProjects?.length || 0);
    setSelectedCount(filtered?.length || 0);
  }, [filtered, getCurrentTabInfo]);

  useEffect(() => {
    setType(type);
    setArea(area);
    setCommunity(community);
  }, [type, area, community]);

  const [content, setContent] = useState([]);

  useEffect(() => {
    setContent(contentArray);
  }, [contentArray]);

  const pageNext = () => {
    setCurrentPage((prev) => {
      prevPage.current = prev;
      return prev + 1;
    });
  };

  const pageBack = () => {
    if (CurrentPage !== 1) {
      setCurrentPage((prev) => {
        prevPage.current = prev;
        return prev - 1;
      });
    }
  };

  // Fetch projects data
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/project.json");
        if (!response.ok) throw new Error("Failed to fetch projects");
        const data = await response.json();
        setProjectsData(data);
      } catch (error) {
        console.error("Error loading projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const sliced = useMemo(() => {
    const start = (CurrentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filtered?.slice(start, end);
  }, [CurrentPage, filtered]);

  const [DisplayedItems, setDisplayedItems] = useState(0);
  const [Stack, setStack] = useState([]);

  useEffect(() => {
    setDisplayedItems((previous) => {
      if (prevPage.current < CurrentPage) {
        const slice = sliced.length;
        prevDisplayedItems.current = previous + slice;
        setStack((prev) => [...prev, slice]);
        return prevDisplayedItems.current;
      }
      if (prevPage.current > CurrentPage) {
        let popped = 0;
        const newStack = [...Stack];
        popped = newStack.pop();
        prevDisplayedItems.current -= popped;
        setStack((prev) => {
          const newStack = [...prev];
          newStack?.pop();
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

  const isDisabled = DisplayedItems === totalItems;

  // Helper functions for community string handling
  function sliceString(str) {
    const comma = str.indexOf(",");
    return str.slice(0, comma + 1);
  }

  function remainingString(str) {
    const comma = str.indexOf(",");
    return str.slice(comma + 1);
  }
  const handleTabSelect = (index) => {
    setCurrentTab(index);
    setCurrentPage(1);
    setSelectedValues([]); // Reset selected areas
  };

  // Add resize effect
  useEffect(() => {
    const handleResize = () => {
      setViewWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Add this function near the top of your component
  const getSelectionText = (selectedValues, totalOptions) => {
    if (selectedValues.length === 0) return "Select Area";

    // Check if "All Areas" is selected
    const isAllAreasSelected = selectedValues.some(
      (val) => val.value === "all"
    );
    if (isAllAreasSelected) return "All Areas Selected";

    // Otherwise, show the count of selected items
    return `${selectedValues.length} of ${totalOptions.length - 1} selected`;
  };

  return (
    <>
      <Container id="projectgrid-outer">
        {!projectsData && (
          <div style={{ padding: "20px", textAlign: "center" }}>
            Loading projects...
          </div>
        )}

        {projectsData && (
          <div id="projectgrid-content">
            <Row style={{ marginTop: "25px" }}>
              {viewWidth > 992 ? (
                <>
                  <Col sm={3} style={{ marginBottom: "50px" }}>
                    <div className="filter-wrapper">
                      <ReactDropdownSelect
                        options={filterOptions}
                        values={selectedValues}
                        onChange={(values) => {
                          // Check if "All Areas" is selected or deselected
                          const isAllAreasSelected = values.some(
                            (val) => val.value === "all"
                          );

                          if (isAllAreasSelected) {
                            // If "All Areas" is selected, select all areas
                            setSelectedValues(filterOptions); // Select all options
                          } else if (
                            selectedValues.some((val) => val.value === "all") &&
                            !values.some((val) => val.value === "all")
                          ) {
                            // If "All Areas" was deselected, clear all selections
                            setSelectedValues([]);
                          } else {
                            // Otherwise, set selected values normally
                            setSelectedValues(values);
                          }
                        }}
                        multi
                        className="styled-select"
                        dropdownHandle={true}
                        searchable={false}
                        dropdownGap={5}
                        placeholder={"Select Area"}
                        dropdownPosition="bottom"
                        direction="ltr"
                        contentRenderer={({ props }) => (
                          <div className="dropdown-content">
                            <span
                              className="dropdown-placeholder"
                              style={{
                                color:
                                  selectedValues.length > 0 ? "#333" : "#666",
                                fontSize: "14px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "block",
                                paddingRight: "20px",
                              }}
                            >
                              {getSelectionText(selectedValues, filterOptions)}
                            </span>
                          </div>
                        )}
                        itemRenderer={({ item, methods }) => (
                          <div
                            className="dropdown-item"
                            onClick={() => {
                              // Handle clicks manually for "All Areas"
                              if (item.value === "all") {
                                if (
                                  selectedValues.some(
                                    (val) => val.value === "all"
                                  )
                                ) {
                                  setSelectedValues([]); // Deselect all
                                } else {
                                  setSelectedValues(filterOptions); // Select all
                                }
                              } else {
                                methods.addItem(item);
                              }
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={selectedValues.some(
                                (val) => val.value === item.value
                              )}
                              onChange={() => {
                                if (item.value === "all") {
                                  if (
                                    selectedValues.some(
                                      (val) => val.value === "all"
                                    )
                                  ) {
                                    setSelectedValues([]); // Uncheck all
                                  } else {
                                    setSelectedValues(filterOptions); // Check all
                                  }
                                } else {
                                  methods.addItem(item);
                                }
                              }}
                              className="dropdown-checkbox"
                            />
                            <span className="dropdown-item-label">
                              {item.label}
                            </span>
                          </div>
                        )}
                      />
                    </div>
                  </Col>
                  <Col sm={9}>
                    <div className="tabs_wrapper">
                      <Tabs
                        selectedIndex={currentTab}
                        onSelect={handleTabSelect}
                      >
                        <TabList>
                          <Tab>All Projects</Tab>
                          <Tab>One Fitout</Tab>
                          <Tab>Design by 1</Tab>
                          <Tab>1Kitchen</Tab>
                        </TabList>
                      </Tabs>
                    </div>
                  </Col>
                </>
              ) : (
                <Col xs={12}>
                  <Filter
                    setSelectedValues={setSelectedValues}
                    setType={setType}
                    setterCommunity={setCommunity}
                    activeTab={currentTab}
                  />
                </Col>
              )}
            </Row>

            <Row className="g-4">
              {filtered?.map((item, index) => {
                const colSize = index < 2 ? 6 : 4;
                return (
                  <Col
                    key={index}
                    md={colSize}
                    style={{ marginBottom: "10px" }}
                  >
                    <div className="projectgrid-card">
                      <Link
                        style={{
                          fontFamily: "p22-mackinac-pro, serif",
                          textDecoration: "none",
                          color: "#0b1215",
                        }}
                        className="links"
                        to={`/projects/${encodeURIComponent(
                          item.type
                        )}/${encodeURIComponent(
                          item.area.replace(/ /g, "-")
                        )}/${item.community
                          .replace(/, /g, "-")
                          .replace(/ /g, "-")
                          .toLowerCase()}/${item.id}`}
                      >
                        <img
                          id="projectgrid-image"
                          src={item.image}
                          style={{ objectFit: "cover" }}
                          alt="project"
                          width="100%"
                          height={index < 2 ? "530px" : "320px"} // Changed this line
                        />
                        <p id="projectgrid-section">
                          <span
                            style={{ fontFamily: "Mandioca, sans-serif" }}
                            id="projectgrid-type"
                          >
                            {item?.type}
                          </span>
                          <span
                            style={{ fontFamily: "Mandioca, sans-serif" }}
                            id="projectgrid-area"
                          >
                            &nbsp;- {item.area}
                          </span>
                        </p>
                        <p className="projectgrid-community">
                          {sliceString(item.community)}
                        </p>
                        <p className="projectgrid-community">
                          {remainingString(item.community)}
                        </p>
                      </Link>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        )}
        <NavigationButton
          pageNext={pageNext}
          pageBack={pageBack}
          DisplayedItems={DisplayedItems}
          currentPage={CurrentPage}
          TotalItems={totalItems}
          isDisabled={isDisabled}
        />
      </Container>
    </>
  );
}
