import React from "react";
import firebase from "firebase";

// Components
import Navigator from "./components/Navigator";

const firebaseConfig = {
  apiKey: "AIzaSyDCVVQe3g9F4EHIhAzWO18IxRBpTLVajJU",
  authDomain: "goldenpankh-a9bc7.firebaseapp.com",
  databaseURL: "https://goldenpankh-a9bc7.firebaseio.com",
  projectId: "goldenpankh-a9bc7",
  storageBucket: "goldenpankh-a9bc7.appspot.com",
  messagingSenderId: "892495342627",
  appId: "1:892495342627:web:ec89107fb8844d7af0d596",
  measurementId: "G-1Z4X89LWC8",
};

window.emailjs.init("user_oOWTvwmYzDpjf3yINOs4X");

firebase.initializeApp(firebaseConfig);

const App = () => {
  return <Navigator />;
};

export default App;
