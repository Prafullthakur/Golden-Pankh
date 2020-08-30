import React from "react";
import firebase from "firebase";
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";

export default function AllProducts() {
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
    <React.Fragment>
      <section className="showroom">
        <div className="container">
          <h3 className="pt-5 pb-3">Showroom</h3>
          <div className="container">
            <div className="prod">
              {products.map((product) => (
                <Product handleProduct={handleProduct} data={product} />
              ))}
            </div>
            <br />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
