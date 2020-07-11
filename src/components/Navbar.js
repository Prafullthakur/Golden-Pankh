import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../assets/logo.jpg";
const Navbar = (props) => {
  if (
    props.location.pathname === "/dashboard" ||
    props.location.pathname === "/addProduct" ||
    props.location.pathname === "/social" ||
    props.location.pathname === "/admin"
  )
    return null;

  return (
    <div
      className="First"
      style={{
        background: `url(https://tiimg.tistatic.com/catalogs/template52566/bg.jpg) no-repeat`,
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <nav class="navbar sticky-top navbar-expand-lg navbar-light py-4">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <img src={logo} style={{ height: 26, width: 62, marginRight: 12 }} />

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="/" style={{ color: "white" }}>
            Golden Pankh Export Import
          </a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item pl-2">
              <a class="nav-link" href="/" style={{ color: "white" }}>
                Home
              </a>
            </li>
            <li class="nav-item pl-2">
              <a
                class="nav-link"
                href="/company-profile"
                style={{ color: "white" }}
              >
                Company Profile
              </a>
            </li>
            <li class="nav-item dropdown pl-2">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                Our Products
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="/home-decor">
                  Home Decorative Items
                </a>
                <a class="dropdown-item" href="/metal-urns">
                  Metal Urns
                </a>
                <a class="dropdown-item" href="/christmas">
                  Christmas Decoration Items
                </a>
                <a class="dropdown-item" href="/decorative">
                  Decorative Chandelier
                </a>
                <a class="dropdown-item" href="/candle-holder">
                  Candle Holder
                </a>
                <a class="dropdown-item" href="/metal-handicrafts">
                  Metal Handicrafts
                </a>
                <a class="dropdown-item" href="/flower">
                  Flower Vase
                </a>
                <a class="dropdown-item" href="/mdf-frame">
                  MDF Frame
                </a>
                <a class="dropdown-item" href="/alphabet-items">
                  Decorative Alphabets Letters
                </a>
                <a class="dropdown-item" href="/jwelled-mirror">
                  Jewelled Mirror
                </a>
                <a class="dropdown-item" href="/farmstead">
                  Farmstead Finials
                </a>
                <a class="dropdown-item" href="/ppe-kit">
                  PPE kit; Full Body Gown,
                  <br /> Goggles, Masks, Waste Bags
                </a>
              </div>
            </li>
            <li class="nav-item pl-2">
              <a class="nav-link" href="/contact" style={{ color: "white" }}>
                Contact Us
              </a>
            </li>
          </ul>
          <div class="language">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Select Language <i class="fa fa-downarrow"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                English
              </a>
              <a class="dropdown-item" href="#">
                Spanish
              </a>
              <a class="dropdown-item" href="#">
                French
              </a>
              <a class="dropdown-item" href="#">
                German
              </a>
              <a class="dropdown-item" href="#">
                Italian
              </a>
              <a class="dropdown-item" href="#">
                Chinese (Simplified)
              </a>
              <a class="dropdown-item" href="#">
                Japanese
              </a>
              <a class="dropdown-item" href="#">
                Korean
              </a>
              <a class="dropdown-item" href="#">
                Arabic
              </a>
              <a class="dropdown-item" href="#">
                Portuguese
              </a>
            </div>
          </div>
          <form class="form-inline my-2 my-lg-0 pl-4">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search Product/ Service"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
      <header class="pt-5 pb-4">
        <div class="motive text-center wow fadeInDown delay-3s">
          <div class="container pt-5">
            <div class="wow fadeInUp delay-3s">
              <h2 class="pt-5">
                INTEGRATION, CONTINUAL IMPROVEMENT AND AFFORDABILITY
              </h2>
              <h5 class="pb-3">FOR COMPLETE CUSTOMER SATISFACTION</h5>
              <hr style={{ background: "#fff" }} />
              <p>
                Get best quality home decor items like Candle Holder, Wall
                Decoration Items, Beaded Chandelier, Tea Lights, Display Stands,
                Velvet Products, etc., by dealing with us...
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default withRouter(Navbar);
