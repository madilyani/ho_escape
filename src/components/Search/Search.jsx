import React, { useEffect, useState } from "react";
import Where from "components/Where";
import Room from "components/Room";
import { searchIcon2 } from "Base/SVG";
import Calendar from "components/Calendar";

export default function Search() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const [form, setForm] = useState({
    where: "",
    rooms: [
      {
        id: "1",
        adults: 2,
        children: 0,
        children_age: [],
      },
    ],
    startDate: null,
    endDate: null,
  });

  const updateForm = (data) => {
    setForm((form) => ({ ...form, ...data }));
  };
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [addClass, setAddClass] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      // If scrolling up and it's below a certain threshold (e.g., not at the very top), make it sticky
      if (scrollTop < lastScrollTop && scrollTop > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      if (scrollTop > 200) {
        setAddClass(true);
      } else {
        setAddClass(false);
      }
      setLastScrollTop(scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);
  return (
    <div
      className={
        "search " + (isSticky ? "sticky " : "") + (addClass ? "addClass" : "")
      }
    >
      <div className="search__inner">
        <div className="search__items">
          <Where
            form={form}
            updateForm={updateForm}
            setShowCalendar={setShowCalendar}
            setActiveInput={setActiveInput}
          />
          <div
            className={
              "searchItem " + (activeInput === "checkIn" ? "active" : "")
            }
            onClick={() => {
              setShowCalendar(true);
              setActiveInput("checkIn");
            }}
          >
            <div className="searchItem__title">Check In</div>
            <div className="searchItem__input">
              <input
                placeholder="Select Date"
                type="text"
                readOnly
                value={
                  form?.startDate ? form?.startDate.toLocaleDateString() : ""
                }
              />
            </div>
          </div>
          <div
            className={
              "searchItem " + (activeInput === "checkOut" ? "active" : "")
            }
            onClick={() => {
              if (form?.startDate) {
                setShowCalendar(true);
                setActiveInput("checkOut");
              } else {
                setShowCalendar(true);
                setActiveInput("checkIn");
              }
            }}
          >
            <div className="searchItem__title">Check Out</div>
            <div className="searchItem__input">
              <input
                placeholder="Select Date"
                type="text"
                readOnly
                value={form?.endDate ? form?.endDate.toLocaleDateString() : ""}
              />
            </div>
          </div>
          <Room
            form={form}
            updateForm={updateForm}
            setShowCalendar={setShowCalendar}
            setActiveInput={setActiveInput}
          />
        </div>
        <button type="button" className="search__btn">
          {searchIcon2}
        </button>
        {showCalendar && (
          <Calendar
            form={form}
            updateForm={updateForm}
            setActiveInput={setActiveInput}
            setShowCalendar={setShowCalendar}
          />
        )}
      </div>
    </div>
  );
}
