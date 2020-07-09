import React from "react";
import Image1 from "../../assets/Wall-Decoration-Leaf-Wreath.jpg";

export default function christmas() {
  return (
    <React.Fragment>
      <section className="christmas">
        <div className="container">
          <p className="pt-4 pb-">
            <a href="/">Home</a> / <a href="/All-Products">Products</a> /
            Christmas Decoration Items
          </p>
          <h3>Christmas Decoration Items</h3>
          <p className="pb-4">
            Our company deals in a vast range of Christmas Decoration Items such
            as glass ornament, wall decoration leaf wreath, etc. They are
            designed using high-grade raw materials like iron, steel, brass,
            etc. to ensure maximum durability and sturdiness. These items are
            provided with fine finishing and polishing that last for years to
            come. These Christmas Decoration Items are available in abrasion
            proof design with non-corrosive texture to ensure no abrasion as
            well as maintenance.{" "}
          </p>
          <div className="prod mt-2">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image1} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">WALL DECORATION LEAF WREATH</a>
                  </h4>
                  <h6>Price: 12.85 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Theme: Decoration</p>
                        <p>Regional Style: Indian</p>
                        <p>
                          Feature: Other , Easy To Install, Non Toxic, Light
                          Weight, Washable, Easy To Clean, Durable
                        </p>
                        <p>Material: Metal</p>
                        <p>Delivery Time: 60 Days</p>
                      </div>
                      <div className="col-md-6">
                        <p>Width: 48 Centimeter (cm)</p>
                        <p>Color: Antiqued zink</p>
                        <p>Metals Type: Iron</p>
                        <p>Product Type: Decoration</p>
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

          <div className="prod mt-2 mb-3">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src="img/Glass-Ornament.jpg" alt="" />
                </div>
                <div className="col-md-9">
                  <h4 className="pt-3">
                    <a href="#">GLASS ORNAMENT</a>
                  </h4>
                  <h6>Price: 2.10 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Supply Ability: 100000 pcs Per Month</p>
                        <p>Material: Glass</p>
                        <p>
                          Feature: Other , Easy To Install, Non Toxic, Light
                          Weight, Washable, Easy To Clean, Durable
                        </p>
                        <p>Style: Antique Imitation</p>
                        <p>Finishing: Other</p>
                        <p>Height: 11 Centimeter (cm)</p>
                      </div>
                      <div className="col-md-6">
                        <p>Delivery Time: 30 Days</p>
                        <p>
                          Feature: Other , Easy To Install, Light Weight, Easy
                          To Clean, Attractive, Durable
                        </p>
                        <p>Technique: Other</p>
                        <p>Length: 6.5 Centimeter (cm)</p>
                        <p>Product Type: Decoration</p>
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
    </React.Fragment>
  );
}
