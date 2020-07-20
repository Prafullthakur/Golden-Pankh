import React from "react";
import firebase from "firebase";
import "./style.css";
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";
const MetalDecor = () => {
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
        <h3>Metal Decorative Plant</h3>
        <p class="pb-4">
          This durable and stylish Metal Decorative Plant is developed using
          heavy-duty metal with unmatched finishing and polishing. It is
          provided with an elevated stand to make it stand out like a piece of
          art and style. Its creative design with high-utility features makes it
          a wonderful gift. This is uniquely created with perfection to enhance
          the style of the spaces. Its high-grade metal ensures long-lasting
          life without any corrosion and rusting. Moreover, this Metal
          Decorative Plant is easy to clean and maintain as it is comes with
          easy to separate parts that can also be assembled easily.{" "}
        </p>
        {products.map((product) => {
          if (product.category === "Metal Decor")
            return <Product handleProduct={handleProduct} data={product} />;
        })}
        <br />
      </div>
    </section>
  );
};

export default MetalDecor;
