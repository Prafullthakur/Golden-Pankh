import React from "react";
import firebase from "firebase";
import "./style.css";
const Login = () => {
  const [email, setEmail] = React.useState(null);
  const [pass, setPass] = React.useState(null);

  const login = (e) => {
    e.preventDefault();
    if (!!email && !!pass) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, pass)
        .then((data) => console.log(data.user.getIdToken()))
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
              Login
            </button>
          </form>
          <p class="lead mt-4">
            No Account? <a href="/admin-register">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
