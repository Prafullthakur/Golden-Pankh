import React from "react";
import { withRouter } from "react-router-dom";
import firebase from "firebase";
import Link from "@material-ui/core/Link";
import ProductPage from "./ProductPage";
const Product = ({ data, location, handleProduct }) => {
  const deleteProduct = (productId) => {
    if (window.confirm("Are you sure you want to delete the product")) {
      firebase
        .firestore()
        .collection("Products/")
        .doc(productId)
        .delete()
        .then((res) => {
          alert("Product Deleted Successfully");
          console.log(res);
          window.location.href = "/dashboard";
        })
        .catch((err) => {
          alert("Error Deleting Product");
          console.log(err);
        });
    }
  };

  return (
    <div className="prod mt-2">
      <div className="container">
        <div className="row">
          <div className="col-md-5 pt-3">
            {data.image && <img src={data.image} />}
          </div>
          <div className="col-md-7">
            <h4 className="pt-3">
              {data.name && (
                <Link onClick={() => handleProduct(data)}>{data.name}</Link>
              )}
            </h4>
            {data.price && <h6>${data.price} USD</h6>}
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  {data.theme && <p>Theme: {data.theme}</p>}
                  {data.reginiolStyle && (
                    <p>Regional Style: {data.reginiolStyle}</p>
                  )}
                  {data.feature && <p>Feature: {data.feature}</p>}
                  {data.material && <p>Material: {data.material}</p>}
                  {data.diliveryTime && (
                    <p>Delivery Time: {data.diliveryTime}</p>
                  )}
                </div>
                <div className="col-md-6">
                  {data.width && <p>Width: {data.width} Centimeter (cm)</p>}
                  {data.colour && <p>Color: {data.colour}</p>}
                  {data.materialType && <p>Metals Type: {data.materialType}</p>}
                  {data.productType && <p>Product Type: {data.productType}</p>}
                  {data.supplyAbility && (
                    <p>Supply Ability: {data.supplyAbility} Per Month</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3 pb-4">
          {location.pathname === "/dashboard" ? (
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => deleteProduct(data.productId)}
            >
              Delete Product
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-warning"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              SEND ENQUIRY
            </button>
          )}
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
                        <span>*</span> Tips on getting accurate quotes. Please
                        include product name, order quantity, usage, special
                        requests if any in your inquiry.
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
  );
};

export default withRouter(Product);
