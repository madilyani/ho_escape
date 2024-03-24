import React, { useEffect, useState } from "react";
import Note from "components/Note";
import Filter from "components/Filter";
import { arrowLong, calendarIcon, locationIcon, starIcon } from "Base/SVG";
import { Link } from "react-router-dom";
import Search from "components/Search";
import SearchMobile from "components/SearchMobile";
import Slider from "react-slick";
const mapCardList = [
  {
    id: "1",
    image: "/images/cards/4.png",
    date_start: "23/04",
    date_end: "29/04",
    name: "Hotel Garden",
    location: "Trentino, Marilleva 900",
    price: "2.250€",
    recommended: false,
    slogan:
      "Driving remarkable change entails hiring, celebrating, and nurturing outstanding individuals from diverse backgrounds.",
    link: "/careers",
    btn: "Join Us",
  },
  {
    id: "2",
    image: "/images/cards/4.png",
    date_start: "23/04",
    date_end: "29/04",
    name: "Hotel Garden",
    location: "Trentino, Marilleva 900",
    price: "2.250€",
    recommended: true,
    slogan:
      "Driving remarkable change entails hiring, celebrating, and nurturing outstanding individuals from diverse backgrounds.",
    link: "/careers",
    btn: "Join Us",
  },
  {
    id: "3",
    image: "/images/cards/4.png",
    date_start: "23/04",
    date_end: "29/04",
    name: "Hotel Garden",
    location: "Trentino, Marilleva 900",
    price: "2.250€",
    recommended: false,
    slogan:
      "Driving remarkable change entails hiring, celebrating, and nurturing outstanding individuals from diverse backgrounds.",
    link: "/careers",
    btn: "Join Us",
  },
];
export default function ResultMap() {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
    loop: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1341,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
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
  return (
    <>
      {mobile ? <SearchMobile /> : <Search />}

      <div className="result noPt">
        <div className="auto__container">
          <div className="result__inner">
            <div className="resultSide">
              <Filter mapPlace={true} />
            </div>
            <div className="resultMap">
              <div className="resultMap__bg">
                <img src="/images/map.png" alt="" />
              </div>
              <div className="resultMap__inner">
                <Slider {...settings} className="resultMap__inner-row">
                  {mapCardList.map((item, index) => {
                    return <MapCard {...item} key={index} />;
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const MapCard = (props) => {
  return (
    <div className="mapCard">
      {props.recommended ? (
        <div className="mapCard__tip">Raccomandati per Te</div>
      ) : (
        ""
      )}

      <div className="mapCard__image">
        <div className="mapCard__image-inner">
          <img src={props.image} alt="" />
        </div>
      </div>
      <div className="mapCard__content">
        <div className="mapCard__date">
          {calendarIcon}
          dal <strong>{props.date_start}</strong> al{" "}
          <strong>{props.date_end}</strong>
        </div>
        <h6>{props.name}</h6>
        <div className="mapCard__location">
          {locationIcon}
          {props.location}
        </div>
        <div className="mapCard__stars">
          {starIcon}
          {starIcon}
        </div>
        <div className="mapCard__foot">
          <h5>{props.price}</h5>
          <a href="/" className="mapCard__link">
            {arrowLong}
          </a>
        </div>
      </div>
    </div>
  );
};
