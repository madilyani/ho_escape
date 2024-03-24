import React, { useEffect, useState } from "react";
import Note from "components/Note";
import Filter from "components/Filter";
import Card from "components/Card";
import { hotelList } from "Base/hotelList";
import Search from "components/Search";
import { Link } from "react-router-dom";
import SearchMobile from "components/SearchMobile";
import Placeholder from "components/Placeholder";
import { motion } from "framer-motion";

export default function Result() {
  const [position, setPosition] = useState(150);
  const [modul, setModul] = useState([...hotelList.slice(0, 5)]);
  const [isLoading, setIsLoading] = useState(false);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 840) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 840) {
        setPosition(300);
        setMobile(true);
      } else {
        setPosition(150);
        setMobile(false);
      }
    });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (modul?.length !== hotelList?.length) {
        const elm = document.getElementById("cont");
        if (window.scrollY >= elm.offsetHeight + elm.offsetTop - position) {
          setIsLoading(true);
          setTimeout(() => {
            setModul([...hotelList.slice(0, modul.length + 5)]);
            setIsLoading(false);
          }, 2000);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [modul]);
  return (
    <>
      {mobile ? <SearchMobile /> : <Search />}
      <Note />
      <div className="result">
        <div className="auto__container">
          <div className="result__inner">
            <div className="resultSide">
              <Filter />
            </div>
            <div className="note mob">
              <h6>42 Hotel trovati a Ischia, italia</h6>
              <div className="note__inner">
                <h5 className="cap">
                  Registrati Adesso per Accedere a sconti esclusivi
                </h5>
                <Link to="" className="button secondary">
                  Accedi / Iscriviti
                </Link>
              </div>
            </div>
            <div className="resultMain">
              <div className="resultMain__head">
                <span> Ordina per: </span>
                <select name="" id="">
                  <option value="0">Consigliati per te</option>
                  <option value="1">Option 2</option>
                  <option value="2">Option 3</option>
                </select>
              </div>
              <div className="resultMain__inner" id="cont">
                {modul.map((item, index) => {
                  return <Card {...item} key={index} />;
                })}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    {[0, 1, 2, 3].map((item, index) => {
                      return <Placeholder key={index} />;
                    })}
                  </motion.div>
                )}
                {/* <button
                  type="button"
                  className="resultLoad"
                  // onClick={() => {
                  //   setIsLoading(true);
                  //   setTimeout(() => {
                  //     setModul(hotelList);
                  //     setIsLoading(false);
                  //   }, 2000);
                  // }}
                >
                  Carica Altri 25 Hotel
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
