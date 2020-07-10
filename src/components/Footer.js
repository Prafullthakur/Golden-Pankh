import React from "react";
import firebase from "firebase";
const Footer = () => {
  const [state, setState] = React.useState({});
  React.useEffect(() => {
    firebase
      .firestore()
      .doc("Meta/XMyJ3LtZ3MMvUztddKXx")
      .get()
      .then((data) => {
        setState(data.data());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <footer>
      <div class="container" style={{ color: "white" }}>
        <h4>GOLDEN PANKH EXPORT IMPORT</h4>
        <div class="row">
          <div class="col-md-8">
            <i class="fa fa-map-marker"></i>
            Block-A, Lane No.-2 Plot No.-20, Govind Nagar, Moradabad - 244001,
            Uttar Pradesh, India <br /> <strong> Phone : </strong>08037302152
          </div>
          <div class="col-md-4">
            <i class="fa fa-user"></i>
            Mr Naresh Vatsal (Partner) <br /> <strong>Mobile :</strong>
            08037302152
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
              <a href={state.facebook} target="_blank">
                <i class="fa fa-facebook-square"></i>
              </a>

              <a href={state.twitter}>
                <i class="fa fa-twitter-square"></i>
              </a>
              <a href={state.instagram}>
                <i class="fa fa-instagram"></i>
              </a>
              <a href={state.linkedin}>
                <i class="fa fa-linkedin-square"></i>
              </a>
              <a href={state.whatsapp}>
                <i class="fa fa-whatsapp"></i>
              </a>
              <a href={state.youtube}>
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
};

export default Footer;
