// import { useEffect, useState } from "react";
// import SideComponent from "./SideComponent";

// const Layout = ({
//   children,
//   sidebarBg = "#0B1215",
//   sidebarTextColor = "#B51F29",
//   sidenarHeight = "100vh",
// }) => {
//   const [viewWidth, setViewWidth] = useState(window.innerWidth);
//   useEffect(() => {
//     const handleResize = () => {
//       setViewWidth(window.innerWidth);
//     };

//     // Add event listener for window resize
//     window.addEventListener("resize", handleResize);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);
//   return (
//     <div
//       style={{
//         display: viewWidth <= 800 ? "block" : "flex",
//         overflow: viewWidth <= 800 ? "unset" : "hidden", // Prevent horizontal scrolling
//         width: viewWidth <= 800 ? "auto" : "100%",
//       }}
//     >
//       <div
//         className="layout-wrapper"
//         style={{
//           flex: 1,
//           borderRight: viewWidth <= 992 ? "0" : "1px solid #ccc",
//           overflow: "hidden",
//         }}
//       >
//         {children}
//       </div>
//       {viewWidth <= 992 ? (
//         <div style={{ display: "none" }}></div>
//       ) : (
//         <SideComponent
//           text="Design By 1"
//           minWidth="68px"
//           height={sidenarHeight}
//           background={sidebarBg}
//           color={sidebarTextColor}
//         />
//       )}
//     </div>
//   );
// };

// export default Layout;

import { useEffect, useState } from "react";
import SideComponent from "./SideComponent";

const Layout = ({
  children,
  sidebarBg = "#0B1215",
  sidebarTextColor = "#B51F29",
  sidenarHeight = "100vh",
  text = "ONE FITOUT", // todo revert change
}) => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
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
        // overflow: viewWidth <= 800 ? "unset" : "hidden", // Prevent horizontal scrolling
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
            height="100vh" // Match sticky container height
            background={sidebarBg}
            color={sidebarTextColor}
            style={{
              // Add these styles to SideComponent
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          />
        </div>
      )}
    </div>
  );
};
export default Layout;
