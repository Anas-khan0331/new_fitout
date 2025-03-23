// import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import residance_sectionImg from "../../../../../public/assets/residential-joinery.png";
// const ResidanceServicesSection = () => {
//   const [isSelected, setIsSelected] = useState('join')

//   useEffect(()=>{
//     const Selected = document.querySelector(".selectedservice")
//     if (Selected){
//       Selected.nextElementSibling.style.height='100%'
//       Selected.nextElementSibling.style.paddingBottom='30px'
//     }

//   },[selectUpdate])

//   useEffect(()=>{
//     const notSelected = document.querySelectorAll(".notselected")
//     notSelected.forEach((el)=>{
//       el.nextElementSibling.style.height='0'
//       el.nextElementSibling.style.paddingBottom='0'
//     })
//   },[selectUpdate])

//   function selectUpdate(event){
//     const saved = ['join','turnkey','2d','tiling','special','full','pools']
//     const text = event.target.innerText
//     saved.forEach((item)=>{
//       if(String(text).toLowerCase().includes(item)==true){
//         setIsSelected(item)
//       }
//     })
//   }

//   return (
//     <div className="ResidanceServicesSection_container">
//       <Container>
//         <Row>
//           <Col lg={12}>
//             <div className="residance_section_heading">
//               <p>OTHER SERVICES</p>
//             </div>
//           </Col>
//         </Row>
//         <Row className="reverse-row-mobile">
//           <Col lg={5}>
//             <div className="">
//               <div className="residnential-accordian">
//                 <h2 onClick={selectUpdate} className={isSelected=='join'?'selectedservice ':'notselected'} style={{ fontFamily: "p22-mackinac-pro, serif" }}>
//                   Joinery Works
//                 </h2>
//                 <p className="listpara" style={{ fontFamily: "p22-mackinac-pro, serif" }}>
//                   Custom-crafted joinery solutions designed to elevate your home's functionality and style.
//                 </p>
//               </div>
//               <div className="residance_section_data_ul">
//                 <ul>
//                   <li onClick={selectUpdate} className={isSelected=='turnkey'?'selectedservice ':'notselected'} >
//                     Turnkey Interior Contracting
//                   </li>
//                   <p className="listpara" style={{ fontFamily: "p22-mackinac-pro, serif"}} >
//                     Comprehensive interior solutions that take your project from vision to reality, hassle-free.
//                   </p>

//                   <li onClick={selectUpdate} className={isSelected=='2d'?'selectedservice':'notselected'} >
//                     2D & 3D Design
//                   </li>
//                   <p className="listpara" style={{ fontFamily: "p22-mackinac-pro, serif"}} >
//                     Bring your ideas to life with our expert 2D and 3D design services for a clear vision of your space.
//                   </p>
//                   <li onClick={selectUpdate} className={isSelected=='tiling'?'selectedservice':'notselected'}>
//                     Tiling
//                   </li>
//                   <p className="listpara" style={{ fontFamily: "p22-mackinac-pro, serif"}} >
//                      Precision tiling services that add durability and elegance to your floors and walls.
//                   </p>
//                   <li onClick={selectUpdate} className={isSelected=='special'?'selectedservice':'notselected'}>
//                     Special Painting
//                   </li>
//                   <p className="listpara" style={{ fontFamily: "p22-mackinac-pro, serif"}} >
//                     Unique painting finishes and techniques to add character and sophistication to your interiors.
//                   </p>
//                   <li onClick={selectUpdate} className={isSelected=='full'?'selectedservice':'notselected'}>
//                     Full MEP
//                   </li>
//                   <p className="listpara" style={{ fontFamily: "p22-mackinac-pro, serif"}} >
//                     Complete mechanical, electrical, and plumbing services for a safe and efficient home.
//                   </p>
//                   {/* <li onClick={selectUpdate} className={isSelected=='homeext'?'selectedservice':'notselected'}>
//                     Home Extensions
//                   </li>
//                   <p className="listpara" style={{ fontFamily: "p22-mackinac-pro, serif"}} >
//                     Seamlessly expand your living space with expertly crafted home extensions.
//                   </p> */}
//                    <li onClick={selectUpdate} className={isSelected=='pools'?'selectedservice':'notselected'} >
//                     Pools
//                   </li>
//                   <p className="listpara" style={{ fontFamily: "p22-mackinac-pro, serif"}} >
//                     The kitchen is the heart of the home and when you take a look
//                     at our kitchen projects, you can see their appeal. We can help
//                     you realise your dreams.
//                   </p>
//                 </ul>
//               </div>
//             </div>
//           </Col>
//           <Col lg={2}></Col>
//           <Col lg={5}>
//             <div className="residance_section_data_img_container">
//               <img
//                 src={residance_sectionImg}
//                 className="residance_section_data_img"
//                 alt=""
//               />
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default ResidanceServicesSection;

import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import blog1 from "../../../../../public/assets/2d_design.png";
import blog4 from "../../../../../public/assets/full_mep.png";
import residance_sectionImg from "../../../../../public/assets/joinery_img.png";
import blog3 from "../../../../../public/assets/painting.png";
import newImg from "../../../../../public/assets/novelia13.jpg";
import blog2 from "../../../../../public/assets/tiling.png";
import aboutClient from "../../../../../public/assets/turnkey.png";

const ResidanceServicesSection = () => {
  const [isSelected, setIsSelected] = useState("join");
  const serviceImages = {
    join: residance_sectionImg,
    turnkey: aboutClient,
    "2d": blog1,
    tiling: blog2,
    special: blog3,
    full: blog4,
    home: newImg,
  };

  useEffect(() => {
    const Selected = document.querySelector(".selectedservice");
    if (Selected) {
      Selected.nextElementSibling.style.height = "100%";
      Selected.nextElementSibling.style.paddingBottom = "30px";
    }
  }, [selectUpdate]);

  useEffect(() => {
    const notSelected = document.querySelectorAll(".notselected");
    notSelected.forEach((el) => {
      el.nextElementSibling.style.height = "0";
      el.nextElementSibling.style.paddingBottom = "0";
    });
  }, [selectUpdate]);

  function selectUpdate(event) {
    const saved = [
      "join",
      "turnkey",
      "2d",
      "tiling",
      "special",
      "full",
      "home",
    ];
    const text = event.target.innerText;
    saved.forEach((item) => {
      if (String(text).toLowerCase().includes(item) == true) {
        setIsSelected(item);
      }
    });
  }

  return (
    <div className="ResidanceServicesSection_container">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="residance_section_heading">
              <p>OTHER SERVICES</p>
            </div>
          </Col>
        </Row>
        <Row className="reverse-row-mobile">
          <Col lg={5}>
            <div className="">
              <div className="residnential-accordian">
                <h2
                  onClick={selectUpdate}
                  className={
                    isSelected === "join" ? "selectedservice" : "notselected"
                  }
                  style={{ fontFamily: "p22-mackinac-pro, serif" }}
                >
                  Joinery Works
                </h2>
                <p
                  className="listpara"
                  style={{ fontFamily: "p22-mackinac-pro, serif" }}
                >
                  Custom-crafted joinery solutions designed to elevate your
                  home's functionality and style.
                </p>
              </div>
              <div className="residance_section_data_ul">
                <ul>
                  <li
                    onClick={selectUpdate}
                    className={
                      isSelected === "turnkey"
                        ? "selectedservice"
                        : "notselected"
                    }
                  >
                    Turnkey Interior Contracting
                  </li>
                  <p className="listpara">
                    Comprehensive interior solutions that take your project from
                    vision to reality, hassle-free.
                  </p>

                  <li
                    onClick={selectUpdate}
                    className={
                      isSelected === "2d" ? "selectedservice" : "notselected"
                    }
                  >
                    2D & 3D Design
                  </li>
                  <p className="listpara">
                    Bring your ideas to life with our expert 2D and 3D design
                    services for a clear vision of your space.
                  </p>

                  <li
                    onClick={selectUpdate}
                    className={
                      isSelected === "tiling"
                        ? "selectedservice"
                        : "notselected"
                    }
                  >
                    Tiling
                  </li>
                  <p className="listpara">
                    Precision tiling services that add durability and elegance
                    to your floors and walls.
                  </p>

                  <li
                    onClick={selectUpdate}
                    className={
                      isSelected === "special"
                        ? "selectedservice"
                        : "notselected"
                    }
                  >
                    Special Painting
                  </li>
                  <p className="listpara">
                    Unique painting finishes and techniques to add character and
                    sophistication to your interiors.
                  </p>

                  <li
                    onClick={selectUpdate}
                    className={
                      isSelected === "full" ? "selectedservice" : "notselected"
                    }
                  >
                    Full MEP
                  </li>
                  <p className="listpara">
                    Complete mechanical, electrical, and plumbing services for a
                    safe and efficient home.
                  </p>

                  <li
                    onClick={selectUpdate}
                    className={
                      isSelected === "home" ? "selectedservice" : "notselected"
                    }
                  >
                    Home Extensions{" "}
                  </li>
                  <p className="listpara">
                    Seamlessly expand your living space with expertly crafted
                    home extensions.
                  </p>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={2}></Col>
          <Col lg={5}>
            <div className="residance_section_data_img_container">
              {/* Change Image Dynamically */}
              <img
                src={serviceImages[isSelected]}
                className="residance_section_data_img"
                alt="Service"
                style={{ objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResidanceServicesSection;
