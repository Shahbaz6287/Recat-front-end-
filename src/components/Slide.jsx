import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import SlideImageA from "../assets/SlideImageA.jpg";
import SlideImageB from "../assets/SlideImageB.jpg";
import SlideImageC from "../assets/SlideImageC.jpg";
import SlideImageD from "../assets/SlideImageD.jpg";
import SlideImageE from "../assets/SlideImageE.jpg";
import "../style.css"; 

function Slide() {
  return (
    <div className="card-group row">
      <div className="card col-12 col-md-4 mb-4 card-custom">
        <img
          src={SlideImageA}
          className="d-block w-100 rounded hover-effect"
          alt="First slide"
        />
        <div className="card-body">
          <p class="fw-semibold">
            <p class="text-danger">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </p>
        </div>
      </div>
      <div className="card col-12 col-md-4 mb-4 card-custom">
        <img
          src={SlideImageB}
          className="d-block w-100 rounded hover-effect"
          alt="Second slide"
        />
        <div className="card-body">
          <p class="fw-semibold">
            <p class="text-danger">
              This card has supporting text below as a natural lead-in to
              additional content.This content is a little bit
              longer.
            </p>
          </p>
        </div>
      </div>
      <div className="card col-12 col-md-4 mb-4 card-custom">
        <img
          src={SlideImageC}
          className="d-block w-100 rounded hover-effect"
          alt="Third slide"
        />
        <div className="card-body">
          <p class="fw-semibold">
            <p class="text-danger">
              This card has supporting text below as a natural lead-in to
              additional content.This content is a little bit
              longer.
            </p>
          </p>
        </div>
      </div>
      <div className="card col-12 col-md-4 mb-4 card-custom">
        <img
          src={SlideImageD}
          className="d-block w-100 rounded hover-effect"
          alt="Third slide"
        />
        <div className="card-body">
          <p class="fw-semibold">
            <p class="text-danger">
              This card has supporting text below as a natural lead-in to
              additional content.This content is a little bit
              longer.
            </p>
          </p>
        </div>
      </div>
      <div className="card col-12 col-md-4 mb-4 card-custom">
        <img
          src={SlideImageE}
          className="d-block w-100 rounded hover-effect"
          alt="Third slide"
        />
        <div className="card-body">
          <p class="fw-semibold">
            <p class="text-danger">
              This card has supporting text below as a natural lead-in to
              additional content.This content is a little bit
              longer.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slide;
