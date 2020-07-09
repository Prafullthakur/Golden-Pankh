import React from "react";
import firebase from "firebase";
import "../user/style.css";
import { CircularProgress } from "@material-ui/core";
const Register = () => {
  const [email, setEmail] = React.useState(null);
  const [pass, setPass] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [confpass, setConfPass] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const register = (e) => {
    e.preventDefault();

    if (!!email && !!pass) {
      if (pass === confpass && pass.length >= 6) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, pass)
          .then((data) => {
            return data.user.getIdToken();
          })
          .then((token) => {
            localStorage.setItem("userToken", token);
            window.location.href = "/dashboard";
          })
          .catch((err) => alert(err.message));
      } else {
        alert(
          "Enter Same Password in both fields or make password atleast 6 characters"
        );
      }
    } else {
      alert("Email or Password Empty");
    }
  };

  return (
    <div class="row mt-5 mb-5" id="registerdiv" style={{ width: "100%" }}>
      <div class="col-md-6 m-auto">
        <div class="card card-body">
          <h1 class="text-center mb-3">Register</h1>

          <form onSubmit={register}>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                id="name"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                class="form-control"
                placeholder="Enter Name"
              />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                class="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={pass}
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                class="form-control"
                placeholder="Create Password"
              />
            </div>
            <div class="form-group">
              <label for="password2">Confirm Password</label>
              <input
                type="password"
                id="password2"
                name="password2"
                value={confpass}
                onChange={(e) => {
                  setConfPass(e.target.value);
                }}
                class="form-control"
                placeholder="Confirm Password"
              />{" "}
              {console.log(confpass, pass)}
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              {!loading ? "Register" : <CircularProgress color="white" />}
            </button>
          </form>
          <p class="lead mt-4">
            Have An Account? <a href="/admin-login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
