import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";
import Home from "../pages/Home";
import CompanyProfile from "../pages/companyProfile";
import Contact from "../pages/contact";
import HomeDecor from "../pages/home-decor";
import MetalUrns from "../pages/metalUrns";
import Christmas from "../pages/christmas";
import Decorative from "../pages/decorative";
import CandleHolder from "../pages/candle-holder";
import MetalHandicrafts from "../pages/metalHandicrafts";
import Flower from "../pages/flower";
import MdfFrame from "../pages/mdfFrame";
import AlphabetItems from "../pages/alphabet-items";
import JwelledMirror from "../pages/jwelled-mirror";
import FarmStead from "../pages/farmstead";
import PpeKit from "../pages/ppeKit";
import AllProducts from "../pages/All-Products";
import RisePlanter from "../pages/riserPlanter";
import WallDecor from "../pages/wallDecor";
import MetalDecor from "../pages/metalDecor";
import WallIron from "../pages/wallIron";
import Hypercube from "../pages/hypercube";
import BirdNest from "../pages/bird-nest";
import DisplayStand from "../pages/displayStand";
import AdminLogin from "../pages/login";
import AdminRegister from "../pages/register";
import Dashboard from "../pages/dashboard/Dashboard";
import Products from "../pages/dashboard/Products";
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
      </Switch>
      <Footer />
    </Router>
  );
};

export default Navigator;
