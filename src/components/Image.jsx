import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ImageA from '../assets/ImageA.jpg';
import ImageB from '../assets/ImageB.jpg';
import ImageC from '../assets/ImageC.jpg';
import '../style.css';  

function Image() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={ImageA} className="d-block w-100" data-bs-interval="2000" alt="First slide" style={{ width: "100px", height: "350px" }} />
        </div>
        <div className="carousel-item">
          <img src={ImageB} className="d-block w-100" data-bs-interval="2000" alt="Second slide" style={{ width: "100px", height: "350px" }}  />
        </div>
        <div className="carousel-item">
          <img src={ImageC} className="d-block w-100" data-bs-interval="2000" alt="Third slide" style={{ width: "100px", height: "350px" }} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Image;
