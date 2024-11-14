import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./auth/LoginPage";
import "./App.css";
import Register from "./auth/Register";
import AboutUs from "./components/about us/AboutUs";
import ContactUs from "./components/contact/ContactUs";
import Service from "./components/sarvice/Service";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about us" element={<AboutUs />} />
        <Route path="/contact us" element={<ContactUs />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
