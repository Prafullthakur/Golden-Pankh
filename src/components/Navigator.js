import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "../pages/user/Home";
import CompanyProfile from "../pages/user/companyProfile";
import Contact from "../pages/user/contact";
import HomeDecor from "../pages/user/home-decor";
import MetalUrns from "../pages/user/metalUrns";
import Christmas from "../pages/user/christmas";
import Decorative from "../pages/user/decorative";
import CandleHolder from "../pages/user/candle-holder";
import MetalHandicrafts from "../pages/user/metalHandicrafts";
import Flower from "../pages/user/flower";
import MdfFrame from "../pages/user/mdfFrame";
import AlphabetItems from "../pages/user/alphabet-items";
import JwelledMirror from "../pages/user/jwelled-mirror";
import FarmStead from "../pages/user/farmstead";
import PpeKit from "../pages/user/ppeKit";
import AllProducts from "../pages/user/All-Products";
import RisePlanter from "../pages/user/riserPlanter";
import WallDecor from "../pages/user/wallDecor";
import MetalDecor from "../pages/user/metalDecor";
import WallIron from "../pages/user/wallIron";
import Hypercube from "../pages/user/hypercube";
import BirdNest from "../pages/user/bird-nest";
import DisplayStand from "../pages/user/displayStand";
import AdminLogin from "../pages/admin/login";
import AdminRegister from "../pages/admin/register";
import Dashboard from "../pages/admin/Dashboard";
import AddProduct from "../pages/admin/AddProduct";
const Navigator = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/company-profile" component={CompanyProfile} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/home-decor" component={HomeDecor} />
        <Route exact path="/metal-urns" component={MetalUrns} />
        <Route exact path="/christmas" component={Christmas} />
        <Route exact path="/decorative" component={Decorative} />
        <Route exact path="/candle-holder" component={CandleHolder} />
        <Route exact path="/metal-handicrafts" component={MetalHandicrafts} />
        <Route exact path="/flower" component={Flower} />
        <Route exact path="/mdf-frame" component={MdfFrame} />
        <Route exact path="/alphabet-items" component={AlphabetItems} />
        <Route exact path="/jwelled-mirror" component={JwelledMirror} />
        <Route exact path="/farmstead" component={FarmStead} />
        <Route exact path="/ppe-kit" component={PpeKit} />
        <Route exact path="/All-Products" component={AllProducts} />
        <Route exact path="/riser-planter" component={RisePlanter} />
        <Route exact path="/wall-iron" component={WallIron} />
        <Route exact path="/wall-decor" component={WallDecor} />
        <Route exact path="/metal-decor" component={MetalDecor} />
        <Route exact path="/Hypercube" component={Hypercube} />
        <Route exact path="/bird-nest" component={BirdNest} />
        <Route exact path="/display-stand" component={DisplayStand} />
        <Route exact path="/admin-login" component={AdminLogin} />
        <Route exact path="/admin-register" component={AdminRegister} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addProduct" component={AddProduct} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Navigator;
