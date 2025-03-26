// import gsap from "gsap";
// import { useEffect, useRef, useState } from "react";
// import { IoGrid } from "react-icons/io5";
// import { Link, useLocation, useParams } from "react-router-dom";
// import Contact from "../../../Components/Contact";
// import CustomButton from "../../../Components/CustomButton";
// import Layout from "../../../Components/Layout/Layout";
// import NavbarBootstrap from "../../../Components/NavbarBootstrap";
// import "./css/ProjectInt.css";
// import imgOne from "/assets/logo-white-red.png";
// import logo from "/assets/onefitout-black-logo.png";
// const contactUsData1 = {
//   title: "Enquiries",
//   contact: "enquiries@1fitout.com",
// };
// const contactUsData2 = {
//   title: "RETAILS",
//   contact: "retail@1fitout.com",
// };
// const contactUsData3 = {
//   title: "PHONE",
//   contact: "800-ONE-FIT-OUT",
//   phone: "(800 663 348 688)",
// };
// const contactUsData4 = {
//   title: "MOBILE",
//   contact: "+971 50 348 6838",
// };
// export default function ProjectInt() {
//   const [viewWidth, setViewWidth] = useState(window.innerWidth);
//   const { type, area, community, id } = useParams();
//   const [projectsData, setProjectsData] = useState(null);
//   const [Project, setProject] = useState({});
//   const { pathname } = useLocation();

//   const [readMoreToggle, setReadMoreToggle] = useState(false);
//   const [galleryTToggle, setGalleryToggle] = useState(false);
//   const [contactToggle, setContactToggle] = useState(false);

//   // Add refs for the elements we want to animate
//   const backdropRef = useRef(null);
//   const modalRef = useRef(null);

//   useEffect(() => {
//     if (contactToggle) {
//       document.body.style.overflowY = "hidden";
//     } else {
//       document.body.style.overflowY = "";
//     }
//   }, [contactToggle]);

//   // Fetch projects data
//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch("/project.json");
//         if (!response.ok) throw new Error("Failed to fetch projects");
//         const data = await response.json();
//         setProjectsData(data);
//       } catch (error) {
//         console.error("Error loading projects:", error);
//       }
//     };
//     fetchProjects();
//   }, []);

//   // Find project from fetched data
//   useEffect(() => {
//     if (!projectsData?.allProjects) return;

//     const project = projectsData.allProjects?.find(
//       (p) =>
//         p.id == id &&
//         p.type === decodeURIComponent(type) &&
//         p.area === decodeURIComponent(area.replace(/-/g, " ")) &&
//         p.community
//           .toLowerCase()
//           .replace(/, /g, "-")
//           .replace(/ /g, "-")
//           .includes(community)
//     );

//     setProject(project || {}); // Ensure Project is never undefined
//   }, [projectsData, id, type, area, community]);

//   function sliceString(str = "") {
//     const comma = str.indexOf(",");
//     const slice = str.slice(0, comma);
//     return slice;
//   }

//   function remainingString(str = "") {
//     const comma = str.indexOf(",");
//     const slice = str.slice(comma + 1);
//     return slice;
//   }

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   const readMore = () => {
//     setReadMoreToggle((prev) => !prev);
//   };
//   const GalleryToggle = () => {
//     setGalleryToggle((prev) => !prev);
//   };

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

//   useEffect(() => {
//     if (readMoreToggle) {
//       // Animate backdrop
//       gsap.to(backdropRef.current, {
//         opacity: 1,
//         duration: 1.2,
//         ease: "power2.inOut",
//       });

//       // Animate modal
//       gsap.fromTo(
//         modalRef.current,
//         {
//           opacity: 0,
//           y: window.innerHeight,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1.2,
//           ease: "power3.inOut",
//         }
//       );
//     }
//   }, [readMoreToggle]);

//   // Handle closing animations
//   const handleClose = () => {
//     // Animate backdrop out
//     gsap.to(backdropRef.current, {
//       opacity: 0,
//       duration: 1.2,
//       ease: "power2.inOut",
//     });

//     // Animate modal out
//     gsap.to(modalRef.current, {
//       opacity: 0,
//       y: window.innerHeight,
//       duration: 1.2,
//       ease: "power3.inOut",
//       onComplete: () => setReadMoreToggle(false),
//     });
//   };

//   return (
//     <>
//       <NavbarBootstrap
//         id="white-navbar"
//         bOutline="#b51f29"
//         textColor="#0b1215"
//         logo={logo}
//         oneImageBackground={"#b51f29"}
//         position={viewWidth <= 992 ? true : false}
//         openContact={setContactToggle}
//         btnColor="#B51F29"
//         btnBorder="1px solid #B51F29"
//       />
//       <Layout sidebarBg="#FBFAF6" sidenarHeight="90vh">
//         <div className="project-inner-wrapper">
//           <div className="project-inner-img-wrapper">
//             cur{" "}
//             <img
//               src={Project?.image || "/assets/placeholder.jpg"}
//               className="project-inner-img"
//             />
//           </div>

//           <div className="project-inner-right-wrapper">
//             <div className="project-inner-right-text-wrapper">
//               <p
//                 className="project-inner-right-text-wrapper_text"
//                 style={{ textTransform: "uppercase" }}
//               >
//                 <span id="pint-type">{Project?.type}</span>
//                 <span id="pint-area">{Project?.area}</span>
//               </p>
//               <h1 id="pint-community">
//                 {Project?.community}
//                 {/* <br />
//                 {remainingString(Project?.community)} */}
//               </h1>
//               <div id="projectint-buttons">
//                 <CustomButton
//                   borderRadius="30px"
//                   btnTxt={"Read More"}
//                   padding="10px 15px"
//                   onClick={readMore}
//                   border="1px solid #1c1c1c"
//                   color="#0b1215"
//                 />
//                 <Link
//                   style={{ textDecoration: "none" }}
//                   to={`${pathname}/gallery`}
//                 >
//                   <CustomButton
//                     borderRadius="30px"
//                     Icon={IoGrid}
//                     isIcon={true}
//                     btnTxt="Gallery"
//                     padding="10px 15px"
//                     border="1px solid #1c1c1c"
//                     color="#0b1215"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//       {readMoreToggle && (
//         <>
//           <div
//             ref={backdropRef}
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               backgroundColor: "rgba(0, 0, 0, 0.5)",
//               zIndex: 999,
//               opacity: 0,
//             }}
//             onClick={handleClose}
//           />
//           <div
//             ref={modalRef}
//             id="readmore-outer"
//             style={{
//               position: "fixed",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               height: viewWidth <= 992 ? "100vh" : "80vh",
//               marginTop: viewWidth <= 992 ? "0" : "20vh",
//               backgroundColor: viewWidth <= 992 ? "#fbfaf6" : "transparent",
//               zIndex: 1000,
//               overflowY: "auto",
//               opacity: 0,
//             }}
//           >
//             <div
//               id="readmore-inner"
//               style={{
//                 display: viewWidth <= 992 ? "none" : "block",
//                 position: "relative",
//               }}
//             >
//               <div id="readmore-close-outer" onClick={handleClose}>
//                 <img
//                   src={imgOne}
//                   width="60px"
//                   height="60px"
//                   className="readmore-logo-one"
//                 />
//                 <img id="readmore-close" src="/assets/filter-close.png" />
//               </div>
//               <div id="readmore-content">
//                 {viewWidth > 992 ? (
//                   <>
//                     {Project?.showContactDetails ? (
//                       <div id="readmore-details">
//                         <span>
//                           <span className="readmore-title">
//                             {contactUsData1.title}
//                           </span>
//                           <span className="readmore-subtitle">
//                             {contactUsData1.contact}{" "}
//                           </span>
//                         </span>
//                         <span>
//                           <span className="readmore-title">
//                             {contactUsData2.title}
//                           </span>
//                           <span className="readmore-subtitle">
//                             {contactUsData2.contact}
//                           </span>
//                         </span>
//                         <span>
//                           <span className="readmore-title">
//                             {contactUsData3.title}
//                           </span>
//                           <span className="readmore-subtitle">
//                             {" "}
//                             {contactUsData3.contact}
//                           </span>
//                           <span className="readmore-subtitle">
//                             {contactUsData3.phone}{" "}
//                           </span>
//                         </span>
//                         <span>
//                           <span className="readmore-title">Location</span>
//                           <span className="readmore-subtitle">
//                             {Project?.area || "Unknown Type"}{" "}
//                           </span>
//                         </span>
//                       </div>
//                     ) : (
//                       <div id="readmore-details">
//                         <span>
//                           <span className="readmore-title">TYPE</span>
//                           <span className="readmore-subtitle">
//                             {Project?.type || "Unknown Type"}
//                           </span>
//                         </span>
//                         <span>
//                           <span className="readmore-title">LOCATION</span>
//                           <span className="readmore-subtitle">
//                             {Project?.area || "Unknown Location"}
//                           </span>
//                         </span>
//                         <span>
//                           <span className="readmore-title">YEAR</span>
//                           <span className="readmore-subtitle">2023</span>
//                         </span>
//                       </div>
//                     )}

//                     <div id="readmore-main">
//                       <p id="readmore-title">{Project.community}</p>
//                       <p id="readmore-main-p">
//                         {Project?.body || "No description available."}
//                       </p>
//                       <div
//                         id="readmore-button"
//                         style={{
//                           paddingTop: "45px",
//                           display: viewWidth <= 992 ? "none" : "block",
//                         }}
//                       >
//                         <Link
//                           style={{ textDecoration: "none" }}
//                           to={`${pathname}/gallery`}
//                         >
//                           <CustomButton
//                             iconSize={11}
//                             borderRadius="1.875rem"
//                             Icon={IoGrid}
//                             isIcon={true}
//                             btnTxt="Gallery"
//                             border="0.0625rem solid #1c1c1c"
//                             color="#0b1215"
//                           />
//                         </Link>
//                       </div>
//                     </div>
//                   </>
//                 ) : (
//                   ""
//                 )}
//               </div>
//               <div
//                 id="readmore-footer"
//                 style={{
//                   position: "absolute",
//                   bottom: "0",
//                   left: "0",
//                   right: "0",
//                 }}
//               >
//                 <span id="footer-tag1">Photography by</span>
//                 <span id="footer-tag2">Maison Celadora</span>
//               </div>
//             </div>
//             {viewWidth <= 992 ? (
//               <div
//                 style={{
//                   // display: "flex",
//                   // flexDirection: "column",
//                   height: "100vh", // Full height of the viewport
//                   // justifyContent: "space-between", // Space between content and button
//                   backgroundColor: "#fbfaf6",
//                 }}
//               >
//                 <div id="readmore-close-outer" onClick={handleClose}>
//                   <img
//                     src={imgOne}
//                     width="60px"
//                     height="60px"
//                     // className="readmore-logo-one"
//                   />
//                   <img id="readmore-close" src="/assets/filter-close.png" />
//                 </div>
//                 {/* Scrollable content area */}
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "space-between",
//                     height: "calc(100vh - 90px)",
//                   }}
//                 >
//                   <div
//                     style={{
//                       padding: "40px 20px 0px 20px",
//                     }}
//                   >
//                     <p
//                       style={{
//                         fontSize: "28px",
//                         fontWeight: "500",
//                         lineHeight: "35px",
//                         fontFamily: "p22-mackinac-pro, serif",
//                       }}
//                     >
//                       {Project.community}
//                     </p>
//                     <p
//                       style={{
//                         fontSize: "16px",
//                         lineHeight: "22px",
//                         marginBottom: "24px",
//                         marginTop: "20px",
//                         fontFamily: "p22-mackinac-pro, serif",
//                       }}
//                     >
//                       {Project?.body || "No description available."}
//                     </p>

//                     {/* <div style={{ marginTop: "32px" }}>
//                       <div style={{ marginBottom: "16px" }}>
//                         <div
//                           style={{
//                             fontSize: "12px",
//                             lineHeight: "16px",
//                             fontWeight: "500",
//                             textTransform: "uppercase",
//                             marginBottom: "4px",
//                           }}
//                         >
//                           Type
//                         </div>
//                         <div
//                           style={{
//                             fontSize: "16px",
//                             lineHeight: "22px",
//                             fontWeight: "400",
//                           }}
//                         >
//                           {Project?.type || "Unknown Type"}
//                         </div>
//                       </div>
//                       <div style={{ marginBottom: "16px" }}>
//                         <div
//                           style={{
//                             fontSize: "12px",
//                             lineHeight: "16px",
//                             fontWeight: "500",
//                             textTransform: "uppercase",
//                             marginBottom: "4px",
//                           }}
//                         >
//                           Location
//                         </div>
//                         <div
//                           style={{
//                             fontSize: "16px",
//                             lineHeight: "22px",
//                             fontWeight: "400",
//                           }}
//                         >
//                           {Project?.area || "Unknown Location"}
//                         </div>
//                       </div>
//                       <div style={{ marginBottom: "16px" }}>
//                         <div
//                           style={{
//                             fontSize: "12px",
//                             lineHeight: "16px",
//                             fontWeight: "500",
//                             textTransform: "uppercase",
//                             marginBottom: "4px",
//                           }}
//                         >
//                           Year
//                         </div>
//                         <div
//                           style={{
//                             fontSize: "16px",
//                             lineHeight: "22px",
//                             fontWeight: "400",
//                           }}
//                         >
//                           2023
//                         </div>
//                       </div>
//                     </div> */}
//                     {Project?.showContactDetails ? (
//                       <div id="readmore-details">
//                         <span>
//                           <span className="readmore-title">
//                             {contactUsData1.title}
//                           </span>
//                           <span className="readmore-subtitle">
//                             {contactUsData1.contact}{" "}
//                           </span>
//                         </span>
//                         <span>
//                           <span className="readmore-title">
//                             {contactUsData2.title}
//                           </span>
//                           <span className="readmore-subtitle">
//                             {contactUsData2.contact}
//                           </span>
//                         </span>
//                         <span>
//                           <span className="readmore-title">
//                             {contactUsData3.title}
//                           </span>
//                           <span className="readmore-subtitle">
//                             {" "}
//                             {contactUsData3.contact}
//                           </span>
//                           <span className="readmore-subtitle">
//                             {contactUsData3.phone}{" "}
//                           </span>
//                         </span>
//                         <span>
//                           <span className="readmore-title">Location</span>
//                           <span className="readmore-subtitle">
//                             {Project?.area || "Unknown Type"}{" "}
//                           </span>
//                         </span>
//                       </div>
//                     ) : (
//                       <div id="readmore-details">
//                         <span>
//                           <span className="readmore-title">TYPE</span>
//                           <span className="readmore-subtitle">
//                             {Project?.type || "Unknown Type"}
//                           </span>
//                         </span>
//                         <span>
//                           <span className="readmore-title">LOCATION</span>
//                           <span className="readmore-subtitle">
//                             {Project?.area || "Unknown Location"}
//                           </span>
//                         </span>
//                         <span>
//                           <span className="readmore-title">YEAR</span>
//                           <span className="readmore-subtitle">2023</span>
//                         </span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Button container */}
//                   <div
//                     style={{
//                       background: "#FBFAF6",
//                       padding: "20px",
//                       paddingBottom: "calc(20px + env(safe-area-inset-bottom))",
//                     }}
//                   >
//                     <Link
//                       style={{
//                         textDecoration: "none",
//                         width: "100%",
//                         display: "block",
//                       }}
//                       to={`${pathname}/gallery`}
//                     >
//                       <CustomButton
//                         borderRadius="1.875rem"
//                         Icon={IoGrid}
//                         isIcon={true}
//                         btnTxt="Gallery"
//                         border="0.0625rem solid #1c1c1c"
//                         color="#0b1215"
//                         viewWidth={viewWidth}
//                       />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               ""
//             )}
//           </div>
//         </>
//       )}

//       {contactToggle && (
//         <Contact id="projectint-contact" closeContact={setContactToggle} />
//       )}
//     </>
//   );
// }

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { IoGrid } from "react-icons/io5";
import { Link, useLocation, useParams } from "react-router-dom";
import Contact from "../../../Components/Contact";
import CustomButton from "../../../Components/CustomButton";
import Layout from "../../../Components/Layout/Layout";
import NavbarBootstrap from "../../../Components/NavbarBootstrap";
import "./css/ProjectInt.css";
import imgOne from "/assets/logo-white-red.png";
import logo from "/assets/onefitout-black-logo.png";

const contactUsData1 = {
  title: "Enquiries",
  contact: "enquiries@1fitout.com",
};

const contactUsData2 = {
  title: "RETAILS",
  contact: "retail@1fitout.com",
};

const contactUsData3 = {
  title: "PHONE",
  contact: "800-ONE-FIT-OUT",
  phone: "(800 663 348 688)",
};

const contactUsData4 = {
  title: "MOBILE",
  contact: "+971 50 348 6838",
};
export default function ProjectInt() {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const { type, area, community, id } = useParams();
  const [projectsData, setProjectsData] = useState(null);
  const [Project, setProject] = useState({});
  const { pathname } = useLocation();

  const [readMoreToggle, setReadMoreToggle] = useState(false);
  const [galleryTToggle, setGalleryToggle] = useState(false);
  const [contactToggle, setContactToggle] = useState(false);

  // Add refs for the elements we want to animate
  const backdropRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (contactToggle) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [contactToggle]);

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

  // Find project from fetched data
  useEffect(() => {
    if (!projectsData?.allProjects) return;

    const project = projectsData.allProjects.find(
      (p) =>
        p.id == id &&
        p.type === decodeURIComponent(type) &&
        p.area === decodeURIComponent(area.replace(/-/g, " ")) &&
        p.community
          .toLowerCase()
          .replace(/, /g, "-")
          .replace(/ /g, "-")
          .includes(community)
    );

    setProject(project || {}); // Ensure Project is never undefined
  }, [projectsData, id, type, area, community]);

  function sliceString(str = "") {
    const comma = str.indexOf(",");
    const slice = str.slice(0, comma);
    return slice;
  }

  function remainingString(str = "") {
    const comma = str.indexOf(",");
    const slice = str.slice(comma + 1);
    return slice;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const readMore = () => {
    setReadMoreToggle((prev) => !prev);
  };
  const GalleryToggle = () => {
    setGalleryToggle((prev) => !prev);
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

  useEffect(() => {
    if (readMoreToggle) {
      // Animate backdrop
      gsap.to(backdropRef.current, {
        opacity: 1,
        duration: 1.2,
        ease: "power2.inOut",
      });

      // Animate modal
      gsap.fromTo(
        modalRef.current,
        {
          opacity: 0,
          y: window.innerHeight,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.inOut",
        }
      );
    }
  }, [readMoreToggle]);

  // Handle closing animations
  const handleClose = () => {
    // Animate backdrop out
    gsap.to(backdropRef.current, {
      opacity: 0,
      duration: 1.2,
      ease: "power2.inOut",
    });

    // Animate modal out
    gsap.to(modalRef.current, {
      opacity: 0,
      y: window.innerHeight,
      duration: 1.2,
      ease: "power3.inOut",
      onComplete: () => setReadMoreToggle(false),
    });
  };

  return (
    <>
      <NavbarBootstrap
        id="white-navbar"
        bOutline="#b51f29"
        textColor="#0b1215"
        logo={logo}
        oneImageBackground={"#b51f29"}
        position={viewWidth <= 992 ? true : false}
        openContact={setContactToggle}
        btnColor="#B51F29"
        btnBorder="1px solid #B51F29"
      />
      <Layout sidebarBg="#FBFAF6" sidenarHeight="90vh">
        <div className="project-inner-wrapper">
          <div className="project-inner-img-wrapper">
            cur{" "}
            <img
              src={Project?.image || "/assets/placeholder.jpg"}
              className="project-inner-img"
            />
          </div>

          <div className="project-inner-right-wrapper">
            <div className="project-inner-right-text-wrapper">
              <p
                className="project-inner-right-text-wrapper_text"
                style={{ textTransform: "uppercase" }}
              >
                <span id="pint-type">{Project?.type}</span>
                <span id="pint-area">{Project?.area}</span>
              </p>
              <h1 id="pint-community">
                {Project?.community}
                {/* {sliceString(Project?.community)}
                <br />
                {remainingString(Project?.community)} */}
              </h1>
              <div id="projectint-buttons">
                <CustomButton
                  borderRadius="30px"
                  btnTxt={"Read More"}
                  padding="10px 15px"
                  onClick={readMore}
                  border="1px solid #1c1c1c"
                  color="#0b1215"
                />
                <Link
                  style={{ textDecoration: "none" }}
                  to={`${pathname}/gallery`}
                >
                  <CustomButton
                    borderRadius="30px"
                    Icon={IoGrid}
                    isIcon={true}
                    btnTxt="Gallery"
                    padding="10px 15px"
                    border="1px solid #1c1c1c"
                    color="#0b1215"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {readMoreToggle && (
        <>
          <div
            ref={backdropRef}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
              opacity: 0,
            }}
            onClick={handleClose}
            onTouchMove={(e) => e.preventDefault()}
          />
          <div
            ref={modalRef}
            id="readmore-outer"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              height: viewWidth <= 992 ? "100vh" : "80vh",
              marginTop: viewWidth <= 992 ? "0" : "20vh",
              backgroundColor: viewWidth <= 992 ? "#fbfaf6" : "transparent",
              zIndex: 1000,
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
              opacity: 0,
            }}
          >
            <div
              id="readmore-inner"
              style={{
                display: viewWidth <= 992 ? "none" : "block",
                position: "relative",
              }}
            >
              <div id="readmore-close-outer" onClick={handleClose}>
                <img
                  src={imgOne}
                  width="60px"
                  height="60px"
                  className="readmore-logo-one"
                />
                <img id="readmore-close" src="/assets/filter-close.png" />
              </div>
              <div id="readmore-content">
                {viewWidth > 992 ? (
                  <>
                    {Project?.showContactDetails ? (
                      <div id="readmore-details">
                        <span>
                          <span className="readmore-title">
                            {contactUsData1.title}
                          </span>
                          <span className="readmore-subtitle">
                            {contactUsData1.contact}{" "}
                          </span>
                        </span>
                        <span>
                          <span className="readmore-title">
                            {contactUsData2.title}
                          </span>
                          <span className="readmore-subtitle">
                            {contactUsData2.contact}
                          </span>
                        </span>
                        <span>
                          <span className="readmore-title">
                            {contactUsData3.title}
                          </span>
                          <span className="readmore-subtitle">
                            {" "}
                            {contactUsData3.contact}
                          </span>
                          <span className="readmore-subtitle">
                            {contactUsData3.phone}{" "}
                          </span>
                        </span>
                        <span>
                          <span className="readmore-title">Location</span>
                          <span className="readmore-subtitle">
                            {Project?.area || "Unknown Type"}{" "}
                          </span>
                        </span>
                      </div>
                    ) : (
                      <div id="readmore-details">
                        <span>
                          <span className="readmore-title">TYPE</span>
                          <span className="readmore-subtitle">
                            {Project?.type || "Unknown Type"}
                          </span>
                        </span>
                        <span>
                          <span className="readmore-title">LOCATION</span>
                          <span className="readmore-subtitle">
                            {Project?.area || "Unknown Location"}
                          </span>
                        </span>
                        <span>
                          <span className="readmore-title">YEAR</span>
                          <span className="readmore-subtitle">2023</span>
                        </span>
                      </div>
                    )}

                    {/* <div id="readmore-details">
                      <span>
                        <span className="readmore-title">TYPE</span>
                        <span className="readmore-subtitle">
                          {Project?.type || "Unknown Type"}
                        </span>
                      </span>
                      <span>
                        <span className="readmore-title">LOCATION</span>
                        <span className="readmore-subtitle">
                          {Project?.area || "Unknown Location"}
                        </span>
                      </span>
                      <span>
                        <span className="readmore-title">YEAR</span>
                        <span className="readmore-subtitle">2023</span>
                      </span>
                    </div> */}
                    <div id="readmore-main">
                      <p id="readmore-title">{Project.community}</p>
                      <p id="readmore-main-p">
                        {Project?.body || "No description available."}
                      </p>
                      <div
                        id="readmore-button"
                        style={{
                          paddingTop: "45px",
                          display: viewWidth <= 992 ? "none" : "block",
                        }}
                      >
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`${pathname}/gallery`}
                        >
                          <CustomButton
                            iconSize={11}
                            borderRadius="1.875rem"
                            Icon={IoGrid}
                            isIcon={true}
                            btnTxt="Gallery"
                            border="0.0625rem solid #1c1c1c"
                            color="#0b1215"
                          />
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div
                id="readmore-footer"
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                }}
              >
                <span id="footer-tag1">Photography by</span>
                <span id="footer-tag2">Maison Celadora</span>
              </div>
            </div>
            {viewWidth <= 992 ? (
              <div
                style={{
                  // display: "flex",
                  // flexDirection: "column",
                  height: "81vh", // Full height of the viewport
                  // justifyContent: "space-between", // Space between content and button
                  backgroundColor: "#fbfaf6",
                }}
              >
                <div id="readmore-close-outer" onClick={handleClose}>
                  <img
                    src={imgOne}
                    width="60px"
                    height="60px"
                    // className="readmore-logo-one"
                  />
                  <img id="readmore-close" src="/assets/filter-close.png" />
                </div>
                {/* Scrollable content area */}
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      padding: "40px 20px 0px 20px",
                    }}
                  >
                    <div id="readmore-main">
                      <p id="readmore-title">{Project.community}</p>
                      <p id="readmore-main-p">
                        {Project?.body || "No description available."}
                      </p>
                    </div>
                  </div>
                  <div id="readmore-details">
                    <span>
                      <span className="readmore-title">TYPE</span>
                      <span
                        style={{ marginTop: "2px" }}
                        className="readmore-subtitle"
                      >
                        {Project?.type || "Unknown Type"}
                      </span>
                    </span>
                    <span style={{ marginTop: "10px" }}>
                      <span className="readmore-title">LOCATION</span>
                      <span
                        style={{ marginTop: "2px" }}
                        className="readmore-subtitle"
                      >
                        {Project?.area || "Unknown Location"}
                      </span>
                    </span>
                    <span style={{ marginTop: "5px" }}>
                      <span className="readmore-title">YEAR</span>
                      <span
                        style={{ marginTop: "2px" }}
                        className="readmore-subtitle"
                      >
                        2023
                      </span>
                    </span>
                    <div className="" style={{ marginTop: "30px" }}>
                      <Link
                        style={{
                          textDecoration: "none",
                          width: "100%",
                          display: "block",
                        }}
                        to={`${pathname}/gallery`}
                      >
                        <CustomButton
                          borderRadius="1.875rem"
                          Icon={IoGrid}
                          isIcon={true}
                          btnTxt="Gallery"
                          border="0.0625rem solid #1c1c1c"
                          color="#0b1215"
                          viewWidth={viewWidth}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </>
      )}

      {contactToggle && (
        <Contact id="projectint-contact" closeContact={setContactToggle} />
      )}
    </>
  );
}
