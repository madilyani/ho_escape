import Footer from "Base/Footer";
import Header from "Base/Header";
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Result from "Result";
import ResultMap from "ResultMap";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="" element={<Result />} />
          <Route path="/map" element={<ResultMap />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
