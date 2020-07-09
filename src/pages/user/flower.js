import React from "react";
import "./style.css";
import Image1 from "../../assets/Iron-Flower-Vase.jpg";
import Image2 from "../../assets/Flower-Vase.jpg";
import Image3 from "../../assets/Aluminium-Flower-Vases.jpg";
const Flower = () => {
  return (
    <section class="flowers">
      <div class="container">
        <p class="pt-4 pb-2">
          <a href="/">Home</a> / <a href="/All-Products.html">Products</a> /
          Flower Vase
        </p>
        <h3>Flower Vase</h3>
        <p class="pb-4">
          The Flower Vases are meant to store flowers and enhance the look of
          the interiors as well as exteriors. These handmade decorative items
          are available in enticing patterns and are resistant to water. You can
          place both artificial and original flowers in them without any
          difficulty. The vases are proffered amend the looks of all traditional
          as well as contemporary homes. These are extremely bright and shiny
          pieces that add sophistication and greenery to every space of your
          home. These top opened decorative containers are widely utilized to
          hold artificial flowers. Their keeping symbolizes the possession of
          something personal, beautiful and valuable. The vases are suited for
          adding an ornamental accent to the room's decor. They can serve as the
          best gifts for house warming, wedding, and are kept in party, spa etc.
        </p>

        <div class="prod mt-2">
          <div class="container">
            <div class="row">
              <div class="col-md-5 pt-3">
                <img src={Image1} alt="" />
              </div>
              <div class="col-md-7">
                <h4 class="pt-3">
                  <a href="#">Iron Flower Vase</a>
                </h4>
                <h6 class="price">Price: 5.95 USD ($)</h6>
                <hr />
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <p>Supply Ability: 1000 PIECE Per Month</p>
                    </div>
                    <div class="col-md-6">
                      <p>Delivery Time: 60 Days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                            Please include product name, order quantity, usage,
                            special requests if any in your inquiry.
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
        <br />

        <div class="prod mt-2">
          <div class="container">
            <div class="row">
              <div class="col-md-5 pt-3">
                <img src={Image2} alt="" />
              </div>
              <div class="col-md-7">
                <h4 class="pt-3">
                  <a href="#">FLOWER VASE</a>
                </h4>
                <h6 class="price">Price: 14.25 USD ($)</h6>
                <hr />
                <p>
                  Provided Flower Vases are made to resist breakage and cracks.
                  The vases can neutralize harmful electro-pollution and boast
                  of durability & strength. The vases work as the both
                  functional and extremely beautiful decorative accents.
                </p>
              </div>
            </div>
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
                            Please include product name, order quantity, usage,
                            special requests if any in your inquiry.
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
        <br />

        <div class="prod pt-2">
          <div class="container">
            <div class="row">
              <div class="col-md-5 pt-3">
                <img src={Image3} alt="" />
              </div>
              <div class="col-md-7">
                <h4 class="pt-3">
                  <a href="#">ALUMINUM FLOWER VASES</a>
                </h4>
                <h6 class="price">Price: 14 USD ($)</h6>
                <hr />
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <p>Supply Ability: 5000 PIECE Per Month</p>
                      <p>
                        Feature: Recyclable, Non Toxic, Easy To Clean, Water
                        Resistance, Attractive, Durable
                      </p>
                    </div>
                    <div class="col-md-6">
                      <p>Delivery Time: 60 Days</p>
                      <p>Material: Metal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                            Please include product name, order quantity, usage,
                            special requests if any in your inquiry.
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
        <br />
      </div>
    </section>
  );
};

export default Flower;
