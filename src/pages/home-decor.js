import React from "react";
import firebase from "firebase";

// components
import Product from "../components/Product";

// Images
import Image1 from "../assets/Riser-Planter.jpg";
import Image2 from "../assets/Wall-Iron-Wreath.jpg";
import Image3 from "../assets/Metal-Decorative-Plant.jpg";
import Image4 from "../assets/Decorative-Hypercube.jpg";
import Image5 from "../assets/Wall-Decor-Wreath.jpg";
import Image6 from "../assets/Decorative-Bird-Nest.jpg";
import Image7 from "../assets/Decorative-Display-Stand.jpg";
import Image8 from "../assets/Decorative-Bird-Cage.jpg";
import Image9 from "../assets/Handmade-Succulent.jpg";
import Image10 from "../assets/Bird-Ornament.jpg";
import Image11 from "../assets/Alumunium-Casted-Crow-Bird.jpg";
import Image12 from "../assets/Decorative-Display-Stand.jpg";
import Image13 from "../assets/Handmade-French-Wirework-Bird-Cage.jpg";
import Image14 from "../assets/Decorative-Pot-with-plant.jpg";
import Image15 from "../assets/Handmade-Sacred-Hearts.jpg";
import Image16 from "../assets/Handmade-Wirework-Peacock.jpg";
import Image17 from "../assets/Handmade-Decorative-Finial.jpg";
import Image18 from "../assets/Metal-Decorative-Crown.jpg";
import Image19 from "../assets/Metal-Geometrical-Star.jpg";
import Image20 from "../assets/Wirework-Glass-Ornament.jpg";
import Image21 from "../assets/Handmade-Christmas-Tree-Topper.jpg";
import Image22 from "../assets/Handmade-Kerchief-Planter.jpg";
import Image23 from "../assets/Display-Dome.jpg";
import Image24 from "../assets/Iron-Ferris-Wheel.jpg";
import Image25 from "../assets/Iron-Handmade-Decor.jpg";
import Image26 from "../assets/Tripple-Arrow-Wall-Decor.jpg";

export default function HomeDecor() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    firebase
      .firestore()
      .collection("Products/")
      .get()
      .then((data) => {
        data.forEach((doc) => {
          setProducts([...products, doc.data()]);
        });
      });
  }, []);

  return (
    <>
      <section className="home-decor">
        <div className="container">
          <p className="pt-4 pb-">
            <a href="/">Home</a> / <a href="/All-Products">Products</a> / Home
            Decorative Items
          </p>
          <h3>Home Decorative Items</h3>
          <p className="pb-4">
            Decorate your home with our provided impressive collection of
            premium quality Home Decorative Items which includes numerous
            options for you to choose. In this range, we have Metal Geometrical
            Star, Handmade Succulent, Sacred Hearts, Display Domes, Iron Ferris
            Wheel and more. These are used for enhancing the appearance of the
            living area, bed room etc. Moreover, our Home Decorative Items can
            be placed on the table, shelf, corner etc. as they will give an
            alluring appearance with their stunning designs, elegant
            presentation and vintage structure.
          </p>

          {products.map((product) => (
            <Product data={product} />
          ))}

          <div className="prod mt-2">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image1} />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="/riser-planter">Rise Planter</a>
                  </h4>
                  <h6>Price: 14.85 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Supply Ability: 1000 PIECE Per Month</p>
                      </div>
                      <div className="col-md-6">
                        <p>Delivery Time: 60 Days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image2} />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="/wall-iron">WALL IRON WREATH</a>
                  </h4>

                  <h6>Price: 7.25 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Size: 40x40 cm</p>
                        <p>Material: Metal</p>
                        <p>Supply Ability: 5000 Per Month</p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          Feature: Other , Easy To Install, Non Toxic, Easy To
                          Clean, Durable
                        </p>
                        <p>Delivery Time: 60 Days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <img src={Image3} />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="/metal-decor">METAL DECORATIVE PLANT</a>
                  </h4>

                  <h6>Price: 7.50 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>
                          Feature: Other , Easy To Install, Easy To Clean,
                          Durable
                        </p>
                        <p>Product Type: Decorative</p>
                        <p>Supply Ability: 5000 Per Month</p>
                      </div>
                      <div className="col-md-6">
                        <p>Size: 13x13x14 cm</p>
                        <p>Style: 5596</p>
                        <p>Delivery Time: 60 Days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image4} />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="/Hypercube">DECORATIVE HYPERCUBE</a>
                  </h4>

                  <h6>Price: 15.55 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Style: 6272</p>
                        <p>Product Type:Geometrical shape</p>
                        <p>
                          Feature:Other , Easy To Install, Easy To Clean,
                          Durable
                        </p>
                        <p>Color: Rusty lacquered</p>
                        <p>Supply Ability: 1000 Per Month</p>
                      </div>
                      <div className="col-md-6">
                        <p>Techniques: Welded</p>
                        <p>Style: 42x42 cm</p>
                        <p>Surface Treatment: Other</p>
                        <p>Delivery Time: 60 Days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image5} />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="/wall-decor">WALL DECOR WREATH</a>
                  </h4>

                  <h6>Price: 16.95 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Delivery Time: 60 Days</p>
                        <p>Techniquess: Welding</p>
                        <p>Surface Treatment: Other</p>
                        <p>Product Type: Wreath</p>
                        <p>Color: Antique</p>
                      </div>
                      <div className="col-md-6">
                        <p>Supply Ability: 2000 Per Month</p>
                        <p>Size: 620x60met</p>
                        <p>Style: 6420</p>
                        <p>Material:Metal</p>
                        <p>Shape:Round</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image6} />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="/bird-nest">DECORATIVE BIRD NEST</a>
                  </h4>

                  <h6>Price: 5.5 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Supply Ability: 1000 PIECE Per Month</p>
                      </div>
                      <div className="col-md-6">
                        <p>Delivery Time: 60 Days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image7} />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="/display-stand">DECORATIVE DISPLAY STAND</a>
                  </h4>

                  <h6>Price: 19.85 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Delivery Time: 60 Days</p>
                      </div>
                      <div className="col-md-6">
                        <p>Supply Ability: 1000 PIECE Per Month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image8} />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">DECORATIVE BIRD CAGE</a>
                  </h4>

                  <h6>Price: 39.95 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Delivery Time: 60 Days</p>
                      </div>
                      <div className="col-md-6">
                        <p>Supply Ability: 1000 PIECE Per Month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image9} />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">HANDMADE SUCCULENT</a>
                  </h4>

                  <h6>Price: 18.00 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Theme: Other</p>
                        <p>Height: 45 Centimeter (cm)</p>
                        <p>Finishing: Other</p>
                        <p>Material: Metal</p>
                        <p>Delivery Time: 60 Days</p>
                      </div>
                      <div className="col-md-6">
                        <p>Metals Type: Iron</p>
                        <p>Width: 40 Centimeter (cm)</p>
                        <p>Technique: Handmade</p>
                        <p>Product Type: Decoration</p>
                        <p>Supply Ability: 2000 PIECE Per Month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3v">
                  <img src={Image10} />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">BIRD ORNAMENT</a>
                  </h4>

                  <h6>Price: 1.25 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>
                          Feature:Water Resistance, Other , Easy To Install,
                          Light Weight, Washable, Easy To Clean, Durable
                        </p>
                        <p>Color: Zink antique</p>
                        <p>Style:Artificial</p>
                        <p>Material: Metal</p>
                        <p>Delivery Time: 60 Days</p>
                      </div>
                      <div className="col-md-6">
                        <p>Regional Style: Indian</p>
                        <p>Length: 12 Centimeter (cm)</p>
                        <p>Product Type: Decoration</p>
                        <p>Technique:Handmade</p>
                        <p>Supply Ability: 10000 PIECE Per Month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image11} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">ALUMINIUM CASTED CROW BIRD</a>
                  </h4>

                  <h6>Price: 9.95 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Theme: Bird</p>
                        <p>Finishing: Other</p>
                        <p>Height: 19 Centimeter (cm)</p>
                        <p>Material: Metal</p>
                        <p>Supply Ability: 5000 Pieces Per Month</p>
                      </div>
                      <div className="col-md-6">
                        <p>Metal Type: Aluminum</p>
                        <p>Width: 9 Centimeter (cm)</p>
                        <p>Technique: Casting</p>
                        <p>Product Type: Decoration</p>
                        <p>Delivery Time: 60 Days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image12} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="/display-stand">METAL DISPLAY STAND</a>
                  </h4>

                  <h6>Price: 9.95 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Metal display stand</p>
                      </div>
                      <div className="col-md-6"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image13} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">HANDMADE FRENCH WIREWORK BIRD CAGE</a>
                  </h4>

                  <h6>Price: 9.95 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Supply Ability:2500 pcs Per Month</p>
                        <p>Width:31 Centimeter (cm)</p>
                        <p>Finishing: Rust</p>
                        <p>Metals Type: Iron</p>
                        <p>Color: Rusty with lacquer coat</p>
                      </div>
                      <div className="col-md-6">
                        <p>Delivery Time: 90 Days</p>
                        <p>Height: 60 Centimeter (cm)</p>
                        <p>Technique: Handmade</p>
                        <p>Theme: Other</p>
                        <p>
                          Feature: Other, Easy To Install, Light Weight, Easy To
                          Clean, Durable
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image14} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">DECORATIVE POT WITH PLANT</a>
                  </h4>

                  <h6>Price: 7.50 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Delivery Time: 60 Days</p>
                        <p>Metals Type: Iron</p>
                        <p>Height: 14 Centimeter (cm)</p>
                        <p>Finishing: Rust</p>
                        <p>Length: 13 Centimeter (cm)</p>
                      </div>
                      <div className="col-md-6">
                        <p>Supply Ability: 5000 pcs Per Month</p>
                        <p>Theme: Decoration</p>
                        <p>Width: 13 Centimeter (cm)</p>
                        <p>Technique: Other</p>
                        <p>Style: Antique Imitation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image15} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">HANDMADE SACRED HEARTS</a>
                  </h4>

                  <h6>Price: 29.50 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Delivery Time: 60 Days</p>
                        <p>Theme: Decoration</p>
                        <p>Height: 38 Centimeter (cm)</p>
                        <p>Finishing: Other</p>
                        <p>Product Type: Decoration</p>
                      </div>
                      <div className="col-md-6">
                        <p>Supply Ability: 5000 pcs Per Month</p>
                        <p>Metals Type: Iron</p>
                        <p>Width: 19 Centimeter (cm)</p>
                        <p>Technique: Other</p>
                        <p>Length: 19 Centimeter (cm)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image16} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">HANDMADE WIREWORK PEACOCK</a>
                  </h4>

                  <h6>Price: 29.50 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Product Type: Decoration </p>
                        <p>Length: 40 Centimeter (cm)</p>
                        <p>Style: Antique Imitation</p>
                        <p>
                          Feature: Other , Easy To Install, Moisture Proof,
                          Corrosion Resistant, Scratch Resistant, Recyclable,
                          Non Toxic, Light Weight, Rust Proof, Washable, Easy To
                          Clean, Durable, Eco-Friendly
                        </p>
                        <p>Supply Ability: 5000 pieces Per Month</p>
                      </div>
                      <div className="col-md-6">
                        <p>Material:Other</p>
                        <p>Fabric Type:Other</p>
                        <p>Width:19 Centimeter (cm)</p>
                        <p>Color:ALL PENTONE COLORS ARE AVAILABLE</p>
                        <p>Delivery Time:3-5 Days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image17} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">HANDMADE DECORATIVE FINIAL</a>
                  </h4>

                  <h6>Price: 50 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Width: 14 Centimeter (cm)</p>
                        <p>Height: 98 Centimeter (cm)</p>
                        <p>Theme: Other</p>
                        <p>Color: Zinc antique</p>
                        <p>Delivery Time: 60 Days</p>
                      </div>
                      <div className="col-md-6">
                        <p>Finishing: Other</p>
                        <p>Technique: Welding</p>
                        <p>Metals Type: Iron</p>
                        <p>Regional Style: Indian</p>
                        <p>Supply Ability: 500 Per Month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image18} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">METAL DECORATIVE CROWN</a>
                  </h4>

                  <h6>Price: 7 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Theme: Decoration</p>
                        <p>Technique: Other</p>
                        <p>Height: 13 Centimeter (cm)</p>
                        <p>Product Type: Decoration</p>
                        <p>Supply Ability: 5000 Per Month</p>
                      </div>
                      <div className="col-md-6">
                        <p>Metals Type: Iron</p>
                        <p>Width: 20 Centimeter (cm)</p>
                        <p>Finishing: Gold</p>
                        <p>Material: Metal</p>
                        <p>Delivery Time: 45 Days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image19} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">METAL GEOMETRICAL STAR</a>
                  </h4>

                  <h6>Price: 12.00 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Delivery Time: 90 Days</p>
                        <p>Material: Metal</p>
                        <p>Length: 23 Centimeter (cm)</p>
                        <p>Product Type: Decoration</p>
                        <p>
                          Feature: Other , Easy To Install, Light Weight, Easy
                          To Clean, Durable
                        </p>
                        <p>Regional Style: Indian</p>
                      </div>
                      <div className="col-md-6">
                        <p>Supply Ability:1500 Per Month</p>
                        <p>Product Type:Decoration</p>
                        <p>Style:Antique Imitation</p>
                        <p>Color:Rusty</p>
                        <p>Theme:Other</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image20} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">WIREWORK GLASS ORNAMENT</a>
                  </h4>

                  <h6>Price: 2 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Theme: Decoration</p>
                        <p>Technique: Other</p>
                        <p>Height: 10 Centimeter (cm)</p>
                        <p>Product Type: Decoration</p>
                        <p>Material: Glass</p>
                        <p>Supply Ability: 100000 Per Month</p>
                      </div>
                      <div className="col-md-6">
                        <p>Metals Type:Other</p>
                        <p>Width:10 Centimeter (cm)</p>
                        <p>Finishing:Other</p>
                        <p>Product Type:Decoration</p>
                        <p>Delivery Time:30 Days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image21} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">HANDMADE CHRISTMAS TREE TOPPER</a>
                  </h4>

                  <h6>Price: 6.25 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Product Type: Decoration</p>
                        <p>Style: Antique Imitation</p>
                        <p>Regional Style: Indian</p>
                        <p>Theme: Decoration</p>
                        <p>Delivery Time: 60 Days</p>
                      </div>
                      <div className="col-md-6">
                        <p>Material: Metal</p>
                        <p>
                          Feature: Other , Easy To Install, Light Weight, Rust
                          Proof, Washable, Easy To Clean, Durable
                        </p>
                        <p>Color: Antique</p>
                        <p>Metals Type: Iron</p>
                        <p>Supply Ability: 3000 Per Month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image22} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">HANDMADE KERCHIEF PLANTER</a>
                  </h4>

                  <h6>Price: 6.95 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Supply Ability: 5000 Per Month</p>
                        <p>
                          Feature: Other , Easy To Install, Corrosion Resistant,
                          Light Weight, Rust Proof, Washable, Easy To Clean,
                          Durable
                        </p>
                        <p>Color: Zink antiqued</p>
                        <p>Product Type: Other</p>
                        <p>Length: 23 Centimeter (cm)</p>
                      </div>
                      <div className="col-md-6">
                        <p>Delivery Time: 60 Days</p>
                        <p>Regional Style: Indian</p>
                        <p>Material: Metal</p>
                        <p>Style: Antique Imitation</p>
                        <p>Technique: Handmade</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image23} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">DISPLAY DOME</a>
                  </h4>

                  <h6>Price: 14.65 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>
                          Feature: Other , Easy To Install, Non Toxic, Rust
                          Proof, Washable, Easy To Clean, Durable, Water
                          Resistance, Fireproof Standard
                        </p>
                        <p>Regional Style: Indian</p>
                        <p>Material: Other</p>
                        <p>Technique: Other</p>
                        <p>Delivery Time: 60 Days</p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          Color:Clear glass, ruted nails & antiqued grey mdf
                          base. All finishes are available.
                        </p>
                        <p>Style: Other</p>
                        <p>Product Type: Decoration</p>
                        <p>Finishing: Other</p>
                        <p>Supply Ability: 5000 Pieces Per Month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image24} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">IRON FERRIS WHEEL</a>
                  </h4>

                  <h6>Price: 16.00 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Delivery Time: 60 Days</p>
                        <p>
                          Feature: Other , Easy To Install, Easy To Clean,
                          Durable
                        </p>
                        <p>Regional Style: Indian</p>
                        <p>Material: Metal</p>
                        <p>Style: Antique Imitation</p>
                      </div>
                      <div className="col-md-6">
                        <p>Supply Ability:5000 pieces Per Month</p>
                        <p>Color:Natural rustic with lacquer coated</p>
                        <p>Product Type:Decoration</p>
                        <p>Length:50 Centimeter (cm)</p>
                        <p>Technique:Other</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image25} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">IRON HANDMADE DECOR</a>
                  </h4>

                  <h6>Price: 35.50 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Metals Type: Iron</p>
                        <p>Technique: Other</p>
                        <p>Technique: Other</p>
                        <p>Style: Antique Imitation</p>
                        <p>Delivery Time: 60 Days</p>
                      </div>
                      <div className="col-md-6">
                        <p>Theme:Decoration</p>
                        <p>Height:60 Centimeter (cm)</p>
                        <p>Length:34 Centimeter (cm)</p>
                        <p>Product Type:Decoration</p>
                        <p>Supply Ability:2000 pcs Per Month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />

          <div className="prod">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image26} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">TRIPPLE ARROW WALL DECOR</a>
                  </h4>

                  <h6>Price: 35.50 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Delivery Time: 60 Days</p>
                        <p>Color: Gilded gold</p>
                        <p>
                          Feature: Hygienic, Non Toxic, Light Weight, Rust
                          Proof, Washable, Easy To Clean, Durable, Water
                          Resistance
                        </p>
                        <p>Product Type: Sculpture</p>
                        <p>Height: 39 Centimeter (cm)</p>
                      </div>
                      <div className="col-md-6">
                        <p>Supply Ability: 100000 Per Month</p>
                        <p>Regional Style: Indian</p>
                        <p>Style: Antique Imitation</p>
                        <p>Material: Metal</p>
                        <p>Width: 28 Centimeter (cm)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-3 pb-4">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>

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
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div className="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <input
                              type="file"
                              className="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div className="form-row">
                            <div className="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div className="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer text-center">
                        <button type="button" className="btn btn-warning">
                          SEND ENQUIRY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </section>
    </>
  );
}
