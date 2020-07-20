import React from "react";
import firebase from "firebase";
import "./style.css";
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";
const Hypercube = () => {
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
          <a href="/">Home</a> / <a href="/All-Products">Products</a> / Home
          Decorative Items
        </h5>
        <h3>Decorative Hypercube</h3>
        <p class="pb-4">
          addition to this, Decorative Hypercube is available in light-weight
          design for easy installation. This is provided with anti-rusting
          features to ensure maximum sturdiness and strength.{" "}
        </p>
        {products.map((product) => {
          if (product.category === "Hypercube")
            return <Product handleProduct={handleProduct} data={product} />;
        })}

        <br />
      </div>
    </section>
  );
};

export default Hypercube;
