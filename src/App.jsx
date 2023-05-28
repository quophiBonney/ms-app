import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navigation";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/home/MovieDetails";
import Movies from "./pages/home/Movies";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
