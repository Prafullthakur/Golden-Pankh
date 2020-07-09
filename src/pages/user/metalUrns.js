import React, { useState } from "react";
import "./style.css";
import Image1 from "../../assets/Hand-Made-Metal-Urn.jpg";
import Image2 from "../../assets/Handmade-Iron-Wirework-Urn.jpg";
import Image3 from "../../assets/Aluminum-Casted-Urn.jpg";
import firebase from "firebase";
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";
const MetalUrns = () => {
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
    <section class="metal-urns">
      <div class="container">
        <p class="pt-4 pb-">
          <a href="/">Home</a> / <a href="/All-Products">Products</a> / Metal
          Urns
        </p>
        <h3>Metal Urns</h3>
        <p class="pb-4">
          We have a huge compilation of optimum quality Metal Urns that are
          aluminium coated and handmade. These are designed by using
          sophisticated equipments as well tools and methods that provides a
          vintage look to the, which is going trendy these days. Moreover, the
          said items are highly durable, sturdy in construction, anti-corrosive
          in nature and compact in size. In addition to this, Metal Urns
          provides elegant appearance, stunning patterns, exquisite designs and
          vibrant colors that gives a charming look to that particular area
          where these are placed.
        </p>
        {products.map((product) => {
          if (product.category === "Metal Urns")
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
                  <a href="#">HAND MADE METAL URN</a>
                </h4>
                <h6>Price: 17 USD ($)</h6>
                <hr />
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <p>Size:29x18.5x45.5 cm</p>
                      <p>Style: Antique Imitation</p>
                      <p>Finishing: Other</p>
                      <p>Regional Style: India</p>
                      <p>Supply Ability:1000 Per Month</p>
                    </div>
                    <div class="col-md-6">
                      <p>Color: Antique</p>
                      <p>Technique: Handmade by Hammering</p>
                      <p>Material: Metal</p>
                      <p>Product Type: Urn/Pot</p>
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
                  <a href="#">HANDMADE IRON WIREWORK URN</a>
                </h4>
                <h6>Price: 16.85 USD ($)</h6>
                <hr />
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <p>Delivery Time: 60 Days</p>
                      <p>Volume: 0.152 PER 2 PC CARTION Cubic Meter (m3)</p>
                      <p>Product Type: HANDEMADE WIREWORK URN</p>
                      <p>Regional Style: Indian</p>
                      <p>Finishing: Rust</p>
                    </div>
                    <div class="col-md-6">
                      <p>Supply Ability: 5000 pcs Per Month</p>
                      <p>Metal Type: Iron</p>
                      <p>Width: 35 Centimeter (cm)</p>
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

        <div class="prod pt-2">
          <div class="container">
            <div class="row">
              <div class="col-md-5 pt-3">
                <img src={Image3} alt="" />
              </div>
              <div class="col-md-7">
                <h4 class="pt-3">
                  <a href="#">ALUMINUM CASTED URN</a>
                </h4>
                <h6>Price: 11.85 USD ($)</h6>
                <hr />
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <p>Metal Type: Aluminum</p>
                      <p>Finishing: Other</p>
                      <p>Width: 12 Centimeter (cm)</p>
                      <p>Technique: Casting</p>
                      <p>Delivery Time: 60 Days</p>
                    </div>
                    <div class="col-md-6">
                      <p>Material: Other</p>
                      <p>Style: Antique Imitation</p>
                      <p>Regional Style: Indian</p>
                      <p>Size: 12x13x24 cm</p>
                      <p>Supply Ability: 5000 Per Month</p>
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

export default MetalUrns;
