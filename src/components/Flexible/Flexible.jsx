import React from "react";
import { calOne, calendarIcon } from "Base/SVG";
import Slider from "react-slick";
const months = [
  {
    id: "1",
    month: "January",
  },
  {
    id: "2",
    month: "February",
  },
  {
    id: "3",
    month: "March",
  },
  {
    id: "4",
    month: "April",
  },
  {
    id: "5",
    month: "May",
  },
  {
    id: "6",
    month: "June",
  },
  {
    id: "7",
    month: "July",
  },
  {
    id: "8",
    month: "August",
  },
];
export default function Flexible() {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    dots: false,
    loop: false,
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
  return (
    <>
      <div className="flexible">
        <h5>Choose your stay</h5>
        <div className="flexible__weeks">
          <div className="flexible__week">
            <input type="checkbox" name="weekend" id="weekend" />
            <label htmlFor="weekend">{calendarIcon} Weekend</label>
          </div>
          <div className="flexible__week">
            <input type="checkbox" name="week" id="week" />
            <label htmlFor="week">{calendarIcon} Week</label>
          </div>
          <div className="flexible__week">
            <input type="checkbox" name="month" id="month" />
            <label htmlFor="month">{calendarIcon} Month</label>
          </div>
        </div>
        <h5>Go anytime</h5>
        <div className="flexible__months">
          <Slider className="mySwiper" {...settings}>
            {months.map((item, index) => {
              return (
                <div className="flexible__month" key={index}>
                  <input type="checkbox" />
                  <label>
                    {calOne}
                    {item.month}
                  </label>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
