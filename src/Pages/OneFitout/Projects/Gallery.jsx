import React, { useState, useEffect, useRef } from "react";
import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  Navigate,
} from "react-router-dom";
import useFetch from "../../../Components/useFetch";
import Popup from "../Kitchens/Popup";
import "./css/Gallery.css";

export default function Gallery() {
  const [mounted, setMounted] = useState(false);
  let { community, id } = useParams();
  const { pathname } = useLocation();
  const [content, loading, error] = useFetch(
    `/project${Number(id)}gallery.json`
  );
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [popups, setPopups] = useState([]);
  const [selected, setSelected] = useState({});
  const [currentimg, setCurrentImg] = useState(1);

  const [fclicker, setFClicker] = useState(true);
  const [bclicker, setBClicker] = useState(true);

  const scroller = useRef(null);
  // const [width, setWidth]= useState(scroller.current?.offsetWidth)

  // useEffect(()=>{
  //     if(scroller.current != null){
  //         setWidth(scroller.current.offsetWidth)
  //     }
  // },[scroller.current])

  // useEffect(()=>{

  //     let compared = 0
  //     const items = document.querySelectorAll('.images-thumb')
  //     const selected = document.querySelector('.thumb-selected')
  //     items.forEach((i)=>{
  //         compared+=i.scrollWidth
  //         if(compared > width){
  //             i.style.opacity='0.4'

  //         }else{
  //             i.style.opacity=''

  //         }

  //     })

  //     if (selected) {
  //         setWidth(scroller.current.offsetWidth - scroller.current.scrollLeft);
  //     }

  // },[images, fclicker])

  useEffect(() => {
    setMounted(true);
    scroller.current.scrollLeft = 0;
    setCurrentImg(1);
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTitle(() => {
      let comm = community.replace(/-/g, " ");
      return comm;
    });
    if (!error) setImages(content);
  }, [content]);

  useEffect(() => {
    if (images.length > 0) {
      setSelected(images[currentimg - 1]);
    }
  }, [images, currentimg]);

  const nextButton = () => {
    if (currentimg != images.length) setCurrentImg((prev) => prev + 1);
  };

  const prevButton = () => {
    if (currentimg != 1) setCurrentImg((prev) => prev - 1);
  };

  const goBack = (pathname) => {
    let pathStr = String(pathname);
    let comma = pathStr.lastIndexOf("/");
    return pathStr.slice(0, comma);
  };

  useEffect(() => {
    if (content.length > 0 && content[currentimg - 1]?.popup)
      setPopups(content[currentimg - 1].popup);
  }, [selected, content]);

  const clickFButton = () => {
    setFClicker((prev) => !prev);
  };

  const clickBButton = () => {
    setBClicker((prev) => !prev);
  };

  useEffect(() => {
    const el = document.querySelector(".thumb-selected");
    const scrollEl = document.getElementById("gallery-thumbnail-view");
    const nextEl = el?.nextElementSibling;
    const nextElWidth = nextEl?.getBoundingClientRect().width;
    const elWidth = el?.getBoundingClientRect().width;
    let difference = nextElWidth - elWidth;
    if (mounted) {
      scrollEl.scrollBy({
        left: elWidth + (difference > 0 ? difference : 0),
        behavior: "smooth",
      });
      nextButton();
    }
  }, [fclicker]);

  useEffect(() => {
    const el = document.querySelector(".thumb-selected");
    const scrollEl = document.getElementById("gallery-thumbnail-view");
    const prevEl = el?.previousElementSibling;
    const prevElWidth = prevEl?.getBoundingClientRect().width;
    const elWidth = el?.getBoundingClientRect().width;
    let difference = prevElWidth - elWidth;
    if (mounted) {
      scrollEl.scrollBy({
        left: -elWidth + (difference > 0 ? difference : 0),
        behavior: "smooth",
      });
      prevButton();
    }
  }, [bclicker]);

  return (
    <>
      <div id="gallery-outer">
        <div id="gallery-inner">
          <div id="gallery-header">
            <img id="gallery-logo" src="/assets/logo-white-red.png" />
            <div id="gallery-title">{title}</div>
            <Link to={goBack(pathname)}>
              <img id="gallery-close" src="/assets/filter-close.png" />
            </Link>
          </div>
          <div id="gallery-main">
            <button
              id="gallery-prev-b"
              onClick={prevButton}
              className={currentimg === 1 ? "hidden" : ""}
            >
              Previous
            </button>
            <div id="selected-image-div">
              <img id="g-selected-i" src={selected?.uri} />
              {popups.map((popup, index) => {
                return (
                  <div
                    key={index}
                    className="g-popups"
                    id={"g-popup" + index}
                    style={{
                      top: `${popup.x ? popup.x : ""}% `,
                      left: `${popup.y ? popup.y : ""}%`,
                    }}
                  >
                    <Popup
                      id="gallery-popups"
                      img={popup.image}
                      heading={popup.title}
                      text={popup.text}
                    />
                  </div>
                );
              })}
            </div>
            <button
              id="gallery-next-b"
              onClick={nextButton}
              className={currentimg === images.length ? "hidden" : ""}
            >
              Next
            </button>
          </div>
          <div id="gallery-details">
            <span id="gd-one">
              <span id="selected-title">{selected?.title}</span>
              <span id="selected-area">{selected?.area}</span>
            </span>
            <span id="selected-img-count">
              {currentimg + " / " + images.length} images
            </span>
          </div>
          <div id="gallery-bottom">
            <div id="gallery-thumbnail-view" ref={scroller}>
              {images.map((image, index) => {
                return (
                  <div
                    key={index}
                    id={"image-thumb" + index}
                    className={
                      index === currentimg - 1
                        ? "images-thumb thumb-selected"
                        : "images-thumb"
                    }
                  >
                    <img src={image.uri} />
                  </div>
                );
              })}
              <div id="g-thumbnail-button-f-div">
                <button id="gt-button-f" onClick={clickFButton}>
                  <img src="/assets/right-pointer.png" />
                </button>
              </div>
              <div
                id="g-thumbnail-button-b-div"
                className={currentimg === 1 ? "hidden" : ""}
              >
                <button id="gt-button-b" onClick={clickBButton}>
                  <img src="/assets/left-pointer.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
