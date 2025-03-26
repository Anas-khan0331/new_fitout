import { useEffect, useState } from "react";
import SideComponent from "./SideComponent";
import SlidingPage from "./SlidingPage";

const Layout = ({
  children,
  sidebarBg = "#0B1215",
  sidebarTextColor = "#B51F29",
  sidenarHeight = "100vh",
  text = "BRANDS",
}) => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const [isSlidePageOpen, setIsSlidePageOpen] = useState(false);

  const toggleSlidePage = () => {
    if (viewWidth >= 992) {
      setIsSlidePageOpen(!isSlidePageOpen);
    }
  };
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
  return (
    <div
      style={{
        display: viewWidth <= 800 ? "block" : "flex",
        width: viewWidth <= 800 ? "auto" : "100%",
      }}
    >
      <div
        className="layout-wrapper"
        style={{
          flex: 1,
        }}
      >
        {children}
      </div>
      {viewWidth <= 992 ? null : (
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh", // Full viewport height
            alignSelf: "flex-start",
          }}
        >
          <SideComponent
            text={text}
            minWidth="68px"
            height="100vh"
            // background={isSlidePageOpen ? "#0B1215" : sidebarBg}
            background={sidebarBg}
            color={sidebarTextColor}
            onClick={toggleSlidePage}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          />
        </div>
      )}
      {isSlidePageOpen && (
        <SlidingPage
          isOpen={isSlidePageOpen}
          onClose={() => setIsSlidePageOpen(false)}
        />
      )}
    </div>
  );
};
export default Layout;
