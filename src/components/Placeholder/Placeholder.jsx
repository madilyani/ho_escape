import React from "react";

export default function Placeholder() {
  return (
    <div className="card">
      <div className="card__inner">
        <div className="card__head">
          <div className="cardImage placeholder"></div>
          <div className="cardSlider placeholder"></div>
          <div className="cardInfo">
            <div className="cardInfo__tags placeholder"></div>
            <h5 className="big cap placeholder placeholder-h5"></h5>
            <div className="rate placeholder"></div>
            <div className="cardInfo__location placeholder"></div>
            <ul className="placeholder-ul">
              {[0, 1, 2].map((item, index) => {
                return <li className="placeholder" key={index}></li>;
              })}
            </ul>
          </div>
        </div>
        <div className="cardCats">
          {[0, 1, 2, 3].map((item, index) => {
            return <div className="cardCat placeholder" key={index}></div>;
          })}
        </div>
        <div className="cardMore">
          <div className="cardMore__item placeholder"></div>{" "}
          <div className="cardMore__item placeholder"></div>
        </div>
        <div className="card__foot">
          <div className="card__foot-info placeholder"></div>
          <div className="card__foot-btns placeholder"></div>
        </div>
      </div>
    </div>
  );
}
