import React, { useEffect, useRef, useState } from "react";
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
import QLogo from "./assets/QLogo.png";
import Cart from "./assets/Cart.png";
// import Navbar from "./Navbar";

const App = () => {
  const scrollWrapperRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const hideWrapperRef = useRef(null);
  const cententWrapperRef2 = useRef(null);
  const button3Ref = useRef(null);
  const hideWrapperRef2 = useRef(null);
  const imageRefs = useRef([]);

  const [isWide, setIsWide] = useState(window.innerWidth >= 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth >= 1280);
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const scrollWrapper = scrollWrapperRef.current;
    const contentWrapper = contentWrapperRef.current;
    const contentWrapper2 = cententWrapperRef2.current;
    const hideWrapper2 = hideWrapperRef2.current;
    const hideWrapper = hideWrapperRef.current;
    const button3 = button3Ref.current;
    const images = imageRefs.current;

    const handleScroll = () => {
      const scrollLeft = scrollWrapper.scrollLeft;
      const scrollWidth = scrollWrapper.scrollWidth;
      const clientWidth = scrollWrapper.clientWidth;
      console.log(scrollWidth);
      let toBeScrolled;
      let scalePerImage;

      if (window.innerWidth > 1920) {
        toBeScrolled = 2800;
        scalePerImage = 350;
      } else {
        toBeScrolled = 2000;
        scalePerImage = 250;
      }

      if (scrollLeft + clientWidth >= scrollWidth - 50) {
        console.log("End reached");
        images.forEach((image, index) => {
          image.style.transition = "transform 1s ease-in-out";

          if (!isWide) {
            const centerTranslation =
              scrollWrapper.clientWidth / 2 - image.clientWidth / 2;
            if (index < 8) {
              image.style.transform = `translateX(${
                toBeScrolled - centerTranslation - scalePerImage * index
              }px) scale(1.1)`;
            }
            if (index === 8) {
              image.style.transform = `translateX(${-centerTranslation}px) scale(1.1)`;
              image.style.zIndex = "1000";
            }
          } else {
            if (index < 8) {
              image.style.transform = `translateX(${
                toBeScrolled - 200 - scalePerImage * index
              }px) scale(1.1)`;
            }
            if (index === 8) {
              image.style.transform = `translateX(${-200}px) scale(1.1)`;
              image.style.zIndex = "1000";
            }
          }
        });

        contentWrapper.style.display = "none";
        if (isWide) {
          hideWrapper.style.display = "flex";
        }

        if (!isWide) {
          contentWrapper2.style.display = "none";
          hideWrapper2.style.display = "flex";
        }

        if (window.innerWidth < 768) {
          button3.style.display = "flex";
        }
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
    <div className="main-div">
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

      <div className="navbar-first">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="navbar-first-div1"
        >
          <div style={{ height: "5vh" }}>
            <img src={QLogo} style={{ height: "5vh" }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "10px",
                borderLeft: "1px solid rgba(236, 236, 236, 0.93)",
                padding: "0 10px",
              }}
            >
              <div style={{ width: "30px" }}>
                <img src={Cart} />
              </div>
              <div style={{ fontSize: "36px", marginLeft: "5px" }}>0</div>
            </div>
            <div
              style={{
                width: "40px",
                height: "5vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderLeft: "1px solid rgba(236, 236, 236, 0.93)",
                padding: "0 10px",
              }}
            >
              <img src={FirstNav} style={{ width: "28px" }} />
            </div>
          </div>
        </div>
        <div className="navbar-first-div2">
          <div className="navbar-first-div-part1">
            <div>Facial Assessment</div>
            <div className="free-button">FREE</div>
          </div>
          <div className="navbar-first-div-part2">
            <img src={Arrow} className="image-black" />
          </div>
        </div>
      </div>

      <div className="navbar-second">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <img src={FirstNav} alt="" />
          </div>
          <div
            style={{
              height: "7vh",
              marginLeft: "30px",

              borderLeft: "1px solid rgba(239, 239, 239, 0.93)",
            }}
          >
            <img src={QLogo} style={{ height: "7vh" }} />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            fontSize: "20px",
          }}
        >
          <div
            className="navbar-first-div-part1"
            style={{
              marginRight: "30px",
              borderLeft: "1px solid rgba(239, 239, 239, 0.93)",
              height: "8vh",
              padding: "0px 10px",
            }}
          >
            <div>Facial Assessment</div>
            <div className="free-button">FREE</div>
          </div>

          <div
            style={{
              display: "flex",
              height: "8vh",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10px",
              borderLeft: "1px solid rgba(236, 236, 236, 0.93)",
              padding: "0 20px",
            }}
          >
            <div style={{ width: "30px" }}>
              <img src={Cart} />
            </div>
            <div style={{ fontSize: "36px", marginLeft: "5px" }}>0</div>
          </div>
        </div>
      </div>

      <div className="content-wrapper2" ref={cententWrapperRef2}>
        <div className="content2">
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

      <div className="hide-wrapper2" ref={hideWrapperRef2}>
        <h1>
          Document into <br />
          200 pages<i> report of you</i>
        </h1>
        <p>Professional facial assessments and clear facial</p>
        <p>changes visualisation.</p>
        <div className="button2">
          <div className="button-left2">ALL REPORTS</div>
          <div className="button-right2">
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

      <div className="button3" ref={button3Ref}>
        <div className="button-left3">ALL REPORTS</div>
        <div className="button-right3">
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
  );
};

export default App;
