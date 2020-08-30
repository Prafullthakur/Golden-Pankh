import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "../user/style.css";
import CircularProgress from "@material-ui/core/CircularProgress";
import Link from "@material-ui/core/Link";
const Login = () => {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const [loading, setLoading] = useState(false);
  const [forgotPass, setForgotPass] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const login = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!!email && !!pass) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, pass)
        .then((data) => {
          return data.user.getIdToken();
        })
        .then((token) => {
          localStorage.setItem("userToken", token);
          window.location.href = "/dashboard";
        })
        .catch((err) => {
          alert(err.message);
          setLoading(false);
        });
    } else {
      alert("Email or Password Empty!");
    }
  };

  const sendVerification = (e) => {
    e.preventDefault();

    setLoading(true);

    var auth = firebase.auth();

    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        alert("A verification is sent to your registered email.");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        alert("An error occured!");
        setLoading(false);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("userToken")) window.location = "/dashboard";
    else setPageLoading(false);
  }, []);

  return pageLoading ? (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </div>
  ) : forgotPass ? (
    <div class="row mt-5 mb-5" id="logindiv" style={{ width: "100%" }}>
      <div class="col-md-6 m-auto">
        <div class="card card-body">
          <h1 class="text-center mb-3">Forgot Your Password</h1>

          <form onSubmit={sendVerification}>
            <div class="form-group">
              <label for="email">Enter Your Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                class="form-control"
                placeholder="Enter Email"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              {!loading ? (
                "Send Verification"
              ) : (
                <CircularProgress color="white" />
              )}
            </button>
          </form>
          <p class="lead mt-4">
            <Link onClick={() => setForgotPass(false)}>
              <a href="#">Login Instead</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div class="row mt-5 mb-5" id="logindiv" style={{ width: "100%" }}>
      <div class="col-md-6 m-auto">
        <div class="card card-body">
          <h1 class="text-center mb-3">Login</h1>

          <form onSubmit={login}>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                class="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                name="password"
                class="form-control"
                placeholder="Enter Password"
              />
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              {!loading ? "Login" : <CircularProgress color="white" />}
            </button>
          </form>
          <p class="lead mt-4">
            <Link onClick={() => setForgotPass(true)}>
              <a href="#">Forgot Password?</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
