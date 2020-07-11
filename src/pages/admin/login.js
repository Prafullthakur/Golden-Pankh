import React from "react";
import firebase from "firebase";
import "../user/style.css";
import { CircularProgress } from "@material-ui/core";
const Login = () => {
  const [email, setEmail] = React.useState(null);
  const [pass, setPass] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

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
        .catch((err) => alert(err.message));
    } else {
      alert("Email or Password Empty!");
    }
  };

  return (
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
            <a href="/admin-register">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
