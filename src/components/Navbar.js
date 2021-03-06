import React from "react";
import { withRouter } from "react-router-dom";
import logo from "../assets/logo.png";
import firebase from "firebase";
import SearchIcon from "@material-ui/icons/Search";
import Contact from "../pages/user/contact";

const Navbar = ({ location, handleSearch }) => {
  const [social, setSocial] = React.useState({});
  const [categories, setCategories] = React.useState({});
  const [catalog, setCatalog] = React.useState("");
  const [showScroll, setShowScroll] = React.useState("transparent");
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    firebase
      .firestore()
      .collection("Meta")
      .get()
      .then((data) => {
        data.forEach((doc) => {
          if (doc.id === "social") {
            setSocial(doc.data());
          } else if (doc.id === "categories") {
            setCategories(doc.data());
          } else if (doc.id === "3dCatalog") {
            setCatalog(doc.data().link);
          }
        });
      })
      .catch((err) => {
        console.log(err);
        alert("An error Occured");
      });
  }, []);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 40) {
      setShowScroll("#052301");
    } else if (window.pageYOffset < 40) {
      setShowScroll("transparent");
    }
  });

  const notAllowedPaths = [
    "/dashboard",
    "/addProduct",
    "/social",
    "/admin",
    "/changePassword",
    "/catalog",
    "/not-found",
  ];

  if (notAllowedPaths.includes(location.pathname)) return null;

  return (
    <div
      className="First"
      style={{
        background: `url(https://tiimg.tistatic.com/catalogs/template52566/bg.jpg) no-repeat`,
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <nav
        class="navbar sticky-top navbar-expand-lg py-4"
        style={{ background: showScroll }}
      >
        {" "}
        <button
          class="navbar-toggler custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <img
          alt="logo"
          src={logo}
          style={{ height: 26, width: 62, marginRight: 12 }}
        />
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          Golden Pankh Export Import
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
                {Object.keys(categories)
                  .sort()
                  .map((cat) => {
                    let href = `/prodCatDefault?category=${cat}`;
                    return (
                      <a class="dropdown-item" href={href}>
                        {cat}
                      </a>
                    );
                  })}
              </div>
            </li>
            <li class="nav-item pl-2">
              <a class="nav-link" href="/contact" style={{ color: "white" }}>
                Contact Us
              </a>
            </li>
          </ul>
          {/* <div class="language">
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
            </div> */}
          <form
            class="form-inline my-2 my-lg-0 pl-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(search);
            }}
          >
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search Product/Service"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchIcon onClick={() => handleSearch(search)} />
          </form>
        </div>
      </nav>

      <header class="pt-5 pb-4 px-5">
        <div class="motive text-center wow fadeInDown delay-3s">
          <div class="pt-5">
            <div class="wow fadeInUp delay-3s">
              <img
                className="nav-img"
                src={
                  "https://tiimg.tistatic.com/catalogs/template52566/punchline.png"
                }
              />
              <div className="nav-nonimg">
                <h2 class="pt-5">
                  INTEGRATION,{" "}
                  <span
                    style={{ color: "rgb(33, 198, 12)", fontWeight: "bold" }}
                  >
                    CONTINUAL IMPROVEMENT
                  </span>{" "}
                  AND AFFORDABILITY
                </h2>
                <h5
                  class="pb-3"
                  style={{
                    fontWeight: "400",
                    opacity: "0.8",
                    fontFamily: "Arial",
                  }}
                >
                  FOR COMPLETE CUSTOMER SATISFACTION
                </h5>
              </div>
              <p
                style={{ fontStyle: "italic", fontWeight: "400", fontSize: 18 }}
              >
                Get best quality home decor items like Candle Holder, Wall
                Decoration Items, Beaded Chandelier, Tea Lights, Display Stands,
                Velvet Products, etc., by dealing with us...
              </p>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="social-button">
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

          <div className="btn3">
            <a
              className="callme"
              href={catalog}
              target="blank"
              rel="noreferrer noopener"
            >
              Visit Our 3D Catalog
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default withRouter(Navbar);
