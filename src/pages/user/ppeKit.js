import React from "react";
import "./style.css";

import Product from "../../components/Product";
import firebase from "firebase";
import ProductPage from "../../components/ProductPage";
const PpeKit = () => {
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
    <section class="flowers">
      <div class="container">
        <p class="pt-4 pb-3">
          <a href="/">Home</a> / <a href="/All-Products">Products</a> / PPE KIT;
          FULL BODY GOWN, GOGGLES, MASKS, WASTE BAG
        </p>
        <h3 class="pb-4">PPE KIT; FULL BODY GOWN, GOGGLES, MASKS, WASTE BAG</h3>
        {products.map((product) => {
          if (
            product.category ===
            "PPE KIT; FULL BODY GOWN, GOGGLES, MASKS, WASTE BAG"
          )
            return <Product handleProduct={handleProduct} data={product} />;
        })}
        <br />
      </div>
    </section>
  );
};

export default PpeKit;
