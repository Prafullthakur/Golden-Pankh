import React from "react";
import "./style.css";
import Image1 from "../../assets/Cotton-mask.jpg";
import Image2 from "../../assets/DISPOSABLE-NON-WOVEN-3PLY-MASKS.jpg";
import Image3 from "../../assets/PERSONAL-PROTECTION-KIT.jpg";
import Product from "../../components/Product";
import firebase from "firebase";
import ProductPage from "../../components/ProductPage";
const PpeKit = () => {
  const [products, setProducts] = React.useState([]);
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
    <section class="flowers">
      <div class="container">
        <p class="pt-4 pb-3">
          <a href="/">Home</a> / <a href="/All-Products">Products</a> / PPE KIT;
          FULL BODY GOWN, GOGGLES, MASKS, WASTE BAG
        </p>
        <h3 class="pb-4">PPE KIT; FULL BODY GOWN, GOGGLES, MASKS, WASTE BAG</h3>
        {products.map((product) => {
          if (
            product.category ===
            "PPE KIT; FULL BODY GOWN, GOGGLES, MASKS, WASTE BAG"
          )
            return <Product handleProduct={handleProduct} data={product} />;
        })}
        <div class="prod mt-2">
          <div class="container">
            <div class="row">
              <div class="col-md-5 pt-3">
                <img src={Image1} alt="" />
              </div>
              <div class="col-md-7">
                <h4 class="pt-3">
                  <a href="#">COTTON MASK</a>
                </h4>
              </div>
            </div>
            <div class="text-center mt-5 pb-4">
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
                  <a href="#">DISPOSABLE NON-WOVEN 3PLY MASKS</a>
                </h4>
              </div>
            </div>
            <div class="text-center mt-5 pb-4">
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
            <div class="row pl-1">
              <div class="col-md-5 pt-3">
                <img src={Image3} alt="" />
              </div>
              <div class="col-md-7">
                <h4 class="pt-3">
                  <a href="#">PERSONAL PROTECTION KIT</a>
                </h4>
              </div>
            </div>
            <div class="text-center mt-5 pb-4">
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

export default PpeKit;
