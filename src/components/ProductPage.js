import React from "react";
import Link from "@material-ui/core/Link";
import { withRouter } from "react-router-dom";
import { ArrowBack } from "@material-ui/icons";

const ProductPage = ({ data, setProductPage, location }) => {
  return (
    <React.Fragment>
      <section className="mdf pb-4">
        <div className="container">
          <h5 className="pt-4 pb-3">
            <Link onClick={() => setProductPage(false)}>
              <ArrowBack />
            </Link>
            {location.pathname === "/dashboard" ? (
              <a href="/dashboard">Dashboard</a>
            ) : (
              <a href="/">Home</a>
            )}{" "}
            /
            {location.pathname === "/dashboard" ? (
              <Link onClick={() => setProductPage(false)}>
                <a href="#">Products</a>
              </Link>
            ) : (
              <a href="/All-Products">Products</a>
            )}{" "}
            /{data.category}
          </h5>
          <h3>{data.name}</h3>
          <p className="pb-4">{data.description}</p>
          <div className="prod py-4">
            <div className="row">
              <div class="col-md-4 pl-4">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    {data.image1 && (
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="0"
                        class="active"
                      ></li>
                    )}
                    {data.image2 && (
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="1"
                      ></li>
                    )}
                    {data.image3 && (
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="2"
                      ></li>
                    )}
                    {data.image4 && (
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to="3"
                      ></li>
                    )}
                  </ol>
                  <div class="carousel-inner">
                    {data.image1 && (
                      <div class="carousel-item active">
                        <img
                          class="d-block w-100"
                          src={data.image1}
                          alt="First slide"
                        />
                      </div>
                    )}
                    {data.image2 && (
                      <div class="carousel-item">
                        <img
                          class="d-block w-100"
                          src={data.image2}
                          alt="Second slide"
                        />
                      </div>
                    )}
                    {data.image3 && (
                      <div class="carousel-item">
                        <img
                          class="d-block w-100"
                          src={data.image3}
                          alt="Third slide"
                        />
                      </div>
                    )}
                    {data.image4 && (
                      <div class="carousel-item">
                        <img
                          class="d-block w-100"
                          src={data.image4}
                          alt="Fourth slide"
                        />
                      </div>
                    )}
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="col-md-8">
                <h3>{data.name}</h3>
                <h5>Item No. {data.itemNumber}</h5>
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
                    <td>Color: {data.color}</td>
                  </tr>
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
                  <tr>
                    <td>Finishing/Color: {data.finishing}</td>

                    <td>Material: {data.material}</td>
                  </tr>
                  <tr>
                    <td>Technique: {data.technique}</td>

                    <td>Style: {data.style}</td>
                  </tr>
                  <tr>
                    <td>Regional Style: {data.regionalStyle}</td>

                    <td>Theme: {data.theme}</td>
                  </tr>
                  <tr>
                    <td>Material Type: {data.materialType}</td>

                    <td>Product Type: {data.productType}</td>
                  </tr>
                  <tr>
                    <td>Feature: {data.feature}</td>
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
                <td>
                  Price: {data.price} {data.priceType}
                </td>

                <td>Minimum Order Quantity: {data.moq} Piece</td>

                <td>Unit Of Measurement: {data.uom}</td>
              </tr>
            </table>
            <h4 className="pt-4">Trade Information</h4>
            <hr />
            <table>
              <tr>
                <td>Packing Details: {data.packingDetails}</td>
              </tr>
              <tr>
                <td>Supply Ability: {data.supplyAbility} Pieces Per Month</td>

                <td>Delivery Time: {data.deliveryTime} Days</td>
              </tr>
              <tr>
                <td>Sample Available: {data.sampleAvilable}</td>

                <td>Sample Policy: {data.samplePolicy}</td>
              </tr>
              <tr>
                <td>Payment Terms: {data.paymentTerm}</td>

                <td>Main Export Market: {data.mainExportMarket}</td>

                <td>FOB Port: {data.fobPort}</td>
              </tr>
            </table>
          </div>
          <br />
        </div>
      </section>
    </React.Fragment>
  );
};

export default withRouter(ProductPage);
