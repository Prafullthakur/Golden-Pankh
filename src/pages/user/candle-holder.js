import React, { useState } from "react";
import firebase from "firebase";
import Image1 from "../../assets/Decorative-Beaded-Candle-Holder.jpg";
import Image2 from "../../assets/Iron-Candle-Holder.jpg";
import Image3 from "../../assets/Candle-Holder-Stand.jpg";
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";
export default function Candleholder() {
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
      <section className="candle">
        <div className="container">
          <p className="pt-4 pb-">
            <a href="/">Home</a> / <a href="/All-Products">Products</a> / Candle
            Holder
          </p>
          <h3>Candle Holder</h3>
          <p className="pb-4">
            The Candle Holders prevent the drilling of holes made in the wall
            and enable you to redecorate your home & farm house surrounds. With
            these, there is not any worry of drywall. There is also no need of
            recurrent repair and refinishing. Their unique textures run into a
            modern organic home and their designs are the intriguing interaction
            of colors as well as finishes. These watertight holders look like
            the sculptural displays and have been made from iron & some other
            kindred materials. Provided Candle Holders proffer a lavishing and
            graceful look to the interiors. These can hold candles for a long
            period of time and suffice as the highly beautiful illumination
            items.
          </p>
          {products.map((product) => {
            if (product.category === "Candle Holder")
              return <Product handleProduct={handleProduct} data={product} />;
          })}
          {console.log(products)}

          <br />
        </div>
      </section>
    </React.Fragment>
  );
}
