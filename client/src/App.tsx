import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Favoris from "./pages/Favoris";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoris" element={<Favoris />} />
      </Routes>
    </>
  );
}

export default App;
