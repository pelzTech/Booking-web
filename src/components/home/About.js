import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { about } from "../data/Data";

export default function About() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Left Column with Text and Stats */}
            <div className="col-lg-6">
              <h6 className="section-title text-start text-primary text-uppercase mb-3">
                About Us
              </h6>
              <h1 className="mb-4 text-dark font-weight-bold">
                Welcome to{" "}
                <span className="text-primary">STAYSPHERE</span>
              </h1>
              <p className="mb-4 text-muted" style={{ lineHeight: "1.8" }}>
                We are a team of dedicated professionals providing top-notch hospitality services. Our mission is to offer a seamless and luxurious experience to every guest. From accommodation to exclusive services, we prioritize your comfort and satisfaction.
              </p>
              <div className="row g-3 pb-4">
                {/* Stats Section */}
                {about.map((item, key) => (
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s" key={key}>
                    <div className="border rounded p-3 bg-light shadow-sm">
                      <div className="border rounded text-center p-4">
                        {item.icon}
                        <h2 className="mb-1 text-dark" data-toggle="counter-up">
                          {item.count}
                        </h2>
                        <p className="mb-0 text-muted">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/services" // Use Link from React Router to navigate
                className="btn btn-primary py-3 px-5 mt-3 rounded-pill shadow-sm"
                style={{ transition: "background-color 0.3s ease" }}
              >
                Explore More
              </Link>
            </div>

            {/* Right Column with Images */}
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6 text-end">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.1s"
                    src="/assets/img/about-1.jpg"
                    alt="About Image 1"
                    style={{ objectFit: "cover", height: "350px", borderRadius: "10px" }}
                  />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid rounded w-100 wow zoomIn"
                    data-wow-delay="0.7s"
                    src="/assets/img/about-4.jpg"
                    alt="About Image 4"
                    style={{ objectFit: "cover", height: "250px", borderRadius: "10px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
