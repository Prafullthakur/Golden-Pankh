import React from "react";
import "./style.css";

const displayStand = () => {
  return (
    <section class="mdf pb-4">
      <div class="container">
        <h5 class="pt-4 pb-3">
          <a href="/">Home</a> / <a href="/All-Products">Products</a> / Home
          Decorative Items
        </h5>
        <h3>Decorative Display Stand</h3>
        <p class="pb-4">
          The Display Stand is an extremely lightweight equipment that can be
          compactly packed, effortlessly transported and stored. It is so easy
          to clean and ensures cost savings on multiple fronts. This is rugged
          and durable decor piece that reflects classic and rustic beauty.
          Suited for frequent usage, it enables flexibility as well as
          adaptability. Suitable to be used in many layouts, it can enhance the
          overall look of all display areas. provided Display Stand can work as
          the best gifting item, appreciable for its enduring properties. It
          asks for less space as well as minimal table space. This decor item is
          appropriate for office receptions as well as showrooms.
        </p>
        <div class="prod py-4">
          <div class="row">
            <div class="col-md-4">
              <img src="" alt="" />
            </div>
            <div class="col-md-8">
              <h3>Decorative Display Stand</h3>
              <h6 class="price">Price: 19.85 USD ($)</h6>
              <h5>Products Details:</h5>
              <table>
                <tr>
                  <td>Supply Ability:</td>
                  <td>1000 Piece Per Month</td>
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
              <td>19.85 USD ($)</td>
              <td>Minimum Order Quantity</td>
              <td>50 Piece</td>
            </tr>
          </table>
          <h4 class="pt-4">Trade Information</h4>
          <hr />
          <table>
            <tr>
              <td>Supply Ability</td>
              <td>1000 Piece pcs Per Month</td>
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
          </table>
        </div>
        <br />
      </div>
    </section>
  );
};

export default displayStand;
