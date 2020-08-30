import React from "react";
import firebase from "firebase";

// Components
import Navigator from "./components/Navigator";

const firebaseConfig = {
  apiKey: "AIzaSyBL1Y6lG-3xfFoJufQSaae5Xvxch4lW42I",
  authDomain: "goldenpankh-a42cb.firebaseapp.com",
  databaseURL: "https://goldenpankh-a42cb.firebaseio.com",
  projectId: "goldenpankh-a42cb",
  storageBucket: "goldenpankh-a42cb.appspot.com",
  messagingSenderId: "784384168427",
  appId: "1:784384168427:web:46c05c77fcdd295e2709ae",
  measurementId: "G-ZSRZ8ELRQ6",
};

window.emailjs.init("user_oOWTvwmYzDpjf3yINOs4X");

firebase.initializeApp(firebaseConfig);

const App = () => {
  return <Navigator />;
};

export default App;
