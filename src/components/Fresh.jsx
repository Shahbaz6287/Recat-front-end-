import React from "react";
import "../style.css"; 
import "bootstrap/dist/css/bootstrap.min.css";
import FreshImageA from '../assets/FreshImageA.jpg';
import FreshImageB from '../assets/FreshImageB.jpg';


function Fresh() {
  return (
    <div className="banner-container">
      <div className="banner">
        <img
          src={FreshImageA}
          className="banner-img hover-effect"
          alt="Fruits & Vegetables"
        />
        <div className="banner-text">
          <h2>Fruits & Vegetables</h2>
          <p>Get Upto 30% Off</p>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="banner">
        <img
          src={FreshImageB}
          className="banner-img hover-effect"
          alt="Freshly Baked Buns"
        />
        <div className="banner-text">
          <h2>Freshly Baked Buns</h2>
          <p>Get Upto 25% Off</p>
          <button>Shop Now</button>
        </div>
      </div>
     
    </div>
  );
}

export default Fresh;
