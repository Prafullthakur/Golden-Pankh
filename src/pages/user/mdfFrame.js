import React from "react";
import "./style.css";
import Image1 from "../../assets/MDF-Frame.jpg";
import firebase from "firebase";
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";
const MdfFrame = () => {
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
          <a href="/">Home</a> / <a href="All-Products.html">Products</a> / MDF
          Frames
        </h5>
        <h3>MDF Frame</h3>
        <p class="pb-4">
          We hold immense expertise in offering our customers a qualitative
          range of MDF Frame in Black Antique Color with Convex Glass. This
          product is an ideal collection for armor & nautical adventure lovers.
          The given product is made from solid steel & brass and advanced
          technology. MDF Frame in Black Antique Color with Convex Glass is
          known for attractive design, light weight, crafted with excellence and
          long life. We make available our product for clients in different
          designs and sizes.
        </p>
        {products.map((product) => {
          if (product.category === "MDF Frame")
            return <Product handleProduct={handleProduct} data={product} />;
        })}

        <br />
      </div>
    </section>
  );
};

export default MdfFrame;
