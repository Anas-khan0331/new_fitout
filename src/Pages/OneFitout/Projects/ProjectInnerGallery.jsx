import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Slider from "react-slick";
import "./css/ProjectInnerGallery.css";

// Make sure to import these if not globally imported
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// Keep these components for thumbnail navigation
const GalleryPrevButton = ({ onClick }) => (
  <button className="text-nav-btn gallery-prev" onClick={onClick}>
    <MdChevronLeft style={{ color: "#0B1215" }} />
  </button>
);

const GalleryNextButton = ({ onClick }) => (
  <button className="text-nav-btn gallery-next" onClick={onClick}>
    <MdChevronRight style={{ color: "#0B1215" }} />
  </button>
);

const ProjectInnerGallery = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { community } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  // Fetch project data
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch("/project.json");
        if (!response.ok) throw new Error("Failed to fetch project data");
        const data = await response.json();

        // Find the matching project
        const project = data.allProjects.find((p) =>
          p.community
            .toLowerCase()
            .replace(/, /g, "-")
            .replace(/ /g, "-")
            .includes(community)
        );

        setProjectData(project);
      } catch (error) {
        console.error("Error loading project:", error);
      }
    };

    fetchProject();
  }, [community]);

  const originPosition = location.state?.originPosition || {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  };
  // Add state to control animation
  const [isExiting, setIsExiting] = useState(false);
  // Your logo path
  const logoPath = "/assets/logo-white-red.png";

  const projectTitle = community.replace(/-/g, " "); // Convert URL slug to title

  // Use the images from projectData instead of the hardcoded projectImages
  const images = projectData?.images || [];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const mainSliderRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState("default");
  const [insideMainSlider, setInsideMainSlider] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Add resize listener
  useEffect(() => {
    const handleResize = () => {
      setViewWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Add console logs to debug initialization
  useEffect(() => {
    console.log("Slider mounted, nav1:", nav1);
    console.log("Images:", images);

    if (nav1 && images.length > 0 && !isInitialized) {
      console.log("Initializing slider...");

      // Force immediate update
      nav1.slickGoTo(0, true);

      // Additional initialization after a short delay
      setTimeout(() => {
        if (nav1) {
          nav1.slickGoTo(0, true);
          nav1.slickSetOption("initialSlide", 0, true);
          setIsInitialized(true);
          console.log("Slider initialization complete");
        }
      }, 300);
    }
  }, [nav1, images, isInitialized]);

  // Add window resize handler
  useEffect(() => {
    const handleResize = () => {
      if (nav1) {
        nav1.slickGoTo(currentSlide, true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [nav1, currentSlide]);

  // Update mainSliderSettings
  const mainSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
    fade: false,
    speed: viewWidth <= 992 ? 0 : 800,
    cssEase: "cubic-bezier(1, 0, 0.29, 1)",
    lazyLoad: null, // Disable lazy loading
    initialSlide: 0,
    adaptiveHeight: true,
    swipe: true,
    touchThreshold: 10,
    waitForAnimate: false,
    centerMode: true, // Add center mode
    centerPadding: "0px",
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  const gallerySettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    prevArrow: <GalleryPrevButton />,
    nextArrow: <GalleryNextButton />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  const handleThumbClick = (index) => {
    if (nav1) {
      nav1.slickGoTo(index);
    }
  };

  const handleClose = () => {
    setIsExiting(true);

    // Exit animation with shorter duration
    gsap.to(containerRef.current, {
      yPercent: 100,
      duration: 1, // Reduced from 1.6 to 1 second
      ease: "power3.inOut",
      onComplete: () => {
        navigate(-1);
      },
    });
  };

  // Calculate the transform origin based on click position
  const getTransformOrigin = () => {
    if (!originPosition) return "center center";
    return `${originPosition.x}px ${originPosition.y}px`;
  };

  useEffect(() => {
    const updateCursor = (e) => {
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${e.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX } = e;
    const windowWidth = window.innerWidth;

    // Don't show left arrow on first slide
    // Don't show right arrow on last slide
    if (clientX < windowWidth / 2) {
      setCursorPosition(currentSlide === 0 ? "default" : "left");
    } else {
      setCursorPosition(
        currentSlide === images.length - 1 ? "default" : "right"
      );
    }
  };

  const handleSlideClick = () => {
    // Only allow navigation if not at the edges
    if (cursorPosition === "left" && nav1 && currentSlide > 0) {
      nav1.slickPrev();
    } else if (
      cursorPosition === "right" &&
      nav1 &&
      currentSlide < images.length - 1
    ) {
      nav1.slickNext();
    }
  };

  const containerRef = useRef(null);

  useEffect(() => {
    // Set initial state immediately when component mounts
    gsap.set(containerRef.current, {
      yPercent: 100,
      position: "fixed",
      visibility: "visible", // Ensure visibility before animation
      opacity: 1, // Start fully opaque
    });

    // Start animation immediately in the next frame
    requestAnimationFrame(() => {
      gsap.to(containerRef.current, {
        yPercent: 0,
        duration: 1.8,
        ease: "power3.inOut",
        clearProps: "transform",
        onComplete: () => {
          // Clean up any lingering styles that might cause jank
          gsap.set(containerRef.current, {
            clearProps: "all",
          });
        },
      });
    });

    // Prevent body scroll
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // useEffect(() => {
  //   const checkSliderState = () => {
  //     if (nav1) {
  //       // Force the slider to start at slide index 1 (second slide)
  //       nav1.slickGoTo(1);

  //       // Or directly set the transform
  //       const track = document.querySelector(".slick-track");
  //       if (track) {
  //         track.style.transform = "translate3d(-340px, 0px, 0px)";
  //       }
  //     }
  //   };

  //   checkSliderState();
  //   // Check again after a short delay
  //   setTimeout(checkSliderState, 500);
  // }, [nav1, currentSlide]);

  // useEffect(() => {
  //   const checkSliderState = () => {
  //     if (nav1) {
  //       console.log("Current slide:", currentSlide);
  //       console.log("Slider state:", nav1.innerSlider.state);
  //       console.log(
  //         "Track transform:",
  //         document.querySelector(".slick-track")?.style.transform
  //       );
  //     }
  //   };

  //   checkSliderState();
  //   // Check again after a short delay
  //   setTimeout(checkSliderState, 500);
  // }, [nav1, currentSlide]);

  // asdasdadadasd

  useEffect(() => {
    const initializeSlider = () => {
      if (!nav1 || !nav1.innerSlider) return;

      // Only run this once when the slider first initializes
      if (
        nav1.innerSlider.state.initialized &&
        !nav1.innerSlider.state.initialPositionSet
      ) {
        // Set the initial position
        nav1.slickGoTo(1); // Go to second slide (index 1)

        // Mark that we've set the initial position
        nav1.innerSlider.state.initialPositionSet = true;

        // Debug logs
        console.log("Initialized slider at position 1");
        console.log(
          "Current transform:",
          document.querySelector(".slick-track")?.style.transform
        );
      }
    };

    // Try initialization immediately
    initializeSlider();
    // Set up an interval to keep trying until successful
    const initInterval = setInterval(initializeSlider, 100);

    return () => clearInterval(initInterval);
  }, [nav1]);
  return (
    <div
      ref={containerRef}
      className="gallery-page-wrapper"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "white",
        zIndex: 1000,
        overflowY: "auto",
        width: "100%",
        height: "100%",
        willChange: "transform",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        visibility: "hidden", // Hide initially to prevent flash
      }}
    >
      {/* HEADER */}
      <header className="header-bar">
        <div className="header-left">
          <img src={logoPath} alt="Logo" className="logo-img" />
        </div>
        <div className="header-center">
          <h2 style={{ textTransform: "capitalize" }}>{projectTitle}</h2>
        </div>
        <div className="header-right">
          <button className="close-btn" onClick={handleClose}>
            <IoClose size={30} style={{ color: "grey" }} />
          </button>
        </div>
      </header>
      <div
        className={`main-slider-container ${
          insideMainSlider && cursorPosition !== "default"
            ? `cursor-${cursorPosition}`
            : ""
        }`}
        onMouseEnter={() => setInsideMainSlider(true)}
        onMouseLeave={() => {
          setInsideMainSlider(false);
          setCursorPosition("default");
        }}
        onMouseMove={handleMouseMove}
        onClick={handleSlideClick}
        ref={mainSliderRef}
      >
        <div className="main-slider-wrapper">
          <Slider
            asNavFor={nav2}
            ref={(slider) => {
              setNav1(slider);
              console.log("Slider ref set:", slider); // Debug log
            }}
            {...mainSliderSettings}
          >
            {images.map((imgSrc, idx) => (
              <div key={idx} className="main-slide">
                <div className="slide-image-container">
                  <img
                    src={imgSrc}
                    alt={`Slide ${idx}`}
                    className="main-slide-img"
                    loading="eager"
                    onLoad={() => console.log(`Image ${idx} loaded`)} // Debug log
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Text below the main image */}
      <div className="below-main-info">
        <div className="info-left">
          <p>RESIDENT</p>
        </div>
        <div className="info-right">
          <p>
            {currentSlide + 1} / {images.length} Images
          </p>
        </div>
      </div>
      {/* GALLERY SLIDER (FULL WIDTH) */}
      <div className="">
        <div className="gallery-slider-container">
          <Slider
            asNavFor={nav1}
            ref={(slider) => setNav2(slider)}
            {...gallerySettings}
          >
            {images.map((imgSrc, idx) => (
              <div
                key={idx}
                className={`gallery-thumb-slide ${
                  currentSlide === idx ? "selected" : ""
                }`}
                onClick={() => handleThumbClick(idx)}
              >
                <img
                  src={imgSrc}
                  alt={`Thumbnail ${idx}`}
                  className="gallery-thumb-img"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProjectInnerGallery;
