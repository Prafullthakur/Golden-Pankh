import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import firebase from "firebase";
// Pages
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../pages/user/Home";
import Contact from "../pages/user/contact";
import CompanyProfile from "../pages/user/companyProfile";
import AllProducts from "../pages/user/All-Products";
import AdminLogin from "../pages/admin/login";
import Dashboard from "../pages/admin/Dashboard";
import AddProduct from "../pages/admin/AddProduct";
import Social from "../pages/admin/Social";
import Search from "../pages/user/Search";
import NotFound from "../pages/user/NotFound";
import ProdCatDefault from "../pages/user/ProdCatDefault";
// Secured Route
import AuthRoute from "./AuthRoute";

const Navigator = () => {
  const handleSearch = (search) => {
    firebase
      .firestore()
      .collection("Products/")
      .get()
      .then((data) => {
        let query = search.toLowerCase();
        let result = [];
        data.forEach((doc) => {
          let temp = doc.data();
          if (
            temp.category.toLowerCase().includes(query) ||
            temp.name.toLowerCase().includes(query)
          ) {
            result.push(temp);
          }
        });
        return result;
      })
      .then((result) => {
        localStorage.setItem("searchResult", JSON.stringify(result));
        window.location.href = "/search";
      })
      .catch((err) => {
        console.log(err);
        alert("An error Occured!");
      });
  };

  return (
    <Router>
      <Navbar handleSearch={handleSearch} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/company-profile" component={CompanyProfile} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/All-Products" component={AllProducts} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/admin" component={AdminLogin} />
        <AuthRoute exact path="/dashboard" component={Dashboard} />
        <AuthRoute exact path="/addProduct" component={AddProduct} />
        <AuthRoute exact path="/social" component={Social} />
        <Route exact path="/catalog" component={Social} />
        <AuthRoute exact path="/changePassword" component={Social} />
        <Route exact path="/not-found" component={NotFound} />
        <Route exact path="/prodCatDefault" component={ProdCatDefault} />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Navigator;
