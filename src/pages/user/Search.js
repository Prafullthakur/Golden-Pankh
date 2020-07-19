import React from "react";
import "./style.css";
import Product from "../../components/Product";
import ProductPage from "../../components/ProductPage";
const Search = () => {
  const [productPage, setProductPage] = React.useState(false);
  const [productData, setProductData] = React.useState({});
  const [searchResult, setSearchResult] = React.useState([]);

  const handleProduct = (prodData) => {
    setProductPage(true);
    setProductData(prodData);
  };

  React.useEffect(() => {
    const result = localStorage.getItem("searchResult");
    if (!!result) {
      setSearchResult(JSON.parse(result));
    }
  }, []);

  return productPage ? (
    <ProductPage data={productData} setProductPage={setProductPage} />
  ) : (
    <section class="mdf pb-4">
      <div class="container">
        <h5 class="pt-4 pb-3">
          <a href="/">Home</a> / <a href="All-Products.html">Products</a> /
          Search
        </h5>
        <h3>Search Results</h3>

        {searchResult.length > 0 ? (
          searchResult.map((product) => (
            <Product handleProduct={handleProduct} data={product} />
          ))
        ) : (
          <h2>No Results Matching Your Search </h2>
        )}
      </div>
    </section>
  );
};

export default Search;
