import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navList } from "../data/Data";
//import logo from "..assets/hotel2.png"; // Adjust the path as needed//
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi"; // Importing icons from react-icons

export default function Header() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [darkMode, setDarkMode] = useState(false); // State to handle dark mode

  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // Toggle the body class for dark mode
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <>
      <div className="container-fluid px-0">
        <div className="row gx-0">
          {/* Logo Section */}
          <div className="col-lg-3 d-none d-lg-block">
            <Link
              to="/"
              className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
            >
              <img
                src={"/Booking-web/assets/img/hotel2.png"} // Path relative to the public folder
                alt="Hotelier Logo"
                className="logo-img me-2"
                style={{ width: "50px", height: "50px", objectFit: "contain" }}
              />
              <h1
                className="m-0 text-primary text-uppercase"
                style={{ fontSize: "1.5rem" }}
              >
                StaySphere
              </h1>
            </Link>
          </div>

          {/* Navbar Section */}
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
              <Link to="/" className="navbar-brand d-block d-lg-none">
                <img
                  src="/assets/img/hotel2.png"
                  alt="Hotelier Logo"
                  className="logo-img me-2"
                  style={{ width: "50px", height: "50px", objectFit: "contain" }}
                />
                <h1
                  className="m-0 text-primary text-uppercase"
                  style={{ fontSize: "1.5rem" }}
                >
                  STAYSPHERE
                </h1>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="btn btn-outline-light d-lg-none"
                onClick={() => setNavbarCollapse(!navbarCollapse)}
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "24px",
                }}
              >
                {navbarCollapse ? <FiX /> : <FiMenu />}
              </button>

              <div
                className={
                  navbarCollapse
                    ? "navbar-collapse justify-content-around show"
                    : "collapse navbar-collapse justify-content-around"
                }
              >
                <div className="navbar-nav mr-auto py-0">
                  {navList.map((item, index) => (
                    <div key={index}>
                      {item.subItems ? (
                        <div
                          className="nav-item dropdown"
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link
                            className="nav-link dropdown-toggle"
                            to="#"
                            role="button"
                          >
                            {item.text}
                          </Link>
                          <div
                            className={`dropdown-menu rounded-0 m-0 ${
                              activeDropdown === item.id ? "show" : ""
                            }`}
                          >
                            {item.subItems.map((sub) => (
                              <Link
                                to={sub.path}
                                className="dropdown-item"
                                key={sub.path}
                              >
                                {sub.text}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link to={item.path} className="nav-item nav-link">
                          {item.text}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="btn btn-outline-light ms-3"
                style={{ fontSize: "18px", padding: "10px 20px" }}
              >
                {darkMode ? <FiSun /> : <FiMoon />}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
