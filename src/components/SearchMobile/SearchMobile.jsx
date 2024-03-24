import { bedIcon, calendarIcon } from "Base/SVG";
import CalendarMobile from "components/CalendarMobile";
import RoomMobile from "components/RoomMobile";
import WhereMobile from "components/WhereMobile";
import moment from "moment";
import React, { useEffect, useState } from "react";

export default function SearchMobile() {
  const [showCalendar, setShowCalendar] = useState(false);

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
  return (
    <>
      <div className="searchMob__outer">
        <div className="auto__container">
          <div className="searchMob">
            <WhereMobile form={form} updateForm={updateForm} />
            <div className="searchMob__row">
              <div
                className="searchPopDates"
                onClick={() => {
                  setShowCalendar(true);
                }}
              >
                {calendarIcon}
                <div className="searchPopDates__content">
                  <h6>Check-in/out</h6>
                  <input
                    placeholder="Select Date"
                    type="text"
                    readOnly
                    value={
                      (form?.startDate
                        ? moment(form?.startDate).format("DD MMM") + " - "
                        : "") +
                      (form?.endDate
                        ? moment(form?.endDate).format("DD MMM")
                        : "")
                    }
                  />
                </div>
              </div>
                <RoomMobile
                  form={form}
                  updateForm={updateForm}
                  setShowCalendar={setShowCalendar}
                />
            </div>
          </div>
        </div>
      </div>
      {showCalendar && (
        <CalendarMobile
          form={form}
          updateForm={updateForm}
          setShowCalendar={setShowCalendar}
        />
      )}
    </>
  );
}
