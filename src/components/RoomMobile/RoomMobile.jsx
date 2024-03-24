import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { bedIcon, cancel, minusIcon, plusIcon } from "Base/SVG";

export default function RoomMobile({ form, updateForm, setShowCalendar }) {
  const wrapper = useRef(null);
  const dropdownRef = useRef(null);
  const [active, setActive] = useState(false);
  const [text, setText] = useState("");
  useEffect(() => {
    let totalAdults = 0;
    let totalChildren = 0;
    form?.rooms.forEach((element) => {
      totalAdults = totalAdults + element.adults;
      totalChildren = totalChildren + element.children;
    });

    let text =
      (form?.rooms.length > 0 ? `${form?.rooms.length} St.` : ``) +
      (totalAdults > 0 ? ` ${totalAdults} Ad.` : ``) +
      (totalChildren > 0
        ? totalChildren === 1
          ? ` ${totalChildren} bimbo`
          : ` ${totalChildren} bimbi`
        : ``);

    setText(text);
  }, [form?.rooms]);
  useEffect(() => {
    const windowClick = ({ target }) => {
      if (!wrapper.current.contains(target)) {
        setActive(false);
      }
    };
    if (active) window.addEventListener("click", windowClick);
    else window.removeEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, [active]);
  const clickHandler = (e) => {
    if (!dropdownRef?.current?.contains(e.target)) {
      setActive(true);
      setShowCalendar(false);
    }
  };
  return (
    <div className="searchMob__room" ref={wrapper} onClick={clickHandler}>
      <div className="searchPopActs__outer">
        <div className={"searchPopActs " + (active ? "active" : "")}>
          <h6>Stanze e Ospiti</h6>
          <input placeholder="Select Room" type="text" readOnly value={text} />
          {bedIcon}
        </div>

        <AnimatePresence>
          {active === true && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              exit={{ opacity: 0, y: 10 }}
              className={`searchItem__room  ${active ? "active" : ""} `}
              ref={dropdownRef}
            >
              <div className="searchItem__room-head">
                <button
                  type="button"
                  className="searchItem__room-head-reset"
                  onClick={() => {
                    updateForm({
                      rooms: [
                        {
                          id: "1",
                          adults: 2,
                          children: 0,
                          children_age: [],
                        },
                      ],
                    });
                  }}
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="searchItem__room-head-add"
                  onClick={() => {
                    if (form?.rooms?.length + 1 <= 3) {
                      updateForm({
                        rooms: [
                          ...form.rooms,
                          {
                            id: new Date().toISOString(),
                            adults: 2,
                            children: 0,
                            children_age: [],
                          },
                        ],
                      });
                    }
                  }}
                >
                  Add Room
                </button>
              </div>
              <div className="searchItem__room-inner">
                {form?.rooms?.map((item, index) => {
                  return (
                    <div className="searchItem__room-item" key={index}>
                      <div className="searchItem__room-item-title">
                        Room {index + 1}{" "}
                        <button
                          type="button"
                          style={{
                            display: form?.rooms?.length > 1 ? "block" : "none",
                          }}
                          onClick={() => {
                            setTimeout(() => {
                              let arr = [
                                ...form?.rooms.filter(
                                  (filterItem) => filterItem?.id !== item?.id
                                ),
                              ];
                              updateForm({
                                rooms: arr,
                              });
                            }, 50);
                          }}
                        >
                          {cancel}
                        </button>
                      </div>
                      <div className="searchItem__room-item-content">
                        <div className="searchItem__room-item-row">
                          <h6>Adults</h6>
                          <div className="searchItem__room-spinbox">
                            <div
                              className={
                                "searchItem__room-spinbox-opr " +
                                (item?.adults - 1 === 0 ? "disabled" : "")
                              }
                              onClick={() => {
                                if (item.adults - 1 !== 0) {
                                  let arr = [...form?.rooms];
                                  const index = arr
                                    ?.map((item2) => item2.id)
                                    .indexOf(item.id);
                                  arr[index] = {
                                    ...arr[index],
                                    adults: item?.adults - 1,
                                  };
                                  updateForm({
                                    rooms: arr,
                                  });
                                }
                              }}
                            >
                              {minusIcon}
                            </div>
                            <div className="searchItem__room-spinbox-num">
                              {item?.adults}
                            </div>
                            <div
                              className={
                                "searchItem__room-spinbox-opr " +
                                (item?.adults + 1 <= 9 ? "" : "disabled")
                              }
                              onClick={() => {
                                if (item?.adults + 1 <= 9) {
                                  let arr = [...form?.rooms];
                                  const index = arr
                                    ?.map((item2) => item2.id)
                                    .indexOf(item.id);
                                  arr[index] = {
                                    ...arr[index],
                                    adults: item?.adults + 1,
                                  };
                                  updateForm({
                                    rooms: arr,
                                  });
                                }
                              }}
                            >
                              {plusIcon}
                            </div>
                          </div>
                        </div>
                        <div className="searchItem__room-item-row">
                          <h6>Children</h6>
                          <div className="searchItem__room-spinbox">
                            <div
                              className={
                                "searchItem__room-spinbox-opr " +
                                (item?.children - 1 === -1 ? "disabled" : "")
                              }
                              onClick={() => {
                                if (item.children - 1 !== -1) {
                                  let arr = [...form?.rooms];
                                  const index = arr
                                    ?.map((item2) => item2.id)
                                    .indexOf(item.id);
                                  let arr2 = arr[index].children_age;
                                  arr2.pop();
                                  arr[index] = {
                                    ...arr[index],
                                    children: item?.children - 1,
                                    children_age: arr2,
                                  };
                                  updateForm({
                                    rooms: arr,
                                  });
                                }
                              }}
                            >
                              {minusIcon}
                            </div>
                            <div className="searchItem__room-spinbox-num">
                              {item?.children}
                            </div>
                            <div
                              className={
                                "searchItem__room-spinbox-opr " +
                                (item.children + 1 <= 3 ? "" : "disabled")
                              }
                              onClick={() => {
                                if (item.children + 1 <= 3) {
                                  let arr = [...form?.rooms];
                                  const index = arr
                                    ?.map((item2) => item2.id)
                                    .indexOf(item.id);
                                  arr[index] = {
                                    ...arr[index],
                                    children: item?.children + 1,
                                    children_age: [...item.children_age, 0],
                                  };
                                  updateForm({
                                    rooms: arr,
                                  });
                                }
                              }}
                            >
                              {plusIcon}
                            </div>
                          </div>
                        </div>
                        {item?.children > 0 && (
                          <div className="searchItem__room-item-age">
                            <p>Age of children on date of travel:</p>
                            <div className="searchItem__room-item-age-items">
                              {item?.children_age.map((item2, index2) => {
                                return (
                                  <select
                                    key={index2}
                                    value={item2}
                                    onChange={(e) => {
                                      let arr = [...form?.rooms];
                                      const indexx = arr
                                        ?.map((item2) => item2.id)
                                        .indexOf(item.id);
                                      let arr2 = arr[indexx].children_age;
                                      arr2[index2] = e.target.value;
                                      arr[indexx] = {
                                        ...arr[indexx],
                                        children_age: arr2,
                                      };
                                      updateForm({
                                        rooms: arr,
                                      });
                                    }}
                                  >
                                    {[
                                      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                                      13, 14, 15, 16, 17,
                                    ].map((item3, index3) => {
                                      return (
                                        <option key={index3} value={item3}>
                                          {item3}
                                        </option>
                                      );
                                    })}
                                  </select>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
