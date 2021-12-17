import React from 'react';
import '../scss/main.scss'
function Footer() {

    return (
<footer className="pt-6 border-top">
  <div className="container">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4">
      <div className="col mb-5 mb-lg-0">
        <div className="footer-title">The Shop</div>
        <ul className="list-unstyled">
          <li><a href="#!" className="footer-link">Home</a></li>
          <li><a href="#!" className="footer-link">My account</a></li>
          <li><a href="#!" className="footer-link">Checkout</a></li>
          <li><a href="#!" className="footer-link">Cart</a></li>
          <li><a href="#!" className="footer-link">Order Tracking</a></li>
        </ul>
      </div>
      <div className="col mb-5 mb-lg-0">
        <div className="footer-title">INFORMATION</div>
        <ul className="list-unstyled">
          <li><a href="#!" className="footer-link">About Us</a></li>
          <li><a href="#!" className="footer-link">Delivery Information</a></li>
          <li><a href="#!" className="footer-link">Returns</a></li>
          <li><a href="#!" className="footer-link">Terms &amp; Conditions</a></li>
          <li><a href="#!" className="footer-link">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="col mb-5 mb-lg-0">
        <div className="footer-title">EXTRAS</div>
        <ul className="list-unstyled">
          <li><a href="#!" className="footer-link">Our Brands</a></li>
          <li><a href="#!" className="footer-link">Special Offers</a></li>
          <li><a href="#!" className="footer-link">Gift Vouchers</a></li>
          <li><a href="#!" className="footer-link">Affiliates</a></li>
          <li><a href="#!" className="footer-link">Contacts</a></li>
        </ul>
      </div>
      <div className="col">
        <div className="footer-title">CUSTOMER CARE</div>
        <ul className="list-unstyled">
          <li className="footer-item"><i className="fas fa-clock" /><span>Monday - Friday: 09:00 - 18:30</span></li>
          <li className="footer-item"><i className="fas fa-map-marker" /><span>1600 7th Avenue, Seattle, WA 98101</span></li>
          <li className="footer-item"><i className="fas fa-phone" /><span>+1.888.292.7171</span></li>
          <li className="footer-item"><i className="fas fa-fax" /><span>+1.888.292.7272</span></li>
          <li className="footer-item"><i className="fas fa-envelope" /><span><a href="mailto:shop@rigid.con">shop@rigid.con</a></span></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="container mt-6">
    <div className="row row-cols-1 row-cols-sm-2 justify-content-between">
      <div className="col">
        <ul className="list-unstyled footer-scoial-links">
          <li><a title="Follow on Facebook" className="facebook" target="_blank" href="#"><i className="fab fa-facebook-f" /></a></li>
          <li><a title="Follow on Twitter" className="twitter" target="_blank" href="#"><i className="fab fa-twitter" /></a></li>
          <li><a title="Follow on Instagram" className="instegram" target="_blank" href="#"><i className="fab fa-instagram" /></a></li>
          <li><a title="Follow on Pinterest" className="pinterest" target="_blank" href="#"><i className="fab fa-pinterest" /></a>
          </li>
        </ul>
      </div>
      <div className="col">
        <div className="author-credits text-sm-end mb-3 mb-lg-0">
          <span>Rigid theme by </span>
          <a target="_blank" title href="#!">theAlThemist</a>
          <span> | © 2019 All rights reserved!</span>
        </div>
      </div>
    </div>
  </div>
</footer>

    );
}

export default Footer;
