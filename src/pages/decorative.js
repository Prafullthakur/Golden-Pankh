import React from "react";
import Image1 from "../assets/Electric-Chandeliers.jpg";
import Image2 from "../assets/Handmade-Glass-Beaded-Chandelier.jpg";
import Image3 from "../assets/Handmade-Rope-Chandelier.jpg";
import Image4 from "../assets/Wire-Cut-Bucket-Chandelier.jpg";

export default function Decorative() {
  return (
    <>
      <section className="christmas">
        <div className="container">
          <p className="pt-4 pb-">
            <a href="/">Home</a> / <a href="/All-Products">Products</a> /
            Decorative Chandelier
          </p>
          <h3>Decorative Chandelier</h3>
          <p className="pb-4">
            Our exclusive range of Chandeliers is appropriate for all those, who
            prefer minimalistic and clean designs. These lighting fixtures will
            fit in all contemporary homes. There is no any lighting fixture that
            can compete with the beauty of these. Offered in various colors &
            tones, these ensure to add beauty as well as warmth to all spaces.
            Their designs donât make them bland or boring. Provided Chandeliers
            are the pieces of art that can draw in attention and proffer beauty
            & elegance to several spaces. Even when theyâre switched off, the
            fixtures reflect beauty and sophistication to several settings. Made
            from metal, jute and different others materials, these handmade &
            electrical illumination items ensure a graceful look and longevity.
            They can create a warm as well as hospitable atmosphere of
            conventional ceiling and beauteous wall lights.
          </p>
          <div className="prod mt-2">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image1} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">ELECTRIC CHANDELIERS</a>
                  </h4>
                  <h6>Price: 34.55 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Delivery Time: 60 Days</p>
                      </div>
                      <div className="col-md-6">
                        <p>Supply Ability:1000 PIECE Per Month</p>
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
          <div className="prod mt-2 mb-3">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image2} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">HANDMADE GLASS BEADED CHANDELIERS</a>
                  </h4>
                  <h6>Price: 1.50 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Regional Style: Indian</p>
                        <p>
                          Feature:Other , Easy To Install, Light Weight,
                          Washable, Easy To Clean, Durable
                        </p>
                        <p>
                          Color: Antique clear glass beads and iron rusted frame
                        </p>
                        <p>Material: Glass</p>
                        <p>Delivery Time: 60 Days</p>
                      </div>
                      <div className="col-md-6">
                        <p>Technique: Other</p>
                        <p>Product Type: Decoration</p>
                        <p>Length: 7 Centimeter (cm)</p>
                        <p>Finishing: Other</p>
                        <p>Supply Ability: 10000 pcs Per Month</p>
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

          <div className="prod mt-2 mb-3">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image3} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">HANDMADE ROPE CHANDELIERS</a>
                  </h4>
                  <h6>Price: 35.65 USD ($)</h6>
                  <hr />
                  <p>
                    Handmade rope chandelier in natural rope. Available in
                    different sizes and finishes.
                  </p>
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

          <div className="prod mt-2 mb-3">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image4} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">WIRE CUT BUCKET CHANDELIER</a>
                  </h4>
                  <h6>Price: 13.65 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Delivery Time: 60 Days</p>
                        <p>Regional Style: Indian</p>
                        <p>Product Type: Decoration</p>
                        <p>Length: 25.5 Centimeter (cm)</p>
                        <p>Material: Metal</p>
                      </div>
                      <div className="col-md-6">
                        <p>Supply Ability: 5000 pieces Per Month</p>
                        <p>Technique: Handmade</p>
                        <p>
                          Feature:Other , Easy To Install, Recyclable, Hygienic,
                          Light Weight, Moisture Proof, Rust Proof, Washable,
                          Easy To Clean, Durable, Water Resistance, Fireproof
                          Standard, Eco-Friendly
                        </p>
                        <p>Color: Zinc antiqued</p>
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
        </div>
      </section>
    </>
  );
}
