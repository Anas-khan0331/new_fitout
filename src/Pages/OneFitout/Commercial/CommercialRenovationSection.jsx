// import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import Popup from "../Kitchens/Popup";
// import renovationImage from "../../../../public/assets/new-content-1.jpg";
// // import savannahImage from "../../../../../public/assets/savannah.jpeg";

// const arrayPopups = [
//   {
//     image: "/assets/popup-default.png",
//     heading: "Elington",
//     text: "White Marble Counter Top",
//   },
//   {
//     image: "/assets/popup-default.png",
//     heading: "Elington",
//     text: "White Marble Counter Top",
//   },
//   {
//     image: "/assets/popup-default.png",
//     heading: "Elington",
//     text: "White Marble Counter Top",
//   },
// ];

// const kitchenObj = {
//   image: renovationImage,
//   mobileImage: renovationImage,
//   text: "The kitchen is the heart of the home and when you take a look at our  kitchen projects, you can see their appeal. We can help you realise your dreams.",
// };

// const bathroomObj = {
//   image: "/assets/residential-middle-bathroom.jpg",
//   mobileImage: "/assets/residential-middle-bathroom.jpg",
//   text: "Visualizing the bathroom as a serene sanctuary, We aim to highlight the elegance and allure of our design projects. Realizing dreams is our primary goal.",
// };

// const CommercialRenovationSection = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
//   const [isSelected, setIsSelected] = useState("offices");
//   const [selectedImg, setselectedImg] = useState(kitchenObj.image);
//   const [selectedText, setSelectedText] = useState(kitchenObj.text);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const selectedUpdate = (event) => {
//     const text = event.target.innerText;
//     setIsSelected(String(text).toLowerCase());
//   };

//   useEffect(() => {
//     if (isSelected == "kitchens") {
//       if (isMobile) {
//         setselectedImg(kitchenObj.mobileImage);
//       } else {
//         setselectedImg(kitchenObj.image);
//       }

//       setSelectedText(kitchenObj.text);
//     }

//     if (isSelected == "bathrooms") {
//       if (isMobile) {
//         setselectedImg(bathroomObj.mobileImage);
//       } else {
//         setselectedImg(bathroomObj.image);
//       }

//       setSelectedText(bathroomObj.text);
//     }
//   }, [isSelected]);

//   const currentImage = selectedImg;
//   return (
//     <div className="renovationSection_container">
//       <Container>
//         <Row>
//           <Col lg={7}>
//             <div className="renovationSection_description">
//               <p>WE EXECUTE RENOVATIONS AS IF YOUR SPACE IS OURS</p>
//             </div>
//           </Col>
//           <Col lg={2} className="hidden_col"></Col>
//           <Col lg={3}>
//             <div className="renovation_flex_container">
//               <p
//                 onClick={selectedUpdate}
//                 className={isSelected == "kitchens" ? "selectedStyle" : ""}
//                 style={{
//                   paddingInlineEnd: "25px",
//                   cursor: `${
//                     isSelected == "bathrooms" ? "pointer" : "default"
//                   }`,
//                 }}
//               >
//                 OFFICES
//               </p>
//               <div className="">
//                 <p
//                   onClick={selectedUpdate}
//                   className={isSelected == "bathrooms" ? "selectedStyle" : ""}
//                   style={{
//                     cursor: `${
//                       isSelected == "kitchens" ? "pointer" : "default"
//                     }`,
//                   }}
//                 >
//                   RESTURANTS
//                 </p>
//               </div>
//             </div>
//           </Col>
//           <Col lg={12}>
//             <div className="renovation_img">
//               <img
//                 src={currentImage}
//                 style={{
//                   width: "100%",
//                   objectFit: "cover",
//                   height: "100%",
//                 }}
//                 className="renovation_img_main"
//                 alt="Renovation Section"
//               />
//               <div className="renovation_flex_container hidden_class mt-4">
//                 <p
//                   onClick={selectedUpdate}
//                   className={isSelected == "kitchens" ? "selectedStyle" : ""}
//                   style={{
//                     paddingInlineEnd: "25px",
//                     cursor: `${
//                       isSelected == "bathrooms" ? "pointer" : "default"
//                     }`,
//                   }}
//                 >
//                   KITCHENS
//                 </p>
//                 <div className="">
//                   <p
//                     onClick={selectedUpdate}
//                     className={isSelected == "bathrooms" ? "selectedStyle" : ""}
//                     style={{
//                       cursor: `${
//                         isSelected == "kitchens" ? "pointer" : "default"
//                       }`,
//                     }}
//                   >
//                     BATHROOMS
//                   </p>
//                 </div>
//               </div>
//               {arrayPopups.map((popupItem, popupIndex) => (
//                 <div
//                   key={popupIndex}
//                   id={`popup-kitchen-${popupIndex}`}
//                   className="kitchen-popups residential-popups"
//                 >
//                   <Popup
//                     img={popupItem.image}
//                     heading={popupItem.heading}
//                     text={popupItem.text}
//                     id="kitchen-popup"
//                   />
//                 </div>
//               ))}
//             </div>
//           </Col>
//           <Col lg={4}></Col>
//           <Col lg={4}></Col>
//           <Col lg={4}>
//             <div className="renovation_img_paragraph">
//               <p style={{ fontFamily: "p22-mackinac-pro, serif" }}>
//                 {selectedText}
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default CommercialRenovationSection;

// import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import Popup from "../Kitchens/Popup";

// const arrayPopups = [
//   {
//     image: "/assets/popup-default.png",
//     heading: "Elington",
//     text: "White Marble Counter Top",
//   },
//   {
//     image: "/assets/popup-default.png",
//     heading: "Elington",
//     text: "White Marble Counter Top",
//   },
//   {
//     image: "/assets/popup-default.png",
//     heading: "Elington",
//     text: "White Marble Counter Top",
//   },
// ];

// const officeObj = {
//   image: "../../../../public/assets/new-content-1.jpg", // Update with actual office image path
//   mobileImage: "../../../../public/assets/new-content-1.jpg", // Update with actual office mobile image path
//   text: "We create office spaces that enhance productivity and efficiency, designed to foster collaboration and inspire creativity.",
// };

// const restaurantObj = {
//   image: "../../../../../public/assets/savannah.jpeg", // Update with actual restaurant image path
//   mobileImage: "../../../../../public/assets/savannah.jpeg", // Update with actual restaurant mobile image path
//   text: "Our restaurant renovations focus on ambiance and functionality, ensuring an inviting dining experience while maintaining operational efficiency.",
// };

// const CommercialRenovationSection = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
//   const [isSelected, setIsSelected] = useState("offices");
//   const [selectedImg, setSelectedImg] = useState(officeObj.image);
//   const [selectedText, setSelectedText] = useState(officeObj.text);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const selectedUpdate = (event) => {
//     const text = event.target.innerText.toLowerCase();
//     setIsSelected(text);
//   };

//   useEffect(() => {
//     if (isSelected === "offices") {
//       setSelectedImg(isMobile ? officeObj.mobileImage : officeObj.image);
//       setSelectedText(officeObj.text);
//     } else if (isSelected === "restaurants") {
//       setSelectedImg(
//         isMobile ? restaurantObj.mobileImage : restaurantObj.image
//       );
//       setSelectedText(restaurantObj.text);
//     }
//   }, [isSelected, isMobile]);

//   return (
//     <div className="renovationSection_container">
//       <Container>
//         <Row>
//           <Col lg={7}>
//             <div className="renovationSection_description">
//               <p>WE EXECUTE RENOVATIONS AS IF YOUR SPACE IS OURS</p>
//             </div>
//           </Col>
//           <Col lg={2} className="hidden_col"></Col>
//           <Col lg={3}>
//             <div className="renovation_flex_container">
//               <p
//                 onClick={selectedUpdate}
//                 className={isSelected === "offices" ? "selectedStyle" : ""}
//                 style={{
//                   paddingInlineEnd: "25px",
//                   cursor: isSelected !== "offices" ? "pointer" : "default",
//                 }}
//               >
//                 OFFICES
//               </p>
//               <div className="">
//                 <p
//                   onClick={selectedUpdate}
//                   className={
//                     isSelected === "restaurants" ? "selectedStyle" : ""
//                   }
//                   style={{
//                     cursor:
//                       isSelected !== "restaurants" ? "pointer" : "default",
//                   }}
//                 >
//                   RESTAURANTS
//                 </p>
//               </div>
//             </div>
//           </Col>
//           <Col lg={12}>
//             <div className="renovation_img">
//               <img
//                 src={selectedImg}
//                 style={{
//                   width: "100%",
//                   objectFit: "cover",
//                   height: "750px",
//                 }}
//                 className="renovation_img_main"
//                 alt="Renovation Section"
//               />

//               {arrayPopups.map((popupItem, popupIndex) => (
//                 <div
//                   key={popupIndex}
//                   id={`popup-kitchen-${popupIndex}`}
//                   className="kitchen-popups residential-popups"
//                 >
//                   <Popup
//                     img={popupItem.image}
//                     heading={popupItem.heading}
//                     text={popupItem.text}
//                     id="kitchen-popup"
//                   />
//                 </div>
//               ))}
//             </div>
//           </Col>
//           <Col lg={4}></Col>
//           <Col lg={4}></Col>
//           <Col lg={4}>
//             <div className="renovation_img_paragraph">
//               <p style={{ fontFamily: "p22-mackinac-pro, serif" }}>
//                 {selectedText}
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default CommercialRenovationSection;

import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Popup from "../Kitchens/Popup";

const arrayPopups = [
  // {
  //   image: "/assets/popup-default.png",
  //   heading: "Elington",
  //   text: "White Marble Counter Top",
  // },
  // {
  //   image: "/assets/popup-default.png",
  //   heading: "Elington",
  //   text: "White Marble Counter Top",
  // },
  // {
  //   image: "/assets/popup-default.png",
  //   heading: "Elington",
  //   text: "White Marble Counter Top",
  // },
];

const officeObj = {
  image: "/assets/Offices.jpg",
  mobileImage: "/assets/Offices.jpg",
  text: "We create office spaces that enhance productivity and efficiency, designed to foster collaboration and inspire creativity.",
};

const restaurantObj = {
  image: "/assets/resturantImage.png", // Update with actual restaurant image path
  mobileImage: "/assets/resturantImage.png", // Update with actual restaurant mobile image path
  text: "We create a welcoming and professional environment with tailored commercial interiors designed to meet your business needs.",
};

const CommercialRenovationSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [isSelected, setIsSelected] = useState("restaurants");
  const [selectedImg, setSelectedImg] = useState(officeObj.image);
  const [selectedText, setSelectedText] = useState(officeObj.text);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const selectedUpdate = (event) => {
    const text = event.target.innerText.toLowerCase();
    setIsSelected(text);
  };

  useEffect(() => {
    if (isSelected === "offices") {
      setSelectedImg(officeObj.image);
      setSelectedText(officeObj.text);
    } else if (isSelected === "restaurants") {
      setSelectedImg(restaurantObj.image);
      setSelectedText(restaurantObj.text);
    }
  }, [isSelected]);

  return (
    <div className="renovationSection_container">
      <Container>
        <Row>
          <Col lg={7}>
            <div className="renovationSection_description">
              <p>WE EXECUTE RENOVATIONS AS IF YOUR SPACE IS OURS</p>
            </div>
          </Col>
          <Col lg={2} className="hidden_col"></Col>
          <Col lg={3}>
            <div className="renovation_flex_container">
              <p
                onClick={selectedUpdate}
                className={isSelected === "offices" ? "selectedStyle" : ""}
                style={{
                  paddingInlineEnd: "25px",
                  cursor: isSelected !== "offices" ? "pointer" : "default",
                }}
              >
                OFFICES
              </p>
              <div className="">
                <p
                  onClick={selectedUpdate}
                  className={
                    isSelected === "restaurants" ? "selectedStyle" : ""
                  }
                  style={{
                    cursor:
                      isSelected !== "restaurants" ? "pointer" : "default",
                  }}
                >
                  RESTAURANTS
                </p>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <div className="renovation_img">
              <img
                src={selectedImg}
                style={{
                  width: "100%",
                  objectFit: "cover",
                  height: "850px",
                }}
                className="renovation_img_main"
                alt="Renovation Section"
              />

              {/* Uncommented section with updated logic */}
              <div className="renovation_flex_container hidden_class mt-4">
                <p
                  onClick={selectedUpdate}
                  className={isSelected === "offices" ? "selectedStyle" : ""}
                  style={{
                    paddingInlineEnd: "25px",
                    cursor: isSelected !== "offices" ? "pointer" : "default",
                  }}
                >
                  OFFICES
                </p>
                <div className="">
                  <p
                    onClick={selectedUpdate}
                    className={
                      isSelected === "restaurants" ? "selectedStyle" : ""
                    }
                    style={{
                      cursor:
                        isSelected !== "restaurants" ? "pointer" : "default",
                    }}
                  >
                    RESTAURANTS
                  </p>
                </div>
              </div>

              {arrayPopups.map((popupItem, popupIndex) => (
                <div
                  key={popupIndex}
                  id={`popup-kitchen-${popupIndex}`}
                  className="kitchen-popups residential-popups"
                >
                  <Popup
                    img={popupItem.image}
                    heading={popupItem.heading}
                    text={popupItem.text}
                    id="kitchen-popup"
                  />
                </div>
              ))}
            </div>
          </Col>
          <Col lg={4}></Col>
          <Col lg={4}></Col>
          <Col lg={4}>
            <div className="renovation_img_paragraph">
              <p style={{ fontFamily: "p22-mackinac-pro, serif" }}>
                {selectedText}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CommercialRenovationSection;
