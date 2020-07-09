import React, { useState } from "react";
import firebase from "firebase";
import Image1 from "../../assets/Decorative-Beaded-Candle-Holder.jpg";
import Image2 from "../../assets/Iron-Candle-Holder.jpg";
import Image3 from "../../assets/Candle-Holder-Stand.jpg";
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";
export default function Candleholder() {
  const [products, setProducts] = useState([]);
  const [productPage, setProductPage] = React.useState(false);
  const [productData, setProductData] = React.useState({});
  React.useEffect(() => {
    firebase
      .firestore()
      .collection("Products/")
      .get()
      .then((data) => {
        let temp = [];
        data.forEach((doc) => {
          temp.push(doc.data());
        });
        setProducts(temp);
      });
  }, []);
  const handleProduct = (prodData) => {
    setProductPage(true);
    setProductData(prodData);
  };
  return productPage ? (
    <ProductPage data={productData} setProductPage={setProductPage} />
  ) : (
    <React.Fragment>
      <section className="candle">
        <div className="container">
          <p className="pt-4 pb-">
            <a href="/">Home</a> / <a href="/All-Products">Products</a> / Candle
            Holder
          </p>
          <h3>Candle Holder</h3>
          <p className="pb-4">
            The Candle Holders prevent the drilling of holes made in the wall
            and enable you to redecorate your home & farm house surrounds. With
            these, there is not any worry of drywall. There is also no need of
            recurrent repair and refinishing. Their unique textures run into a
            modern organic home and their designs are the intriguing interaction
            of colors as well as finishes. These watertight holders look like
            the sculptural displays and have been made from iron & some other
            kindred materials. Provided Candle Holders proffer a lavishing and
            graceful look to the interiors. These can hold candles for a long
            period of time and suffice as the highly beautiful illumination
            items.
          </p>
          {products.map((product) => {
            if (product.category === "Candle Holder")
              return <Product handleProduct={handleProduct} data={product} />;
          })}
          {console.log(products)}
          <div className="prod mt-2">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image1} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">DECORATIVE BEADED CANDLE HOLDER</a>
                  </h4>
                  <h6>Price: 7.85 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Supply Ability: 1000 PIECE Per Month</p>
                      </div>
                      <div className="col-md-6">
                        <p>Delivery Time: 60 Days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          <br />
          <div className="prod mt-2 mb-3">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image2} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">IRON CANDLE HOLDER</a>
                  </h4>
                  <h6>Price: 14.65 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Delivery Time: 60 Days</p>
                      </div>
                      <div className="col-md-6">
                        <p>Supply Ability: 1000 PIECE Per Month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          <br />

          <div className="prod mt-2 mb-3">
            <div className="container">
              <div className="row">
                <div className="col-md-5 pt-3">
                  <img src={Image3} alt="" />
                </div>
                <div className="col-md-7">
                  <h4 className="pt-3">
                    <a href="#">CANDLE HOLDER STAND</a>
                  </h4>
                  <h6>Price: 4.35 USD ($)</h6>
                  <hr />
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <p>Delivery Time:60 Days</p>
                      </div>
                      <div className="col-md-6">
                        <p>Supply Ability:1000 PIECE Per Month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
          <br />
        </div>
      </section>
    </React.Fragment>
  );
}
