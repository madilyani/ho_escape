import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import {
  calendarIcon,
  cancel,
  foodIcon,
  heartEmp,
  locationIcon,
} from "Base/SVG";
import { motion } from "framer-motion";

export default function Card(props) {
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [settings, setSettings] = useState({
    dots: false,
    infinite: false,
    loop: false,
    arrows: false,
    fade: true,
    cssEase: "linear",
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: slider1.current,
    draggable: false,
    responsive: [
      {
        breakpoint: 539,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  const settings2 = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
    loop: false,
    focusOnSelect: true,
    asNavFor: slider2.current,
    responsive: [
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  const settings3 = {
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
    loop: false,
    focusOnSelect: true,
    asNavFor: slider2.current,
    responsive: [
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  const [isLiked, setIsLiked] = useState(false);
  const [popWrap, setPopWrap] = useState(false);
  const [descActive, setDescActive] = useState(false);
  const [activeSlider, setActiveSlider] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 840) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 840) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);
  const closePop = (e) => {
    document.body.classList.remove("active");
    setDescActive(false);
    setActiveSlider(false);
    setPopWrap(false);
    // }
  };
  return (
    <>
      <div className="card">
        <div className="card__inner">
          <div className="card__head">
            {mobile && (
              <div className="cardImage">
                <button
                  type="button"
                  className={isLiked ? "active" : ""}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  {heartEmp}
                </button>
                <img
                  src={process.env.PUBLIC_URL + "/images/cards/1.png"}
                  alt="image"
                />
                <span
                  onClick={() => {
                    setActiveSlider(!activeSlider);
                    setPopWrap(!popWrap);
                  }}
                >
                  Vedi altre 4 foto e 1 video
                </span>
                {activeSlider && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="cardMob"
                  >
                    <div className="cardMob__title">
                      <div
                        className="cardMob__title-text"
                        onClick={() => {
                          setActiveSlider(!activeSlider);
                          setPopWrap(!popWrap);
                        }}
                      >
                        Chiudi
                      </div>
                    </div>
                    <Slider {...settings3} className="cardMob__slider">
                      {props.gallery.map((item, index) => {
                        return (
                          <div className="cardMob__slider-item" key={index}>
                            <div className="cardMob__slider-image">
                              <img
                                src={process.env.PUBLIC_URL + item.image}
                                alt="image"
                              />
                            </div>
                          </div>
                        );
                      })}
                    </Slider>
                  </motion.div>
                )}
              </div>
            )}
            <div className="cardSlider">
              <div className="cardSlider__title">Chiudi</div>
              <Slider
                {...settings}
                asNavFor={nav2}
                ref={(slider1) => setNav1(slider1)}
                className="cardSlider__main"
              >
                {props.gallery.map((item, index) => {
                  return (
                    <div className="cardSlider__main-item" key={index}>
                      <img
                        src={process.env.PUBLIC_URL + item.image}
                        alt="image"
                      />
                    </div>
                  );
                })}
              </Slider>
              <Slider
                className="cardSlider__nav"
                {...settings2}
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
              >
                {props.gallery.map((item, index) => {
                  return (
                    <div className="cardSlider__nav-item" key={index}>
                      <div className="cardSlider__nav-image">
                        <img
                          src={process.env.PUBLIC_URL + item.image}
                          alt="image"
                        />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
            <div className="cardInfo">
              <div className="cardInfo__tags">
                <div className="cardInfo__tag">Luxury</div>
                <div className="cardInfo__tag">Comfort</div>
                <div className="cardInfo__tag">Business Friendly</div>
              </div>
              <h5 className="big cap">AV Isola Verde Hotel Thermal Spa</h5>
              <div className="rate">
                <div className="rate__range">
                  <div
                    className="rate__range-progress"
                    style={{ width: `${props.rating}%` }}
                  ></div>
                </div>
              </div>
              <div className="cardInfo__location">
                {locationIcon}
                <span>{props.location}</span>
              </div>
              <ul>
                {props.list.map((item, index) => {
                  return (
                    <li key={index}>
                      <img
                        src={process.env.PUBLIC_URL + "/images/icons/tick.png"}
                        alt="image"
                      />
                      {item.text}
                    </li>
                  );
                })}
              </ul>
              <div className="cardDesc">
                <div
                  className="cardDesc__btn"
                  onClick={() => {
                    setDescActive(!descActive);
                    setPopWrap(!popWrap);
                  }}
                >
                  Vedi Descrizione dell’Hotel
                </div>
                {descActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0, height: 0 }}
                    className="cardDesc__body"
                  >
                    <span
                      onClick={() => {
                        setDescActive(false);
                        setPopWrap(false);
                      }}
                    >
                      {cancel}
                    </span>
                    Troverai ad accoglierti all'ingresso dell 'Av Club Terme
                    Colella un pergolato ricco di piante e fiori mediterranei.
                    La struttura, simile per estetica alle ville ischitane, e'
                    un luogo familiare ed ospitale.
                  </motion.div>
                )}
              </div>
            </div>
          </div>
          <div className="cardCats">
            {props.categories.map((item, index) => {
              return (
                <div className="cardCat" key={index}>
                  {item.icon}
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
          <ul className="mobileList">
            {props.list.map((item, index) => {
              return (
                <li key={index}>
                  <img src={process.env.PUBLIC_URL + item.icon} alt="image" />
                  {item.text}
                </li>
              );
            })}
          </ul>
          <div className="cardMore">
            <div className="cardMore__item">
              {calendarIcon}
              Dal: <strong> {props.date_start} </strong> Al:{" "}
              <strong> {props.date_end}</strong>
            </div>{" "}
            <div className="cardMore__item">
              {foodIcon}
              {props.food}
            </div>
          </div>
          <div className="card__foot">
            <div className="card__foot-info">
              <div className="cardPrice">
                <span>{props.price}€</span> per <strong>7</strong> notti
              </div>
              <div className="cardDis">con viaggio +150€</div>
            </div>
            <div className="card__foot-btns">
              <button type="button" className="button reserve">
                Vedi Dettagli
              </button>
              <div className="card__foot-note">3 stanze rimaste</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={"popWrap " + (popWrap ? "active" : "")}
        onClick={closePop}
      ></div>
    </>
  );
}
