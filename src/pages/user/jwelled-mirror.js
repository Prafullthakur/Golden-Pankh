import React from "react";
import Image1 from "../../assets/Jewelled-Mirror.jpg";
import firebase from "firebase";
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";
export default function JwelledMirror() {
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
      <section className="mdf pb-4">
        <div className="container">
          <h5 className="pt-4 pb-3">
            <a href="/">Home</a> / <a href="/All-Products">Products</a> /
            Jewelled Mirror
          </h5>
          <h3>Jewelled Mirror</h3>
          <p className="pb-4">
            Looking to transform the mirror of your homes or office, then this
            Jewelled Mirror is an opt pick for you. This is a highly functional
            decor item, which also works as the extremely durable dressing
            mirror. Its beautiful shape and design makes it a highly desirable
            decor thing. This mirror is a canvas to your imagination that makes
            the decoration task extremely simpler. Jewelled Mirror runs into
            modish trends and makes a cozy corner in the bedrooms, dining space,
            guest rooms and drawing rooms. This wall-mounted mirror is
            refreshing in design and commended for its durability & strength.
            Provided in a special ethnic style, it can draw the attention of the
            visitors.
          </p>
          {products.map((product) => {
            if (product.category === "Jwellled Mirror")
              return <Product handleProduct={handleProduct} data={product} />;
          })}
        </div>
      </section>
    </>
  );
}
