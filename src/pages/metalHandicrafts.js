import React from "react";
import "./style.css";
import Image1 from "../assets/Copper-Nest.jpg";
import Image2 from "../assets/Recycle-Wooden-Heart-Ornament.jpg";
import Image3 from "../assets/Metal-Bowl.jpg";
const metalHandicrafts = () => {
  return (
    <section class="candle">
      <div class="container">
        <p class="pt-4 pb-">
          <a href="/">Home</a> / <a href="/All-Products">Products</a> / Metal
          Handicrafts
        </p>
        <h3>Metal Handicrafts</h3>
        <p class="pb-4">
          The vast range of Metal Handicrafts provided by us includes copper
          nets, metal bowl, metal ornament, etc. We design these products using
          high-quality metals in unmatched finishing and polishing that ensures
          maximum efficacy. They are provided in different attractive designs
          and styles that can be tailored according to the needs of the clients.
          These Metal Handicrafts are available in fine design with unmatched
          texture to ensure maximum sturdiness without any abrasion and
          corrosion.
        </p>
        <div class="prod mt-2">
          <div class="container">
            <div class="row">
              <div class="col-md-5 pt-3">
                <img src={Image1} alt="" />
              </div>
              <div class="col-md-7">
                <h4 class="pt-3">
                  <a href="#">COPPER NEST</a>
                </h4>
                <h6>Price: 4.55 USD ($)</h6>
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
        <div class="prod mt-2 mb-3">
          <div class="container">
            <div class="row">
              <div class="col-md-5 pt-3">
                <img src={Image2} alt="" />
              </div>
              <div class="col-md-7">
                <h4 class="pt-3">
                  <a href="#">RECYCLE WOODEN HEART ORNAMENT</a>
                </h4>
                <h6>Price: 1.25 USD ($)</h6>
                <hr />
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <p>Product Type: Decoration</p>
                      <p>Technique: Handmade</p>
                      <p>Theme: Decoration</p>
                      <p>Finishing: Other</p>
                      <p>Delivery Time: 60 Days</p>
                      <p>Supply Ability: 10000 Per Month</p>
                    </div>
                    <div class="col-md-6">
                      <p>
                        Feature: Other , Easy To Install, Antibacterial, Scratch
                        Resistant, Non Toxic, Light Weight, Rust Proof, Easy To
                        Clean, Durable
                      </p>
                      <p>Height: 11 Centimeter (cm)</p>
                      <p>Style: Antique Imitation</p>
                      <p>Material: Wood</p>
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
        <div class="prod mt-2 mb-3">
          <div class="container">
            <div class="row">
              <div class="col-md-5 pt-3">
                <img src={Image3} alt="" />
              </div>
              <div class="col-md-9">
                <h4 class="pt-3">
                  <a href="#">METAL BOWL</a>
                </h4>
                <h6>Price: 6.95 USD ($)</h6>
                <hr />
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <p>Delivery Time: 60 Days</p>
                      <p>Technique: Casting</p>
                      <p>Metals Type: Aluminum</p>
                      <p>Width: 16 Centimeter (cm)</p>
                      <p>Finishing: Other</p>
                    </div>
                    <div class="col-md-6">
                      <p>Supply Ability: 5000 pcs Per Month</p>
                      <p>
                        Feature: Other , Easy To Install, Washable, Easy To
                        Clean, Durable, Water Resistance
                      </p>
                      <p>Product Type: Other</p>
                      <p>Height: 14 Centimeter (cm)</p>
                      <p>Style: Antique Imitation</p>
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

export default metalHandicrafts;
