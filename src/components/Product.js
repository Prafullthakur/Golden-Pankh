import React from "react";
import { withRouter } from "react-router-dom";
import firebase from "firebase";
import Link from "@material-ui/core/Link";
import ProductDetails from "../pages/checkout/ProductDetails";
import DeliveryDetails from "../pages/checkout/DeliveryDetails";
import Button from "@material-ui/core/Button";
const Product = ({ data, location, handleProduct }) => {
  const [edit, setEdit] = React.useState(false);
  const [state, setState] = React.useState({});
  const [delEdit, setDelEdit] = React.useState(false);
  const [img1, setImg1] = React.useState(null);
  const [img2, setImg2] = React.useState(null);
  const [img3, setImg3] = React.useState(null);
  const handleImg1 = (e) => {
    setImg1(e.target.files[0]);
  };
  const handleImg2 = (e) => {
    setImg2(e.target.files[0]);
  };
  const handleImg3 = (e) => {
    setImg3(e.target.files[0]);
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
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
  const editProduct = (productId) => {
    firebase
      .firestore()
      .collection("Products/")
      .doc(productId)
      .get()
      .then((res) => {
        setState(res.data());
        setEdit(true);
      })
      .catch((err) => {
        alert("Error In Editing Product");
        console.log(err);
      });
  };

  const uploadImage = () => {
    const ref = firebase.storage().ref();
    const imgName1 = Date.now().toString() + "img1";
    const imgName2 = Date.now().toString() + "img2";
    const imgName3 = Date.now().toString() + "img3";
    const imgRef1 = ref.child(imgName1);
    const imgRef2 = ref.child(imgName2);
    const imgRef3 = ref.child(imgName3);
    return new Promise((resolve, reject) => {
      if (!!img1) {
        imgRef1
          .put(img1)
          .then((snap) => {
            if (!!img2) {
              imgRef2.put(img2).then((snap2) => {
                if (!!img3) {
                  imgRef3.put(img3).then((snap3) => {
                    resolve([
                      `https://firebasestorage.googleapis.com/v0/b/goldenpankh-9b71e.appspot.com/o/${imgName1}?alt=media`,
                      `https://firebasestorage.googleapis.com/v0/b/goldenpankh-9b71e.appspot.com/o/${imgName2}?alt=media`,
                      `https://firebasestorage.googleapis.com/v0/b/goldenpankh-9b71e.appspot.com/o/${imgName3}?alt=media`,
                    ]);
                  });
                }
              });
            }
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        resolve(null);
      }
    });
  };

  // Upload Product to Database
  const uploadProduct = (productId) => {
    alert("Saving...");
    uploadImage().then((imgUrls) => {
      var data = state;
      if (!!img1) data.image1 = imgUrls[0];
      if (!!img1 && !!img2) data.image2 = imgUrls[1];
      if (!!img1 && !!img2 && !!img3) data.image3 = imgUrls[2];
      firebase
        .firestore()
        .collection("Products/")
        .doc(productId)
        .set(data, { merge: true })
        .then((snap) => {
          console.log(snap);
          alert("Product edited successfully");
          window.location.href = "/dashboard";
        })
        .catch((err) => {
          alert("An error occured!");
          console.log(err);
        });
    });
  };
  return edit ? (
    <>
      <ProductDetails
        state={state}
        handleImg1={handleImg1}
        handleImg2={handleImg2}
        handleImg3={handleImg3}
        handleChange={handleChange}
      />
      <br />

      <Button variant="contained" color="primary">
        <Link
          onClick={() => {
            setEdit(false);
            setDelEdit(true);
          }}
        >
          Next
        </Link>
      </Button>
    </>
  ) : delEdit ? (
    <>
      <DeliveryDetails state={state} edit={edit} handleChange={handleChange} />
      <br />
      <Button variant="contained" color="primary">
        <Link
          onClick={() => {
            uploadProduct(data.productId);
          }}
        >
          Save
        </Link>
      </Button>
    </>
  ) : (
    <>
      <div className="prod mt-2">
        <div className="container">
          <div className="row">
            <div className="col-md-5 pt-3">
              <img src={data.image1} />
            </div>
            <div className="col-md-7">
              <h4 className="pt-3">
                {data.name && (
                  <Link onClick={() => handleProduct(data)}>{data.name}</Link>
                )}
              </h4>
              {data.price && (
                <h6>
                  {data.price} {data.priceType}
                </h6>
              )}
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
                    {data.width && (
                      <p>
                        Width: {data.width} {data.unit}
                      </p>
                    )}
                    {data.colour && <p>Color: {data.colour}</p>}
                    {data.materialType && (
                      <p>Metals Type: {data.materialType}</p>
                    )}
                    {data.productType && (
                      <p>Product Type: {data.productType}</p>
                    )}
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
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleProduct(data)}
                >
                  View Product
                </Button>{" "}
                <Button
                  variant="contained"
                  style={{ background: "#dcdf13" }}
                  onClick={() => editProduct(data.productId)}
                >
                  Edit Product
                </Button>{" "}
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteProduct(data.productId)}
                >
                  Delete Product
                </Button>
              </>
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
    </>
  );
};

export default withRouter(Product);
