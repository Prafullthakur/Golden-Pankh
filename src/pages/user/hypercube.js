import React from "react";
import firebase from "firebase";
import "./style.css";
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";
const Hypercube = () => {
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
    <section class="mdf pb-4">
      <div class="container">
        <h5 class="pt-4 pb-3">
          <a href="/">Home</a> / <a href="/All-Products">Products</a> / Home
          Decorative Items
        </h5>
        <h3>Decorative Hypercube</h3>
        <p class="pb-4">
          addition to this, Decorative Hypercube is available in light-weight
          design for easy installation. This is provided with anti-rusting
          features to ensure maximum sturdiness and strength.{" "}
        </p>
        {products.map((product) => {
          if (product.category === "Hypercube")
            return <Product handleProduct={handleProduct} data={product} />;
        })}
        <div class="prod py-4">
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-8">
              <h3>Decorative Hypercube</h3>
              <h6 class="price">Price: 15.55 USD ($)</h6>
              <h5>Products Details:</h5>
              <table>
                <tr>
                  <td>Product Type</td>
                  <td>Geometrical shape</td>
                </tr>
                <tr>
                  <td>Feature</td>
                  <td>Easy to Install, Light Weight, Durable</td>
                </tr>
                <tr>
                  <td>Technics</td>
                  <td>Welded</td>
                </tr>
                <tr>
                  <td>Surface Treatment</td>
                  <td>Other</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>Rusty lacquered</td>
                </tr>
                <tr>
                  <td>Style</td>
                  <td>6272</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>42x42cm</td>
                </tr>
                <tr>
                  <td>Supply Ability</td>
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
              <td>Price:</td>
              <td>15.55 USD ($)</td>
              <td>Minimum Order Quantity:</td>
              <td>50 Piece</td>
            </tr>
          </table>
          <h4 class="pt-4">Product Specifications</h4>
          <hr />
          <table>
            <tr>
              <td>Color</td>
              <td>Rusty lacquered</td>
              <td>Product Type</td>
              <td>Geometrical shape</td>
            </tr>
            <tr>
              <td>Style</td>
              <td>6272</td>
              <td>Technics</td>
              <td>Welded</td>
            </tr>
            <tr>
              <td>Surface Treatment</td>
              <td>Other</td>
              <td>Feature</td>
              <td>Easy to Install, Light Weight, Durable.</td>
            </tr>
            <tr>
              <td>Size</td>
              <td>42x42cm</td>
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
              <td>Supply Ability:</td>
              <td>1000 Piece pcs Per Month</td>
              <td>Delivery Time:</td>
              <td>60 Days</td>
            </tr>
            <tr>
              <td>Sample Available:</td>
              <td>Yes</td>
              <td>Sample Policy:</td>
              <td>
                Sample costs shipping and taxes has to be paid by the buyer
              </td>
            </tr>
            <tr>
              <td>Packaging Details</td>
              <td>Transit Safe Packaging</td>
            </tr>
          </table>
        </div>
        <br />
      </div>
    </section>
  );
};

export default Hypercube;
