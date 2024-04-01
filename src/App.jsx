import React, { useEffect, useRef } from "react";
import "./App.css";
import FirstImage from "./assets/FirstImage.png";
import SecondImage from "./assets/SecondImage.png";
import ThirdImage from "./assets/ThirdImage.png";
import FourthImage from "./assets/FourthImage.png";
import FifthImage from "./assets/FifthImage.png";
import SixthImage from "./assets/SixthImage.png";
import SeventhImage from "./assets/SeventhImage.png";
import EighthImage from "./assets/EighthImage.png";
import FinalImage from "./assets/FinalImage.png";
import Line from "./assets/Line.png";
import Arrow from "./assets/arrow.png";
import FirstNav from "./assets/FirstNav.png";
import SecondNav from "./assets/SecondNav.png";
// import Navbar from "./Navbar";

const App = () => {
  const scrollWrapperRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const hideWrapperRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const scrollWrapper = scrollWrapperRef.current;
    const contentWrapper = contentWrapperRef.current;
    const hideWrapper = hideWrapperRef.current;
    const images = imageRefs.current;

    const handleScroll = () => {
      const scrollLeft = scrollWrapper.scrollLeft;
      const scrollWidth = scrollWrapper.scrollWidth;
      const clientWidth = scrollWrapper.clientWidth;
      console.log(scrollWidth);
      if (scrollLeft + clientWidth >= scrollWidth - 50) {
        console.log("End reached");
        images.forEach((image, index) => {
          image.style.transition = "transform 1s ease-in-out";
          if (index < 8) {
            image.style.transform = `translateX(${
              1900 - 250 * index
            }px) scale(1.1)`;
          }
          if (index === 8) {
            image.style.transform = `translateX(${-100}px) scale(1.1)`;
            image.style.zIndex = "1000";
          }
        });

        contentWrapper.style.display = "none";
        hideWrapper.style.display = "flex";
      }
    };

    if (scrollWrapper) {
      scrollWrapper.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollWrapper) {
        scrollWrapper.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="navbar">
        <div>
          <img src={FirstNav} alt="" className="img2" />
        </div>
        <div style={{ fontWeight: "bold", fontSize: "16px" }}>QOVES</div>
        <div>
          <img src={SecondNav} alt="" className="img1" />
        </div>
        <div>Free Facial assessment</div>
        <div>
          <img src={Arrow} alt="" className="image-black" />
        </div>
      </div>

      <div className="wrapper" ref={scrollWrapperRef}>
        <div className="content-wrapper" ref={contentWrapperRef}>
          <div className="content">
            <h1
              style={{
                fontFamily: "PP Neue Montreal",
                fontWeight: "bold",
                fontSize: "60px",
                height: "45px",
              }}
            >
              The most
            </h1>
            <h1
              style={{
                fontFamily: "PP Neue Montreal",
                fontWeight: "bold",
                fontSize: "60px",
                height: "45px",
              }}
            >
              comprehensive
            </h1>
            <h1
              style={{
                fontFamily: "PP Neue Montreal",
                fontStyle: "italic",
                fontSize: "40px",
              }}
            >
              analysis of your face
            </h1>
          </div>
        </div>
        <div className="img-wrapper">
          {[
            FirstImage,
            SecondImage,
            ThirdImage,
            FourthImage,
            FifthImage,
            SixthImage,
            SeventhImage,
            EighthImage,
            FinalImage,
          ].map((src, index) => (
            <img
              key={src}
              className={`img img${index + 1}`}
              src={src}
              alt=""
              ref={(el) => (imageRefs.current[index] = el)}
            />
          ))}
          <div className="hide-wrapper" ref={hideWrapperRef}>
            <h1>
              Document into <br />
              200 pages<i> report of you</i>
            </h1>
            <p>Professional facial assessments and clear facial</p>
            <p>changes visualisation.</p>
            <div className="button">
              <div className="button-left">ALL REPORTS</div>
              <div className="button-right">
                <div>
                  <img
                    src={Line}
                    alt=""
                    className="buttonimg1"
                    style={{
                      width: "3px",
                      height: "30px",
                      marginRight: "6px",
                      color: "white",
                    }}
                  />
                </div>
                <div>
                  <img
                    src={Arrow}
                    alt=""
                    className="buttonimg2"
                    style={{ width: "24px", height: "20px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
