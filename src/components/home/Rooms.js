import React from "react";
import CommonHeading from "../common/CommonHeading";
import { facility, roomItems } from "../data/Data";
import './Rooms.css';

export default function Rooms() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Rooms"
            title="Rooms"
            subtitle="Explore Our"
          />
          <div className="row g-4">
            {roomItems.map((item, key) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
                key={key}
              >
                <div className="room-item shadow rounded overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={item.img} alt="Room" />
                    <small className="price position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                      {item.price}
                    </small>
                  </div>
                  <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                      <h5 className="mb-0 text-dark">{item.name}</h5>
                      <div className="ps-2">{item.star}</div>
                    </div>
                    <div className="d-flex mb-3 flex-wrap">
                      {facility.map((fac, index) => (
                        <small
                          className="border-end me-3 pe-3 mb-2 text-muted"
                          key={index}
                        >
                          {fac.icon} {fac.quantity} {fac.facility}
                        </small>
                      ))}
                    </div>
                    <p className="text-muted mb-3">{item.description}</p>
                    <div className="d-flex justify-content-between flex-column flex-sm-row">
                      <a
                        className="btn btn-sm btn-warning rounded py-2 px-4 mb-2 mb-sm-0"
                        href={`/book?name=${encodeURIComponent(
                          item.name
                        )}&price=${encodeURIComponent(
                          item.price
                        )}&description=${encodeURIComponent(
                          item.description
                        )}`}
                      >
                        {item.yellowbtn}
                      </a>
                      <a
                        className="btn btn-sm btn-secondary rounded py-2 px-4"
                        href={`/book?name=${encodeURIComponent(
                          item.name
                        )}&price=${encodeURIComponent(
                          item.price
                        )}&description=${encodeURIComponent(
                          item.description
                        )}`}
                      >
                        {item.darkbtn}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
