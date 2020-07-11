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
import InfoIcon from "@material-ui/icons/Info";
import ProductPage from "../../components/ProductPage";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function Products() {
  const classes = useStyles();
  const [category, setCategory] = React.useState(null);
  const [products, setProducts] = React.useState([]);
  const [productPhoto, setProductPhoto] = React.useState([]);
  const [productPage, setProductPage] = React.useState(false);
  const [productData, setProductData] = React.useState({});
  var key = 1;
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

  React.useEffect(() => {
    firebase
      .firestore()
      .collection("ProductPhoto/")
      .get()
      .then((data) => {
        let temp = [];
        data.forEach((doc) => {
          temp.push(doc.data());
        });
        setProductPhoto(temp);
      });
  }, []);
  const handleProduct = (prodData) => {
    setProductPage(true);
    setProductData(prodData);
  };
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
              <ArrowBack />
            </Link>
            {category}
          </>
        )}
      </Title>
      {!category ? (
        <div>
          <GridList>
            {productPhoto.map((tile) => (
              <GridListTile key={key++}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  actionIcon={
                    <IconButton
                      aria-label={`info about ${tile.title}`}
                      className={classes.icon}
                      onClick={() => setCategory(tile.title)}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
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
