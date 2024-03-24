import React from "react";
import { Link } from "react-router-dom";

export default function Map() {
  return (
    <div className="filterMap">
      <div className="filterMap__image">
        <img
          src={process.env.PUBLIC_URL + "/images/minimap.jpg"}
          alt="minimap"
        />
        <Link to="/map">Vedi Mappa</Link>
      </div>
    </div>
  );
}
