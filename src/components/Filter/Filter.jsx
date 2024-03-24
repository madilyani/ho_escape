import React, { useEffect, useState } from "react";
import Map from "components/Map";
import FilterDropdown from "components/FilterDropdown";
import Rating from "components/Rating";
import Search from "components/FilterSearch";
import Evidence from "components/Evidence";
import Categories from "components/Categories";
import { locations, services, treatments } from "Base/modul";
import FilterMobile from "components/FilterMobile";
import { Link } from "react-router-dom";

export default function Filter({ mapPlace }) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1120) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1120) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);
  const [popWrap, setPopWrap] = useState(false);
  const [mobDrop, setMobDrop] = useState(null);

  const closePop = (e) => {
    document.body.classList.remove("active");
    setMobDrop(null);
    setPopWrap(false);
    // }
  };
  return (
    <div className="filter">
      {mapPlace ? (
        <div className="filterMap">
          <div className="filterMap__image sm">
            <img
              src={process.env.PUBLIC_URL + "/images/placehoder.png"}
              alt="minimap"
            />
            <Link to="/">Torna all’elenco</Link>
          </div>
        </div>
      ) : (
        <Map />
      )}

      {mobile && (
        <FilterMobile
          closePop={closePop}
          mobDrop={mobDrop}
          setMobDrop={setMobDrop}
          popWrap={popWrap}
          setPopWrap={setPopWrap}
        />
      )}
      <div
        className={"popWrap " + (popWrap ? "active" : "")}
        onClick={closePop}
      ></div>
      <div className="filterDrops">
        <FilterDropdown title={"Filtra per Stelle"}>
          <Rating />
        </FilterDropdown>
        <FilterDropdown title={"filtra per nome dell’Hotel"}>
          <Search />
        </FilterDropdown>
        <FilterDropdown title={"servizi"} search={true}>
          <Categories modul={services} />
        </FilterDropdown>
        <FilterDropdown title={"località"} search={true}>
          <Categories modul={locations} />
        </FilterDropdown>
        <FilterDropdown title={"Trattamento"}>
          <Categories modul={treatments} />
        </FilterDropdown>{" "}
        <FilterDropdown title={"In Evidenza"}>
          <Evidence />
        </FilterDropdown>
      </div>
    </div>
  );
}
