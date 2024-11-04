import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Qrcode from "../assets/Qrcode.png";
import React from "react";
import "../style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              Mealsurplus is dedicated to reducing food waste by rerouting
              excess food to those in need. Join us in making a difference!
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: Shahbaz.anjoom@nprservices.in</li>
              <li>Phone: 6287011200</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://instagram.com">Intagram</a>
              </li>
              <li>
                <a href="https://Linkdin.com">Linkdin</a>
              </li>
              <li>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Mealsurplus</h5>
            <h6>Our Impact</h6>
            <h6>Press</h6>
            <h6>careers</h6>
          </div>
          <div className="col-md-4">
            <h5>Scan this QR code to dawnload the resource code</h5>
            <img src={Qrcode} alt="QR Code" className="qr-code" style={{ width: "75%", height: "75%"}}/>
          </div>
        </div>
        <div className="text-center py-3">
          <small> 2024 Mealsurplus. All rights reserved.</small>
          <small> Thank you NPRS</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
