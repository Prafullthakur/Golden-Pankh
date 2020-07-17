import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import firebase from "firebase";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import CircularProgress from "@material-ui/core/CircularProgress";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ChangePassword() {
  const classes = useStyles();
  const [email, setEmail] = React.useState(null);
  const [oldPassword, setOldPassword] = React.useState(null);
  const [newPassword, setNewPassword] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const changeUserPassword = (e) => {
    e.preventDefault();
    setLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, oldPassword)
      .then((dat) => {
        const user = firebase.auth().currentUser;
        return user;
      })
      .then((user) => {
        user.updatePassword(newPassword).then(function () {
          alert("Password Updated Successfully. Please Reauthenticate!");
          setLoading(false);
          localStorage.removeItem("userToken");
          window.location.href = "/admin";
        });
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <VpnKeyIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Change Password
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={changeUserPassword}
          >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Your Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="oldPassword"
              label="Old Password"
              name="oldPassword"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="newPassword"
              label="New Password"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {loading ? <CircularProgress color="white" /> : "Save"}
            </Button>
          </form>
        </div>
      </Container>

      <div
        class="col-md-6"
        style={{
          paddingTop: "30px",

          margin: "0px",
        }}
      >
        <p class="copyright">
          GOLDEN PANKH EXPORT IMPORT All Rights Reserved.{" "}
          <a href="https://www.tradeindia.com/about-us/terms/terms_01.html">
            {" "}
            (Terms of Use)
          </a>{" "}
          <br /> Developed and Managed by Augur IT Consulting Pvt. Ltd
        </p>
      </div>
    </>
  );
}
