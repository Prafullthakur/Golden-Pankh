import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowBack } from "@material-ui/icons";
import Product from "../../components/Product";
import Title from "./Title";
import firebase from "firebase";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ProductPage from "../../components/ProductPage";
import withWidth from "@material-ui/core/withWidth";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
const useStyles = makeStyles((theme) => ({
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

function Products({ width }) {
  const classes = useStyles();
  const [category, setCategory] = React.useState(null);
  const [categories, setCategories] = React.useState({});
  const [products, setProducts] = React.useState([]);
  const [productPage, setProductPage] = React.useState(false);
  const [productData, setProductData] = React.useState({});
  const [addCatState, setAddCatState] = React.useState(false);
  const [catName, setCatName] = React.useState(null);
  const [catImage, setCatImage] = React.useState(null);
  var key = 1;

  const handleCatImage = (e) => {
    setCatImage(e.target.files[0]);
  };

  const deleteCat = (cat) => {
    if (window.confirm("Are you sure you want to delete this category ?")) {
      firebase
        .firestore()
        .doc("Meta/categories")
        .get()
        .then((data) => {
          let tempData = data.data();
          delete tempData[cat];
          firebase
            .firestore()
            .doc("Meta/categories")
            .set(tempData)
            .then((snap) => {
              alert("Category Deleted Successfully!");
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
              alert("An error Occured!");
            });
        })
        .catch((err) => {
          console.log(err);
          alert("An error Occured");
        });
    }
  };

  const uploadCatImage = () => {
    return new Promise((resolve, reject) => {
      const ref = firebase.storage().ref();
      const imgName = Date.now().toString() + "catimg";
      const imgRef = ref.child(imgName);

      if (!!catImage) {
        imgRef
          .put(catImage)
          .then((snap) => {
            resolve(
              `https://firebasestorage.googleapis.com/v0/b/goldenpankh-9b71e.appspot.com/o/${imgName}?alt=media`
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

  const addNewCategory = async () => {
    if (!catImage || !catName) {
      alert("Please fill both details");
      return;
    }

    const catImgUrl = await uploadCatImage();
    firebase
      .firestore()
      .doc("Meta/categories")
      .get()
      .then((data) => {
        let tempCategories = data.data();
        tempCategories[catName] = catImgUrl;

        firebase
          .firestore()
          .doc("Meta/categories")
          .set(tempCategories)
          .then((snap) => {
            alert("Category added successfully!");
            setAddCatState(false);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            alert("An error occured!");
          });
      })
      .catch((err) => {
        console.log(err);
        alert("An error occured!");
      });
  };

  React.useEffect(() => {
    firebase
      .firestore()
      .doc("Meta/categories")
      .get()
      .then((data) => {
        setCategories(data.data());
      })
      .catch((err) => {
        console.log(err);
        alert("An error occured!");
      });

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
      })
      .catch((err) => {
        console.log(err);
        alert("An error occured!");
      });
  }, []);

  const handleProduct = (prodData) => {
    setProductPage(true);
    setProductData(prodData);
  };

  let columns = width === "xs" || width === "sm" ? 1 : 2;

  return (
    <React.Fragment>
      <Title>
        {!category ? (
          "Product Categories"
        ) : (
          <>
            <Link
              onClick={() => {
                setCategory(null);
              }}
            >
              <ArrowBack />{" "}
            </Link>
            {category}
          </>
        )}
      </Title>
      {!category ? (
        <div>
          <GridList cols={columns}>
            {Object.keys(categories).map((cat) => (
              <GridListTile key={key++}>
                <img
                  src={categories[cat]}
                  alt={cat}
                  onClick={() => setCategory(cat)}
                />
                <GridListTileBar
                  title={cat}
                  actionIcon={
                    <IconButton
                      className={classes.icon}
                      onClick={() => deleteCat(cat)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>

          {!addCatState ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setAddCatState(true);
              }}
              style={{ marginTop: 32 }}
            >
              Add New Category
            </Button>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" style={{ marginTop: 62 }} gutterBottom>
                Category Details
              </Typography>
              <Grid
                container
                spacing={3}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={12} sm={12}>
                  <TextField
                    style={{ width: "130%", marginLeft: "-20%" }}
                    onChange={(e) => {
                      setCatName(e.target.value);
                    }}
                    name="catName"
                    value={catName}
                    label="Category Name"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} style={{ marginTop: 16 }}>
                  <label htmlFor="catImage">Category Image</label>
                  <br />
                  <input
                    id="catImage"
                    name="catImage"
                    type="file"
                    onChange={handleCatImage}
                    accept="image/*"
                  />
                </Grid>
              </Grid>
              <Button
                style={{ marginTop: 32 }}
                variant="contained"
                color="primary"
                onClick={addNewCategory}
              >
                Save Category
              </Button>
            </div>
          )}
        </div>
      ) : (
        <>
          {productPage ? (
            <ProductPage data={productData} setProductPage={setProductPage} />
          ) : (
            <>
              {products.map((product) => {
                if (product.category === category)
                  return (
                    <Product data={product} handleProduct={handleProduct} />
                  );
              })}
            </>
          )}
        </>
      )}
    </React.Fragment>
  );
}

export default withWidth()(Products);
