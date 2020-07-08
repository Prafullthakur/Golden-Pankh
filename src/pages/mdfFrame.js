import React from "react";
import "./style.css";
import Image1 from "../assets/MDF-Frame.jpg";
const mdfFrame = () => {
  return (
    <section class="mdf pb-4">
      <div class="container">
        <h5 class="pt-4 pb-3">
          <a href="/">Home</a> / <a href="All-Products.html">Products</a> / MDF
          Frames
        </h5>
        <h3>MDF Frame</h3>
        <p class="pb-4">
          We hold immense expertise in offering our customers a qualitative
          range of MDF Frame in Black Antique Color with Convex Glass. This
          product is an ideal collection for armor & nautical adventure lovers.
          The given product is made from solid steel & brass and advanced
          technology. MDF Frame in Black Antique Color with Convex Glass is
          known for attractive design, light weight, crafted with excellence and
          long life. We make available our product for clients in different
          designs and sizes.
        </p>
        <div class="prod py-4 pl-3">
          <div class="row">
            <div class="col-md-5 pt-3">
              <img src={Image1} alt="" />
            </div>
            <div class="col-md-7 pl-3">
              <h3>MDF Frame</h3>
              <h6 class="price">Price: 15.75 USD ($)</h6>
              <h5>Products Details</h5>
              <table>
                <tr>
                  <td>Product Type</td>
                  <td>Decoration</td>
                </tr>
                <tr>
                  <td>Style</td>
                  <td>Antique Imitation</td>
                </tr>
                <tr>
                  <td>Width</td>
                  <td>40 Centimeter (cm)</td>
                </tr>
                <tr>
                  <td>Material</td>
                  <td>MDF board</td>
                </tr>
                <tr>
                  <td>Theme</td>
                  <td>Decoration</td>
                </tr>
                <tr>
                  <td>Feature</td>
                  <td>
                    Easy To Install, Non Toxic, Rust Proof, Easy To Clean,
                    Durable
                  </td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>40 Centimeter (cm)</td>
                </tr>
                <tr>
                  <td>Supply Ability </td>
                  <td>3000 Piece pcs Per Month</td>
                </tr>
              </table>
            </div>
            <div class="container">
              <div class="text-center mt-3 pb-4">
                <button
                  type="button"
                  class="btn btn-warning"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  SEND ENQUIRY
                </button>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          GOLDEN PANKH EXPORT IMPORT
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <h5>
                          Describe Your BUYING Requirements <span>*</span>
                        </h5>
                        <form>
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1">
                              <span>*</span> Tips on getting accurate quotes.
                              Please include product name, order quantity,
                              usage, special requests if any in your inquiry.
                            </label>
                            <textarea
                              class="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <div class="form-group">
                            <input
                              type="file"
                              class="form-control-file"
                              id="exampleFormControlFile1"
                              required
                            />
                          </div>
                          <div class="form-row">
                            <div class="form-group col-md-6">
                              <label for="inputEmail4">
                                Email <span>*</span>
                              </label>
                              <input
                                type="email"
                                class="form-control"
                                id="inputEmail4"
                                placeholder="Enter your Email"
                                required
                              />
                            </div>
                            <div class="form-group col-md-6">
                              <label for="inputPhone">
                                Mobile No. <span>*</span>
                              </label>
                              <input
                                type="number"
                                class="form-control"
                                id="inputPhone"
                                placeholder="Enter your Phone Number"
                                required
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer text-center">
                        <button type="button" class="btn btn-warning">
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

        <div class="prod pt-4 pb-5 px-5">
          <h4>Price & Quantity</h4>
          <hr />
          <table>
            <tr>
              <td>Price</td>
              <td>15.75 USD ($)</td>
              <td>Minimum Order Quantity</td>
              <td>2000 Piece</td>
            </tr>
          </table>
          <h4 class="pt-4">Product Specifications</h4>
          <hr />
          <table>
            <tr>
              <td>Theme</td>
              <td>Decoration</td>
              <td>Material</td>
              <td>MDF board</td>
            </tr>
            <tr>
              <td>Product Type</td>
              <td>Decoration</td>
              <td>Style</td>
              <td>Antique Imitation</td>
            </tr>
            <tr>
              <td>Width</td>
              <td>40 Centimeter (cm)</td>
              <td>Technique</td>
              <td>Other</td>
            </tr>
            <tr>
              <td>Finishing</td>
              <td>Other</td>
              <td>Regional Style</td>
              <td>Indian</td>
            </tr>
            <tr>
              <td>Color</td>
              <td>
                Black antique with black distressed markin inside along with
                pins
              </td>
              <td>Feature</td>
              <td>
                {" "}
                Easy To Install, Non Toxic, Rust Proof, Easy To Clean, Durable
              </td>
            </tr>
            <tr>
              <td>Height</td>
              <td>40 Centimeter (cm)</td>
            </tr>
          </table>
          <h4 class="pt-4">Trade Information</h4>
          <hr />
          <table>
            <tr>
              <td>FOB Port</td>
              <td>Mumbai</td>
              <td>Payment Terms</td>
              <td>Others</td>
            </tr>
            <tr>
              <td>Supply Ability</td>
              <td>3000 Piece pcs Per Month</td>
              <td>Delivery Time</td>
              <td>60 Days</td>
            </tr>
            <tr>
              <td>Sample Available</td>
              <td>Yes</td>
              <td>Sample Policy</td>
              <td>
                Sample costs shipping and taxes has to be paid by the buyer
              </td>
            </tr>
            <tr>
              <td>Packaging Details</td>
              <td>Transit safe packaging</td>
              <td>Main Export Market(s)</td>
              <td>Africa, North America, Central America, Australia, Asia</td>
            </tr>
            <tr>
              <td>Certifications</td>
              <td>N/A</td>
            </tr>
          </table>
        </div>
        <br />
      </div>
    </section>
  );
};

export default mdfFrame;
