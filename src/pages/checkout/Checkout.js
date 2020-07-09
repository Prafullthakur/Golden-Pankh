import React from "react";
import firebase from "firebase";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
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
    color: "",
    length: "",
    width: "",
    height: "",
    technique: "",
    style: "",
    regionalStyle: "",
    theme: "",
    material: "",
    materialType: "",
    productType: "",
    finishing: "",
    feature: "",
    description: "",
    deliveryTime: "",
    moq: "",
    uom: "",
    packingDetail: "",
    supplyAbility: "",
    sampleAvailable: "",
    samplePolicy: "",
    paymentTerm: "",
    mainExportMarket: "",
    fobPort: "",
  });
  const [image, setImage] = React.useState(null);

  const handleImg = (e) => {
    setImage(e.target.files[0]);
  };

  // Upload Image to Storage
  const uploadImage = () => {
    const ref = firebase.storage().ref();
    const imgName = Date.now().toString();
    const imgRef = ref.child(imgName);
    return new Promise((resolve, reject) => {
      imgRef
        .put(image)
        .then((snap) => {
          resolve(
            `https://firebasestorage.googleapis.com/v0/b/goldenpankh-9b71e.appspot.com/o/${imgName}?alt=media`
          );
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  // Upload Product to Database
  const uploadProduct = () => {
    const data = state;
    uploadImage()
      .then((imgUrl) => {
        data.image = imgUrl;
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
                window.location.href('/dashboard')
              })
              .catch((err) => {
                alert("An error occured");
                console.log(err);
              });
          })
          .catch((err) => alert("An error occured!"));
      })
      .catch((err) => {
        alert("An error occured!");
        console.log(err);
      });
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
                    handleImg={handleImg}
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
