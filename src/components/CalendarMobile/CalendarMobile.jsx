import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { motion } from "framer-motion";

import "react-datepicker/dist/react-datepicker.css";
import FlexibleMobile from "components/FlexibleMobile";
import { cancel, plusMinus } from "Base/SVG";
export default function CalendarMobile({ form, updateForm, setShowCalendar }) {
  const [tab, setTab] = useState("dates");
  const onChange = (dates) => {
    const [start, end] = dates;
    if (new Date(start).toISOString() === new Date(end).toISOString()) {
      updateForm({ startDate: start, endDate: null });
    } else {
      updateForm({ startDate: start, endDate: end });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0, y: 10 }}
      className="calendar"
    >
      <div className="calendar__inner">
        <div className="calendar__head">
          <div className="calendar__head-title">
            <h6>Select your dates</h6>
            <p>See prices and availability for your dates</p>
          </div>
          <div
            className="calendar__head-close"
            onClick={() => {
              setShowCalendar(false);
            }}
          >
            {cancel}
          </div>
        </div>
        <div className="calendar__tabs">
          <button
            type="button"
            className={"calendar__tab " + (tab === "dates" ? "active" : "")}
            onClick={() => setTab("dates")}
          >
            Dates
          </button>
          <button
            type="button"
            className={"calendar__tab " + (tab === "flexible" ? "active" : "")}
            onClick={() => setTab("flexible")}
          >
            Flexible
          </button>
        </div>
        <div className="calendar__content">
          {tab === "dates" && (
            <>
              <div className="calendar__content-inner">
                <DatePicker
                  selected={form.startDate}
                  onChange={onChange}
                  startDate={form.startDate}
                  endDate={form.endDate}
                  selectsRange
                  inline
                  monthsShown={1}
                />
              </div>
              <div className="calendar__foot">
                <button type="button">
                  <input type="radio" name="exactDates" />
                  <span> Exact dates</span>
                </button>
                <button type="button">
                  <input type="radio" name="exactDates" />
                  <span>{plusMinus} 1 day</span>
                </button>
                <button type="button">
                  <input type="radio" name="exactDates" />
                  <span>{plusMinus} 2 day</span>
                </button>
                <button type="button">
                  <input type="radio" name="exactDates" />
                  <span>{plusMinus} 3 day</span>
                </button>
                <button type="button">
                  <input type="radio" name="exactDates" />
                  <span>{plusMinus} 7 day</span>
                </button>
              </div>
            </>
          )}
          {tab === "flexible" && <FlexibleMobile />}
        </div>
      </div>
    </motion.div>
  );
}
