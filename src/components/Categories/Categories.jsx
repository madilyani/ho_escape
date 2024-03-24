import React, { useState } from "react";
import { cancel, chevronTop } from "Base/SVG";

export default function Categories({ modul, title, closePop, mobile }) {
  const [valuesArr, setValuesArr] = useState([...modul.slice(0, 4)]);
  const [loadMore, setLoadMore] = useState(false);
  return (
    <>
      {mobile && (
        <div className="filterRate__head">
          <h6>{title}</h6>
          <span onClick={closePop}>{cancel}</span>
        </div>
      )}
      <div className="filterCats">
        {valuesArr.map((item, index) => {
          return <Cat {...item} key={index} />;
        })}
        {modul?.length > 4 && (
          <div
            className={"filterCats__more " + (loadMore ? "up" : "down")}
            onClick={() => {
              if (loadMore) {
                setLoadMore(false);
                setValuesArr(modul.slice(0, 4));
              } else {
                setLoadMore(true);
                setValuesArr(modul);
              }
            }}
          >
            {!loadMore ? <>Mostra altri {modul.length - 4}</> : "Show less"}
            {chevronTop}
          </div>
        )}
      </div>
      {mobile && (
        <button type="button" className="filterRate__btn" onClick={closePop}>
          Applica
        </button>
      )}
    </>
  );
}
const Cat = (props) => {
  return (
    <div className="filterCat">
      <input type="checkbox" />
      <label htmlFor="" className="filterCat__label">
        <div className="filterCat__text">
          {props.icon ? props.icon : ""}
          {props.title}
        </div>
        <div className="filterCat__num">({props.number})</div>
      </label>
    </div>
  );
};
