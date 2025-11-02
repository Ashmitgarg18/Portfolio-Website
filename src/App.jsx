import { useState } from "react";
import "./App.css";
import Portfolio from "./Portfolio.jsx";
import Blog from "./Blog.jsx";
import Reading from "./Reading.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reading" element={<Reading />} />
      </Routes>
    </>
  );
}

export default App;
