import React from "react";
import firebase from "firebase";

// Components
import Navigator from "./components/Navigator";

// Tokens & Confis
import {firebaseConfig, emailJsToken} from '../creds.js';

window.emailjs.init(emailJsToken);

firebase.initializeApp(firebaseConfig);

const App = () => {
  return <Navigator />;
};

export default App;
