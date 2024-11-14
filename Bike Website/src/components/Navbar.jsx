import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAstronaut } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">
            <img
              src="/images/bg-1.png"
              alt="BikeShop Logo"
              className="logo-img"
            />
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." className="search-input" />
          <span className="srch-btn">
            <IoIosSearch />
          </span>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/new-arrivals" className="nav-link">
              All Products
            </Link>
          </li>
          <li>
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact us" className="nav-link">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/about us" className="nav-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/cart" className="cart-link">
              <FaCartShopping size={22} />
            </Link>
          </li>
          <li>
            <Link to="/login" className="user-link">
              <FaUserAstronaut size={22} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
