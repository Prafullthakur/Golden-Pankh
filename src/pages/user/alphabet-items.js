import React from "react";
import firebase from "firebase";
import Image1 from "../../assets/Decorative-Alphabets-Letters.jpg";
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";
export default function AlphabetItems() {
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
    <section classNameName="alphabet pb-4">
      <div className="container">
        <h5 className="pt-4 pb-3">
          <a href="/">Home</a> / <a href="/All-Products">Products</a> /
          Decorative Alphabets Letters
        </h5>
        <h3>Decorative Alphabets Letters</h3>
        <p className="pb-4">
          Since our origin, we have become the reliable names engaged in
          offering of superior quality Decorative Alphabets Letters which is
          commonly used in corporate and government offices. Our given product
          is crafted using finest quality material and the cutting-edge
          technology. Buyers get compliment for its durable and alluring look.
          Also, our provided discussion product is tested against different
          quality parameters in order to ensure its durability and quality by
          our experts. Clients can avail this Metal Alphabets Letters from us in
          different sizes, materials at reasonable rates.
        </p>
        {products.map((product) => {
          if (product.category === "Decorative Alphabet Letters")
            return <Product handleProduct={handleProduct} data={product} />;
        })}

        <br />
      </div>
    </section>
  );
}
