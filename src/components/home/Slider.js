import React from "react";
import { testimonial } from "../data/Data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'; // Custom styles for the slider

export default function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 testimonials at a time
    slidesToScroll: 1,
    autoplay: true, // Add autoplay for better experience
    autoplaySpeed: 3000, // Autoplay speed
    arrows: false, // Hide default arrows, optional for a cleaner design
  };

  return (
    <div className="container-xxl testimonial-section my-5 py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">What Our Clients Say</h2>
        <Slider {...settings}>
          {testimonial.map((item, key) => (
            <div
              key={key}
              className="testimonial-item rounded-lg shadow-lg overflow-hidden bg-white p-4"
            >
              <p className="testimonial-description">{item.description}</p>
              <div className="d-flex align-items-center mt-4">
                <img
                  className="img-fluid rounded-circle"
                  src={item.img}
                  alt={item.name}
                  style={{ width: "60px", height: "60px" }}
                />
                <div className="ps-3">
                  <h6 className="fw-bold text-dark mb-1">{item.name}</h6>
                  <small className="text-muted">{item.profession}</small>
                </div>
              </div>
              <div className="testimonial-icon mt-3">{item.icon}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
