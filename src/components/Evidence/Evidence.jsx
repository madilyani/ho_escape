import React from "react";
import { arrowsCat, busCat, hotCat, saunaCat, spaCat } from "Base/SVG";
const evidenceList = [
  {
    id: "1",
    title: "Terme Interne",
    icon: hotCat,
  },
  {
    id: "2",
    title: "Sauna",
    icon: saunaCat,
  },
  {
    id: "3",
    title: "Spa",
    icon: spaCat,
  },
  {
    id: "4",
    title: "Navetta",
    icon: busCat,
  },
  {
    id: "5",
    title: "Palestra",
    icon: arrowsCat,
  },
];
export default function Evidence() {
  return (
    <div className="filterEvis">
      {evidenceList.map((item, index) => {
        return <EvidenceItem {...item} key={index} />;
      })}
    </div>
  );
}
const EvidenceItem = (props) => {
  return (
    <div className="filterEvi">
      <input type="radio" name="evidenza" />
      <label htmlFor="">
        <div className="filterEvi__title">{props.title}</div>
        <div className="filterEvi__icon">{props.icon}</div>
      </label>
    </div>
  );
};
