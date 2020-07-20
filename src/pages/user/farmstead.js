import React, { useState } from "react";
import Image1 from "../../assets/Farmstead-Finials.jpg";
import firebase from "firebase";
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";
export default function Farmstead() {
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
    <>
      <section className="farmstead">
        <div className="container">
          <h5 className="pt-4 pb-3">
            <a href="/">Home</a> / <a href="/All-Products">Products</a> /
            Farmstead Finials
          </h5>
          {products.map((product) => {
            if (product.category === "Farmstead Finials")
              return <Product handleProduct={handleProduct} data={product} />;
          })}

          <br />
        </div>
      </section>
    </>
  );
}
