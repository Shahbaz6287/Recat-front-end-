import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import "../style.css";

const Onefruits = () => {
  return (
    <div>
      <div className="card mb-3 card-custom" style={{ maxWidth: "1250px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://content.jdmagicbox.com/v2/comp/jaipur/q8/0141px141.x141.240705130920.y1q8/catalogue/5e8lgsruyo5vguf-84p510h3wy.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <div class="p-3 mb-2 bg-light text-dark">
                <p className="card-text">
                  <p class="text-danger">
                    <p class="fw-semibold">
                      <h3>
                        We've turned millions of pounds of food from potential
                        waste into cherished meals, nourishing countless
                        families across the US and Canada. Together, we're not
                        just reducing food waste—we're spreading hope, joy, and
                        sustainability, one meal at a time.
                      </h3>
                      <button type="button" class="btn btn-primary">
                        Learn More
                      </button>
                    </p>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onefruits;


