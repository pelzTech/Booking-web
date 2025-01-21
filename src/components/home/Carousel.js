import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carouselData } from "../data/Data";

export default function Carousel() {
  const sliderRef = useRef(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="container-fluid p-0 mb-5">
      <div className="carousel-wrapper position-relative">
        <Slider ref={sliderRef} {...settings}>
          {carouselData.map((val, index) => (
            <div className="carousel-item position-relative" key={index}>
              <img className="w-100" src={val.img} alt={val.title} style={{ maxHeight: "600px", objectFit: "cover" }} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center position-absolute top-50 start-50 translate-middle">
                <div className="text-center p-3" style={{ maxWidth: "800px", background: "rgba(0, 0, 0, 0.5)", borderRadius: "10px" }}>
                  <h6 className="section-title text-white text-uppercase mb-3 animated fadeInDown">
                    {val.subtitle}
                  </h6>
                  <h1 className="display-4 text-white mb-4 animated fadeInUp">
                    {val.title}
                  </h1>
                  <div className="d-flex justify-content-center gap-3">
                    <a
                      href=""
                      className="btn btn-primary py-md-3 px-md-5 animated fadeInLeft"
                    >
                      {val.btn1}
                    </a>
                    <a
                      href=""
                      className="btn btn-outline-light py-md-3 px-md-5 animated fadeInRight"
                    >
                      {val.btn2}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button
          className="carousel-control-prev position-absolute top-50 start-0 translate-middle-y"
          type="button"
          onClick={previous}
          style={{ zIndex: 10 }}
        >
          <span
            className="carousel-control-prev-icon bg-dark rounded-circle p-2"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next position-absolute top-50 end-0 translate-middle-y"
          type="button"
          onClick={next}
          style={{ zIndex: 10 }}
        >
          <span
            className="carousel-control-next-icon bg-dark rounded-circle p-2"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
