import React from "react";
import "./style.css";

import Product from "../../components/Product";
import firebase from "firebase";
import ProductPage from "../../components/ProductPage";
const ProdCatDefault = () => {
  const [category, setCategory] = React.useState(null);
  const [products, setProducts] = React.useState([]);
  const [productPage, setProductPage] = React.useState(false);
  const [productData, setProductData] = React.useState({});

  React.useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const foo = params.get("category");
    setCategory(foo);
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
          <a href="/">Home</a> / <a href="/All-Products">Products</a> /{" "}
          {category}
        </p>
        <h3 class="pb-4">{category}</h3>
        {products.map((product) => {
          if (product.category === category)
            return <Product handleProduct={handleProduct} data={product} />;
        })}
        <br />
      </div>
    </section>
  );
};

export default ProdCatDefault;
