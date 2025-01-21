import React from "react";
import Heading from "../components/common/Heading";
import CommonHeading from "../components/common/CommonHeading";

export default function Contact() {
  return (
    <>
      {/* Page Heading */}
      <Heading heading="Contact" title="Home" subtitle="Contact Us" />

      <div className="container-xxl py-5">
        <div className="container">
          {/* Section Heading */}
          <CommonHeading
            heading="Get In Touch"
            subtitle="Contact Us"
            title="We'd Love to Hear From You"
          />

          <div className="row g-5">
            {/* Contact Details Section */}
            <div className="col-lg-6">
              <div className="mb-4">
                <h5 className="section-title text-start text-primary text-uppercase">
                  Contact Information
                </h5>
                <p>
                 Contact us for reservations, inquiries, or any assistance.
                 We're dedicated to making your experience unforgettable
                </p>
              </div>

              <div className="mb-3">
                <h6 className="text-primary">Address:</h6>
                <p>54 portland street ,Oregon, USA</p>
              </div>

              <div className="mb-3">
                <h6 className="text-primary">Phone:</h6>
                <p>+234 807 530 6443</p>
              </div>

              <div className="mb-3">
                <h6 className="text-primary">Email:</h6>
                <p>info@Stayspherehotel.com</p>
              </div>

              <div>
                <h6 className="text-primary">Follow Us:</h6>
                <div className="d-flex">
                  <a href="https://www.facebook.com/olugbeja.pelumi" className="btn btn-outline-primary btn-sm me-2">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://x.com/pelumi09778314?s=21" className="btn btn-outline-primary btn-sm me-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="col-lg-6">
              <div>
                <h5 className="section-title text-start text-primary text-uppercase mb-4">
                  Send Us a Message
                </h5>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: "150px" }}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="container-fluid px-0">
        <iframe
          className="position-relative rounded w-100"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
          frameBorder="0"
          style={{ height: "400px", border: "0" }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </>
  );
}
