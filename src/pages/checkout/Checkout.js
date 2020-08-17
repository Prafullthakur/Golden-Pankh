import React from "react";
import firebase from "firebase";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import ProductDetails from "./ProductDetails";
import DeliveryDetails from "./DeliveryDetails";
import Review from "./Review";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ["Product Details", "Delivery Details", "Review"];

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const [state, setState] = React.useState({
    category: "",
    name: "",
    price: "",
    priceType: "",
    color: "",
    length: "",
    width: "",
    height: "",
    unit: "",
    technique: "",
    origin: "India",
    material: "",
    productType: "",
    deliveryTime: "",
    deliveryDetails: "",
    masterCartonSize: "",
    cbm: "",
    moq: "",
    uom: "",
    packingDetail: "",
    supplyAbility: "",
    sampleAvailable: "",
    samplePolicy: "",
    paymentTerm: "",
    mainExportMarket: "",
    fobPort: "",
    remark: "",
  });
  const [image1, setImage1] = React.useState(null);
  const [image2, setImage2] = React.useState(null);
  const [image3, setImage3] = React.useState(null);
  const [image4, setImage4] = React.useState(null);

  React.useEffect(() => {
    if (!!state.length && !!state.width && !!state.height) {
      setState({
        ...state,
        cbm: (state.length * state.width * state.height) / 1000000,
      });
    }
  }, [state.length, state.width, state.height]);

  const handleImg1 = (e) => {
    setImage1(e.target.files[0]);
  };

  const handleImg2 = (e) => {
    setImage2(e.target.files[0]);
  };
  const handleImg3 = (e) => {
    setImage3(e.target.files[0]);
  };
  const handleImg4 = (e) => {
    setImage4(e.target.files[0]);
  };
  // Upload Image to Storage
  const uploadImage1 = () => {
    return new Promise((resolve, reject) => {
      const ref = firebase.storage().ref();
      const imgName1 = Date.now().toString() + "img1";

      const imgRef1 = ref.child(imgName1);

      if (!!image1) {
        imgRef1
          .put(image1)
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

      if (!!image2) {
        imgRef2
          .put(image2)
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

      if (!!image3) {
        imgRef3
          .put(image3)
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
  const uploadImage4 = () => {
    return new Promise((resolve, reject) => {
      const ref = firebase.storage().ref();
      const imgName4 = Date.now().toString() + "img4";
      const imgRef4 = ref.child(imgName4);

      if (!!image4) {
        imgRef4
          .put(image4)
          .then((snap) => {
            resolve(
              `https://firebasestorage.googleapis.com/v0/b/goldenpankh-9b71e.appspot.com/o/${imgName4}?alt=media`
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
  const uploadProduct = async () => {
    const data = state;
    if (image1) {
      const tempImage1 = await uploadImage1();
      data.image1 = tempImage1;
    }
    if (image2) {
      const tempImage2 = await uploadImage2();
      data.image2 = tempImage2;
    }
    if (image3) {
      const tempImage3 = await uploadImage3();
      data.image3 = tempImage3;
    }
    if (image4) {
      const tempImage4 = await uploadImage4();
      data.image4 = tempImage4;
    }
    firebase
      .firestore()
      .collection("Products/")
      .add(data)
      .then((doc) => {
        data.productId = doc.id;
      })
      .then(() => {
        firebase
          .firestore()
          .doc(`Products/${data.productId}`)
          .set(data)
          .then((snap) => {
            alert("Product Added Successfully!");
            window.location.href = "/dashboard";
          });
      })
      .catch((err) => alert("An error occured!"));
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    // console.log(state);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Add a Product
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Adding your Product... Please Wait
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep === 0 ? (
                  <ProductDetails
                    state={state}
                    handleImg1={handleImg1}
                    handleImg2={handleImg2}
                    handleImg3={handleImg3}
                    handleImg4={handleImg4}
                    handleChange={handleChange}
                  />
                ) : activeStep === 1 ? (
                  <DeliveryDetails state={state} handleChange={handleChange} />
                ) : (
                  <Review state={state} handleChange={handleChange} />
                )}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? (
                      <Link onClick={uploadProduct}>Add Product</Link>
                    ) : (
                      "Next"
                    )}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
