import React, { useState } from "react";
import Image1 from "../../assets/Electric-Chandeliers.jpg";
import Image2 from "../../assets/Handmade-Glass-Beaded-Chandelier.jpg";
import Image3 from "../../assets/Handmade-Rope-Chandelier.jpg";
import Image4 from "../../assets/Wire-Cut-Bucket-Chandelier.jpg";
import firebase from "firebase";
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";
export default function Decorative() {
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
    <>
      <section className="christmas">
        <div className="container">
          <p className="pt-4 pb-">
            <a href="/">Home</a> / <a href="/All-Products">Products</a> /
            Decorative Chandelier
          </p>
          <h3>Decorative Chandelier</h3>
          <p className="pb-4">
            Our exclusive range of Chandeliers is appropriate for all those, who
            prefer minimalistic and clean designs. These lighting fixtures will
            fit in all contemporary homes. There is no any lighting fixture that
            can compete with the beauty of these. Offered in various colors &
            tones, these ensure to add beauty as well as warmth to all spaces.
            Their designs donât make them bland or boring. Provided Chandeliers
            are the pieces of art that can draw in attention and proffer beauty
            & elegance to several spaces. Even when theyâre switched off, the
            fixtures reflect beauty and sophistication to several settings. Made
            from metal, jute and different others materials, these handmade &
            electrical illumination items ensure a graceful look and longevity.
            They can create a warm as well as hospitable atmosphere of
            conventional ceiling and beauteous wall lights.
          </p>
          {products.map((product) => {
            if (product.category === "Decorative Chandelier")
              return <Product handleProduct={handleProduct} data={product} />;
          })}

          <br />
        </div>
      </section>
    </>
  );
}
