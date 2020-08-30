import React from "react";
import firebase from "firebase";
import { withRouter } from "react-router-dom";
import Contact from "../pages/user/contact";
import Copyright from "./copyright";

const Footer = ({ location }) => {
  const [social, setSocial] = React.useState({});

  React.useEffect(() => {
    firebase
      .firestore()
      .collection("Meta")
      .get()
      .then((data) => {
        data.forEach((doc) => {
          if (doc.id === "social") {
            setSocial(doc.data());
          }
        });
      })
      .catch((err) => {
        console.log(err);
        alert("An error Occured");
      });
  }, []);

  const notAllowedPaths = [
    "/dashboard",
    "/addProduct",
    "/social",
    "/catalog",
    "/admin",
    "/changePassword",
    "/not-found",
  ];

  if (notAllowedPaths.includes(location.pathname)) return null;

  return (
    <footer>
      <div class="container" style={{ color: "white" }}>
        <h4>GOLDEN PANKH EXPORT IMPORT</h4>
        <div class="row">
          <div class="col-md-8">
            <i class="fa fa-map-marker"></i> D-8, Harthala Industrial Estate,
            Kanth Road, Moradabad 244001, Uttar Pradesh India <br />{" "}
            <strong> Phone : </strong>059129-70888
          </div>
          <div class="col-md-4">
            <i class="fa fa-user"></i> Mr Naresh Vatsal (Partner) <br />{" "}
            <strong>Mobile : </strong>
            7417555555
          </div>
        </div>
        <br />
        <div className="footer-btn">
          <div className="btn1">
            <a
              className="send-enquiry"
              href={social.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
            >
              Send Whatsapp
            </a>
          </div>
          <div className="btn2">
            <a className="viewproducts" href="/all-products">
              View All Products
            </a>
          </div>
          <div className="btn3">
            <a
              className="send-enquiry"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Send Enquiry
            </a>
          </div>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <Contact />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-6">
            <p class="text-center follow">Follow us on:</p>
            <div class="social-media">
              <a href={social.facebook} target="_blank">
                <i class="fa fa-facebook-square"></i>
              </a>

              <a
                href={social.twitter}
                target="_blank"
                rel="noreferrer noopener"
              >
                <i class="fa fa-twitter-square"></i>
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer noopener"
              >
                <i class="fa fa-instagram"></i>
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                <i class="fa fa-linkedin-square"></i>
              </a>
              <a
                href={social.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
              >
                <i class="fa fa-whatsapp"></i>
              </a>
              <a
                href={social.youtube}
                target="_blank"
                rel="noreferrer noopener"
              >
                <i class="fa fa-youtube-play"></i>
              </a>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default withRouter(Footer);
