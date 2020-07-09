import React from "react";
import "./style.css";

const wallIron = () => {
  return (
    <section className="alphabet pb-4">
      <div className="container">
        <h5 className="pt-4 pb-3">
          <a href="/">Home</a> / <a href="/All-Products">Products</a> / Wall
          Iron Wreath
        </h5>
        <h3>Wall Iron Wreath</h3>
        <p className="pb-4">
          Beautifully designed Wall Iron Wreath is provided with rustic look for
          hanging indoors, gardens, or patios. This ensures to hang the planter
          from any branch or ceiling. It is designed using high-grade and
          rusting free iron to make the flowers and other decorations easily
          wrap around. This is also ideal to enhance the looks and style of the
          garden or lovely house.
        </p>
        <div className="prod py-4">
          <div className="row">
            <div className="col-md-5"></div>
            <div className="col-md-7">
              <h3>Wall Iron Wreath</h3>
              <h6 className="price">Price: 7.25 USD ($)</h6>
              <h5>Products Details</h5>
              <table>
                <tr>
                  <td>Feature</td>
                  <td>Easy To Install, Non Toxic, Easy To Clean, Durable</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>40x40 cm</td>
                </tr>
                <tr>
                  <td>Material</td>
                  <td>Metal</td>
                </tr>
                <tr>
                  <td>Supply Ability</td>
                  <td>5000 Piece pcs Per Month</td>
                </tr>
              </table>
            </div>
            <div className="container">
              <div className="text-center mt-4 pb-4">
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

        <div className="prod pt-4 pb-5 px-4">
          <h4>Price & Quantity</h4>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <table>
                <tr>
                  <td>Minimum Order Quantity</td>
                  <td>100 pcs Piece</td>
                </tr>
              </table>
            </div>
            <div className="col-md-6">
              <table>
                <tr>
                  <td>Price</td>
                  <td>7.25 USD ($)</td>
                </tr>
              </table>
            </div>
          </div>
          <h4 className="pt-4">Product Specifications</h4>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <table>
                <tr>
                  <td>Feature</td>
                  <td> Easy To Install, Non Toxic, Easy To Clean, Durable</td>
                </tr>
              </table>
            </div>
            <div className="col-md-6">
              <table>
                <tr>
                  <td>Material</td>
                  <td>Metal</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>40x40 cm</td>
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
                  <td>FOB Port</td>
                  <td>Mumbai</td>
                </tr>
                <tr>
                  <td>Delivery Time </td>
                  <td>60 Days</td>
                </tr>
                <tr>
                  <td>Payment Terms</td>
                  <td>Others</td>
                </tr>
                <tr>
                  <td>Main Export Market(s) </td>
                  <td>Central America, Australia</td>
                </tr>
                <tr>
                  <td>Certifications </td>
                  <td>ISO-9001-2015</td>
                </tr>
              </table>
            </div>
            <div className="col-md-6">
              <table>
                <tr>
                  <td>Supply Ability</td>
                  <td>5000 Piece pcs Per Month</td>
                </tr>
                <tr>
                  <td>Sample Policy </td>
                  <td>
                    Sample costs shipping and taxes has to be paid by the buyer
                  </td>
                </tr>
                <tr>
                  <td>Sample Available</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Packaging Details</td>
                  <td>Transit safe</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <br />
      </div>
    </section>
  );
};

export default wallIron;
