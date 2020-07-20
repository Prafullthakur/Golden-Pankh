import React from "react";
import firebase from "firebase";

// components
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";

export default function HomeDecor() {
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
      <section className="home-decor">
        <div className="container">
          <p className="pt-4 pb-">
            <a href="/">Home</a> / <a href="/All-Products">Products</a> / Home
            Decorative Items
          </p>
          <h3>Home Decorative Items</h3>
          <p className="pb-4">
            Decorate your home with our provided impressive collection of
            premium quality Home Decorative Items which includes numerous
            options for you to choose. In this range, we have Metal Geometrical
            Star, Handmade Succulent, Sacred Hearts, Display Domes, Iron Ferris
            Wheel and more. These are used for enhancing the appearance of the
            living area, bed room etc. Moreover, our Home Decorative Items can
            be placed on the table, shelf, corner etc. as they will give an
            alluring appearance with their stunning designs, elegant
            presentation and vintage structure.
          </p>

          {products.map((product) => {
            if (product.category === "Home Decorative Items")
              return <Product handleProduct={handleProduct} data={product} />;
          })}
          <br />
        </div>
      </section>
    </>
  );
}
