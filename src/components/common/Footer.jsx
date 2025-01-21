import React from "react";
import { Link } from "react-router-dom";
import { footerContact, footerItem, socialIcons } from "../data/Data";
import Newsletter from "../home/Newsletter";

export default function Footer() {
  return (
    <>
      <Newsletter />
      <div
        className="container-fluid bg-dark text-light footer wow fadeIn"
        data-wow-delay="0.1s"
        style={{ paddingTop: "30px", paddingBottom: "10px" }}
      >
        <div className="container pb-5">
          <div className="row g-5">
            {/* Logo Section */}
            <div className="col-md-3 col-lg-1">
              <div className="bg-primary text-center">
                <Link to="/">
                </Link>
              </div>
            </div>

            {/* Contact Section */}
            <div className="col-md-6 col-lg-3">
              <h6
                className="section-title text-start text-primary text-uppercase mb-4"
                style={{ fontWeight: "bold" }}
              >
                Contact
              </h6>
              {footerContact.map((val, index) => (
                <p
                  className="mb-2"
                  key={index}
                  style={{ fontSize: "1rem", lineHeight: "1.8" }}
                >
                  {val.icon} {val.name}
                </p>
              ))}
              <div className="d-flex pt-2">
                {socialIcons.slice(0, 4).map((val, index) => (
                  <a
                    className="btn btn-outline-light btn-social rounded-circle me-2 bg-pink"
                    href={val.link} // Add social media links
                    key={index}
                    style={{
                      fontSize: "20px",
                      padding: "8px 12px",
                      borderRadius: "50%",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  >
                    {val.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Items Section */}
            <div className="col-lg-5 col-md-12">
              <div className="row gy-5 g-4">
                {footerItem.map((section, sectionIndex) => (
                  <div className="col-md-6" key={sectionIndex}>
                    <h6
                      className="section-title text-start text-primary text-uppercase mb-4"
                      style={{ fontWeight: "bold" }}
                    >
                      {section.header}
                    </h6>
                    {section.UnitItem.map((item, itemIndex) => (
                      <Link
                        className="btn btn-link text-white mb-2"
                        to={item.link} // Use proper routes
                        key={itemIndex}
                        style={{
                          fontSize: "1rem",
                          lineHeight: "1.8",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.target.style.color = "#ff9f00")
                        }
                        onMouseLeave={(e) =>
                          (e.target.style.color = "#ffffff")
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div
          className="text-center pt-4 pb-2"
          style={{ borderTop: "1px solid #444" }}
        >
          <p className="mb-0 text-white" style={{ fontSize: "0.9rem" }}>
            &copy; 2024 pelzcode. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
