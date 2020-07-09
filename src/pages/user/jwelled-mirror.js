import React from "react";
import Image1 from "../../assets/Jewelled-Mirror.jpg";

export default function JwelledMirror() {
  return (
    <>
      <section className="mdf pb-4">
        <div className="container">
          <h5 className="pt-4 pb-3">
            <a href="/">Home</a> / <a href="/All-Products">Products</a> /
            Jewelled Mirror
          </h5>
          <h3>Jewelled Mirror</h3>
          <p className="pb-4">
            Looking to transform the mirror of your homes or office, then this
            Jewelled Mirror is an opt pick for you. This is a highly functional
            decor item, which also works as the extremely durable dressing
            mirror. Its beautiful shape and design makes it a highly desirable
            decor thing. This mirror is a canvas to your imagination that makes
            the decoration task extremely simpler. Jewelled Mirror runs into
            modish trends and makes a cozy corner in the bedrooms, dining space,
            guest rooms and drawing rooms. This wall-mounted mirror is
            refreshing in design and commended for its durability & strength.
            Provided in a special ethnic style, it can draw the attention of the
            visitors.
          </p>
          <div className="prod py-4 pl-2">
            <div className="row">
              <div className="col-md-5 pl-3">
                <img src={Image1} alt="" />
              </div>
              <div className="col-md-7">
                <h3>Jewelled Mirror</h3>
                <h6 className="price">Price: 10.55 USD ($)</h6>
                <h5>Products Details</h5>
                <table>
                  <tr>
                    <td>Supply Ability: </td>
                    <td>1000 Piece Per Month</td>
                  </tr>
                </table>
              </div>
              <div className="container">
                <div className="text-center mt-4">
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
                                  <span>*</span> Tips on getting accurate
                                  quotes. Please include product name, order
                                  quantity, usage, special requests if any in
                                  your inquiry.
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
          </div>
          <br />

          <div className="prod pt-4 pb-5 px-4">
            <h4>Price & Quantity</h4>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <table>
                    <tr>
                      <td>Minimum Order Quantity</td>
                      <td>50 Piece</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>10.55 USD ($)</td>
                    </tr>
                  </table>
                </div>
              </div>
              <h4 className="pt-4">Trade Information</h4>
              <hr />
              <div className="row">
                <div className="col-md-6">
                  <table>
                    <tr>
                      <td>Sample Policy </td>
                      <td>
                        Sample costs shipping and taxes has to be paid by the
                        buyer
                      </td>
                    </tr>
                    <tr>
                      <td>Delivery Time </td>
                      <td>60 Days</td>
                    </tr>
                  </table>
                </div>
                <div className="col-md-6">
                  <table>
                    <tr>
                      <td>Supply Ability</td>
                      <td>1000 Piece Per Month</td>
                    </tr>

                    <tr>
                      <td>Sample Available</td>
                      <td>Yes</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
