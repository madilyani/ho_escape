import React, { useRef, useState } from "react";
import { chevronTop, searchIcon } from "Base/SVG";
import { AnimatePresence, motion } from "framer-motion";

export default function FilterDropdown({ title, search, children }) {
  const inputRef = useRef(null);
  const [active, setActive] = useState(true);
  const toggleActive = (e) => {
    if (inputRef.current && inputRef.current.contains(e.target)) {
    } else {
      setActive(!active);
    }
  };
  return (
    <div className="filterDrop">
      <div
        className={"filterDrop__head " + (active ? " active" : "")}
        onClick={toggleActive}
      >
        <h5>{title}</h5>
        {search ? (
          <div className="filterDrop__search" ref={inputRef}>
            <button type="button">{searchIcon}</button>
            <input type="text" placeholder="Cerca" />
          </div>
        ) : (
          <></>
        )}
        <div className="filterDrop__head-chev">{chevronTop}</div>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, height: 0 }}
            className="filterDrop__body"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
