import React, { useState } from "react";
import "./style.css";
import Image1 from "../../assets/Hand-Made-Metal-Urn.jpg";
import Image2 from "../../assets/Handmade-Iron-Wirework-Urn.jpg";
import Image3 from "../../assets/Aluminum-Casted-Urn.jpg";
import firebase from "firebase";
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";
const MetalUrns = () => {
  const [products, setProducts] = useState([]);
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
    <section class="metal-urns">
      <div class="container">
        <p class="pt-4 pb-">
          <a href="/">Home</a> / <a href="/All-Products">Products</a> / Metal
          Urns
        </p>
        <h3>Metal Urns</h3>
        <p class="pb-4">
          We have a huge compilation of optimum quality Metal Urns that are
          aluminium coated and handmade. These are designed by using
          sophisticated equipments as well tools and methods that provides a
          vintage look to the, which is going trendy these days. Moreover, the
          said items are highly durable, sturdy in construction, anti-corrosive
          in nature and compact in size. In addition to this, Metal Urns
          provides elegant appearance, stunning patterns, exquisite designs and
          vibrant colors that gives a charming look to that particular area
          where these are placed.
        </p>
        {products.map((product) => {
          if (product.category === "Metal Urns")
            return <Product handleProduct={handleProduct} data={product} />;
        })}

        <br />
      </div>
    </section>
  );
};

export default MetalUrns;
