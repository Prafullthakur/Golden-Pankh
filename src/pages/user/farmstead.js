import React from "react";
import Image1 from "../../assets/Farmstead-Finials.jpg";

export default function Farmstead() {
  return (
    <>
      <section className="farmstead">
        <div className="container">
          <h5 className="pt-4 pb-3">
            <a href="/">Home</a> / <a href="/All-Products">Products</a> /
            Farmstead Finials
          </h5>
          <div className="prod py-4 pl-3">
            <div className="row">
              <div className="col-md-5">
                <img src={Image1} alt="" />
              </div>
              <div className="col-md-7">
                <h3>Farmstead Finials</h3>
              </div>
              <div className="container">
                <div className="text-center mt-5 pb-4">
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
        </div>
      </section>
    </>
  );
}
