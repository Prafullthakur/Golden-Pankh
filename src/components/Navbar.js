import React from "react";
import { withRouter } from "react-router-dom";

const Navbar = (props) => {
  if (
    props.location.pathname === "/dashboard" ||
    props.location.pathname === "/addProduct"
  )
    return null;
  return (
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
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="/">
          Golden Pankh Export Import
        </a>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item pl-2">
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          <li class="nav-item pl-2">
            <a class="nav-link" href="/company-profile">
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
            >
              Our Products
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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
            <a class="nav-link" href="/contact">
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
  );
};

export default withRouter(Navbar);
