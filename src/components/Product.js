import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import firebase from "firebase";
import Link from "@material-ui/core/Link";
import Contact from "../pages/user/contact";
// import Snackbar from "@material-ui/core/Snackbar";
import ProductDetails from "../pages/checkout/ProductDetails";
import DeliveryDetails from "../pages/checkout/DeliveryDetails";
// import MuiAlert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const Product = ({ data, location, handleProduct }) => {
  const [edit, setEdit] = useState(false);
  const [state, setState] = useState({});
  const [delEdit, setDelEdit] = useState(false);
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  // // For Snackbar
  // const [snackOptions, setSnackOptions] = useState({
  //   open: false,
  //   msg: "",
  //   type: "",
  // });

  // const handleCloseSnack = () => {
  //   setSnackOptions({
  //     open: false,
  //     msg: "",
  //     type: "",
  //   });
  // };
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

  const uploadImage1 = () => {
    return new Promise((resolve, reject) => {
      const ref = firebase.storage().ref();
      const imgName1 = Date.now().toString() + "img1";

      const imgRef1 = ref.child(imgName1);

      if (!!img1) {
        imgRef1
          .put(img1)
          .then((snap) => {
            resolve(
              `https://firebasestorage.googleapis.com/v0/b/goldenpankh-9b71e.appspot.com/o/${imgName1}?alt=media`
            );
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        resolve(null);
      }
    });
  };
  const uploadImage2 = () => {
    return new Promise((resolve, reject) => {
      const ref = firebase.storage().ref();
      const imgName2 = Date.now().toString() + "img2";

      const imgRef2 = ref.child(imgName2);

      if (!!img2) {
        imgRef2
          .put(img2)
          .then((snap) => {
            resolve(
              `https://firebasestorage.googleapis.com/v0/b/goldenpankh-9b71e.appspot.com/o/${imgName2}?alt=media`
            );
          })
          .catch((err) => {
            reject(err);
          });
      } else {
        resolve(null);
      }
    });
  };
  const uploadImage3 = () => {
    return new Promise((resolve, reject) => {
      const ref = firebase.storage().ref();
      const imgName3 = Date.now().toString() + "img3";
      const imgRef3 = ref.child(imgName3);

      if (!!img3) {
        imgRef3
          .put(img3)
          .then((snap) => {
            resolve(
              `https://firebasestorage.googleapis.com/v0/b/goldenpankh-9b71e.appspot.com/o/${imgName3}?alt=media`
            );
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
  const uploadProduct = async (productId) => {
    alert("Saving Press Ok...");
    const data = state;
    if (!!img1) {
      const tempImage1 = await uploadImage1();
      data.image1 = tempImage1;
    }
    if (!!img2) {
      const tempImage2 = await uploadImage2();
      data.image2 = tempImage2;
    }
    if (!!img3) {
      const tempImage3 = await uploadImage3();
      data.image3 = tempImage3;
    }
    firebase
      .firestore()
      .collection("Products/")
      .doc(productId)
      .set(data, { merge: true })
      .then((snap) => {
        alert("Saved Successfully");
        window.location.href = "/dashboard";
      })
      .catch((err) => {
        alert("An error occured!");
        console.log(err);
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
        {/* <Snackbar
          open={snackOptions.open}
          autoHideDuration={2000}
          onClose={handleCloseSnack}
        >
          <Alert onClose={handleCloseSnack} severity={snackOptions.type}>
            {snackOptions.msg}
          </Alert>
        </Snackbar> */}
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-4">
              <img src={data.image1} alt="product-view" />
            </div>
            <div className="col-md-8 p-4">
              <h4>
                {data.name && (
                  <Link onClick={() => handleProduct(data)}>
                    <a href="#">{data.name}</a>
                  </Link>
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
                  style={{ background: "#f3f566" }}
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
                  <Contact />
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
