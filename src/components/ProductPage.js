import React from "react";
import Link from "@material-ui/core/Link";
import { ArrowBack } from "@material-ui/icons";

export default function ProductPage({ data, setProductPage }) {
  return (
    <React.Fragment>
      <section className="mdf pb-4">
        <div className="container">
          <h5 className="pt-4 pb-3">
            <Link onClick={() => setProductPage(false)}>
              <ArrowBack />
            </Link>
            <a href="/">Home</a> / <a href="/All-Products">Products</a> /
            {data.category}
          </h5>
          <h3>{data.name}</h3>
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
              <div class="col-md-4 pl-4">
                <img src={data.image} alt="" />
              </div>
              <div className="col-md-8">
                <h3>{data.name}</h3>
                <h6 className="price">
                  Price: {data.price} {data.priceType}
                </h6>
                <h5>Products Details:</h5>
                <table>
                  <tr>
                    <td>
                      Supply Ability: {data.supplyAbility} Piece Per Month
                    </td>
                  </tr>
                </table>
                <table>
                  <tr>
                    <td>
                      Width: {data.width} {data.unit}
                    </td>
                    <td>
                      Height: {data.height} {data.unit}
                    </td>
                    <td>
                      Length: {data.length} {data.unit}
                    </td>
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
                <td>
                  {data.price} {data.priceType} ($)
                </td>
                <td>Minimum Order Quantity:</td>
                <td>{data.moq} Piece</td>
              </tr>
            </table>
            <h4 className="pt-4">Trade Information</h4>
            <hr />
            <table>
              <tr>
                <td>Supply Ability:</td>
                <td>{data.supplyAbility} Piece pcs Per Month</td>
                <td>Delivery Time:</td>
                <td>{data.deliveryTime} Days</td>
              </tr>
              <tr>
                <td>Sample Available:</td>
                <td>{data.sampleAvilable}</td>
                <td>Sample Policy:</td>
                <td>{data.samplePolicy}</td>
              </tr>
            </table>
          </div>
          <br />
        </div>
      </section>
    </React.Fragment>
  );
}
