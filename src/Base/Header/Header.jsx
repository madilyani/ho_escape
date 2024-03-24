"use client";
import React, { useEffect, useState } from "react";
import {
  burgerIcon,
  chevronBottom,
  mailIcon,
  phoneIcon,
  userIcon,
} from "Base/SVG";

export default function Header() {
  const [menu, setMenu] = useState();

  const closeMenu = (e) => {
    if (e.target === e.currentTarget) setMenu(false);
  };
  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);
  return (
    <>
      <div className="upHeader">
        <a href="#">{mailIcon}</a>
        <a href="#">{phoneIcon}</a>
      </div>
      <header className="header">
        <div className="auto__container">
          <div className="header__inner">
            <a href="/" className="logo">
              <img src="/images/logo-dark.png" alt="" />
            </a>
            <nav
              className={"nav " + (menu ? "active" : "")}
              onClick={closeMenu}
            >
              <div className="nav__inner">
                <div className="nav__inner-top">
                  <a href="/" className="logo">
                    <img src="/images/logo.png" alt="" />
                  </a>
                  <div className="nav__inner-close" onClick={closeMenu}></div>
                </div>
                <ul className="nav__inner-links">
                  <li>
                    <a href="#">DESTINAZIONI TURISTICHE {chevronBottom} </a>
                  </li>
                  <li>
                    <a href="#">PACCHETTI EVENTO {chevronBottom} </a>
                  </li>
                  <li>
                    <a href="#">proponi la tua struttura </a>
                  </li>
                </ul>
                <button type="button" className="button primary">
                  Accedi
                </button>
              </div>
            </nav>
            <div className="header__inner-buttons">
              <a href="#" className="header__inner-user">
                {userIcon}
              </a>
              <div
                className={"burger " + (menu ? "active" : "")}
                onClick={() => {
                  setMenu(!menu);
                }}
              >
                {burgerIcon}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
