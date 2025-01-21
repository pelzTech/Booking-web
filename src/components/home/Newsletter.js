import { useState } from "react";
import './Newsletter.css'

export default function Newsletter() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
    }
  };

  return (
    <>
      <div className="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-5 col-sm-10">
            <div className="bg-light border rounded p-4 text-center">
              <h4 className="mb-4">
                Subscribe to Our{" "}
                <span className="text-primary text-uppercase">Newsletter</span>
              </h4>

              {!isSubscribed ? (
                <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                  <input
                    className="form-control w-100 py-3 ps-4 pe-5 mb-3"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      borderRadius: "30px",
                      border: "2px solid #ddd",
                    }}
                  />
                  <button
                    type="button"
                    className="btn btn-primary py-2 px-4 position-absolute top-0 end-0 mt-2 me-2"
                    style={{
                      borderRadius: "30px",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                    onClick={handleSubscribe}
                  >
                    Subscribe
                  </button>
                </div>
              ) : (
                <div className="alert alert-success mt-4">
                  <strong>Thanks for subscribing!</strong> We're excited to keep you updated.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
