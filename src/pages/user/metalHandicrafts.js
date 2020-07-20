import React from "react";
import "./style.css";
import Image1 from "../../assets/Copper-Nest.jpg";
import Image2 from "../../assets/Recycle-Wooden-Heart-Ornament.jpg";
import Image3 from "../../assets/Metal-Bowl.jpg";
import firebase from "firebase";
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";
const MetalHandicrafts = () => {
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
    <section class="candle">
      <div class="container">
        <p class="pt-4 pb-">
          <a href="/">Home</a> / <a href="/All-Products">Products</a> / Metal
          Handicrafts
        </p>
        <h3>Metal Handicrafts</h3>
        <p class="pb-4">
          The vast range of Metal Handicrafts provided by us includes copper
          nets, metal bowl, metal ornament, etc. We design these products using
          high-quality metals in unmatched finishing and polishing that ensures
          maximum efficacy. They are provided in different attractive designs
          and styles that can be tailored according to the needs of the clients.
          These Metal Handicrafts are available in fine design with unmatched
          texture to ensure maximum sturdiness without any abrasion and
          corrosion.
        </p>
        {products.map((product) => {
          if (product.category === "Metal Handicrafts")
            return <Product handleProduct={handleProduct} data={product} />;
        })}

        <br />
      </div>
    </section>
  );
};

export default MetalHandicrafts;
