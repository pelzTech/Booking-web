import React, { useState } from "react";
import { team } from "../data/Data"; // Ensure team data includes biography
import CommonHeading from "../common/CommonHeading";

export default function Teams() {
  const [expanded, setExpanded] = useState(null);

  const handleReadMore = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Team"
            subtitle="Explore Our"
            title="Staffs"
          />
          <div className="row g-4">
            {team.map((item, index) => (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
                key={index}
              >
                <div className="rounded shadow overflow-hidden">
                  <div className="position-relative">
                    <img className="img-fluid" src={item.image} alt={item.name} />
                  </div>
                  <div className="text-center p-4 mt-3">
                    <h5 className="fw-bold mb-0">{item.name}</h5>
                    <small>{item.designation}</small>

                    {/* Read More Button */}
                    <div className="mt-3">
                      <button
                        className="btn btn-link text-primary"
                        onClick={() => handleReadMore(index)}
                      >
                        {expanded === index ? "Read Less" : "Read More"}
                      </button>

                      {/* Biography Section */}
                      {expanded === index && (
                        <div className="mt-3">
                          <p>{item.biography}</p>
                        </div>
                      )}
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
