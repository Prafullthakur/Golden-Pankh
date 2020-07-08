import React, { useEffect } from "react";
import firebase from "firebase";

// Components
import Navigator from "./components/Navigator";

var firebaseConfig = {
  apiKey: "AIzaSyCY4ZBe-neEPqpB47hifDsn7cLARo50M-E",
  authDomain: "goldenpankh-9b71e.firebaseapp.com",
  databaseURL: "https://goldenpankh-9b71e.firebaseio.com",
  projectId: "goldenpankh-9b71e",
  storageBucket: "goldenpankh-9b71e.appspot.com",
  messagingSenderId: "653785768442",
  appId: "1:653785768442:web:c3c90d9c07073c6e320443",
  measurementId: "G-W4DV1ZJVBL",
};

firebase.initializeApp(firebaseConfig);

const App = () => {
  return <Navigator />;
};

export default App;
