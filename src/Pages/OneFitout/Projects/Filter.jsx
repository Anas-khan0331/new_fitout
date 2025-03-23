import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import filterIcon from "../../../../public/assets/filter_icon.png";
import "./css/Filter.css";
export default function Filter({
  setSelectedValues,
  setType,
  setterCommunity,
  activeTab = 0,
}) {
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedCommunities, setSelectedCommunities] = useState([]);
  const [IsModal, setIsModal] = useState(false);
  const [projectsData, setProjectsData] = useState(null);
  const [isExiting, setIsExiting] = useState(false);

  // Fetch projects data
  useEffect(() => {
    fetch("/project.json")
      .then((response) => response.json())
      .then((data) => {
        setProjectsData(data);
      })
      .catch((error) => console.error("Error loading projects:", error));
  }, []);

  // Get unique areas from all projects
  const getUniqueAreas = useCallback(() => {
    if (!projectsData?.allProjects) return [];

    const areas = [
      ...new Set(
        projectsData.allProjects.map((project) => project.area).filter(Boolean)
      ),
    ].sort();

    return areas;
  }, [projectsData]);

  // Get unique renovators from all projects
  const getUniqueRenovators = useCallback(() => {
    if (!projectsData?.allProjects) return [];

    const renovators = [
      ...new Set(
        projectsData.allProjects
          .map((project) => project.renovate_by)
          .filter(Boolean)
      ),
    ].sort();

    return renovators;
  }, [projectsData]);

  // Get areas based on selected renovators
  const getFilteredAreas = useCallback(() => {
    if (!projectsData?.allProjects) return [];

    const filteredProjects =
      selectedCommunities.length === 0
        ? projectsData.allProjects
        : projectsData.allProjects.filter((p) =>
            selectedCommunities.includes(p.renovate_by)
          );

    return [
      ...new Set(
        filteredProjects.map((project) => project.area).filter(Boolean)
      ),
    ].sort();
  }, [projectsData, selectedCommunities]);

  // Handle renovator selection
  const handleRenovatorChange = (selectedRenovator) => {
    // If empty string (All Projects) is selected, clear selection
    if (selectedRenovator === "") {
      setSelectedCommunities([]);
      return;
    }

    // For single selection, directly set the new value
    setSelectedCommunities([selectedRenovator]);
  };

  // Handle area selection
  const handleAreaChange = (selectedArea) => {
    setSelectedAreas((prev) => {
      if (selectedArea === "") {
        return []; // Clear all selections
      }

      if (prev.includes(selectedArea)) {
        return prev.filter((item) => item !== selectedArea);
      } else {
        return [...prev, selectedArea];
      }
    });
  };

  // Apply filters
  const applyFilters = () => {
    // Handle communities
    if (selectedCommunities.length === 0) {
      setterCommunity("all communities");
    } else {
      // For multiple communities, pass the array directly
      setterCommunity(selectedCommunities);
    }

    // Handle areas
    if (selectedAreas.length === 0) {
      setType("all types");
      setSelectedValues([]);
    } else {
      // For multiple areas, pass the array directly
      setType(selectedAreas);
      // Convert all selected areas to the required format
      setSelectedValues(
        selectedAreas.map((area) => ({
          label: area,
          value: area,
        }))
      );
    }

    setIsModal(false);
  };

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsModal(false);
      setIsExiting(false);
    }, 400);
  };

  return (
    <div className="of-filter-popup-container">
      <button id="filter-button" onClick={() => setIsModal(true)}>
        <img src={filterIcon} alt="" />
        <span style={{ color: "#b51f29" }} id="filter-text">
          Filters
        </span>
      </button>

      <AnimatePresence mode="wait">
        {IsModal && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={handleClose}
              className="of-filter-backdrop"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 999,
              }}
            />

            {/* Modal */}
            <motion.div
              key="modal"
              initial={{
                opacity: 0,
                y: "100vh",
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: "100vh",
              }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 130,
                duration: 0.5,
              }}
              className="of-filter-popup"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                backgroundColor: "white",
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="of-filter-popup-header">
                <h2>Filters</h2>
                <button className="close-button" onClick={handleClose}>
                  <IoClose
                    style={{ height: "24px", width: "24px", color: "black" }}
                  />
                </button>
              </div>

              <div
                className="of-filter-popup-content"
                style={{ flex: 1, overflowY: "auto" }}
              >
                {/* Types Section */}
                <div className="of-filter-section">
                  <h3 className="of-filter-subtitle">Types</h3>
                  <p className="of-filter-description">
                    Choose the type of build
                  </p>
                  <div className="of-filter-options">
                    <Form.Check
                      type="checkbox"
                      id="type-all"
                      label="All Types"
                      checked={selectedAreas.length === 0}
                      onChange={() => handleAreaChange("")}
                      className="of-filter-option"
                    />
                    {getFilteredAreas().map((area, index) => (
                      <Form.Check
                        key={`area-${index}`}
                        type="checkbox"
                        id={`type-${index}`}
                        label={area}
                        checked={selectedAreas.includes(area)}
                        onChange={() => handleAreaChange(area)}
                        className="of-filter-option"
                      />
                    ))}
                  </div>
                </div>

                {/* Projects Section */}
                <div className="of-filter-section">
                  <h3 className="of-filter-subtitle">Projects</h3>
                  <p className="of-filter-description">Accomplished by</p>
                  <div className="of-filter-options">
                    <Form.Check
                      type="checkbox"
                      id="project-all"
                      label="All Projects"
                      checked={selectedCommunities.length === 0}
                      onChange={() => handleRenovatorChange("")}
                      className="of-filter-option"
                    />
                    {getUniqueRenovators().map((renovator, index) => (
                      <Form.Check
                        key={`renovator-${index}`}
                        type="checkbox"
                        id={`project-${index}`}
                        label={renovator}
                        checked={selectedCommunities.includes(renovator)}
                        onChange={() => handleRenovatorChange(renovator)}
                        className="of-filter-option"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="of-filter-popup-footer"
                style={{
                  padding: "16px",
                  borderTop: "1px solid #EAEAEA",
                  backgroundColor: "white",
                  position: "sticky",
                  bottom: 0,
                  width: "100%",
                }}
              >
                <button
                  className="of-apply-button"
                  onClick={applyFilters}
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#b51f29",
                    color: "white",
                    border: "none",
                    borderRadius: "0px",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
