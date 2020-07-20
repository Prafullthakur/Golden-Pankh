import React, { useState } from "react";
import "./style.css";
import firebase from "firebase";
import Image1 from "../../assets/Iron-Flower-Vase.jpg";
import Image2 from "../../assets/Flower-Vase.jpg";
import Image3 from "../../assets/Aluminium-Flower-Vases.jpg";
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";
const Flower = () => {
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
    <section class="flowers">
      <div class="container">
        <p class="pt-4 pb-2">
          <a href="/">Home</a> / <a href="/All-Products.html">Products</a> /
          Flower Vase
        </p>
        <h3>Flower Vase</h3>
        <p class="pb-4">
          The Flower Vases are meant to store flowers and enhance the look of
          the interiors as well as exteriors. These handmade decorative items
          are available in enticing patterns and are resistant to water. You can
          place both artificial and original flowers in them without any
          difficulty. The vases are proffered amend the looks of all traditional
          as well as contemporary homes. These are extremely bright and shiny
          pieces that add sophistication and greenery to every space of your
          home. These top opened decorative containers are widely utilized to
          hold artificial flowers. Their keeping symbolizes the possession of
          something personal, beautiful and valuable. The vases are suited for
          adding an ornamental accent to the room's decor. They can serve as the
          best gifts for house warming, wedding, and are kept in party, spa etc.
        </p>
        {products.map((product) => {
          if (product.category === "Flower Vase")
            return <Product handleProduct={handleProduct} data={product} />;
        })}

        <br />
      </div>
    </section>
  );
};

export default Flower;
