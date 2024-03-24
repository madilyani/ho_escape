import React from "react";
import { Link } from "react-router-dom";

export default function Note() {
  return (
    <div className="note">
      <div className="auto__container">
        <div className="note__inner">
          <h5 className="cap">
            Registrati Adesso per Accedere a sconti esclusivi
          </h5>
          <Link to="" className="button secondary">
            Accedi / Iscriviti
          </Link>
        </div>
      </div>
    </div>
  );
}
