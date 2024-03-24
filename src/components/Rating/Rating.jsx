import React from "react";
import { cancel, starIcon } from "Base/SVG";

export default function Rating({ mobile, title, closePop }) {
  return (
    <>
      {mobile && (
        <div className="filterRate__head">
          <h6>{title}</h6>
          <span onClick={closePop}>{cancel}</span>
        </div>
      )}
      <div className="filterRate">
        <div className="filterRate__item">
          <input type="checkbox" />
          <label htmlFor="">{starIcon} 1</label>
        </div>
        <div className="filterRate__item">
          <input type="checkbox" />
          <label htmlFor="">{starIcon} 2</label>
        </div>
        <div className="filterRate__item">
          <input type="checkbox" />
          <label htmlFor="">{starIcon} 3</label>
        </div>
        <div className="filterRate__item">
          <input type="checkbox" />
          <label htmlFor="">{starIcon} 4</label>
        </div>
        <div className="filterRate__item">
          <input type="checkbox" />
          <label htmlFor="">{starIcon} 5</label>
        </div>
      </div>
      {mobile && (
        <button type="button" className="filterRate__btn" onClick={closePop}>
          Applica
        </button>
      )}
    </>
  );
}
