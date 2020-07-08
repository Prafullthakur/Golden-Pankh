import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function birdnest() {
  return (
    <React.Fragment>
      <Navbar />
      <section className="mdf pb-4">
        <div className="container">
          <h5 className="pt-4 pb-3">
            <a href="/">Home</a> / <a href="/All-Products">Products</a> / Home
            Decorative Items
          </h5>
          <h3>Decorative Bird Nest</h3>
          <p className="pb-4">
            Spring is about to come and it is not too early to start your spring
            decoration at home. It runs well into your existing decor and
            enables the tint of nature in your home. Proffered with little
            softness as well as fluff, this embellishing nest runs well in all
            decors. It looks extremely pretty when paired with silver. Juts
            decorate it with some artificial eggs as well as birds and the
            gifting staple is set to go. Offered Bird Nest is appropriate for
            your spring picture and enables a beautiful home decor. It vitalizes
            a boring corner and makes it vivacious and attractive.
          </p>
          <div className="prod py-4">
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-8">
                <h3>Decorative Bird Nest</h3>
                <h6 className="price">Price: 5.5 USD ($)</h6>
                <h5>Products Details:</h5>
                <table>
                  <tr>
                    <td>Supply Ability:</td>
                    <td>1000 Piece Per Month</td>
                  </tr>
                </table>
              </div>
              <div className="container">
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
          </div>
          <br />

          <div className="prod pt-4 pb-5 px-5">
            <h4>Price & Quantity</h4>
            <hr />
            <table>
              <tr>
                <td>Price:</td>
                <td>5.5 USD ($)</td>
                <td>Minimum Order Quantity:</td>
                <td>50 Piece</td>
              </tr>
            </table>
            <h4 className="pt-4">Trade Information</h4>
            <hr />
            <table>
              <tr>
                <td>Supply Ability:</td>
                <td>1000 Piece pcs Per Month</td>
                <td>Delivery Time:</td>
                <td>60 Days</td>
              </tr>
              <tr>
                <td>Sample Available:</td>
                <td>Yes</td>
                <td>Sample Policy:</td>
                <td>
                  Sample costs shipping and taxes has to be paid by the buyer
                </td>
              </tr>
            </table>
          </div>
          <br />
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
