import React, { useState } from "react";
import Image1 from "../../assets/Wall-Decoration-Leaf-Wreath.jpg";
import firebase from "firebase";
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";
export default function Christmas() {
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
    <React.Fragment>
      <section className="christmas">
        <div className="container">
          <p className="pt-4 pb-">
            <a href="/">Home</a> / <a href="/All-Products">Products</a> /
            Christmas Decoration Items
          </p>
          <h3>Christmas Decoration Items</h3>
          <p className="pb-4">
            Our company deals in a vast range of Christmas Decoration Items such
            as glass ornament, wall decoration leaf wreath, etc. They are
            designed using high-grade raw materials like iron, steel, brass,
            etc. to ensure maximum durability and sturdiness. These items are
            provided with fine finishing and polishing that last for years to
            come. These Christmas Decoration Items are available in abrasion
            proof design with non-corrosive texture to ensure no abrasion as
            well as maintenance.{" "}
          </p>
          {products.map((product) => {
            if (product.category === "Christmas Decoration Items")
              return <Product handleProduct={handleProduct} data={product} />;
          })}

          <br />
        </div>
      </section>
    </React.Fragment>
  );
}
