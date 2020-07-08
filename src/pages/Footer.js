import React from "react";

const Footer = () => (
  <footer>
    <div class="container">
      <h4>GOLDEN PANKH EXPORT IMPORT</h4>
      <div class="row">
        <div class="col-md-8">
          <i class="fa fa-map-marker"></i>
          Block-A, Lane No.-2 Plot No.-20, Govind Nagar, Moradabad - 244001,
          Uttar Pradesh, India <br /> <strong> Phone : </strong>08037302152
        </div>
        <div class="col-md-4">
          <i class="fa fa-user"></i>
          Mr Naresh Vatsal (Partner) <br /> <strong>Mobile :</strong>08037302152
        </div>
      </div>
      <br />
      <div class="enquire">
        <a href="/contact" class="enquiry">
          SEND ENQUIRY
        </a>
      </div>
      <div class="text-center mt-3">
        <a href="/All-Products">
          <button type="submit" class="btn btn-danger text-center">
            View All Products
          </button>
        </a>
      </div>
      <br />
      <div class="row">
        <div class="col-md-6">
          <p class="text-center follow">Follow us on:</p>
          <div class="social-media">
            <a href="#">
              <i class="fa fa-facebook-square"></i>
            </a>

            <a href="#">
              <i class="fa fa-twitter-square"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin-square"></i>
            </a>
            <a href="https://api.whatsapp.com/send?phone=919328503054&text=I+need+logo+for+my+business%F0%9F%91%88">
              <i class="fa fa-whatsapp"></i>
            </a>
            <a href="#">
              <i class="fa fa-youtube-play"></i>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <p class="copyright">
            GOLDEN PANKH EXPORT IMPORT All Rights Reserved.{" "}
            <a href="https://www.tradeindia.com/about-us/terms/terms_01.html">
              {" "}
              (Terms of Use)
            </a>{" "}
            <br /> Developed and Managed by Augur IT Consulting Pvt. Ltd
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
