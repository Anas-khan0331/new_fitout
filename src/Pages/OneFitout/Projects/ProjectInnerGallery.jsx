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

  // Inside your component:
  const mainSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
    fade: false, // ensure horizontal slide
    speed: 800, // how fast Slick slides
    cssEase: "cubic-bezier(1, 0, 0.29, 1)", // nice easing
    beforeChange: (oldIndex, newIndex) => {
      // If you track the current slide in state:
      setCurrentSlide(newIndex);
      // We do *no* GSAP here so the slide starts immediately.
    },
    afterChange: (currentIndex) => {
      // Once the slide has finished moving horizontally,
      // do a subtle scale effect on the *new* slide:
      const slides = document.querySelectorAll(".main-slide");
      const newSlide = slides[currentIndex];
      if (!newSlide) return;

      const imgEl = newSlide.querySelector(".main-slide-img");
      if (!imgEl) return;

      gsap.fromTo(
        imgEl,
        { scale: 1, opacity: 1 }, // start slightly bigger & a bit faded
        {
          duration: 0.4,
          scale: 1,
          opacity: 1,
          ease: "power2.out",
        }
      );
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
            ref={(slider) => setNav1(slider)}
            {...mainSliderSettings}
          >
            {images.map((imgSrc, idx) => (
              <div key={idx} className="main-slide">
                <img
                  src={imgSrc}
                  alt={`Slide ${idx}`}
                  className="main-slide-img"
                />
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
